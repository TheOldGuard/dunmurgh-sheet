'use strict';
 
const gulp = require("gulp"),
  _ = require("lodash"),
  ReadableStreamClone = require('readable-stream-clone'),
  through2 = require("through2"),
  transform = require("gulp-transform"),
  concat = require("gulp-concat"),
  clean = require('gulp-clean'),
  pi = require('pipe-iterators'),
  streamToPromise = require("stream-to-promise"),
  connect = require('gulp-connect'),
  opn = require('opn'),
  TemplateExtractor = require('./gulp/template-extractor'),
  gulpSass = require("gulp-sass");

gulpSass.compiler = require('node-sass');

function stripCharset() {
  return transform('utf8',(content, file) => {
    return content.replace('@charset "UTF-8";\n','');
  });
}

function singleVinylToPromise(stream) {
  return streamToPromise(stream)
    .then(a => a[0]);
}

function replaceExtension(file, newExt, inplace = true) {
    let lastFile = file.history[file.history.length -1],
      fileName = lastFile.substr(lastFile.lastIndexOf('/')),
      lastExt = fileName.substr(fileName.lastIndexOf('.')),
      newFilename = fileName.replace(lastExt, newExt),
      newFile = lastFile.replace(fileName,newFilename);
    if (inplace) {
      file.history.push(newFile);
      return file;
    }
    let history = [...file.history];
    let copy = {...file};
    copy.history = history;
    copy.history.push(newFile);
    return copy;
}

function recursiveTemplate(components, retries = 50) {
  let copied = {};
  Object.keys(components).forEach(k => {
    let
      template = _.template(components[k]),
      compiled = template(components);
      copied[k] = compiled;
  });
  let stable = Object.keys(components)
    .map(k => components[k] === copied[k])
    .reduce((a, b) => a && b);
  if (stable || retries < 0) {
    return copied;
  }
  return recursiveTemplate(copied, retries-1);
}

function getElementOrEmpty(extractor, tag) {
  let html = '';
  try {
    html = extractor.extractTag(tag);
  } catch (e) { }
  return html;
}

function cloneWithNewContentsAndExtension(file, contents, ext) {
  let clone = file.clone();
  clone.contents = Buffer.from(contents, 'binary');
  replaceExtension(clone, ext);
  return clone;
}

function splitVue() {
  return through2.obj((file, __, cb) => {
    let extractor = new TemplateExtractor(file.contents.toString()),
      template = getElementOrEmpty(extractor, 'template'), 
      script = getElementOrEmpty(extractor, 'script'),
      style = getElementOrEmpty(extractor, 'style');
    let templateFile = cloneWithNewContentsAndExtension(file, template, '.html'),
      scriptFile = cloneWithNewContentsAndExtension(file, script, '.js'),
      styleFile = cloneWithNewContentsAndExtension(file, style, '.scss');
    cb(null, {
      html: templateFile,
      js: scriptFile,
      scss: styleFile
    });
  });
};

// Expects EXACTLY the stream created by splitVue above
function getVuePartStream(splitStream, partKey) {
  let clone = new ReadableStreamClone(splitStream, {objectMode: true});
  return clone.pipe(through2.obj((data, __, cb) => {
    let part = data[partKey];
    cb(null, part);
  }));
}

function gatherRollTemplates(){
  return pi.pipeline(
    transform((contents, file) => {
      return contents;
    }, 'utf8'),
    concat('rolls.html')
  );
}

function gatherStyles(filename) {
  return pi.pipeline(
    gulpSass().on('error',gulpSass.logError),
    stripCharset(),
    concat(filename)
  );
}

function jsIdentifier() {
  return transform((contents, file) => {
    if (!contents || !contents.length) {
      return contents;
    }
    return `//// ${file.basename} \n${contents}`;
  }, 'utf8');
}

function processRollTemplates() {
  let splitStream = gulp.src('./src/rolls/*.vue')
    .pipe(splitVue());
  let scssPipeline =  getVuePartStream(splitStream, 'scss')
    .pipe(gatherStyles('rolls.css'));

  let jsPipeline = getVuePartStream(splitStream, 'js')
    .pipe(jsIdentifier())
    .pipe(concat('rolls.js'));

  let htmlPipeline = getVuePartStream(splitStream, 'html')
    .pipe(gatherRollTemplates());

  return Promise.all([
    streamToPromise(scssPipeline),
    streamToPromise(jsPipeline),
    streamToPromise(htmlPipeline)
  ])
  .then(([[css], [js], [html]]) => {
    return {css, js, html};
  });
}
exports.processRollTemplates = processRollTemplates;

function getCompiledComponents(files){
    let components = {};
    files.forEach(file => {
      let lastPath = file.history[file.history.length -1],
          filename = lastPath.substr(lastPath.lastIndexOf('/')+1)
            .replace('.component.html','').replace('.component.vue','');
      components[filename] = file.contents.toString();
    });
    return recursiveTemplate(components);
}

function gatherSheetTemplate(components) {

  return singleVinylToPromise(gulp.src('./src/sheet.html'))
    .then(sheetVinyl => {
      let template = _.template(sheetVinyl.contents.toString()),
        output = template(components);
      sheetVinyl.contents = Buffer.from(output, 'binary');
      return sheetVinyl;
    });
}

// TODO: move me somewhere else.
function trimFile(txt) {
  let lines = txt.split('\n'),
    toRemove= [];

  if (lines.length < 2) {
    return txt;
  }
  for(let i = 1; i < lines.length; i += 1) {
    let a = lines[i - 1],
        b = lines[i];
    if (a.trim().length === 0 && b.trim().length === 0) {
      toRemove.push(i);
    }
  }
  let stripped = lines.filter((item, index) => toRemove.indexOf(index) < 0)
    .join('\n');
  return stripped;

}

function processSheet({html, js, css}) {
  let splitStream = gulp.src([
      './src/components/*.vue',
      './src/components/**/*.vue'
    ])
    .pipe(splitVue());

  let scssPipeline =  getVuePartStream(splitStream, 'scss')
    .pipe(gatherStyles('component.css'));

  let jsPipeline = getVuePartStream(splitStream, 'js')
    .pipe(jsIdentifier())
    .pipe(concat('component.js'));

  let htmlPipeline = streamToPromise(getVuePartStream(splitStream, 'html'))
    .then(getCompiledComponents)
    .then(gatherSheetTemplate);

  return Promise.all([
    streamToPromise(scssPipeline),
    streamToPromise(jsPipeline),
    htmlPipeline
  ])
  .then(([[sheetCss], [sheetJs], sheetHtml]) => {
    // gather the JS
    let jsPromise = streamToPromise(
      pi.merge(
        pi.tail(gulp.src(['./src/scripts/*.js','./src/scripts/**/*.js']),
          jsIdentifier()),
        pi.fromArray([sheetJs, js])
      )
      .pipe(concat('sheet.js'))
      .pipe(transform((contents, file) => {
        return trimFile(contents);
      }, 'utf8'))
    )
    .then(([compiledJS]) => compiledJS); // we only care about the string.

    let sheetPromise = Promise.all([
      jsPromise,
      streamToPromise(
        pi.fromArray([sheetHtml, html])
          .pipe(concat('sheet.html'))
      ).then(([compiledSheet]) => compiledSheet)
    ])
      .then(([jsFile, sheet]) => {
        let js = jsFile.contents.toString(),
            html = sheet.contents.toString(),
            compile = _.template(html + '\n\n<script type="text/worker"> ${ js } </script>'),
            compiled = compile({js});
          sheet.contents = Buffer.from(compiled, 'binary');
          return sheet;
      })
      .then(sheet => {
        // emit the sheet
        return sheet.contents.toString();
      });
    
    let cssPromise = streamToPromise(
      gulp.src(['./src/sass/*.scss','./src/sass/**/*.scss'])
        .pipe(gatherStyles('general.css'))
      ).then(([generalStyles]) => {
        return streamToPromise(
          pi.fromArray([generalStyles, sheetCss, css])
            .pipe(concat('sheet.css'))
        ).then(([cssFile]) => cssFile.contents.toString());
      });

    return Promise.all([sheetPromise, cssPromise])
      .then(([rawHtml, css]) => {
        let sheetStream = 
            gulp.src('./src-shell/index.html')
              .pipe(transform((contents, file) => {
                let html = _.escape(rawHtml),
                    template = _.template(contents);
                return template({html, css});
              }, 'utf8'))
              .pipe(gulp.dest('./dist/'));
        let shellCssStream = gulp.src(['./src-shell/shell.scss'])
              .pipe(gulpSass().on('error',gulpSass.logError))
              .pipe(gulp.dest('./dist/'));

        return streamToPromise(
          pi.merge(
            sheetStream,
            shellCssStream
          )
        );
      });
  });
}
exports.processSheet = processSheet;

function build() {
  console.log('building');
    return processRollTemplates()
      .then(processSheet)
      .then(files => {
        return pi.fromArray(files)
          .pipe(connect.reload());
      });
}
exports.build = build;

function cleanDist() {
  return gulp.src('./dist/*.*')
    .pipe(clean());
}
exports.clean = cleanDist;

let cleanBuild = gulp.series(
  cleanDist,
  build
)
exports.cleanBuild = cleanBuild;


function watchEverything() {
  console.log('watching everything');
  return gulp.watch(['./src/*','./src/**/*', './src-shell/*'], cleanBuild);
}
exports.watch = watchEverything;

function devServer() {
  connect.server({
    root: './dist',
    livereload: true,
    port: 8675
  });
  setTimeout(() => opn('http://localhost:8675'), 1000);
}
exports.devServer = devServer;

exports.default = gulp.series(
    cleanBuild,
    gulp.parallel(
      watchEverything,
      devServer
    )
  )