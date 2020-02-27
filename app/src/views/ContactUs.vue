<template>
    <div class="v-content__wrap">
      <div id="core-view">
        <div class="container fill-height fluid grid-list-x1">
          <div class="layout justify-center wrap">
            <div class="flex xs12 md8">
              <div class="v-card v-sheet theme--light elevation-2" style="margin-bottom: 24px; margin-top: 48px;">
                <div class="v-offset" style="top: -24px; margin-bottom: -24px;">
                  <div class="v-card--material__header v-card v-sheet theme--dark elevation-2 green elevation-10">
                    <span>
                      <h4 class="title font-weight-light mb-2">Contact Us</h4>
                      <p class="category font-weight-thing">Fill Entries Below</p>
                    </span>
                  </div>
                </div>
                <div class="v-card__text">
                  <form novalidate="novalidate" class="v-form">
                    <div class="container py-0">
                      <div class="layout wrap">

                        <div class="flex xs12 md4">
                          <div class="v-input purple-input v-text-field theme--light">
                            <div class="v-input__control">
                              <div class="v-input__slot">
                                ::before
                                <div class="v-text-field__slot">
                                  <label aria-hidden="true" class="v-label theme--light" style="left: 0px; right: auto; position: absolute;">
                                    First Name</label>
                                  <input aria-label="User Name" type="text">
                                </div>
                                ::after                  
                              </div>
                              <div class="v-text-field__details">
                                <div class="v-messages theme--light">
                                  <div class="v-messages__wrapper"></div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>

                        <div class="flex xs12 md4">
                          <div class="v-input purple-input v-text-field theme--light">
                            <div class="v-input__control">
                              <div class="v-input__slot">
                                ::before
                                <div class="v-text-field__slot">
                                  <label aria-hidden="true" class="v-label theme--light" style="left: 0px; right: auto; position: absolute;">
                                    Last Name</label>
                                  <input aria-label="User Name" type="text">
                                </div>
                                ::after                  
                              </div>
                              <div class="v-text-field__details">
                                <div class="v-messages theme--light">
                                  <div class="v-messages__wrapper"></div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>

                        <div class="flex xs12 md4">
                          <div class="v-input purple-input v-text-field theme--light">
                            <div class="v-input__control">
                              <div class="v-input__slot">
                                ::before
                                <div class="v-text-field__slot">
                                  <label aria-hidden="true" class="v-label theme--light" style="left: 0px; right: auto; position: absolute;">
                                    Email Address</label>
                                  <input aria-label="User Name" type="text">
                                </div>
                                ::after                  
                              </div>
                              <div class="v-text-field__details">
                                <div class="v-messages theme--light">
                                  <div class="v-messages__wrapper"></div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>

                        <div class="flex xs12">
                          <div class="v-input purple-input v-textarea v-text-field theme--light">
                            <div class="v-input__control">
                              <div class="v-input__slot">
                                <div class="v-text-field__slot">
                                  <label aria-hidden="true" class="v-label theme--light" style="left: 0px; right: auto; position: absolute;">
                                    Message
                                  </label>
                                  <textarea aria-label="About Me" rows="5" style="margin-top: 0px; margin-bottom: 0px; height: 76px;">
                                  </textarea>
                                </div>
                              </div>
                                <div class="v-text-field__details">
                                  <div class="v-messages theme--light">
                                    <div class="v-messages__wrapper">
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>

                        <div class="flex xs12 text-xs-right">
                          <button type="button" class="mx-0 font-weight-light v-btn theme--dark success">
                            ::before
                            <div class="v-btn__content">
                            Send Info</div>                   
                          </button>
                        </div>

                      </div>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
</template>

<script>
  export default {
    name: 'ContactUs',
  }
</script>