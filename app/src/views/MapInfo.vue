<template>
    
        <div class="title">
            City Energy Info Visualizer
        </div>
        <v-row>
            <v-col cols="3" class="options">
                <form action="/graphGenerator.php">
                    <div class="optTitle">Visualization Options</div>
                    
                    <v-row class="optBorderTop">
                        <h1 class="optTitle"> Location: </h1>
                        <v-row class="slideContainer">
                            <label style="float:left;margin-left: 10px;"> Distance (mi): </label>
                            <v-slider
                             v-model="slider"
                             class="align-center"
                             :max="max"
                             :min="min"
                              hide-details
                            >
                              <template v-slot:append>
                                <v-text-field
                                  v-model="slider"
                                  class="mt-0 pt-0"
                                  hide-details
                                  single-line
                                  type="number"
                                  style="width: 60px;padding-right:5px;"
                                ></v-text-field>
                              </template>
                            </v-slider>
                        </v-row>

                        <v-row>
                            <v-text-field
                                label="City"
                                placeholder="Portland"
                                ></v-text-field>
                        </v-row>

                        <v-row>
                            <v-select
                              id="plantType"
                              :items="items"
                              label="Plant Type"
                            ></v-select>
                        </v-row>
                    </v-row>
                    <br>
                    <v-row class="optBorderTop">
                        <h1 class="optTitle"> Metrics: </h1>
                        <v-row>
                            <label> Longitude: </label>
                            <input class="roundedBorder" type="number" min="-180" max="180"/>
                        </v-row>
                        <v-row>
                            <label> Latitude: </label>
                            <input class="roundedBorder" type="number" min="-180" max="180"/>
                        </v-row>
                    </v-row>
                    <br>
                    <v-row>
                        <div class="my-2">
                            <input type="submit">   
                        </div>                    
                    </v-row>

                </form>
            </v-col>
            <v-col cols="9" class="main">
                <div class="main">
                    <Chart/>
                </div>
            </v-col>
        </v-row>
        
</template>

<script>
  import Chart from "@/components/Chart.vue"

  export default {
    name: 'MapInfo', 
    components: {
        Chart
    },
    data () {
        return {
            min: 0,
            max: 100,
            slider: sliderVal,
            items: [
                'Nuclear',
                'Coal',
                'Solar',
                'Hydroelectric'
            ],
        }
    },
    methods: {
        getPlantType() {
            return document.getElementByID('#plantType').innerHtml;
        }
    }
  }


      let sliderVal = 50;

    
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
    height: 86.3vh;
    width: 25%;
    background-color: #aaa;
    float: left;
 
}

.options div {
    padding-left: 15px;
    width: 100%;
}

.main {
    height: 86.3vh;
    width: 75%;
    background: #333;
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
