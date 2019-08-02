<template>
  <div class="trauma section">
    <div class="trauma-type">
      <h4>Physical Trauma</h4>
      <label>
        Capacity:
        <select name="attr_physical_trauma_capacity">
          <option value="weak">Weak</option>
          <option value="moderate">Moderate</option>
          <option value="robust">Robust</option>
          <option value="impressive">Impressive</option>
          <option value="astounding">Astounding</option>
        </select>
      </label>
      <fieldset class="repeating_physicaltrauma">
        <div class="trauma-entry">
          <input
            class="edit-trauma"
            type="checkbox"
            name="attr_edit_physical_trauma"
            checked="checked"
          />
          <span class="editing">p</span>
          <div class="editing-trauma">
            <div class="trauma-first-row">
              <input name="attr_physical_name" type="text" placeholder="Trauma Name" />
              <div class="radio-container">
                <input
                  type="radio"
                  class="tooltip"
                  name="attr_physical_trauma_rank"
                  value="Minor"
                  checked="checked"
                />
                <span class="tooltip-container">
                  M
                  <span class="tooltiptext">Minor</span>
                </span>
                <input
                  type="radio"
                  class="tooltip"
                  name="attr_physical_trauma_rank"
                  value="Severe"
                  title="Severe"
                />
                <span class="tooltip-container">
                  S
                  <span class="tooltiptext">Severe</span>
                </span>
                <input
                  type="radio"
                  class="tooltip"
                  name="attr_physical_trauma_rank"
                  value="Lethal"
                  title="Lethal"
                />
                <span class="tooltip-container">
                  L
                  <span class="tooltiptext">Lethal</span>
                </span>
                <input
                  type="radio"
                  class="tooltip"
                  name="attr_physical_trauma_rank"
                  value="Overwhelming"
                  title="Overwhelming"
                />
                <span class="tooltip-container">
                  O
                  <span class="tooltiptext">Overwhelming</span>
                </span>
              </div>
            </div>
            <textarea name="attr_physical_details" placeholder="...details"></textarea>
          </div>
          <div class="not-editing-trauma">
            <span name="attr_physical_name"></span> -
            <span class="capitalize" name="attr_physical_trauma_rank"></span>
          </div>
        </div>
      </fieldset>
    </div>
    <div class="trauma-type">
      <h4>Mental Trauma</h4>
      <label>
        Capacity:
        <select name="attr_mental_trauma_capacity">
          <option value="weak">Weak</option>
          <option value="moderate">Moderate</option>
          <option value="robust">Robust</option>
          <option value="impressive">Impressive</option>
          <option value="astounding">Astounding</option>
        </select>
      </label>
      <fieldset class="repeating_mentaltrauma">
        <div class="trauma-entry">
          <input
            class="edit-trauma"
            type="checkbox"
            name="attr_edit_mental_trauma"
            checked="checked"
          />
          <span class="editing">p</span>
          <div class="editing-trauma">
            <div class="trauma-first-row">
              <input name="attr_mental_name" type="text" placeholder="Trauma Name" />
              <div class="radio-container">
                <input
                  type="radio"
                  class="tooltip"
                  name="attr_mental_trauma_rank"
                  value="Minor"
                  checked="checked"
                />
                <span class="tooltip-container">
                  M
                  <span class="tooltiptext">Minor</span>
                </span>
                <input
                  type="radio"
                  class="tooltip"
                  name="attr_mental_trauma_rank"
                  value="Severe"
                  title="Severe"
                />
                <span class="tooltip-container">
                  S
                  <span class="tooltiptext">Severe</span>
                </span>
                <input
                  type="radio"
                  class="tooltip"
                  name="attr_mental_trauma_rank"
                  value="Lethal"
                  title="Lethal"
                />
                <span class="tooltip-container">
                  L
                  <span class="tooltiptext">Lethal</span>
                </span>
                <input
                  type="radio"
                  class="tooltip"
                  name="attr_mental_trauma_rank"
                  value="Overwhelming"
                  title="Overwhelming"
                />
                <span class="tooltip-container">
                  O
                  <span class="tooltiptext">Overwhelming</span>
                </span>
              </div>
            </div>
            <textarea name="attr_mental_details" placeholder="...details"></textarea>
          </div>
          <div class="not-editing-trauma">
            <span name="attr_mental_name"></span> -
            <span class="capitalize" name="attr_mental_trauma_rank"></span>
          </div>
        </div>
      </fieldset>
    </div>

    <div class="trauma-type">
      <h4>Social Trauma</h4>
      <label>
        Capacity:
        <select name="attr_social_trauma_capacity">
          <option value="weak">Weak</option>
          <option value="moderate">Moderate</option>
          <option value="robust">Robust</option>
          <option value="impressive">Impressive</option>
          <option value="astounding">Astounding</option>
        </select>
      </label>
      <fieldset class="repeating_socialtrauma">
        <div class="trauma-entry">
          <input class="edit-trauma" type="checkbox" name="attr_edit_trauma" checked="checked" />
          <span class="editing">p</span>
          <div class="editing-trauma">
            <div class="trauma-first-row">
              <input name="attr_name" type="text" placeholder="Trauma Name" />
              <div class="radio-container">
                <input
                  type="radio"
                  class="tooltip"
                  name="attr_trauma_rank"
                  value="Minor"
                  checked="checked"
                />
                <span class="tooltip-container">
                  M
                  <span class="tooltiptext">Minor</span>
                </span>
                <input
                  type="radio"
                  class="tooltip"
                  name="attr_trauma_rank"
                  value="Severe"
                  title="Severe"
                />
                <span class="tooltip-container">
                  S
                  <span class="tooltiptext">Severe</span>
                </span>
                <input
                  type="radio"
                  class="tooltip"
                  name="attr_trauma_rank"
                  value="Lethal"
                  title="Lethal"
                />
                <span class="tooltip-container">
                  L
                  <span class="tooltiptext">Lethal</span>
                </span>
                <input
                  type="radio"
                  class="tooltip"
                  name="attr_trauma_rank"
                  value="Overwhelming"
                  title="Overwhelming"
                />
                <span class="tooltip-container">
                  O
                  <span class="tooltiptext">Overwhelming</span>
                </span>
              </div>
            </div>
            <textarea name="attr_details" placeholder="...details"></textarea>
          </div>
          <div class="not-editing-trauma">
            <span name="attr_name"></span> -
            <span class="capitalize" name="attr_trauma_rank"></span>
          </div>
        </div>
      </fieldset>
    </div>
  </div>
</template>

        <style lang="scss">
.sheet-trauma-type {
  border-top: 1px solid;
  padding: 1.5em 0;
  select {
    width: 50%;
    margin-left: 0.5em;
  }
}

.sheet-edit-trauma {
  opacity: 0;
  width: 1.5em;
  height: 1.5em;
  position: absolute;
  top: 1.45em;
  left: 0;
  margin: -1em;
  cursor: pointer;
  z-index: 2;
  + .sheet-editing {
    position: absolute;
    top: 1.45em;
    left: 0em;
    margin: -1em;
    color: #ccc;
    font-family: "Pictos";
  }
  ~ {
    .sheet-editing-trauma,
    .sheet-not-editing-trauma {
      display: none;
    }
  }
  &:checked ~ .sheet-editing-trauma,
  &:not(:checked) ~ .sheet-not-editing-trauma {
    display: block;
  }
  &:checked + .sheet-editing {
    color: #000;
  }
}

.sheet-trauma .sheet-radio-container input[type="radio"] {
  opacity: 0;
  width: 16px;
  height: 16px;
  position: relative;
  top: 5px;
  left: 6px;
  margin: -10px;
  cursor: pointer;
  z-index: 2;
  + span {
    margin-right: 4px;
    line-height: 14px;
    text-align: center;
    display: inline-block;
    vertical-align: middle;
    width: 12px;
    height: 12px;
    font-size: 1.1em;
    font-weight: bold;
    color: #ccc;
  }
  &:checked + span {
    color: #000;
  }
}

.sheet-not-editing-trauma {
  font-size: 1.2em;
  font-weight: bold;
  padding-top: 0.12em;
  padding-left: 0.25em;
}

.sheet-trauma-type {
  h4 {
    font-size: 1.4em;
    padding-bottom: 1em;
  }
  label {
    font-size: 1.2em;
  }
}
</style>