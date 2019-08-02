<!-- Base Template roll formulae
                
                Unknown bonus
                &{template:base} {{header=Ollie}} {{name=Rolling +?{Bonus|0}}} {{action={{1d6+?{Bonus|0}}}}} {{challenge1={{1d10}}}} {{challenge2={{1d10}}}}
                
                Fixed Complication
                &{template:base} {{action={{3}}}} {{challenge1={{4}}}} {{challenge2={{4}}}}
                
                Fixed Miss
                &{template:base} {{action={{3}}}} {{challenge1={{4}}}} {{challenge2={{5}}}}
                
                Fixed partial
                &{template:base} {{action={{3}}}} {{challenge1={{4}}}} {{challenge2={{3}}}}
                &{template:base} {{action={{3}}}} {{challenge1={{3}}}} {{challenge2={{4}}}}
                
                Fixed full
                &{template:base} {{action={{3}}}} {{challenge1={{3}}}} {{challenge2={{2}}}}
                
                Fixed opportunity
                &{template:base} {{action={{3}}}} {{challenge1={{3}}}} {{challenge2={{3}}}}
                
              -->
<template>
  <rolltemplate class="sheet-rolltemplate-dunmurgh">
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
        {{/rollTotal() challenge1 challenge2}}
        {{#^rollTotal() challenge1 challenge2}}
        {{#rollGreater() challenge2 action}}
        <!--Miss-->
        <tr>
          <td colspan="2" class="sheet-subfooter miss">Miss</td>
        </tr>
        {{/rollGreater() challenge2 action}}
        {{#^rollGreater() challenge2 action}}
        <!--Partial Hit-->
        <tr>
          <td colspan="2" class="sheet-subfooter partial-hit">Partial Hit</td>
        </tr>
        {{/^rollGreater() challenge2 action}}
        {{/^rollTotal() challenge1 challenge2}}
        {{/rollGreater() challenge1 action}}
        {{#^rollGreater() challenge1 action}}
        {{#rollTotal() challenge1 challenge2}}
        <!--CHALLENGE DIE MATCH-->
        <tr>
          <td colspan="2" class="sheet-subfooter opportunity">Opportunity</td>
        </tr>
        {{/rollTotal() challenge1 challenge2}}
        {{#^rollTotal() challenge1 challenge2}}
        {{#rollGreater() challenge2 action}}
        <!--Partial Hit-->
        <tr>
          <td colspan="2" class="sheet-subfooter partial-hit">Partial Hit</td>
        </tr>
        {{/rollGreater() challenge2 action}}
        {{#^rollGreater() challenge2 action}}
        <!--Miss-->
        <tr>
          <td colspan="2" class="sheet-subfooter full-hit">Full Hit</td>
        </tr>
        {{/^rollGreater() challenge2 action}}
        {{/^rollTotal() challenge1 challenge2}}
        {{/^rollGreater() challenge1 action}}
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
@include rollTemplate(dunmurgh);
</style>
