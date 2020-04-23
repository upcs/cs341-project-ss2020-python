<template>
    <v-app>
      <v-app-bar app color="primary">
        <v-container fluid>
          <v-row id="titleBar" justify="center" align="center">
            <v-col cols="2">
              <v-tooltip bottom>
                <template v-slot:activator="{ on }">
                  <router-link to="/">
                    <v-img src="@/assets/images/logo_button.jpeg" max-width="250" max-height="50"  v-on="on"></v-img>
                  </router-link>
                </template>
                <span>Home</span>
              </v-tooltip> 
            </v-col>
            <v-col cols="7">
              <div class="text-center d-flex align-center">
                <v-tooltip bottom>
                  <template v-slot:activator="{ on }">
                    <router-link to="/graph">
                      <v-btn text id="header" v-on="on">Plant Graphs</v-btn>
                    </router-link>
                  </template>
                  <span>Learn about your cities energy use</span>
                </v-tooltip>  
               <v-tooltip bottom>
                <template v-slot:activator="{ on }">
                  <router-link to="/news">
                    <v-btn text id="header" v-on="on">News</v-btn>
                  </router-link>
                </template>
                <span>Read about the latest Portland energy news</span>
              </v-tooltip> 
              <v-tooltip bottom>
                <template v-slot:activator="{ on }">
                  <router-link to="/info">
                    <v-btn text id="header" v-on="on">Energy Info</v-btn>
                  </router-link>
                </template>
                <span>Understand the World's Energy Use</span>
              </v-tooltip>  
              <v-tooltip bottom>
                <template v-slot:activator="{ on }">
                  <router-link to="/contact">
                    <v-btn text id="header" v-on="on">Contact Us</v-btn>
                  </router-link>
                </template>
                <span>Leave us a message here</span>
              </v-tooltip> 
              </div>
            </v-col>
            <v-spacer></v-spacer>
            <v-col cols="auto" class="justify-end">
              <v-tooltip bottom>
                <template v-slot:activator="{ on }">
                  <div v-on="on">
                    <v-btn
                      id="fuseBox"
                      icon
                      color="white"
                      @click="drawer = !drawer"
                    ><v-icon>mdi-magnify</v-icon></v-btn>
                  </div>
                </template>
                <span>Click to Toggle Search Results</span>
              </v-tooltip>
            </v-col>   
            <v-spacer></v-spacer>
          </v-row>
        </v-container>
      </v-app-bar>
      <v-navigation-drawer id="searchDrawer" v-model="drawer" color="primary" right="right" app class="indigo" temporary>
        <v-container>
          <v-row class="align-center">
            <v-col cols=9 class="justify-start">
              <VueFuse
                placeholder="Search for energy info"
                :list="books"
                :keys="['name', 'description']"
                class="pl-2 w-64 text-left h-8 border rounded-lg center side"
                @fuseResultsUpdated=updateResults
              />
            </v-col>
            <v-spacer></v-spacer>
            <v-col cols=2 class="justify-end mr-2">
              <v-btn id="searchCloseBtn" icon @click="drawer = !drawer">
                <v-icon color="white">mdi-close-circle-outline</v-icon>
              </v-btn>
            </v-col>
          </v-row>
          <div>
            <p class="title white--text">Results:</p>
            <div class="subtitle-2 white--text">
              <div v-for="book in results" :key="book.name" class="rounded-lg bg-blue text-white p-4 m-4 flex text-left">
                <div class="w-1/4">{{ book.name }}</div>
                <div class="ml-4 w-3/4">{{ book.description }}</div>
              </div>
            </div>
          </div>
        </v-container>
      </v-navigation-drawer>

      <v-content>
        <v-container fluid>
          <router-view></router-view>
        </v-container>
      </v-content>
    </v-app>
</template>

<script>
import VueFuse from '@/components/VueFuse.vue'
export default {
  name: 'App',
  components: {
    VueFuse
  },
  data() {
    return {
      query: '',
      drawer: false,
      searchRes: false,
      results: [],
      books: [
        {
          name: 'Energy',
          description: "Per Capita Energy Consumption. Learn more on the 'Energy Info' page"
        }, {
          name: 'Consume',
          description: "How Much Energy Does the World Consume? Learn more on the 'Energy Info' page"
        }, {
          name: 'Global',
          description: "Global Energy Consumption by Source. Learn more on the 'Energy Info' page"
        }, {
          name: 'United',
          description: "The United States uses a mix of energy sources. Learn more on the 'Energy Info' page"
        }, {
          name: 'Portland',
          description: "Learn about Portland's energy use on the 'Plant Graphs' page"
        }, {
          name: 'Seattle',
          description: "Learn about Seattle's energy use on the 'Plant Graphs' page"
        }, {
          name: 'News',
          description: "Read about the latest Portland Energy news on the 'News' page"
        }, {
          name: 'Contact',
          description: "Provide us with your feedback on the 'Contact Us' Page!"
        }, {
          name: 'Message',
          description: "Provide us with your feedback on the 'Contact Us' Page!"
        }, {
          name: 'About',
          description: "Learn more about us at the bottom of the home page"
        }
      ]
    }
  },
  methods: {
    updateResults(r) {
      this.results = r;
    }
  },
}

</script>
<style scoped>
  #header{
      color: white;
    }
  .center {
    margin: auto;
    text-align: center;
  }
  svg {
    position: sticky;
    top: 15px;
    left: 15px;
  }
  .fuse {
    position: sticky;
    top: 18px;
    left: 70px;
  }
  .side{
    background: white;
  }
</style>