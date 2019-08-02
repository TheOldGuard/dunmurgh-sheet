<template>
  <div class="assets-trauma section">
    <input type="checkbox" name="attr_assets_trauma" checked="checked" />
    <div class="section-heading">
      <button type="action" name="act_assets_trauma_assets">Assets</button>
      <button type="action" name="act_assets_trauma_trauma">Trauma</button>
    </div>

    ${ assets }
    ${ trauma }
  </div>
</template>

      <style lang="scss">
.sheet-assets-trauma {
  input[name="attr_assets_trauma"] {
    display: none;
  }
  .sheet-section-heading {
    text-align: center;
    button {
      border: none;
      background-color: inherit;
      font-size: 1.4em;
      font-weight: bold;
      color: #ccc;
    }
  }
  .sheet-assets,
  .sheet-trauma {
    display: none;
  }
}

input[name="attr_assets_trauma"] {
  &:checked ~ div > button[name="act_assets_trauma_assets"],
  &:not(:checked) ~ div > button[name="act_assets_trauma_trauma"] {
    color: #000;
  }
  &:checked ~ .sheet-assets,
  &:not(:checked) ~ .sheet-trauma {
    display: block;
  }
}

.sheet-assets,
.sheet-trauma {
  margin-top: 1em;
  width: 100%;
}

.sheet-assets > label,
.sheet-trauma > label {
  width: 100%;
  text-align: center;
}

.sheet-asset-entry,
.sheet-trauma-entry {
  width: 100%;
  padding: 0em;
  border-top: 1px solid #ccc;
  box-sizing: border-box;
  margin-bottom: 0.5em;
}

.sheet-assets-first-row,
.sheet-trauma-first-row {
  margin: 0 0 1em 0;
}

.sheet-assets-first-row input,
.sheet-trauma-first-row input {
  border: none;
  border-radius: 0;
  border-bottom: 1px solid #ccc;
  width: 9.7em;
  font-weight: bold;
  font-size: 1.2em;
}

.sheet-asset-entry textarea,
.sheet-trauma-entry textarea {
  border-radius: none;
  border: none;
  border-bottom: 1px solid #ccc;
}

.sheet-assets-first-row .sheet-radio-fill-left,
.sheet-trauma-first-row .sheet-radio-container {
  display: inline-block;
  width: 5.8em;
  text-align: right;
  box-sizing: border-box;
  padding-right: 0.8em;
}
</style>