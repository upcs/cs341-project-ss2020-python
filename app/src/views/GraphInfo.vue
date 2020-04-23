<template>   
    <v-row id="graphInfo">
        <div class="title">
            City Energy Info Visualizer
        </div>
        <v-col cols="3" class="options">
            <form ref="theForm">
                <div class="optTitle">Visualization Options</div>

                <v-row class="optBorderTop">
                    <h1 class="optTitle"> Location: </h1>
                    <v-tooltip right max-width=500>
                        <template v-slot:activator="{ on }">
                            <v-icon class="pl-5" :dense=true v-on="on">mdi-information-outline</v-icon>
                        </template>
                        <span>
                            Enter a city's name to set an origin for the filter.
                            Then, specify a radius around the city to get a valid collection of
                            power plants.
                        </span>
                    </v-tooltip>

                    <v-row class="slideContainer">
                        <v-text-field label="City 1"
                                      id="city1"
                                      placeholder="Portland"
                                      v-model="city"></v-text-field>
                        <div v-if="errors.city1Empty === true">
                            <error id="city1Err" message="Please Enter a City"> </error>
                        </div>
                        <div v-if="errors.city1NoResults === true">
                            <error id="city1ErrNoResults" message="Invalid city. No results found."> </error>
                        </div>
                    </v-row>

                    <v-row class="slideContainer">
                        <v-checkbox
                            id="checkboxSC"
                            v-model="secondCity"
                            label="Check for second city"
                            ></v-checkbox>
                        <v-text-field v-if="secondCity" label="City 2"
                                      id="city2"
                                      placeholder="Seattle"
                                      v-model="city2"></v-text-field>
                        <div v-if="errors.city2Empty === true">
                            <error id="city2Err" message="Please Enter a City"> </error>
                        </div>
                        <div v-if="errors.city2NoResults === true">
                            <error id="city2ErrNoResults" message="Invalid City; No Results Found"> </error>
                        </div>
                        <div v-if="errors.city2Duplicate === true">
                            <error id="city2ErrDuplicate" message="Duplicate City"> </error>
                        </div>
                    </v-row>

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
                </v-row>

                <v-row class="optBorderTop">
                    <h1 class="optTitle">Power Plants: </h1>
                    <v-tooltip right max-width=500>
                        <template v-slot:activator="{ on }">
                            <v-icon class="pl-5" :dense=true v-on="on">mdi-information-outline</v-icon>
                        </template>
                        <span>
                            Select which types of power plants to display in the graph.
                        </span>
                    </v-tooltip>
                    <v-row class="slideContainer">
                        <v-select id="plantType"
                                  :items="items"
                                  v-model="plant"
                                  label="Plant Type"
                                  :multiple="true"></v-select>
                        <div v-if="errors.plant === true">
                            <error id="plantErr" message="Please Select at least 1 Plant Type"> </error>
                        </div>

                    </v-row>
                </v-row>

                <br>

                <v-row class="optBorderTop">
                    <h1 class="optTitle"> Metrics: </h1>
                    <v-tooltip right max-width=500>
                        <template v-slot:activator="{ on }">
                            <v-icon class="pl-5" :dense=true v-on="on">mdi-information-outline</v-icon>
                        </template>
                        <span>
                            Choose which measurements to display on the graph. This is the y-axis.
                        </span>
                    </v-tooltip>

                    <v-row class="slideContainer">
                        <v-select id="dataParameter"
                                  :items="dataParameters"
                                  v-model="selectedData"
                                  label="Parameters"
                                  :multiple="true"></v-select>
                        <div v-if="errors.params === true">
                            <error id="param1Err" message="Please Select at least 1 Metric"> </error>
                        </div>
                    </v-row>
                </v-row>

                <br>

                <v-row class="optBorderTop">
                    <h1 class="optTitle"> X Axis: </h1>
                    <v-tooltip right max-width=500>
                        <template v-slot:activator="{ on }">
                            <v-icon class="pl-5" :dense=true v-on="on">mdi-information-outline</v-icon>
                        </template>
                        <span>
                            Sort the x-axis by plant type or by city. When sorting by plant type, each bar will represent
                            a type of power plant, while each bar will represent a city when sorting by city.
                        </span>
                    </v-tooltip>
                    <v-row class="slideContainer">
                        <v-radio-group id="sortBy" v-model="sortBy" :mandatory="true">
                            <v-radio id="sortPlant" name="sortBy" label="Plant" value="plant"></v-radio>
                            <v-radio id="sortCity" label="City" value="city"></v-radio>
                        </v-radio-group>
                    </v-row>
                </v-row>

                <br>

            </form>

            <v-row class="optBorderTop py-8" justify="center">
                <v-btn type="submit" v-on:click="formPost" :loading="isLoading">Create Graph</v-btn>
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

        <v-dialog
            v-model="noDataDialog"
            max-width="500"
        >
            <v-card id="missingResults">
                <v-card-title class="headline">Missing Results</v-card-title>

                <v-card-text>
                    The following search parameters returned no data with the given filter.
                    Either the power plant doesn't record a selected metric or no power plants
                    of a chosen type are within the filter.
                    <v-simple-table>
                        <template v-slot:default>
                            <thead>
                                <tr>
                                    <th class="text-left">City</th>
                                    <th class="text-left">Plant Type</th>
                                    <th class="text-left">Metric</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr v-for="message in noDataMessage" v-bind:key="message">
                                    <th v-for="word in message" v-bind:key="word">
                                        {{ word }}
                                    </th>
                                </tr>
                            </tbody>
                        </template>
                    </v-simple-table>
                </v-card-text>

                <v-card-actions>
                    <v-spacer></v-spacer>

                    <v-btn
                        color="green darken-1"
                        text
                        @click="noDataDialog = false"
                    >
                        Ok
                    </v-btn>
                </v-card-actions>
            </v-card>
        </v-dialog>
    </v-row>
</template>

<script>
  import $ from 'jquery'
  import Chart from "@/components/Chart.vue"
  import Error from "@/views/Error.vue"
  window.$ = $;
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
                'city1Empty': false,
                'city1NoResults': false,
                'city2Empty': false,
                'city2NoResults': false,
                'city2Duplicate': false,
                'plant': false,
                'params': false,
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
            selectedData: [],
            sortBy: 'radio-1',
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
            noDataDialog: false,
            noDataMessage: [],
            isLoading: false
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

            var seenColors = [];

            //go back over and darken any repeated colors for easier visibility
            for (var dataset of newChartData['datasets']) {

                    if (seenColors.includes(dataset['backgroundColor'])) {
                        seenColors.push(dataset['backgroundColor']);
                        dataset['backgroundColor'] = chart.LightenDarkenColor(dataset['backgroundColor'], -20);
                    }
                    else {
                        seenColors.push(dataset['backgroundColor']);
                    }
            }
            chart.chart_data = newChartData;

            chart.loadChart = true;
        },

        /**
         * LightenDarkenColor
         * 
         * Source: https://stackoverflow.com/questions/5560248/programmatically-lighten-or-darken-a-hex-color-or-rgb-and-blend-colors
         */
        LightenDarkenColor: function(col,amt) {
            var usePound = false;
            if ( col[0] == "#" ) {
                col = col.slice(1);
                usePound = true;
            }

            var num = parseInt(col,16);

            var r = (num >> 16) + amt;

            if ( r > 255 ) r = 255;
            else if  (r < 0) r = 0;

            var b = ((num >> 8) & 0x00FF) + amt;

            if ( b > 255 ) b = 255;
            else if  (b < 0) b = 0;

            var g = (num & 0x0000FF) + amt;

            if ( g > 255 ) g = 255;
            else if  ( g < 0 ) g = 0;

            return (usePound?"#":"") + (g | (b << 8) | (r << 16)).toString(16);
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
                            url: process.env.VUE_APP_ROOT_API + '/sqlMidWare',
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

                var chart = this;

                var latsAndLongs = [];

                for (let i = 0; i < cities.length; i++) {
                    let city = cities[i];

                    // check if this city is already included
                    if (latsAndLongs.filter(c => c.name == city).length > 0) {
                        if (i == 1) { chart.errors.city2Duplicate = true; }
                        continue;
                    } else {
                        if (i == 1) { chart.errors.city2Duplicate = false; }
                    }

                    if (city != null){
                        var cityURL = 'https://nominatim.openstreetmap.org/search?city=' + city + '&format=json&countrycodes=us';

                        await window.$.ajax({url: cityURL}).done(function(data) {

                            if (data.length > 0) {
                                // report valid city
                                switch (i) {
                                    case 0:
                                        chart.errors.city1NoResults = false;
                                        break;
                                    case 1:
                                        chart.errors.city2NoResults = false;
                                        break;
                                    // default:
                                    //     console.error("Unexpected input");
                                }

                                var thisLat = data[0].lat;
                                var thisLon = data[0].lon;
                                latsAndLongs.push({
                                    lat: thisLat,
                                    lon: thisLon,
                                    name: city
                                });
                            } else {
                                // report bad city
                                console.log("Warning: '" + city + "' returned no geocoding data.")
                                switch (i) {
                                    case 0:
                                        chart.errors.city1NoResults = true;
                                        break;
                                    case 1:
                                        chart.errors.city2NoResults = true;
                                        break;
                                    // default:
                                    //     console.error("Unexpected input");
                                }
                            }
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

            chart.isLoading = true;

            // form validation
            this.errors.city1Empty = (this.city == null || this.city == "") ? true : false;
            this.errors.city2Empty = ((this.city2 == null || this.city2 == "") && this.secondCity == true) ? true : false;
            this.errors.plant = (this.plant.length == 0) ? true : false;
            this.errors.params = (this.selectedData.length == 0) ? true : false;

            if (!this.errors.city1Empty && !this.errors.city2Empty && !this.errors.plant) {
                console.log("Querying geocoding");
                var latsAndLongs;
                if(this.secondCity)
                    latsAndLongs = await chart.cityInfoGetter([this.city, this.city2]);
                else
                    latsAndLongs = await chart.cityInfoGetter([this.city]);
              
                // do nothing on empty results
                if (latsAndLongs.length < 1) { 
                    chart.isLoading = false;
                    return;
                }

                console.log("Querying power plant database")
                var queriedData = await chart.sqlMidwareCall(latsAndLongs, chart.selectedData);
                console.log(queriedData);

                // check for missing data
                chart.noDataMessage = [];
                for (let c in queriedData.cities) {
                    let myCity = queriedData.cities[c];
                    console.log(myCity);
                    for (let m = 0; m < queriedData.metrics.length; m++) {
                        for (let i = 0; i < queriedData.labels.length; i++) {                            
                            if (myCity[queriedData.metrics[m]][i] == null) {
                                chart.noDataMessage.push([myCity.name, queriedData.labels[i], queriedData.metrics[m]]);
                            }
                        }
                    }
                }

                if (chart.noDataMessage != "") {
                    chart.noDataDialog = true;
                    console.log("Missing Data Alert:")
                    console.log(chart.noDataMessage);
                }

                console.log("Configurationg Y-Axis")
                chart.configureYAxis(queriedData);
                
                console.log("Formatting and showing chart")
                switch (chart.sortBy) {
                case "city":
                    chart.formatChartDataByCity(queriedData);
                    break;
                
                case "plant":
                    chart.formatChartDataByPlant(queriedData);
                    break;
                
                // default:
                //     console.log("Unexpected sorting case")
                }

                console.log(this.chart_data);
            }
            chart.isLoading = false;
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
    min-width: 200px;
    width: 25%;
    float: left;
    border-right: 2px solid black;
 
}

.options div {
    padding-left: 15px;
    width: 100%;
}

.main {
    width: 100%;
    float: right;
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
