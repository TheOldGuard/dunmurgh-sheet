<template>
  <div class="moves section sheet-filtered">
    <h3>Moves</h3>
    <div class="sheet-filter-move-container">
      <label>
        <input type="radio" name="attr_move_filter_shown" value="0" checked="checked" /> All
      </label>
      <label>
        <input type="radio" name="attr_move_filter_shown" value="1" /> Core
      </label>
      <label>
        <input type="radio" name="attr_move_filter_shown" value="2" /> Periph.
      </label>
      <label>
        <input type="radio" name="attr_move_filter_shown" value="3" /> Basic
      </label>
      <label>
        <input type="radio" name="attr_move_filter_shown" value="4" /> Adv.
      </label>
    </div>
    <form novalidate="novalidate">
      <input
        type="radio"
        name="attr_move_filter"
        class="sheet-hidden sheet-move-filter-all"
        value="0"
      />
      <input
        type="radio"
        name="attr_move_filter"
        class="sheet-hidden sheet-move-filter-core"
        value="1"
      />
      <input
        type="radio"
        name="attr_move_filter"
        class="sheet-hidden sheet-move-filter-peripheral"
        value="2"
      />
      <input
        type="radio"
        name="attr_move_filter"
        class="sheet-hidden sheet-move-filter-basic"
        value="3"
      />
      <input
        type="radio"
        name="attr_move_filter"
        class="sheet-hidden sheet-move-filter-advanced"
        value="4"
      />
      <fieldset class="repeating_move">
        <input
          type="text"
          class="sheet-vanish sheet-movetype-core"
          name="attr_movetype_core"
          required
        />
        <input
          type="text"
          class="sheet-vanish sheet-movetype-peripheral"
          name="attr_movetype_peripheral"
          required="required"
        />
        <input
          type="text"
          class="sheet-vanish sheet-movetype-basic"
          name="attr_movetype_basic"
          required="required"
        />
        <input
          type="text"
          class="sheet-vanish sheet-movetype-advanced"
          name="attr_movetype_advanced"
          required="required"
        />
        <input class="edit-move" type="checkbox" name="attr_editmove" checked="checked" />
        <span class="editing">p</span>
        <div class="move-entry sheet-filtered-box">
          <span class="sheet-movetype-display sheet-movetype-advanced-display">Adv.</span>
          <span class="sheet-movetype-display sheet-movetype-core-display">Core</span>
          <span class="sheet-movetype-display sheet-movetype-peripheral-display">Per.</span>
          <span class="sheet-movetype-display sheet-movetype-basic-display">Basic</span>
          <div class="editing-move">
            <div class="move-first-row">
              <input name="attr_movename" type="text" placeholder="Move Name" />
            </div>
            <label>Trigger</label>
            <textarea
              name="attr_trigger"
              type="text"
              placeholder="When you do something savage, Roll +Sass"
            ></textarea>
            <label>
              Roll
              <select name="attr_rolltype">
                <option value="@{order}">Order</option>
                <option value="@{connection}">Connection</option>
                <option value="@{mind}">Mind</option>
                <option value="@{dynamism}">Dynamism</option>
                <option value="@{entropy}">Entropy</option>
                <option value="@{statmod_query}">Ask</option>
                <option value="0">Bare (just bonus)</option>
              </select>
            </label>
            <label>
              Category
              <select name="attr_movetype_shown">
                <option value="1">Core</option>
                <option value="2">Peripheral</option>
                <option value="3">Basic</option>
                <option value="4">Advanced</option>
              </select>
            </label>
            <label>Full Hit</label>
            <textarea name="attr_fullhit" placeholder="...full hit details"></textarea>
            <label>Partial Hit</label>
            <textarea name="attr_partialhit" placeholder="...partial hit details"></textarea>
            <label>Miss</label>
            <textarea name="attr_miss" placeholder="...miss details"></textarea>
            <label>Details</label>
            <textarea name="attr_details" placeholder="...general details"></textarea>
          </div>
          <div class="not-editing-move truncate-container">
            <div class="roll-button">
              <button
                type="roll"
                class="no-die"
                value="&{template:move} {{header=@{character_name}}} {{name=@{movename}}} {{action=[[1d6+@{rolltype}+?{Bonus|0}]]}} {{challenge1=[[1d10]]}} {{challenge2=[[1d10]]}} {{trigger=@{trigger}}} {{fullhit=@{fullhit}}} {{partialhit=@{partialhit}}} {{miss=@{miss}}} {{details=@{details}}}"
              >
                <span name="attr_movename"></span>
              </button>
            </div>
            <p class="trigger truncate">
              <span name="attr_trigger"></span>
            </p>
          </div>
        </div>
      </fieldset>
    </form>
  </div>
</template>

<style lang="scss">
.sheet-moves {
  padding: 1.5em;
  border-top: 1px solid black;
}

.sheet-moves > fieldset.repeating_move + .repcontainer > .repitem {
  /* A repitem within a movelist should functionally not exist, it's place is taken by a filterbox. */
  padding: 0px;
  margin: 0px;
  border: none;
  border-radius: 0;
}

// Decide which specific repitems to display.
.sheet-edit-move:checked ~ .sheet-filtered-box,
.sheet-move-filter-all:checked
  ~ fieldset.repeating_move
  + .repcontainer
  > .repitem
  .sheet-filtered-box,
.sheet-move-filter-core:checked
  ~ fieldset.repeating_move
  + .repcontainer
  > .repitem
  input.sheet-movetype-core:checked
  ~ .sheet-filtered-box,
.sheet-move-filter-peripheral:checked
  ~ fieldset.repeating_move
  + .repcontainer
  > .repitem
  input.sheet-movetype-peripheral:checked
  ~ .sheet-filtered-box,
.sheet-move-filter-basic:checked
  ~ fieldset.repeating_move
  + .repcontainer
  > .repitem
  input.sheet-movetype-basic:checked
  ~ .sheet-filtered-box,
.sheet-move-filter-advanced:checked
  ~ fieldset.repeating_move
  + .repcontainer
  > .repitem
  input.sheet-movetype-advanced:checked
  ~ .sheet-filtered-box,
.sheet-move-filter-all:checked
  ~ fieldset.repeating_move
  + .repcontainer
  > .repitem
  .sheet-filtered-box,
.sheet-move-filter-core:checked
  ~ fieldset.repeating_move
  + .repcontainer
  > .repitem
  input.sheet-movetype-core:valid
  ~ .sheet-filtered-box,
.sheet-move-filter-peripheral:checked
  ~ fieldset.repeating_move
  + .repcontainer
  > .repitem
  input.sheet-movetype-peripheral:valid
  ~ .sheet-filtered-box,
.sheet-move-filter-basic:checked
  ~ fieldset.repeating_move
  + .repcontainer
  > .repitem
  input.sheet-movetype-basic:valid
  ~ .sheet-filtered-box,
.sheet-move-filter-advanced:checked
  ~ fieldset.repeating_move
  + .repcontainer
  > .repitem
  input.sheet-movetype-advanced:valid
  ~ .sheet-filtered-box {
  display: block;
}

.sheet-moves {
  .repcontainer {
    display: flex;
    flex-wrap: wrap;
    .repitem {
      width: 100%;
      .sheet-filtered-box {
        margin: 1%;
        width: 98%;
        box-sizing: border-box;
        position: relative;
      }
    }
  }

  .sheet-move-entry {
    border: 1px solid black;
    border-radius: 0.5em;
    padding: 0.6em;
    padding-left: 1.7em;
  }
}

.sheet-edit-move {
  opacity: 0;
  width: 1.5em;
  height: 1.5em;
  position: absolute;
  top: 1.45em;
  left: 1.1em;
  cursor: pointer;
  z-index: 2;
  + .sheet-editing {
    position: absolute;
    top: 1.45em;
    left: 1.1em;
    color: #ccc;
    font-family: "Pictos";
  }
}

.sheet-movetype-display {
  display: none;
  position: absolute;
  width: 3.2em;
  border-radius: 0 0.3em;
  background-color: #333;
  color: #ddd;
  font-weight: bold;
  right: 0;
  padding: 0.25em;
  text-align: center;
  top: 0;
}

.sheet-movetype-core:valid ~ .sheet-move-entry > .sheet-movetype-core-display,
.sheet-movetype-peripheral:valid
  ~ .sheet-move-entry
  > .sheet-movetype-peripheral-display,
.sheet-movetype-basic:valid ~ .sheet-move-entry > .sheet-movetype-basic-display,
.sheet-movetype-advanced:valid
  ~ .sheet-move-entry
  > .sheet-movetype-advanced-display {
  display: block;
}

.sheet-edit-move {
  ~ .sheet-move-entry {
    .sheet-editing-move,
    .sheet-not-editing-move {
      display: none;
    }
  }
  &:checked ~ .sheet-move-entry .sheet-editing-move,
  &:not(:checked) ~ .sheet-move-entry .sheet-not-editing-move {
    display: block;
  }
}

.sheet-main
  .sheet-not-editing-move
  .sheet-roll-button
  > button[type="roll"].sheet-no-die {
  text-align: left;
  font-size: 1.2em;
  box-sizing: border-box;
  padding-right: 3.2em;
}

.sheet-edit-move:checked + .sheet-editing {
  color: #000;
}

.sheet-editing-move {
  input {
    border: none;
    border-radius: 0;
    border-bottom: 1px solid;
    margin-bottom: 0.3em;
    font-size: 1.2em;
    font-weight: bold;
    width: 98%;
  }
  .sheet-move-first-row {
    padding-right: 3.2em;
  }
}

.sheet-move-entry textarea {
  border-radius: none;
  border: none;
  border-bottom: 1px solid #ccc;
  width: 98%;
}

.sheet-filter-move-container {
  display: flex;
  label {
    flex: 1;
  }
}
</style>