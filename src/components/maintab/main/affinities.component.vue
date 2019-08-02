<template>
  <div class="affinities section">
    <h3>Affinities</h3>
    <div class="affinities-container">
      <p>
        <button
          type="roll"
          class="no-die"
          value="&{template:dunmurgh} {{header=@{character_name}}} {{name=Rolling +Order}} {{action=[[1d6+@{order}+?{Bonus|0}]]}} {{challenge1=[[1d10]]}} {{challenge2=[[1d10]]}}"
        >Order</button>
        <input name="attr_order" type="number" />
      </p>
      <p>
        <button
          type="roll"
          class="no-die"
          value="&{template:dunmurgh} {{header=@{character_name}}} {{name=Rolling +Connection}} {{action=[[1d6+@{connection}+?{Bonus|0}]]}} {{challenge1=[[1d10]]}} {{challenge2=[[1d10]]}}"
        >Connection</button>
        <input name="attr_connection" type="number" />
      </p>
      <p>
        <button
          type="roll"
          class="no-die"
          value="&{template:dunmurgh} {{header=@{character_name}}} {{name=Rolling +Mind}} {{action=[[1d6+@{mind}+?{Bonus|0}]]}} {{challenge1=[[1d10]]}} {{challenge2=[[1d10]]}}"
        >Mind</button>
        <input name="attr_mind" type="number" />
      </p>
      <p>
        <button
          type="roll"
          class="no-die"
          value="&{template:dunmurgh} {{header=@{character_name}}} {{name=Rolling +Dynamism}} {{action=[[1d6+@{dynamism}+?{Bonus|0}]]}} {{challenge1=[[1d10]]}} {{challenge2=[[1d10]]}}"
        >Dynamism</button>
        <input name="attr_dynamism" type="number" />
      </p>
      <p>
        <button
          type="roll"
          class="no-die"
          value="&{template:dunmurgh} {{header=@{character_name}}} {{name=Rolling +Entropy}} {{action=[[1d6+@{entropy}+?{Bonus|0}]]}} {{challenge1=[[1d10]]}} {{challenge2=[[1d10]]}}"
        >Entropy</button>
        <input name="attr_entropy" type="number" />
      </p>
    </div>
  </div>
</template>

<style lang="scss">
.sheet-affinities {
  margin-top: 0.5em;
  h3 {
    text-align: center;
    padding-bottom: 0.7em;
  }
  .sheet-affinities-container {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr 1fr;
  }
  p {
    text-align: center;
    font-weight: bold;
    text-transform: uppercase;
    font-size: 1.1em;
    border-right: 1px solid black;
    &:last-child {
      border-right: none;
    }

    input[type="number"] {
      display: block;
      width: 1.5em;
      height: 1.5em;
      font-size: 3em;
      font-weight: bold;
      border: 1px solid black;
      border-radius: 0;
      margin: 0.2em auto;
      text-align: center;
    }
  }
}
</style>

<script>
console.log("AFFINITIES");
</script>