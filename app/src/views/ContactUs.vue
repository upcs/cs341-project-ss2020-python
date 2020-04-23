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
                      <div id="ContactUs" class="font-weight-light" style="font-size: 30px;">Contact Us</div>
                      <div class="subtitle-1 font-weight-light">Fill Entries Below</div>
                  </div>
                </div>
                <div class="v-card__text">
                  <ValidationObserver ref="observer" v-slot="{ validate, reset }">
                  <v-form id="contact" ref="form" v-model="valid" :lazy-validation="lazy">
                    <div class="container py-0">
                      <div class="layout wrap">
                        <div class="flex xs12 md4">
                          <div class="v-input purple-input v-text-field theme--light">
                            <div class="v-input__control">
                              <ValidationProvider v-slot="{ errors }" name="Name" rules="required|max:20">
                                <v-text-field 
                                  label="First Name" 
                                  v-model="FirstName"
                                  :counter="20"
                                  :rules="nameRules"
                                  required>
                                </v-text-field>
                              </ValidationProvider>
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
                              <ValidationProvider v-slot="{ errors }" name="Last" rules="required|max:20">
                                <v-text-field 
                                  label="Last Name" 
                                  v-model="LastName"
                                  :counter="20"
                                  :rules="nameRules"
                                  required>
                                </v-text-field>
                              </ValidationProvider>
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
                              <ValidationProvider v-slot="{ errors }" name="email" rules="required|email">
                                <v-text-field 
                                  label="Email Address" 
                                  v-model="email"
                                  :rules="emailRules"
                                  required>
                                </v-text-field>
                              </ValidationProvider>
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
                                  <label for="input-222" class="v-label v-label--active theme--light" style="left: 0px; right: auto; position: absolute; font-size: 22px;">Message</label>
                                  <textarea v-model="message" aria-label="About Me" rows="5" style="margin-top: 0px; margin-bottom: 0px; height: 76px;">
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
                        <div class="text-right col col-12">
                          <v-btn
                            :loading="isLoading"
                            :disabled="!valid" 
                            rounded
                            class="mr-0 v-btn v-btn--contained theme--light v-size--default dark">
                            <span class="v-btn__content" v-on:click="submit">
                            Send Info</span>               
                          </v-btn>
                        </div>
                      </div>
                    </div>
                  </v-form>
                  </ValidationObserver>
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

<style scoped>
  .flex.xs12{
  flex-basis: 100%;
  -webkit-box-flex: 0;
  flex-grow: 0;
  max-width: 100%;
}
element.style {
    margin-bottom: 24px;
    margin-top: 48px;
}
:after, :before {
  -webkit-box-sizing: inherit;
    /* box-sizing: inherit; */
}
</style>

<script>
  import { required, email, max } from 'vee-validate/dist/rules'
  import { extend, ValidationObserver, ValidationProvider, setInteractionMode } from 'vee-validate'
  setInteractionMode('eager')

  extend('required', {
    ...required,
    message: '{_field_} can not be empty',
  })
  extend('max', {
    ...max,
    message: '{_field_} may not be greater than {length} characters',
  })
  extend('email', {
    ...email,
    message: 'Email must be valid',
  })

  export default {
    name: 'ContactUs',
    components: {
      ValidationProvider,
      ValidationObserver,
    },
    data () {
      return {
        valid: true,
        FirstName: '',
        nameRules: [
        v => !!v || 'Name is required',
        v => (v && v.length <= 20) || 'Name must be less than 10 characters',
        ], 
        LastName: '',
        email: '',
        emailRules: [
        v => !!v || 'E-mail is required',
        v => /.+@.+\..+/.test(v) || 'E-mail must be valid',
        ],
        message: '',
        isLoading: false,
      }
    }, 
    methods: {
      async submit(){
        this.isLoading = true;
        await this.$nextTick()
        console.log('Has reached submit. ')
        await this.databaseCall();
        this.$router.push("/thankyou")
        this.isLoading = false;
      },
      validate (){
        this.$refs.form.validate()
      },
      reset () {
        this.$refs.form.reset()
      },
      resetValidation (){
        this.$refs.form.resetValidation()
      },
      clear () {
        this.FirstName = ''
        this.LastName = ''
        this.email = ''
        this.$refs.observer.reset()
      },
      databaseCall: async function(){
        console.log("Database was called. ")
        var infoObj = {
          mes : this.message,
          first : this.FirstName,
          last : this.LastName,
          email : this.email
        };
        var retVal = "notdone";
        window.$ = require('jquery');
        await window.$.post(process.env.VUE_APP_ROOT_API + '/contactUsSQL', infoObj, function(){
          console.log("sent the post in contact us");
          retVal = "done";
        });
        return(retVal);
        }
      }
  }
  
</script>