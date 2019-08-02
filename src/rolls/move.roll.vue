<!-- Move Template formulae
                  &{template:move} {{header=@{character_name}}} {{bonus=}} {{name=@{name}}} {{trigger=@{trigger}}} {{fullhit=@{fullhit}}} {{partialhit=@{partialhit}}} {{miss=@{miss}}} {{details=@{details}}}
                -->
<template>
  <rolltemplate class="sheet-rolltemplate-move">
    <div class="rolltable-container">
      <table>
        {{#action}}
        {{#header}}
        <tr class="no-border less-top-padding">
          <td colspan="2" class="sheet-subheader">{{header}}</td>
        </tr>
        {{/header}}
        {{#name}}
        <tr class="less-top-padding">
          <th colspan="2">{{name}}</th>
        </tr>
        {{/name}}
        <tr>
          <td>
            <span>Action Die:</span>
          </td>
          <td>
            <span>{{action}}</span>
          </td>
        </tr>
        <tr>
          <td>
            <span>Challenge Dice:</span>
          </td>
          <td>
            <span>{{challenge1}} {{challenge2}}</span>
          </td>
        </tr>
        {{#rollGreater() challenge1 action}}
        {{#rollTotal() challenge1 challenge2}}
        <!--CHALLENGE DIE MATCH-->
        <tr>
          <td colspan="2" class="sheet-subfooter complication">Complication</td>
        </tr>
        {{#miss}}
        <tr class="sheet-outcome">
          <td colspan="2">{{miss}}</td>
        </tr>
        {{/miss}}
        {{/rollTotal() challenge1 challenge2}}
        {{#^rollTotal() challenge1 challenge2}}
        {{#rollGreater() challenge2 action}}
        <!--Miss-->
        <tr>
          <td colspan="2" class="sheet-subfooter miss">Miss</td>
        </tr>
        {{#miss}}
        <tr class="sheet-outcome">
          <td colspan="2" class="sheet-outcome">{{miss}}</td>
        </tr>
        {{/miss}}
        {{/rollGreater() challenge2 action}}
        {{#^rollGreater() challenge2 action}}
        <!--Partial Hit-->
        <tr>
          <td colspan="2" class="sheet-subfooter partial-hit">Partial Hit</td>
        </tr>
        {{#partialhit}}
        <tr class="sheet-outcome">
          <td colspan="2" class="sheet-outcome">{{partialhit}}</td>
        </tr>
        {{/partialhit}}
        {{/^rollGreater() challenge2 action}}
        {{/^rollTotal() challenge1 challenge2}}
        {{/rollGreater() challenge1 action}}
        {{#^rollGreater() challenge1 action}}
        {{#rollTotal() challenge1 challenge2}}
        <!--CHALLENGE DIE MATCH-->
        <tr>
          <td colspan="2" class="sheet-subfooter opportunity">Opportunity</td>
        </tr>
        {{#fullhit}}
        <tr class="sheet-outcome">
          <td colspan="2" class="sheet-outcome">{{fullhit}}</td>
        </tr>
        {{/fullhit}}
        {{/rollTotal() challenge1 challenge2}}
        {{#^rollTotal() challenge1 challenge2}}
        {{#rollGreater() challenge2 action}}
        <!--Partial Hit-->
        <tr>
          <td colspan="2" class="sheet-subfooter partial-hit">Partial Hit</td>
        </tr>
        {{#partialhit}}
        <tr class="sheet-outcome">
          <td colspan="2" class="sheet-outcome">{{partialhit}}</td>
        </tr>
        {{/partialhit}}
        {{/rollGreater() challenge2 action}}
        {{#^rollGreater() challenge2 action}}
        <!--Miss-->
        <tr>
          <td colspan="2" class="sheet-subfooter full-hit">Full Hit</td>
        </tr>
        {{#fullhit}}
        <tr class="sheet-outcome">
          <td colspan="2" class="sheet-outcome">{{fullhit}}</td>
        </tr>
        {{/fullhit}}
        {{/^rollGreater() challenge2 action}}
        {{/^rollTotal() challenge1 challenge2}}
        {{/^rollGreater() challenge1 action}}
        {{#details}}
        <tr class="sheet-outcome">
          <td colspan="2" class="sheet-outcome">{{details}}</td>
        </tr>
        {{/details}}
        {{/action}}
        {{#custom}}
        {{#header}}
        <tr>
          <td colspan="2" class="sheet-subheader">{{header}}</td>
        </tr>
        {{/header}}
        <tr>
          <th colspan="2">{{name}}</th>
        </tr>
        {{#allprops() custom name header}}
        <tr>
          <td>
            <span>{{key}}</span>
          </td>
          <td>
            <span>{{value}}</span>
          </td>
          {{/allprops() custom name header}}
          {{/custom}}
        </tr>
      </table>
    </div>
  </rolltemplate>
</template>
                
<style lang="scss">
@import "mixins";

@include rollTemplate(move);

.sheet-rolltemplate-move {
  table tr.sheet-outcome {
    border-bottom: none;
  }
}
</style>