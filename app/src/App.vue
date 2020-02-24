<template>
  <v-app>
    <v-app-bar
      app
      absolute
      color="primary"
    >
      <router-link to="/">
        <v-img src="@/assets/images/logo_button.jpeg" max-width="250" max-heigh="50"></v-img>
      </router-link>

      <v-spacer></v-spacer>

      <router-link to="/demo">
        <v-btn text>Demo</v-btn>
      </router-link>

      <v-spacer></v-spacer>
      
      <router-link to="/news">
        <v-btn text>News</v-btn>
      </router-link>

      <v-spacer></v-spacer>

      <router-link to="/info">
        <v-btn text>About Us</v-btn>
      </router-link>

      <v-spacer></v-spacer>

      <router-link to="/contact">
        <v-btn text>Contant Us</v-btn>
      </router-link>

      <v-spacer></v-spacer>

      <v-text-field label="Search" prepend-icon="mdi-magnify"></v-text-field>
    </v-app-bar>

    <v-content>
      <v-container fluid>
        <router-view></router-view>
      </v-container>
    </v-content>
  </v-app>
</template>

<style lang="scss">
</style>