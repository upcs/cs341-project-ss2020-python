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

          <v-col cols="5">
            <router-link to="/graph">
              <v-btn text id="header">Plant Graphs</v-btn>
            </router-link>

            <router-link to="/news">
              <v-btn text id="header">News</v-btn>
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
            ></v-text-field>
          </v-col>
          
          <v-spacer></v-spacer>
        </v-row>
      </v-container>
    </v-app-bar>

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