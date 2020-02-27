<template>

    
        
    <v-row>
        <div class="title">
            City Energy Info Visualizer
        </div>
        <v-col cols="3" class="options">
            <form ref="theForm">
                <div class="optTitle">Visualization Options</div>

                <v-row class="optBorderTop">
                    <h1 class="optTitle"> Location: </h1>
                    <v-row class="slideContainer">

                        <v-col justify="left" class="mx-0 px-0">
                            <label style="float:left;margin-left: 10px;"> Distance (mi): </label>
                            <v-slider v-model="slider"
                                    class="align-center"
                                    :max="max"
                                    :min="min"
                                    hide-details>
                                <template v-slot:append>
                                    <v-text-field v-model="slider"
                                                class="mt-0 pt-0"
                                                hide-details
                                                single-line
                                                type="number"
                                                style="width: 75px;"></v-text-field>
                                </template>
                            </v-slider>
                        </v-col>
                    </v-row>

                    <v-row>
                        <v-text-field label="City"
                                      placeholder="Portland"></v-text-field>
                    </v-row>

                    <v-row>
                        <v-select id="plantType"
                                  :items="items"
                                  v-model="plant"
                                  label="Plant Type"></v-select>
                        <!--<:multiple="true">--->

                    </v-row>

                </v-row>
                <br>
                <v-row class="optBorderTop">
                    <h1 class="optTitle"> Metrics: </h1>
                    <v-row>
                        <v-select id="dataParameter"
                                  :items="dataParameters"
                                  v-model="selectedData"
                                  label="Parameter 1"></v-select>
                    </v-row>
                </v-row>
                <br>
                <v-row>
                    <div class="my-2">
                        <!--<input type="submit">-->

                    </div>
                </v-row>

            </form>
            <v-row justify="center" >
                <v-btn v-on:click="formPost">Submit</v-btn>
            </v-row>
        </v-col>
        
        <v-col cols="9" class="main">
            <div class="main">
                <ChartDummy/>
            </div>
        </v-col>
    </v-row>
        
</template>

<script>
  import ChartDummy from "@/components/ChartDummy.vue"
  export default {
    name: 'Demo', 
    components: {
        ChartDummy,
    },
    data () {
        return {
            min: 0,
            max: 1000,
            slider: 100,
            plant: null,
            items: [
                'Nuclear',
                'Coal',
                'Solar',
                'Hydroelectric'
            ],
            dataParameters: [
                'C02 Emission Rate (lb/MWh)'
            ],
            selectedData: null,
            loadChart: true,
            chart_data: null,
            chartOptions: {
                title: "Energy Produced in a Year by Source",
                responsive: true,
                maintainAspectRatio: false,
            }
        }
    }
  }

    
</script>

<style scoped> 
.title {
    width: 100%;
    text-align: center;
    font-size: 36px;
    padding: 20px;
    border-bottom: 2px solid black;
}

.options {
    height: 86.3vh;
    width: 25%;
    float: left;
    border-right: 2px solid black;
 
}

.options div {
    padding-left: 15px;
    width: 100%;
}

.main {
    height: 86.3vh;
    width: 75%;
    float: right;
}

optTitle {
    text-align: left;
    margin-left: 5px;
    width: 100%;
}

sliderContainer {
    padding-left: 5px;
}

.optBorderTop {
    border-top: solid black 1px;
}

.roundedBorder {
    border: 1px solid black;
    border-radius: 5px;
    margin-left: 5px;
    margin-top: 3px;
}
</style>
