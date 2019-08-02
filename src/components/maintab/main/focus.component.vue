<template>
  <div class="focus section">
    <span class="section-title">Focus:</span>
    <label>
      <input type="radio" name="attr_focus" value="physical" />
      <span>Physical</span>
    </label>
    <label>
      <input type="radio" name="attr_focus" value="mental" />
      <span>Mental</span>
    </label>
    <label>
      <input type="radio" name="attr_focus" value="social" />
      <span>Social</span>
    </label>
  </div>
</template>

<style lang="scss">
.sheet-focus {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  padding: 2em;
  .sheet-section-title {
    font-size: 1.3em;
    font-weight: bold;
    margin: auto 0;
  }
  label {
    margin: auto 0;
  }
  input[type="radio"] {
    display: none;
    + span {
      cursor: pointer;
      font-style: italic;
      display: inline-block;
      padding: 0.35em;
      border: 1px solid white;
      border-radius: 0.5em;
    }
    &:checked + span {
      font-weight: bold;
      font-style: normal;
      border: 1px solid black;
    }
  }
  label {
    font-weight: normal;
  }
}
</style>