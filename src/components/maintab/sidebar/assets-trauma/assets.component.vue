<template>
        <div class="assets section"> 
          <fieldset class="repeating_asset">
            <div class="asset-entry">
              <div class="assets-first-row">
                <input name="attr_name" type="text" placeholder="Asset Name" />
                <div class="radio-fill-left">
                  <input type="radio" name="attr_asset_rank" value="none" checked="checked" /><span></span>
                  <input type="radio" name="attr_asset_rank" value="minor" /><span></span>
                  <input type="radio" name="attr_asset_rank" value="moderate" /><span></span>
                  <input type="radio" name="attr_asset_rank" value="impressive" /><span></span>
                </div>
              </div>
              <textarea name="attr_details" placeholder="...details"></textarea>
            </div>

          </fieldset>
        </div>
</template>