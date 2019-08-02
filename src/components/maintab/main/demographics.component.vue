<template>
<div class="demographics section">
    <label><span>Background:</span> <input type="text" name="attr_background" placeholder="Almond milker" /></label>
    <label><span>Appearance:</span> <textarea name="attr_appearance"
            placeholder="...not pretty, I'll tell you that..."></textarea></label>
</div>
</template>

<style lang="scss">
.sheet-demographics {
  padding: 1.5em;
  border-top: 1px solid black;
  label {
    display: flex;
    display: -webkit-flex;
    display: -ms-flex;
    display: -moz-flex;
    flex-wrap: wrap;
    -webkit-flex-wrap: wrap;
    -ms-flex-wrap: wrap;
    -moz-flex-wrap: wrap;
    span {
      padding-top: 0.2em;
    }
    input, textarea {
      flex: 1;
      -webkit-flex: 1;
      -ms-flex: 1;
      -moz-flex: 1;
      min-width: 200px;
      margin-left: 0.5em;
      border: none;
      border-bottom: 1px solid;
      border-radius: 0;
      font-size: 1em;
    }
  }
}
</style>