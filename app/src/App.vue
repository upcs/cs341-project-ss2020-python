<template>
    <v-app>
      <div>

      <div class="flex flex-col pt-8">
          <VueFuse
          placeholder="Search Books of the Bible"
          event-name="results"
          :list="books"
          :keys="['name', 'description']"
          class="w-64 text-center h-8 border rounded-lg center"
        />

      </div>
      <div v-for="book in results" :key="book.name" class="rounded-lg bg-blue text-white p-4 m-4 flex text-left">
        <div class="w-1/4">{{ book.name }}</div>
        <div class="ml-4 w-3/4">{{ book.description }}</div>
      </div>
</div>
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
              <div>
              <div class="flex flex-col pt-8">
                  <VueFuse
                  placeholder="Search Books of the Bible"
                  event-name="results"
                  :list="books"
                  :keys="['name', 'description']"
                  class="w-64 text-center h-8 border rounded-lg center"
                />

              </div>
              <div v-for="book in results" :key="book.name" class="rounded-lg bg-blue text-white p-4 m-4 flex text-left">
                <div class="w-1/4">{{ book.name }}</div>
                <div class="ml-4 w-3/4">{{ book.description }}</div>
              </div>
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
        <div>
          <div class="flex flex-col pt-8">
              <VueFuse
              placeholder="Search Books of the Bible"
              event-name="results"
              :list="books"
              :keys="['name', 'description']"
              class="w-64 text-center h-8 border rounded-lg center"
            />

          </div>
          <div v-for="book in results" :key="book.name" class="rounded-lg bg-blue text-white p-4 m-4 flex text-left">
            <div class="w-1/4">{{ book.name }}</div>
            <div class="ml-4 w-3/4">{{ book.description }}</div>
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
      results: [],
      books: [
        {
          name: 'Genisis',
          description: 'Genesis answers two big questions: “How did God’s relationship with the world begin?” and “Where did the nation of Israel come from?”'
        }, {
          name: 'Exodus',
          description: 'God saves Israel from slavery in Egypt, and then enters into a special relationship with them.'
        }, {
          name: 'Leviticus',
          description: 'God gives Israel instructions for how to worship Him.'
        }, {
          name: 'Numbers',
          description: 'srael fails to trust and obey God, and wanders in the wilderness for 40 years.'
        }, {
          name: 'Deuteronomy',
          description: 'Moses gives Israel instructions (in some ways, a recap of the laws in Exodus–Numbers) for how to love and obey God in the Promised Land.'
        }, {
          name: 'Joshua',
          description: 'Joshua (Israel’s new leader) leads Israel to conquer the Promised land, then parcels out territories to the twelve tribes of Israel.'
        }, {
          name: 'Judges',
          description: 'Israel enters a cycle of turning from God, falling captive to oppressive nations, calling out to God, and being rescued by leaders God sends their way (called “judges”).'
        }, {
          name: 'Ruth',
          description: 'The book of Ruth tells a touching story of the love and devotion of an ancestor of David and Jesus Christ.'
        }, {
          name: '1 Samuel',
          description: 'Israel demands a king, who turns out to be quite a disappointment.'
        }, {
          name: '2 Samuel',
          description: 'David, a man after God’s own heart, becomes king of Israel.'
        }, {
          name: '1 Kings',
          description: 'The kingdom of Israel has a time of peace and prosperity under King Solomon, but afterward splits, and the two lines of kings turn away from God.'
        }, {
          name: '2 Kings',
          description: 'Both kingdoms ignore God and his prophets, until they both fall captive to other world empires.'
        }
      ]
    }
  },
  methods: {
    runSearch () {
      this.$search('John', this.books, { keys: ['name'] }).then(result => {
        this.results = result
      })
    }
  },
  mounted () {
    this.$on('results', results => {
      this.results = results
    })
  }
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
</style>