const _ = require('lodash'),
      cheerio = require('cheerio');

function tagReplacer(newValFn, match, before, toReplace, after) {
  if (!match) return;
  if(typeof newValFn !== 'function') {
    newValFn = a => newValFn;
  }
  return [before,newValFn(toReplace),after].join('');
}

function getTagMatcher(tags, flags = 'gi'){
  if (tags.constructor && tags.constructor === Array) {
    tags = tags.join('|');
  }
  return (new RegExp(`(<[\\/\\s]*)(${tags})([^>]*>)`,flags));
}

function replaceTags(str,tags,newTag) {
  if (typeof str !== 'string') throw new TypeError('str must be a string!');
  if (tags.constructor 
      && tags.constructor === Array
      && typeof newTag !== 'function')
    throw new TypeError('if tag is an array, newTag must be a function');
  let reg = getTagMatcher(tags);
  let replacer = _.curry(tagReplacer)(newTag);
  return str.replace(reg,replacer);
}

const sReverse = s => s.split('').reverse().join('');
      illegalTags = ['table','tr','th','td','tbody','thead'],
      reverseIllegalTags = illegalTags.map(sReverse),
      escapeTags = _.curryRight(replaceTags)(sReverse),
      escapeIllegals = escapeTags(illegalTags),
      unescapeIllegals = escapeTags(reverseIllegalTags);

class TemplateExtractor {
  constructor(source){
    if (typeof source !== 'string') throw new TypeError('Source must be a string!');
    if (!source.match(getTagMatcher('html'))){
      source = '<html><body>\n'+source+'\n</body></html>';
    }
    this._source = source;
    this._cleanSource = escapeIllegals(source);
    this._$ = cheerio.load(this._cleanSource);
    this.$body = this._$('body');
  }

  extractTag(tag, includeOuter) {
    let self = this;
    let html;
    if (illegalTags.indexOf(tag) > -1){
      tag = sReverse(tag);
    }
    console.log('looking for',tag);
    let $el = this._$(tag);
    let $elArr = $el.toArray();
      if($elArr.length && $elArr.length > 1){
        console.log('found more than one');
        console.log('$elArr',$elArr);
        
        let out = $elArr.map((item) => {
          let rendered = includeOuter ? item : item.contents();
          html = self._$.html(rendered);
          console.log('html',html);
          return unescapeIllegals(html);
        });
        return out
      }
      let rendered = includeOuter ? $el.get() : $el.contents();
          html = this._$.html(rendered);
    console.log('html',html);
    return unescapeIllegals(html);
  }
}
module.exports = TemplateExtractor;