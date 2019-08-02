<template>
  <div class="drives section">
    <label>
      <span>Drive:</span>
      <input type="text" name="attr_drive" placeholder="Take over the world" />
    </label>
    <label>
      <span class="flaw-vs-drive">
        <button type="action" name="act_sheet_toggle_flaw">
          <span name="attr_flaw_or_drive"></span>:
        </button>
      </span>
      <input type="text" name="attr_flaw" placeholder="I don't want to be the leader of the world" />
    </label>
  </div>
</template>


<style lang="scss">
.sheet-drives {
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
    input {
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

.sheet-flaw-vs-drive button {
  border: none;
  border-bottom: 1px dotted black;
  background-color: inherit;
  font-size: 1em;
  font-weight: bold;
  text-align: left;
  padding: 0;
  width: 2.7em;
}
</style>