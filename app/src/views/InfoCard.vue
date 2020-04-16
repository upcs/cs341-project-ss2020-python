<template>
  <div>
        <div
          class="mx-auto div-container"
        >
        <v-img
          height="400px"
          width="600px"
          v-bind:src="imgSrc"
          >
        </v-img>
          <h1 class="section-title">{{ title }}</h1>
          <div>
              {{ mainText }}
          </div>
        </div>
  </div>
</template>
<script>
export default {
    name:"InfoCard",
    props: {
        title: String,
        mainText: String,
        imgSrc: String
    }
}
</script>
<style scoped>
.div-container {
  width: 600px;
  padding: 10px;
  border-radius: 10px;
  border: 1px solid black;
  background: white;
}

.section-title {
    width: 102%;
    border-bottom: 2px solid black;
}
</style>