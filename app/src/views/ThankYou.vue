<template>
<div class="background">
    <div class="topnav"></div>
     <div class="container">
      <img id="bg" src="@/assets/images/background.jpeg"/>
      <div class="v-content__wrap">
            <section class="container container--fluid" id="user-profile">
              <div class="container fill-height fluid grid-list-x1">
                <div class="row justify-center">
                  <div class="col-md-10 col-14">
                    <div class="v-card--material pa-3 v-card v-sheet theme--light v-card--material--has-heading">
                      <div class="d-flex grow flex-wrap">
                        <div class="text-start v-card--material__heading my-n9 mb-n1 v-sheet theme--dark elevation-6 blue pa-7" style="width:100%;">
                          
                            <div id="ContactUs" class="font-weight-light" style="font-size: 30px;">Thank you!</div>
                            <div class="subtitle-1 font-weight-light">Your form has been submitted.</div>
                            <div class="py-2"></div>
              
                            <div class="flex xs12 md6" style = "padding: 0px 10px 0px;">
                              <h2 class="subheading white--text text-uppercase font-weight-medium mb-3">
                                Contact
                              </h2>
                              <div role="list" class="v-list transparent theme--light">
                                <div role="listitem">
                                  <div class="v-list__tile theme--light">
                                    <div class="v-list__tile__avatar">
                                      <div class="v-avatar primary" style="height: 40px;
                                      width: 40px;">
                                        <i aria-hidden="true" class="v-icon elevation-4
                                        mdi mdi-email-outline theme--light">
                                          
                                        </i>
                                      </div>
                                      <v-text class="white--text" style="padding: 0px 10px 0px;">PortlandPythonPollution@PPP.com</v-text>
                                    </div>

                                  </div>
                                  
                                  <div class="py-2"></div>
                                </div>
                                <div role="listitem">
                                  <div class="v-list__tile theme--light">
                                    <div class="v-list__tile__avatar">
                                      <div class="v-avatar primary" style="height: 40px;
                                      width: 40px;">
                                        <i aria-hidden="true" class="v-icon elevation-4
                                        mdi mdi-map-marker theme--light">
                                          
                                        </i>
                                      </div>
                                      <v-text class="white--text" style="padding: 0px 10px 0px;">North Portland</v-text>
                                    </div>
                                  
                                    <div class="py-2"></div>
                                  </div>
                                </div>
                                <div role="listitem">
                                  <div class="v-list__tile theme--light">
                                    <div class="v-list__tile__avatar text--white">
                                      <div class="v-avatar primary" style="height: 40px;
                                      width: 40px;">
                                        <i aria-hidden="true" class="v-icon elevation-4
                                        mdi mdi-phone theme--light">
                                        </i>
                                      </div>
                                      <v-text class="white--text" style="padding: 0px 10px 0px;">877-PPP-NOW</v-text>
                                    </div>
                                    
                                    <div class="py-2"></div>
                                  </div>
                                </div>
                              </div>
                            </div>    
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>
          </div>
     </div>
</div>
</template>

<script>
  export default {
    name: 'ThankYou'
  }
</script>