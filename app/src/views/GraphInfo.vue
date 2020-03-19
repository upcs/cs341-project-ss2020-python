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
                                      v-model="city2"></v-text-field>
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
        Error
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
                'Hydroelectric',
                'Natural Gas',
                'Oil'
            ],
            dataParameters: [
                'CO2 Emission Rate (lb/MWh)',
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
                scales: {
                    xAxes: [ { stacked: true } ]
                }
            }
        }
    },
    methods: {
        /**
         * method: formatChartData
         */
        formatChartDataByPlant: function(queryData) {
            
            // set up Y-axis
            var chart = this;
            chart.loadChart = false;

            var newYAxes = []
            var newChartData = {};

            var isFirstMetric = true;

            for (let metric of queryData.metrics) {
                newYAxes.push({
                    'id': metric,
                    'scaleLabel': {
                        'labelString': metric,
                        'display': true,
                    },
                    'position': (isFirstMetric ? "left" : "right"),
                    'stacked': true,

                });
                isFirstMetric = false;
            }

            newYAxes[newYAxes.length-1]['gridLines'] = {
                drawOnChartArea: false
            };

            chart.chartOptions.scales['yAxes'] = newYAxes;
            console.log(chart.chartOptions.yAxes);
            
            // add the datasets to the chart
            newChartData['labels'] = queryData.labels;
            newChartData['datasets'] = [];
            
            var isFirstCity = true;

            var colors = ["#00b3ff", "#20b2aa", "#f0a122", "#8638ba"];
            var colorIterator = 0;

            for (var city of queryData.cities) {
                
                isFirstMetric = true
                
                for (let metric of queryData.metrics) {

                    if (!isFirstMetric) {
                        colorIterator = 2;
                    }

                    newChartData['datasets'].push({
                        'label': city.name + "-" + metric,
                        'backgroundColor': (isFirstCity ? colors[colorIterator] : colors[colorIterator+1]),
                        'stack': (isFirstMetric ? "0" : "1"),
                        'yAxisID': metric,
                        'data': city[metric],
                    });
                    
                    isFirstMetric = false;
                    colorIterator = 0;
                } 

                isFirstCity = false;
            }

            chart.chart_data = newChartData;

            chart.loadChart = true;
        },

        /**
         * method: sqlMidwareCall
         * 
         * Example return:
         *  {
         *      "cities: [
         *          "0": {
         *              "city" : "Portland"
         *          [metric] = ": [10, 12, 103, 10]
         *              "annual power": [120, 22, 1023, 120]
         *          }
         *          "1": {
         *              "city" : "Seattle"
         *               "emissions": [10, 12, 103, 10]
         *               "annual power": [120, 22, 1023, 120]
         *          }
         *      ]
         *      "metrics" : ["emission", "annual power"]
         *      "labels": ["wind", "solar", "nuclear, "hydro"]
         *  }
         */
        sqlMidwareCall: async function(coords, metrics) {

            var chart = this;
            var dataSet = { 
                'labels' : chart.plant,
                'metrics' : metrics,
                'cities' : []    
            };

            for (var loc of coords) {
                
                var locationData = { 'name' : loc.name };
        
                for (var metric of metrics) {

                    var plantData = [];

                    for (var myPlant of chart.plant) {
                        await window.$.ajax({
                            url: 'http://localhost:3000/sqlMidWare',
                            method: "POST",
                            dataType: "json",
                            data: {
                                'distance': chart.slider,
                                'plant': myPlant,
                                'latitude': loc.lat,
                                'longitude': loc.lon,
                                'metric': metric
                            }
                        }).done(function(response) {
                            plantData.push(response.average[0].average);
                        });
                    }

                   locationData[metric] = plantData;
                    
                }

               dataSet.cities.push(locationData);
            }

            return dataSet
        
        },

        cityInfoGetter: async function(cities) {


                var latsAndLongs = [];

                if (cities.length == 0)
                    return null;

                for (var city of cities) {
                    if (city != null){
                        var cityURL = 'https://nominatim.openstreetmap.org/search?q=' + city + '&format=json';
                        console.log(cityURL);

                        await window.$.ajax({url: cityURL}).done(function(data) {
                            var thisLat = data[0].lat;
                            var thisLon = data[0].lon;
                            latsAndLongs.push({
                                lat: thisLat,
                                lon: thisLon,
                                name: city
                            });
                        });
                    }
                }

                return latsAndLongs;

        },

        /**
         * method: formPost
         * 
         * gets called when the submit button is clicked. Extracts information from the form and sends it through a post
         * to be handled by our express server
         * */
        formPost: async function () {

            var chart = this;
            
            console.log("Querying geocoding");

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

            var latsAndLongs = await chart.cityInfoGetter([this.city, this.city2]);

            if (!this.errors.city1 && !this.errors.city2 && !this.errors.plant) {

                console.log(latsAndLongs);

                var metrics = [];

                if (chart.selectedData != null) {
                    metrics.push(chart.selectedData);
                }

                if (chart.selectedEnergy != null) {
                    metrics.push(chart.selectedEnergy);
                }

                console.log("Querying power plant database")
                var queriedData = await chart.sqlMidwareCall(latsAndLongs, metrics);
                console.log(queriedData);

                chart.formatChartDataByPlant(queriedData);
                //console.log(chart.chartOptions);
            }
            
        },
        
        /**
         * method: formPostOld
         * 
         * gets called when the submit button is clicked. Extracts information from the form and sends it through a post
         * to be handled by our express server
         * */
        formPostOld: function () {

            this.loadChart = false;
            
            var chart = this;

            var form = window.$("form");
            console.log(form[0].elements);
            console.log(chart.city);
            console.log(chart.city2);
            console.log(chart.plant);
            
            if (chart.city != null) {
                //first, use this resource to find out the lat and lon of the input city
                window.$.get('https://nominatim.openstreetmap.org/search?q=' + chart.city + '&format=json', function (cityData) {

                    window.$.get('https://nominatim.openstreetmap.org/search?q=' + chart.city2 + '&format=json', function (city2Data) {

                        console.log(city2Data);

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
                            'plant': chart.plant,
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
                });
            }

            console.log(this.chart_data);
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
