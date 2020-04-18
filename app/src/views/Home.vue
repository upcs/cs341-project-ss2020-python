<template>
  <div class="background">
    <div class="topnav"></div>
     <div class="container">
      <img id="bg" src="@/assets/images/background.jpeg"/>
      <img id="logo" src="@/assets/images/logo.png"/>
      <div class="aboutUs ">
        <div style="height: 93.4vh">
          
          <main class="v-content" style="padding: 275px 375px 0px;" 
            data-booted="true">
            <div class="v-content__wrap">
            <section id="features" class="blue lighten-2">
              <div class="py-3"></div>
              <div class="container text-center">
                <h2 class ="display-2 font-weight-bold mb-3">
                  Features
                </h2>
                <div class="row">
                  <div class="col-md-4 col-12">
                    <div class="py-12 px-4 v-card v-card--flat v-sheet theme--light blue lighten-4">
                      <div class="v-card__title justify-center font-weight-black text-uppercase">
                        Plant Graphs
                      </div>
                      <div class="v-card__text subtitle-1">
                        This is about some bullshit that i will tlak about later. 
                      </div>
                    </div>
                  </div>
                  <div class="col-md-4 col-12">
                    <div class="py-12 px-4 v-card v-card--flat v-sheet theme--light blue lighten-4">
                      <div class="v-card__title justify-center font-weight-black text-uppercase">
                        News
                      </div>
                      <div class="v-card__text subtitle-1">
                        This is about some bullshit that i will tlak about later. 
                      </div>
                    </div>
                  </div>
                  <div class="col-md-4 col-12">
                    <div class="py-12 px-4 v-card v-card--flat v-sheet theme--light blue lighten-4">
                      <div class="v-card__title justify-center font-weight-black text-uppercase">
                        Energy Info
                      </div>
                      <div class="v-card__text subtitle-1">
                        This is about some bullshit that i will tlak about later. 
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="py-6"></div>
            </section>
            </div>
          </main>
          
        </div>
        <AboutUs> </AboutUs>
      </div>
    </div>
  </div>
</template>

<script>
import AboutUs from '@/views/AboutUs.vue'
export default {
  name: "Home",
  components: {
    AboutUs
  }
    };

</script>

<style lang="scss">
// .background{
//   background-color: #333;
//   text-align: center;
//   margin: var(0);
//   height: 100%;
//   width: auto;
//   background-repeat: no-repeat;
// }
// .container{
//   position: relative;
// }
body {
  margin: 0;
  padding: 0;
}
 #bg{
   height: 93vh;
   width: 100%;
   background-position: center;
   margin: 0;
   position: absolute;
  left: 0;
  top: 0;
  }
 #logo{
   position: absolute;
   margin-top: 1em;
   margin-left: 20em;
   margin-right: 25em;
  //  left: 20em;
  //  right: 20em;
   width: 38em;
   height: 8em;
 }
 .aboutUs {
   position: absolute;
   overflow-y: scroll;
   overflow-x: hidden;
   height: 93vh;
   width: 100%;
   left: 0;
  top: 0;
 }
</style>