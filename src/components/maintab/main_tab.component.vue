<template>
    <div class="main-tab">
        <div class="main-section">
            ${ affinities }
            ${ focus }
            ${ drives }
            ${ demographics }
            ${ traits }
            ${ moves }
        </div>


        <!-- SIDEBAR -->
        <div class="sidebar section">
            ${ resolve }
            ${ stress }
            ${ assets_trauma }
        </div>

    </div>
</template>

<style lang="scss">
    .sheet-main-tab {
        display: grid;
        width: 100%;
        margin: 0;
        grid-gap: 4px;
        grid-template-columns: 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr;
        grid-auto-rows: minmax(100px, auto);
        grid-template-areas: "main        main        main        main        main        main        sidebar sidebar sidebar";
    }
</style>