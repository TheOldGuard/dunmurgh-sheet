<template>
<div class="stress section">
    <label>Stress</label>
    <div class="stress-inputs">
        <label class="tooltip">
            <span class="tooltiptext">Minor</span>
            <span>M</span>
            <input type="checkbox" name="attr_stress_m1" />
        </label>
        <label class="tooltip">
            <span class="tooltiptext">Minor</span>
            <span>M</span>
            <input type="checkbox" name="attr_stress_m2" />
        </label>
        <label class="tooltip">
            <span class="tooltiptext">Minor</span>
            <span>M</span>
            <input type="checkbox" name="attr_stress_m3" />
        </label>
        <label class="tooltip">
            <span class="tooltiptext">Severe</span>
            <span>S</span>
            <input type="checkbox" name="attr_stress_s1" />
        </label>
        <label class="tooltip">
            <span class="tooltiptext">Severe</span>
            <span>S</span>
            <input type="checkbox" name="attr_stress_s2" />
        </label>
    </div>
</div>
</template>

<style lang="scss">
.sheet-stress, .sheet-stress-inputs {
  width: 100%;
}

.sheet-stress > label {
  width: 100%;
  text-align: center;
}

.sheet-stress-inputs label {
  display: inline-block;
  width: 12%;
  text-align: center;
  span {
    display: block;
  }
}
</style>