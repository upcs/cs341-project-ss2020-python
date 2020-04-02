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
              <router-link to="/demo">
                <v-btn text id="header">Demo</v-btn>
              </router-link>

              <router-link to="/graph">
                <v-btn text id="header">Plant Graphs</v-btn>
              </router-link>

              <router-link to="/news">
                <v-btn text id="header">News</v-btn>
              </router-link>

              <router-link to="/info">
                <v-btn text id="header">Energy Info</v-btn>
              </router-link>

              <router-link to="/about">
                <v-btn text id="header">About Us</v-btn>
              </router-link>

              <router-link to="/contact">
                <v-btn text id="header">Contact Us</v-btn>
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
              
            </v-col>   
            <v-spacer></v-spacer>
          </v-row>
        </v-container>
      </v-app-bar>
      <v-navigation-drawer v-model="drawer" color="primary" right="right" app class="indigo">
        <p class="title white--text">Results for: '<strong>{{ query }}</strong>'</p>
        <!-- <v-textarea 
          v-model="textarea"
          background-color="white" 
          auto-grow="autoGrow" 
          name="searchResults"
          label="Search" 
          value="The Woodman set to work at once, and so sharp was his axe that the tree was soon chopped nearly through."
          outlined="outlined"
        ></v-textarea> -->
        <v-textarea
          outlined
          name="searchResults"
          auto-grow="autoGrow"
          background-color="white"
          value="The Woodman set to work at once, and so sharp was his axe that the tree was soon chopped nearly through."
        ></v-textarea>
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
export default {
  data() {
    return {
      query: '',
      drawer: false,
    }
  }
  // let options = {
  //   shouldSort: true,
  //   threshold: 0.6,
  //   location: 0,
  //   distance: 100,
  //   minMatchCharLength: 1,
  //   keys: [
  //     "title",
  //     "author.firstName"
  //   ]
  // };

  // var info = [{
  //   title: "Old Man's War Fiction",
  //   author: 'John X',
  //   tags: ['war']
  // }, {
  //   title: 'Right Ho Jeeves',
  //   author: 'P.D. Mans',
  //   tags: ['fiction', 'war']
  // }]
}
</script>