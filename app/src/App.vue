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

          <v-col cols="4">
            <router-link to="/demo">
              <v-btn text>Demo</v-btn>
            </router-link>

            <router-link to="/news">
              <v-btn text>News</v-btn>
            </router-link>

            <router-link to="/info">
              <v-btn text>About Us</v-btn>
            </router-link>

            <router-link to="/contact">
              <v-btn text>Contant Us</v-btn>
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
</style>