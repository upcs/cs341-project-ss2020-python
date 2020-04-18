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
                            
                          
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>
            <section class="container" id="subscribe" style="padding: 0px 200px 0px;">
              <div class="pa-3 v-card v-card--flat v-sheet v-sheet--title theme--light"
                style="background-color: rgba(203, 170, 92, .95); border-color: rgba(203, 170, 92, .95);">
                <div class="container grid-list-x1 pa-0">
                  <div class="layout wrap">
                    <div class="flex xs12 md6 offset-md1">
                      <h2 class="subheading text-uppercase font-weight-medium mb-3">
                        Contact
                      </h2>
                      <div role="list" class="v-list transparent theme--light">
                        <div role="listitem">
                          <div class="v-list__tile theme--light">
                            <div class="v-list__tile__avatar">
                              <div class="v-avatar primary" style="height: 40px;
                              width: 40px;">
                                <i aria-hidden="true" class="v-icon elevation-4
                                mdi mdi-email-outline theme--dark">
                                  
                                </i>
                              </div>
                            </div>
                            <div class="v-list__tile__title">EMAIL</div>
                            <div class="v-list__tile__sub-title">
                              PortlandPythonPollution@gmail.com</div>

                          </div>
                        </div>
                        <div role="listitem">
                          <div class="v-list__tile theme--light">
                            <div class="v-list__tile__avatar">
                              <div class="v-avatar primary" style="height: 40px;
                              width: 40px;">
                                <i aria-hidden="true" class="v-icon elevation-4
                                mdi mdi-map-marker theme--dark">
                                  
                                </i>
                              </div>
                            </div>
                            <div class="v-list__tile__title">ADDRESS</div>
                            <div class="v-list__tile__sub-title">
                              ISLAND OF NUNYA</div>

                          </div>
                        </div>
                        <div role="listitem">
                          <div class="v-list__tile theme--light">
                            <div class="v-list__tile__avatar">
                              <div class="v-avatar primary" style="height: 40px;
                              width: 40px;">
                                <i aria-hidden="true" class="v-icon elevation-4
                                mdi mdi-phone theme--dark">
                                </i>
                              </div>
                            </div>
                            <div class="v-list__tile__title">PHONE</div>
                            <div class="v-list__tile__sub-title">
                              (123) 456-7890</div>

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