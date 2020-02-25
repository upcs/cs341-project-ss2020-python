<template>

<div data-app="true" class="v-application v-application--is-ltr theme--light" id="app">
    <div class="v-application--wrap">
    <main class="v-content" style="padding: 0px;" data-booted="true">
    <div class="v-content__wrap">
        <section>
            <div class="v-parallax" style="height: 500px;">
                <div class="v-parrallax__image-container">
                    <img src="@/assets/images/pollution1.jpg" alt class="v-parallax__image" style="display: block; opacity: 1; transform: translate(-50%, 400px);">
                </div>
                <div class="v-parallax__content">
                    <div class="layout white--text column align-center justify-center">
                        <h1 class="white--text mb-2 display-4 text-center">About Us</h1>
                    </div>
                </div>
            </div>
        </section>
        <v-row justify="center" align="center">
            <img src="@/assets/images/oilPump.png">
            <div class="flex xs12 sm4">
                <div class="transparent v-card v-card--flat v-sheet theme--light">
                <v-card-text class="subtitle-1">
                    
                    This web application was designed by a group of software engineers that have a vision of a world that uses clean methods of energy production. As we acknowledge the state of the world we live in, it is important to pursue change as quickly as possible. Pollution, climate change, and greenhouse gases are just a few negative effects that old school energy production methods have. These include burning fossil fuels, solar panels, hydroelectric energy, nuclear energy and many more. As a group of software engineers our goal is to be able to collect current data on the status of energy production and their impact on the environment via different cities. We hope to make this web application that may educate people on the importance of the environment and gain support for using clean methods of energy production in order to undo the damage to our planet. Join us and pursue this future with us!
                    
                </v-card-text>
                </div>
            </div>
            <img src="@/assets/images/cartoonEnergy.png">
            <img src="@/assets/images/future.jpg">
        </v-row>
    </div>
    </main>
    </div>
</div>

</template>

<script>
//External Citation to the above code. 
//https://github.com/vuetifyjs/parallax-starter
  export default {
    name: 'AboutUs',
  }
</script>