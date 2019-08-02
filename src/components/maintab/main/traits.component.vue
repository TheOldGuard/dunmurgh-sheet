<template>
  <div class="traits section">
    <h3>Traits</h3>
    <fieldset class="repeating_trait">
      <div class="trait-entry">
        <input class="edit-trait" type="checkbox" name="attr_edittrait" checked="checked" />
        <span class="editing">p</span>
        <div class="editing-trait">
          <div class="trait-first-row">
            <input name="attr_name" type="text" placeholder="Trait Name" />
          </div>
          <textarea name="attr_details" placeholder="...details"></textarea>
        </div>
        <div class="not-editing-trait">
          <button
            type="roll"
            class="no-die"
            value="&{template:trait} {{header=@{character_name}}} {{name=@{name}}} {{details=@{details}}}"
          >
            <span name="attr_name"></span>
          </button>
        </div>
      </div>
    </fieldset>
  </div>
</template>

<style lang="scss">
.sheet-traits {
  padding: 1.5em;
  border-top: 1px solid black;
}

.sheet-traits {
  .repcontainer {
    display: flex;
    flex-wrap: wrap;
    .repitem {
      margin: 1%;
      width: 48%;
      box-sizing: border-box;
      position: relative;
    }
  }
  .sheet-trait-entry {
    border: 1px solid black;
    border-radius: 0.5em;
    padding: 0.6em;
    padding-left: 1.7em;
  }
}

.sheet-edit-trait {
  opacity: 0;
  width: 1.5em;
  height: 1.5em;
  position: absolute;
  top: 0.85em;
  left: 0.6em;
  cursor: pointer;
  z-index: 2;
  + .sheet-editing {
    position: absolute;
    top: 0.85em;
    left: 0.6em;
    color: #ccc;
    font-family: "Pictos";
  }
  ~ {
    .sheet-editing-trait,
    .sheet-not-editing-trait {
      display: none;
    }
  }
  &:checked ~ .sheet-editing-trait,
  &:not(:checked) ~ .sheet-not-editing-trait {
    display: block;
  }
}

.sheet-main .sheet-not-editing-trait button[type="roll"].sheet-no-die {
  text-align: left;
  font-size: 1.2em;
}

.sheet-edit-trait:checked + .sheet-editing {
  color: #000;
}

.sheet-editing-trait input {
  border: none;
  border-radius: 0;
  border-bottom: 1px solid;
  margin-bottom: 0.5em;
  font-size: 1.2em;
  font-weight: bold;
  width: 98%;
}

.sheet-trait-entry textarea {
  border-radius: none;
  border: none;
  border-bottom: 1px solid #ccc;
  width: 98%;
}
</style>