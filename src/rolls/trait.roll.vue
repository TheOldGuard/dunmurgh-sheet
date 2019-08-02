<!-- Trait Template formulae
                    
                    &{template:trait} {{header=Derrog}} {{name=On the move}} {{details=When you defy a danger caused by movement (maybe falling off a narrow bridge or rushing past an armed guard) take +1.}}
                    
                  -->
<template>
  <rolltemplate class="sheet-rolltemplate-trait">
    <div class="rolltable-container">
      <table>
        {{#header}}
        <tr class="no-border less-top-padding">
          <td colspan="2" class="sheet-subheader">{{header}} - Trait</td>
        </tr>
        {{/header}}
        {{#name}}
        <tr class="less-top-padding">
          <th colspan="2">{{name}}</th>
        </tr>
        {{/name}}
        <tr>
          <td colspan="2">{{ details }}</td>
        </tr>
      </table>
    </div>
  </rolltemplate>
</template>

<style lang="scss">
@import "mixins";
@include rollTemplate(trait);
</style>