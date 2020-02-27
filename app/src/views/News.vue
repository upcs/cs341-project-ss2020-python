<template>
  
  <div :style="homeStyle">
    <v-card
    class="mx-auto"
    color="white"
    width=auto
    justify="center" 
    align="center"
  >
  <div class="display-2">Latest News About Energy</div>
    </v-card>
    <!-- <v-row justify="space-around">
      <v-icon @click="model--">mdi-minus</v-icon>
      {{ model }}
      <v-icon @click="model++">mdi-plus</v-icon>
    </v-row> -->
    <v-carousel height=40em>
    <v-carousel-item
      v-for="(item,i) in items"
      :key="i"
      :src="item.src"
      reverse-transition="fade-transition"
      transition="fade-transition"
    ></v-carousel-item>
  </v-carousel>
  </div>
</template>

<script>
  export default {
    name: 'News',
    data () {
      return {
        homeStyle:{
          // backgroundColor:"#008000"
        },
        header:{
          fontsize: "1.2em"
        },
        
        items: [
          {
            src: 'https://www.greenbiz.com/sites/default/files/styles/gbz_article_primary_breakpoints_kalapicture_screen-lg_2x/public/images/articles/featured/all-wind-power-electric-bus-trimet-1_0.jpg?itok=HNockPIt&timestamp=1581972705',
          },
          {
            src: 'https://images2.opb.org/c_limit%2Ch_1000%2Cq_90%2Cw_640/jeidah_dezurney_1581030480473.jpg',
          },
          {
            src: 'https://www.gannett-cdn.com/presto/2020/02/11/USAT/6ce0932a-830c-4b4a-9f4e-7b8bb7d0b8eb-03_XXX__JC30431.JPG?width=1320&height=880&fit=crop&format=pjpg&auto=webp',
          },
          {
            src: 'https://content.rollcall.com/wp-content/uploads/2020/02/nuclear-power.jpg?fit=1240,698',
          },
        ],
      }
    },
  }
</script>