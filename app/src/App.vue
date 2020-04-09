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
              <v-text-field
                label="Search"
                prepend-inner-icon="mdi-magnify"
                background-color="accent"
                rounded
                dense
                v-model="query"
                @click="drawer = !drawer"
              ></v-text-field>
              <div class="flex flex-col pt-8">
                <VueFuse
                  placeholder="Search for Energy"
                  event-name="results"
                  :list="blocks"
                  :keys="['name', 'description']"
                  class="w-64 text-center h-8 border rounded-lg center"
                />
              </div>
            </v-col>   
            <v-spacer></v-spacer>
          </v-row>
        </v-container>
      </v-app-bar>
      <v-navigation-drawer v-model="drawer" color="primary" right="right" app class="indigo">
        <p class="title white--text">Results for: '<strong>{{ query }}</strong>'</p>
        <v-textarea
          outlined
          name="searchResults"
          auto-grow="autoGrow"
          background-color="white"
          value="The Woodman set to work at once, and so sharp was his axe that the tree was soon chopped nearly through."
        ></v-textarea>
        <br>
        <br>
                <br>
                <br>
                <br>
                <br>
                <br>
         <div v-for="block in results" :key="block.name" class="rounded-lg bg-blue text-white p-4 m-4 flex text-left">
           <div>test1</div>
          <div class="w-1/4">{{ block.name }}</div>
          <div class="ml-4 w-3/4">{{ block.description }}</div>
        </div>
      </v-navigation-drawer>

      <v-content>
        <v-container fluid>
          <router-view></router-view>
        </v-container>
      </v-content>
    </v-app>
</template>

<style>
  #header{
    color: white;
  }
</style>

<script>
import VueFuse from './components/VueFuse.vue'
export default {
  name: 'Test',
  components: {
    VueFuse
  },
  data() {
    return {
      query: '',
      drawer: false,
      results: [],
      blocks: [
        {
          name: 'Per',
          description: 'Per Capita Energy Consumption'
        }, {
          name: 'Consume',
          description: 'How Much Energy Does the World Consume?'
        }, {
          name: 'Source',
          description: 'Global Energy Consumption by Source'
        }, {
          name: 'United',
          description: 'United States uses a mix of energy sources'
        }
      ]
    }
  },
  methods: {
    runSearch () {
      this.$search(this.name, this.books, {keys: ['name'] }).then(result => {
        this.results = result
      })
      }
    },
    created () {
      this.$on('results', results => {
        this.results = results
      })
    }
  }

</script>
<style scoped>
  .fuse{
    position: sticky;
    top: 18px;
    left: 70px;
  }
</style>