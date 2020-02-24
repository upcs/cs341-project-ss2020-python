<template>
  <v-app>
    <v-btn id="button1" @click="test">click me</v-btn>
  </v-app>
</template>

<script>
export default {
  name: "MapView",
  methods: {
    test() {
      this.$http.get("/foo").then((response) => {
        console.log(response.data)
      })
    }
  }
};
</script>

<style></style>
