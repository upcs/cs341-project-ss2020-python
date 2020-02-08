<template>
  <div class="homepageSection">
    
    <h3> {{ title }}</h3>
    <p> {{ description }} </p>

    <button id="demoButton" v-if=showFeature> {{ feature }}</button>

  </div>
</template>

<script>
export default {
  name: 'homepageSection',
  props: {
    title: String,
    description: String,
    feature: String,
    showFeature: Boolean
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
  font-weight: bold;
}
</style>
