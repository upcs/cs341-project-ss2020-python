<template>
  <v-container id="news" class="grey lighten-5" fluid>
    <v-row no-gutters>
      <div v-if="!smallWidth && mediumWidth" style="width: 2%"></div>
      <v-col style="max-width: 100%" cols="4">
        <v-card
          id="newsCard1"
          class="mx-auto"
          max-width="400"
          min-width="400"
        >
          <v-img
            class="white--text align-end"
            height="200px"
            src="https://www.greenbiz.com/sites/default/files/styles/gbz_article_primary_breakpoints_kalapicture_screen-lg_2x/public/images/articles/featured/all-wind-power-electric-bus-trimet-1_0.jpg?itok=HNockPIt&timestamp=1581972705"
          >
            <v-card-title></v-card-title>
          </v-img>

          <v-card-subtitle class="title font-weight-bold black--text">A US transit industry first: TriMet’s new electric buses powered entirely by wind</v-card-subtitle>

          <v-card-text class="text--primary font-italic">
            <div>TriMet partners with Portland General Electric for a cleaner future with official launch of zero-emissions bus technology</div>
            <br>
            <div>Trimet.org, April 16, 2019 by Roberta Altstadt</div>
          </v-card-text>
          <v-card-actions>
            <v-btn
              id="trimet-btn"
              color="orange"
              text
              v-on:click="changeLink('https://news.trimet.org/2019/04/a-us-transit-industry-first-trimets-new-electric-buses-powered-entirely-by-wind/')"
            >
              Explore
            </v-btn>
          </v-card-actions>
        </v-card>
      </v-col>
      <div v-if="mediumWidth && !smallWidth" style="width: 10%"></div>
      <v-col style="max-width: 100%" cols="4">
        <v-card
          id="newsCard2"
          class="mx-auto"
          max-width="400"
          min-width="400"
        >
          <v-img
            class="white--text align-end"
            height="200px"
            src="https://images2.opb.org/c_limit%2Ch_1000%2Cq_90%2Cw_640/jeidah_dezurney_1581030480473.jpg"
          >
            <v-card-title></v-card-title>
          </v-img>

          <v-card-subtitle class="title font-weight-bold black--text">Youth From Across Oregon Declare A Climate Emergency</v-card-subtitle>

          <v-card-text class="text--primary font-italic">
            <div>Youth from around the state declared at a Portland rally Thursday that Oregon is in the midst of a climate emergency. They called on government leaders to take action now and create policies that address climate change.</div>
            <br>
            <div>Oregon Public Broadcasting, February 6, 2020 by Monica Samayoa</div>
          </v-card-text>
          <v-card-actions>
            <v-btn
              color="orange"
              text
              v-on:click="changeLink('https://www.opb.org/news/article/oregon-youth-declare-climate-emergency/')"
            >
              Explore
            </v-btn>
          </v-card-actions>
        </v-card>
      </v-col>
      <v-col style="max-width: 100%" v-if="!mediumWidth" cols="4">
        <v-card
          id="newsCard3"
          class="mx-auto"
          max-width="400"
          min-width="400"
        >
          <v-img
            class="white--text align-end"
            height="200px"
            src="https://www.gannett-cdn.com/presto/2020/02/11/USAT/6ce0932a-830c-4b4a-9f4e-7b8bb7d0b8eb-03_XXX__JC30431.JPG?width=1320&height=880&fit=crop&format=pjpg&auto=webp"
          >
            <v-card-title></v-card-title>
          </v-img>

          <v-card-subtitle class="title font-weight-bold black--text">Wind energy gives American farmers a new crop to sell in tough times</v-card-subtitle>

          <v-card-text class="text--primary font-italic">
            <div>Across this central northern county, wind turbine blades slowly slice the cold air over winter-brown fields.</div>
            <br>
            <div>USA Today, February 16, 2020 by Elizabeth Weise</div>
          </v-card-text>
          <v-card-actions>
            <v-btn
              color="orange"
              text
              v-on:click="changeLink('https://www.usatoday.com/story/news/nation/2020/02/16/wind-energy-can-help-american-farmers-earn-money-avoid-bankruptcy/4695670002/')"
            >
              Explore
            </v-btn>
          </v-card-actions>
        </v-card>
      </v-col>
    </v-row>
    <v-row no-gutters>
      <div v-if="!smallWidth && mediumWidth" style="width: 2%"></div>
      <v-col style="max-width: 100%" cols="4">
        <v-card
          id="newsCard4"
          class="mx-auto"
          max-width="400"
          min-width="400"
        >
          <v-img
            class="white--text align-end"
            height="200px"
            src="https://content.rollcall.com/wp-content/uploads/2020/02/nuclear-power.jpg?fit=1240,698"
          >
            <v-card-title></v-card-title>
          </v-img>

          <v-card-subtitle class="title font-weight-bold black--text">Carbon-free nuclear power in a crisis just when it’s most needed</v-card-subtitle>

          <v-card-text class="text--primary font-italic">
            <div>Nuclear energy can produce carbon-free power, but struggles to sustain itself in competition with low-cost natural gas and renewables like solar and wind.</div>
            <br>
            <div>Roll Call, February 26, 2020 by Benjamin J. Hulac</div>
          </v-card-text>
          <v-card-actions>
            <v-btn
              color="orange"
              text
              v-on:click="changeLink('https://www.rollcall.com/2020/02/26/carbon-free-nuclear-power-in-a-crisis-just-when-its-most-needed/')"
            >
              Explore
            </v-btn>
          </v-card-actions>
        </v-card>
      </v-col>
      <div v-if="mediumWidth && !smallWidth" style="width: 10%"></div>
      <v-col style="max-width: 100%" cols="4">
        <v-card
          id="newsCard5"
          class="mx-auto"
          max-width="400"
          min-width="400"
        >
          <v-img
            class="white--text align-end"
            height="200px"
            src="https://www.commondreams.org/sites/default/files/styles/cd_large/public/views-article/climate_10.jpg?itok=X5GVFDPX"
          >
            <v-card-title></v-card-title>
          </v-img>

          <v-card-subtitle class="title font-weight-bold black--text">I Committed Civil Disobedience by Blocking Oil Trains in Portland, Oregon — and Won</v-card-subtitle>

          <v-card-text class="text--primary font-italic">
            <div>A few weeks ago, I showed the world that I am not a criminal, despite having been arrested and charged with first-degree criminal trespass.</div>
            <br>
            <div>Common Dreams, March 15, 2020 by Jan Zuckerman</div>
          </v-card-text>
          <v-card-actions>
            <v-btn
              color="orange"
              text
              v-on:click="changeLink('https://www.commondreams.org/views/2020/03/15/i-committed-civil-disobedience-blocking-oil-trains-portland-oregon-and-won')"
            >
              Explore
            </v-btn>
          </v-card-actions>
        </v-card>
      </v-col>
      <v-col style="max-width: 100%" v-if="!mediumWidth" cols="4">
        <v-card
          id="newsCard6"
          class="mx-auto"
          max-width="400"
          min-width="400"
        >
          <v-img
            class="white--text align-end"
            height="200px"
            src="https://img.washingtonpost.com/wp-apps/imrs.php?src=https%3A%2F%2Fwww.washingtonpost.com%2Fresizer%2FHqkao6_l8e9mgw8ANY_rrH3uxHo%3D%2F680x0%2Ffilters%3Aquality(70)%2Farc-anglerfish-washpost-prod-washpost%2Fpublic%2F2C6SAITEWYI6VCUOLRJTNMZHMA.jpg&w=908"
          >
            <v-card-title></v-card-title>
          </v-img>

          <v-card-subtitle class="title font-weight-bold black--text">The Energy 202: Students in Portland OR, Want Climate Justice Taught in Every Classroom</v-card-subtitle>

          <v-card-text class="text--primary font-italic">
            <div>Young climate activists have skipped school to demand urgent climate action across the globe. In Portland, OR, they’ve pushed for a change inside the classroom too, calling for the standard curriculum to address how climate change disproportionately affects low-income communities and communities of color.</div>
            <br>
            <div>Washington Post, March 13, 2020 by Paulina Firozi</div>
          </v-card-text>
          <v-card-actions>
            <v-btn
              color="orange"
              text
              v-on:click="changeLink('https://www.washingtonpost.com/news/powerpost/paloma/the-energy-202/2020/03/13/the-energy-202-students-in-portland-ore-want-climate-justice-taught-in-every-classroom/5e6a858f88e0fa101a747fbc/')"
            >
              Explore
            </v-btn>
          </v-card-actions>
        </v-card>
      </v-col>
    </v-row>
    <v-row v-if="mediumWidth" no-gutters>
      <div v-if="!smallWidth && mediumWidth" style="width: 2%"></div>
      <v-col style="max-width: 100%" cols="4">
        <v-card
          id="newsCard3Small"
          class="mx-auto"
          max-width="400"
          min-width="400"
        >
          <v-img
            class="white--text align-end"
            height="200px"
            src="https://www.gannett-cdn.com/presto/2020/02/11/USAT/6ce0932a-830c-4b4a-9f4e-7b8bb7d0b8eb-03_XXX__JC30431.JPG?width=1320&height=880&fit=crop&format=pjpg&auto=webp"
          >
            <v-card-title></v-card-title>
          </v-img>

          <v-card-subtitle class="title font-weight-bold black--text">Wind energy gives American farmers a new crop to sell in tough times</v-card-subtitle>

          <v-card-text class="text--primary font-italic">
            <div>Across this central northern county, wind turbine blades slowly slice the cold air over winter-brown fields.</div>
            <br>
            <div>USA Today, February 16, 2020 by Elizabeth Weise</div>
          </v-card-text>
          <v-card-actions>
            <v-btn
              color="orange"
              text
              v-on:click="changeLink('https://www.usatoday.com/story/news/nation/2020/02/16/wind-energy-can-help-american-farmers-earn-money-avoid-bankruptcy/4695670002/')"
            >
              Explore
            </v-btn>
          </v-card-actions>
        </v-card>
      </v-col>
      <div v-if="!smallWidth" style="width: 10%"></div>
      <v-col style="max-width: 100%" cols="4">
        <v-card
          id="newsCard6Small"
          class="mx-auto"
          max-width="400"
          min-width="400"
        >
          <v-img
            class="white--text align-end"
            height="200px"
            src="https://img.washingtonpost.com/wp-apps/imrs.php?src=https%3A%2F%2Fwww.washingtonpost.com%2Fresizer%2FHqkao6_l8e9mgw8ANY_rrH3uxHo%3D%2F680x0%2Ffilters%3Aquality(70)%2Farc-anglerfish-washpost-prod-washpost%2Fpublic%2F2C6SAITEWYI6VCUOLRJTNMZHMA.jpg&w=908"
          >
            <v-card-title></v-card-title>
          </v-img>

          <v-card-subtitle class="title font-weight-bold black--text">The Energy 202: Students in Portland OR, Want Climate Justice Taught in Every Classroom</v-card-subtitle>

          <v-card-text class="text--primary font-italic">
            <div>Young climate activists have skipped school to demand urgent climate action across the globe. In Portland, OR, they’ve pushed for a change inside the classroom too, calling for the standard curriculum to address how climate change disproportionately affects low-income communities and communities of color.</div>
            <br>
            <div>Washington Post, March 13, 2020 by Paulina Firozi</div>
          </v-card-text>
          <v-card-actions>
            <v-btn
              color="orange"
              text
              v-on:click="changeLink('https://www.washingtonpost.com/news/powerpost/paloma/the-energy-202/2020/03/13/the-energy-202-students-in-portland-ore-want-climate-justice-taught-in-every-classroom/5e6a858f88e0fa101a747fbc/')"
            >
              Explore
            </v-btn>
          </v-card-actions>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
  
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
        model: 0,
        mediumWidth: false,
        smallWidth: false,
      }
    },
    created() {
      window.addEventListener("resize", this.resizeHandler);
      this.resizeHandler();
    },
    destroyed() {
      window.removeEventListener("resize", this.resizeHandler);
    },
    methods: {
      changeLink: function(page) {
        window.open(page);
      },
      resizeHandler: function () {
        let w = window.innerWidth;
        if(w < 975) {
          this.smallWidth = true;
        }
        else if(w < 1300) {
          this.mediumWidth = true;
          this.smallWidth = false;
        }
        else {
          this.mediumWidth = false;
          this.smallWidth = false;
        }
      }
    }
  }
</script>