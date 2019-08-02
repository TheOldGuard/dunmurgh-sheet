<template>
  <div class="resolve section flex-col">
    <div class="resolve-block">
      <label>Resolve</label>
      <div class="resolve-inputs">
        <input name="attr_resolve_total" type="number" placeholder="0" />
        <input name="attr_resolve_current" type="number" placeholder="0" />
      </div>
    </div>
    <div class="resolve-block">
      <label>Despair</label>
      <div class="resolve-inputs">
        <input name="attr_despair_total" type="number" placeholder="0" />
        <input name="attr_despair_current" type="number" placeholder="0" />
      </div>
    </div>
  </div>
</template>

<style lang="scss">
.sheet-resolve {
  grid-area: resolve;
  height: 8em;
  display: grid;
  grid-gap: 0.1em;
  grid-template-columns: 1fr 1fr;
  grid-auto-rows: minmax(100px, auto);
}

.sheet-resolve-block {
  height: 7em;
  border-radius: 9px;
  border-left: 1px solid black;
  border-right: 1px solid black;
  label {
    display: block;
    width: 100%;
    text-align: center;
    padding: 0.5em 0;
  }
}

.sheet-resolve-inputs {
  > input[type="number"] {
    width: 48%;
    border: none;
    border-right: 1px solid black;
    border-radius: 0;
    text-align: center;
    font-size: 2em;
  }
  input:last-child {
    border-right: none;
  }
}
</style>