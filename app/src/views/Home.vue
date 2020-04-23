<template>
  <div class="background">
    <div class="topnav"></div>
     <div class="container">
      <img id="bg" src="@/assets/images/background.jpeg"/>
      <img id="logo" src="@/assets/images/logo.png"/>
      <div class="aboutUs ">
        <div style="top: 300px; min-width: 500px;">
          
          <main class="v-content" style="padding: 0;" 
            data-booted="true">
            <div class="features-border v-content__wrap">
            <section id="features" class="blue lighten-2">
              <div class="py-3"></div>
              <div class="container text-center">
                <h2 class ="display-2 font-weight-bold mb-3">
                  Features
                </h2>
                <div class="row">
                  <div class="col-md-4 col-12">
                    <a style="text-decoration:none" href="/graph">
                      <div class="py-12 px-4 v-card v-card--flat v-sheet theme--light blue lighten-4">
                        <img src="@/assets/images/bar.png" contain height="50px" width="50px"/>
                        <div class="v-card__title justify-center font-weight-black text-uppercase text-decoration:none">
                          Plant Graphs
                        </div>
                        <div class="v-card__text subtitle-1">
                          Analyze different nuclear, coal, hydroelectric, natural gas, and coal usage by major cities across America 
                        </div>
                      </div>
                    </a>
                  </div>
                  <div class="col-md-4 col-12">
                    <a style="text-decoration:none" href="/news">
                      <div class="py-12 px-4 v-card v-card--flat v-sheet theme--light blue lighten-4">
                        <img src="@/assets/images/news4.png" contain height="50px" width="50px"/>
                        <div class="v-card__title justify-center font-weight-black text-uppercase">
                          News
                        </div>
                        <div class="v-card__text subtitle-1">
                          Learn about the latest updates to Portland's energy use through local article publications
                        </div>
                      </div>
                    </a>
                  </div>
                  <div class="col-md-4 col-12">
                    <a style="text-decoration:none" href="/info">
                      <div class="py-12 px-4 v-card v-card--flat v-sheet theme--light blue lighten-4">
                        <img src="@/assets/images/energy.png" contain height="50px" width="50px"/>
                        <div class="v-card__title justify-center font-weight-black text-uppercase">
                          Energy Info
                        </div>
                        <div class="v-card__text subtitle-1">
                          Read about the world's energy use in comparison to understand the importance of renewable energy
                        </div>
                      </div>
                    </a>
                  </div>
                </div>
                <h2 class ="display-1 white--text font-weight-bold mb-3">
                  Read Our About Us Below!
                </h2>
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
  .router-link{
    text-decoration: none;
    border-style: none;
  }

 .features-border {
   border-radius: 3px;
   width: 100%;
   padding-left: 10%;
   padding-right: 10%;
   padding-top: 20%;
 }
</style>