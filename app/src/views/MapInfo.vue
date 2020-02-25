<template>
    <div>
        <div class="title">
            City Energy Info Visualizer
        </div>
        <div class="options">
            
        </div>
        <div class="main">
            <Chart/>
        </div>
    </div>    
</template>

<script>
  import Chart from "@/components/Chart.vue"

  export default {
    name: 'MapView',
    components: {
        Chart
    }
  }
</script>

<style scoped>
.title {
    width: 100%;
    text-align: center;
    font-size: 36px;
    padding: 20px;
    border-top: 3px solid #E1C699;
    background-color: beige;    
}

.options {
    height: 100vh;
    width: 25%;
    background-color: red;
    float: left;
}

.main {
    height: 100vh;
    width: 75%;
    background: white;
    float: left;
}

</style>