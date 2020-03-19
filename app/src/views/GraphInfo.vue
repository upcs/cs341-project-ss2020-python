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
                        <v-text-field label="City 1"
                                      placeholder="Portland"
                                      v-model="city"></v-text-field>
                        <div v-if="errors.city1 === true">
                            <error message="Please Enter a City"> </error>
                        </div>
                    </v-row>

                    <v-row>
                        <v-checkbox
                            v-model="secondCity"
                            label="Check for second city"
                            ></v-checkbox>
                        <v-text-field v-if="secondCity" label="City 2"
                                      placeholder="Portland"
                                      v-model="city2">
                                      </v-text-field>
                        <div v-if="errors.city2 === true">
                            <error message="Please Enter a City"> </error>
                        </div>
                    </v-row>

                    <v-row>
                        <v-select id="plantType"
                                  :items="items"
                                  v-model="plant"
                                  label="Plant Type"
                                  :multiple="true"></v-select>
                        <div v-if="errors.plant === true">
                            <error message="Please Select at least 1 Plant Type"> </error>
                        </div>
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
                    <v-row>
                        <v-select id="energyParameter"
                                  :items="dataParameters"
                                  v-model="selectedEnergy"
                                  label="Parameter 2"></v-select>
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
                <v-btn type="submit" v-on:click="formPost">Submit</v-btn>
            </v-row>
        </v-col>
        
        <v-col cols="9" class="main">
            <div class="main">
                <Chart 
                    v-if="loadChart"
                    :chartData="chart_data"
                    :options="chartOptions"/>
            </div>
        </v-col>
    </v-row>
        
</template>

<script>
  import Chart from "@/components/Chart.vue"
  import Error from "@/views/Error.vue"
  export default {
    name: 'GraphInfo', 
    components: {
        Chart,
        Error,
    },
    data () {
        return {
            min: 0,
            max: 1000,
            slider: 100,
            plant: [],
            city: null,
            city2: null,
            secondCity: false,
            errors: {
                'city1': false,
                'city2': false,
                'plant': false
            },
            items: [
                'Nuclear',
                'Coal',
                'Solar',
                'Hydroelectric'
            ],
            dataParameters: [
                'C02 Emission Rate (lb/MWh)',
                'Annual Net Power (MWh)'
            ],
            selectedData: null,
            selectedEnergy: null,
            loadChart: false,
            chart_data: null,
            chartOptions: {
                title: "Energy Produced in a Year by Source",
                responsive: true,
                maintainAspectRatio: false,
            }
        }
    },
    methods: {

        /**
         * method: formPost
         * 
         * gets called when the submit button is clicked. Extracts information from the form and sends it through a post
         * to be handled by our express server
         * */
        formPost: function () {

            this.loadChart = false;
            
            var chart = this;
            if(this.city == null)
                this.errors.city1 = true;
            else
                this.errors.city1 = false;
            if(this.city2 == null && this.secondCity == true)
                this.errors.city2 = true;
            else
                this.errors.city2 = false;
            if(this.plant.length == 0) 
                this.errors.plant = true;
            else
                this.errors.plant = false;
            var form = window.$("form");
            console.log(form[0].elements);
            console.log(chart.city);
            console.log(chart.city2);
            console.log(chart.plant);
            
            if (!this.errors.city1 && !this.errors.city2 && !this.error.plant) {
                //first, use this resource to find out the lat and lon of the input city
                window.$.get('https://nominatim.openstreetmap.org/search?q=' + chart.city + '&format=json', function (cityData) {

                    //console.log(cityData);

                    //if no cities were returned, don't go further. The user probably misspelled something
                    if (cityData.length == 0) {
                        //TODO: report error
                        chart.loadChart = false;
                    }

                    else {

                        var lat = cityData[0].lat;
                        var long = cityData[0].lon;

                        window.$.post('http://localhost:3000/sqlMidWare', {
                            distance: chart.slider,
                            'city': chart.city,
                            //'city2': this.city2,
                            'plant': chart.plant[0],
                            longitude: long,
                            latitude: lat,
                            //'emissions': this.selectedData,
                            //'energy': this.selectedEnergy,
                        }, function (responseData) {

                            console.log(responseData[0].avgCO2);
                            var resData = parseFloat(responseData[0].avgCO2);
                            chart.chart_data = {

                                labels: [this.plant],

                                datasets: [{
                                    label: this.plant,
                                    backgroundColor: "#f87979",
                                    data: [resData]
                                }]

                            };
                            console.log(chart.chart_data);
                            chart.loadChart = true;



                        }
                        );
                    }
                });
            

                console.log(this.chart_data);
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
    width: 100%;
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
