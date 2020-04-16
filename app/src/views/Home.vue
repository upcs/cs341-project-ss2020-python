<template>
  <div class="background">
    <div class="topnav"></div>
     <div class="container">
      <img id="bg" src="@/assets/images/background.jpeg"/>
      <img id="logo" src="@/assets/images/logo.png"/>
      <div class="aboutUs ">
        <div style="height: 93.4vh">
          <div class="row">
            <div class="col-md-4 col-12">
              <div class="py-12 px-4 v-card v-card--flat v-sheet theme--light grey lighten-5">
                <div class="v-card__title justify-center font-weight-black text-uppercase">
                  Vibrant Community
                </div>
                <div class="v-card__text subtitle-1">
                  This is about some bullshit that i will tlak about later. 
                </div>
              </div>
            </div>
            <div class="col-md-4 col-12">
            </div>
            <div class="col-md-4 col-12">
            </div>
          </div>
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