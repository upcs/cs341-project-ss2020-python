<template>
    <v-app>
      <v-app-bar app color="primary">
        <v-container fluid>
          <v-row justify="center" align="center">
            <v-col cols="2">
              <router-link to="/">
                <v-img src="@/assets/images/logo_button.jpeg" max-width="250" max-height="50"></v-img>
              </router-link>
            </v-col>
            <v-col cols="7">
              <router-link to="/graph">
                <v-btn text id="header">Plant Graphs</v-btn>
              </router-link>

              <router-link to="/news">
                <v-btn text id="header">News</v-btn>
              </router-link>

              <router-link to="/info">
                <v-btn text id="header">Energy Info</v-btn>
              </router-link>

              <router-link to="/contact">
                <v-btn text id="header">Contact Us</v-btn>
              </router-link>

              <router-link to="/test">
                <v-btn text id="header">Test</v-btn>
              </router-link>
              
            </v-col>

            <v-col cols="2" class="pt-7">
              <!-- <v-text-field
                label="Search"
                prepend-inner-icon="mdi-magnify"
                background-color="accent"
                rounded
                dense
                v-model="query"
                @click="drawer = !drawer"
              ></v-text-field> -->
              <div 
                class="side"
                @click="drawer = !drawer"
              >
                <VueFuse
                  placeholder="Search for info on Energy"
                  :list="books"
                  :keys="['name', 'description']"
                  class="w-64 text-center h-8 border rounded-lg center"
                  @fuseResultsUpdated=updateResults
                  @inputChangeEventName=updateSearch
                />
              </div>
            </v-col>   
            <v-spacer></v-spacer>
          </v-row>
        </v-container>
      </v-app-bar>
      <v-navigation-drawer v-model="drawer" color="primary" right="right" app class="indigo">
        <p class="title white--text">Results:</p>
        <!-- <v-textarea
          outlined
          name="searchResults"
          auto-grow="autoGrow"
          background-color="white"
          value="The Woodman set to work at once, and so sharp was his axe that the tree was soon chopped nearly through."
        ></v-textarea> -->
        <div>
          
          <div v-if="type" class="subtitle-2 white--text">
            <div v-for="book in results" :key="book.name" class="rounded-lg bg-blue text-white p-4 m-4 flex text-left">
              <div class="w-1/4">{{ book.name }}</div>
              <div class="ml-4 w-3/4">{{ book.description }}</div>
            </div>
          </div>
        </div>
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
  name: 'Test',
  components: {
    VueFuse
  },
  data() {
    return {
      query: '',
      drawer: false,
      type: false,
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
    },
    updateSearch() {
      this.type=true;
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