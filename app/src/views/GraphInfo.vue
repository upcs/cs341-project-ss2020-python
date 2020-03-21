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

                    <v-row class="slideContainer">
                        <v-text-field label="City 1"
                                      placeholder="Portland"
                                      v-model="city"></v-text-field>
                    </v-row>

                    <v-row class="slideContainer">
                        <v-checkbox
                            v-model="secondCity"
                            label="Check for second city"
                            ></v-checkbox>
                        <v-text-field v-if="secondCity" label="City 2"
                                      placeholder="Portland"
                                      v-model="city2"></v-text-field>
                    </v-row>
                </v-row>

                <v-row class="optBorderTop">
                    <h1 class="optTitle">Power Plants: </h1>
                    <v-row class="slideContainer">
                        <v-select id="plantType"
                                  :items="items"
                                  v-model="plant"
                                  label="Plant Type"
                                  :multiple="true"></v-select>
                    </v-row>
                </v-row>

                <br>

                <v-row class="optBorderTop">
                    <h1 class="optTitle"> Metrics: </h1>
                    <v-row class="slideContainer">
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

                <v-row class="optBorderTop">
                    <h1 class="optTitle"> X Axis: </h1>
                    <v-row class="slideContainer">
                        <v-radio-group v-model="sortBy" :mandatory="true">
                            <v-radio label="Plant" value="plant"></v-radio>
                            <v-radio label="City" value="city"></v-radio>
                        </v-radio-group>
                    </v-row>
                </v-row>

                <br>

            </form>

            <v-row class="optBorderTop py-8" justify="center">
                <v-btn type="submit" v-on:click="formPost">Create Graph</v-btn>
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
  export default {
    name: 'GraphInfo', 
    components: {
        Chart,
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
            sortBy: null,
            loadChart: false,
            chart_data: null,
            chartOptions: {
                title: "Energy Produced in a Year by Source",
                responsive: true,
                maintainAspectRatio: false,
                scales: {
                    xAxes: [ { stacked: true } ]
                }
            },
            colors: ["#00b3ff", "#20b2aa", "#f0a122", "#8638ba", "#fff000", "#b40049"],
        }
    },
    methods: {
        /**
         * method: configureYAxis
         * 
         * Sets up the Y-axis so it can handle two metrics being displayed,
         * as well as being able to stack metrics on top of each other
         */
        configureYAxis: function(queryData) {
            var chart = this;
            chart.loadChart = false;

            var newYAxes = []

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
        },

        /**
         * method: formatChartDataByCity
         */
        formatChartDataByCity: function(queryData) {
            var chart = this;
            var newChartData = {};
            let colorIterator = 0;

            // add the datasets to the chart
            newChartData['labels'] = [];
            newChartData['datasets'] = [];


            for (let city of queryData.cities) {
                newChartData['labels'].push(city.name);
            }

            for (let i = 0; i < queryData.metrics.length; i++) {

                let metric = queryData.metrics[i]
                
                for (let j = 0; j < queryData.labels.length; j++) {
                    var plant = queryData.labels[j];

                    var plantMetricsData = [];

                    for (var city of queryData.cities) {
                        plantMetricsData.push(city[metric][j]);
                    }

                    newChartData['datasets'].push({
                            'label': plant + "-" + metric,
                            'backgroundColor': chart.colors[colorIterator],
                            'stack': i,
                            'yAxisID': metric,
                            'data': plantMetricsData,
                    })
                    
                    colorIterator = (colorIterator + 1) % queryData.labels.length;                    
                }
            }

            chart.chart_data = newChartData;

            chart.loadChart = true;
        },

        /**
         * method: formatChartDataByPlant
         */
        formatChartDataByPlant: function(queryData) {
            var chart = this;
            var newChartData = {};
            
            // add the datasets to the chart
            newChartData['labels'] = queryData.labels;
            newChartData['datasets'] = [];
            
            var isFirstCity = true;
            let colorIterator = 0;

            for (let city of queryData.cities) {
                
                var isFirstMetric = true
                
                for (let metric of queryData.metrics) {

                    if (!isFirstMetric) {
                        colorIterator = 2;
                    }

                    newChartData['datasets'].push({
                        'label': city.name + "-" + metric,
                        'backgroundColor': (isFirstCity ? chart.colors[colorIterator] : chart.colors[colorIterator+1]),
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

            var latsAndLongs = await chart.cityInfoGetter([this.city, this.city2]);

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

            chart.configureYAxis(queriedData);

            switch (chart.sortBy) {
                case "city":
                    chart.formatChartDataByCity(queriedData);
                    break;
                
                case "plant":
                    chart.formatChartDataByPlant(queriedData);
                    break;
                
                default:
                    console.log("Unexpected sorting case")
            }

            console.log(this.chart_data);
        },
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
