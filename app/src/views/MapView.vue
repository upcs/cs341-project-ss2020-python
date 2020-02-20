<template>
    <div>
        <h1 id = "logo">Portland Python Pollution</h1>
        <div class="spacer"> </div>
        <h2 id = "compareMaps"> Compare Maps </h2>
        <div class = "mapSelectDropdowns">
            <select id="mapSelect1">
                <option value="1">Map 1</option>
                <option value="2">Map 2</option>
                <option value="3">Map 3</option>
                <option value="4">Map 4</option>
                <option value="5">Map 5</option>
                <option value="6">Map 6</option>
            </select>
            <select id="mapSelect2">
                <option value="1">Map 1</option>
                <option value="2">Map 2</option>
                <option value="3">Map 3</option>
                <option value="4">Map 4</option>
                <option value="5">Map 5</option>
                <option value="6">Map 6</option>
            </select>
        </div>
        <div class = "">
            <div id="left" style="border:1px solid #000;">Map1</div>
            <div id="right" style="border:1px solid #000;">Map2</div>
        </div>
    </div>
</template>

<script>
  export default {
    name: 'MapView',
  }
</script>

<style scoped src="@/assets/style/ppp.css">

</style>