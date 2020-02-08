<template>
  <div id="app">
    <homepage msg="Portland Python Pollution Home Page"/>
  </div>
</template>

<script>
import homepage from './components/HelloWorld.vue'

export default {
  name: 'app',
  components: {
    homepage
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
