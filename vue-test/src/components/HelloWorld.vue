<template>
  <div class="homepage">
    <h1>{{ msg }}</h1>
    <p>
      
    </p>
    <h3>Portland Python Pollution</h3>
    
    <homepageSection title="Current News" description="Current news goes here" feature="News" showFeature=false></homepageSection>
    

    <h3>About Us</h3>
    <p> About us goes here </p>

    <h3>Our Vision</h3>
    <p> Our vision goes here </p>

    <button id="demoButton">Demo</button>

  </div>
</template>

<script>
import homepageSection from './HomepageSection.vue'

export default {
  name: 'homepage',
  props: {
    msg: String
  },
  components: {
    homepageSection
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1 {
    text-align: center;
}
h3 {
  margin: 40px 0 0;
}
</style>
