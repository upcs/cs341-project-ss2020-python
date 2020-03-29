


<template>
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
                  <form id = "contact" novalidate="novalidate" class="v-form">
                    
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
                                  :error-messages="errors"
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
                                  :error-messages="errors"
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
                                  :error-messages="errors"
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
                            :disabled="!valid" 
                            type="button" 
                            @click="submit" 
                            v-on:click="validateForm" 
                            class="mr-0 v-btn v-btn--contained theme--dark v-size--default blue"
                            >
                            <router-link to="/about">
                            <span class="v-btn__content">
                            Send Info</span>
                            </router-link>                   
                          </v-btn>
                        </div>
                        
                      </div>
                    </div>
                  </form>
                  </ValidationObserver>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
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
/*
.v-text-field>.v-input__control>.v-input__slot:after,
.v-text-field>.v-input__control>.v-input__slot:before{
  bottom: -1px;
  content: "";
  left: 0;
  position: absolute;
  transition: .3s
    cubic-bezier(.25, .8, .5, 1);
  width: 100%;
}
*/
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
        LastName: '',
        email: '',
        message: '',
        route: '/about'
      }
    }, 
    methods: {
      async submit(){
        const isValid = await this.$refs.observer.validate();
        
        //We only want to send to if its true. 
        if(isValid){
          this.databaseCall();
          alert("Thank you! Your comment was submitted.")
        }
        else{
          //do nothing
          alert("Could not submit.")
        }
          
      },
      reset () {
        this.$$refs.form.reset()
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
      //TODO: Use this method for conditions on the message part of the page. 
      validateForm: function (){
        alert("Has reached validateForm")
        var text = document.getElementById('ContactUs');
        var text2 = JSON.stringify(text)
        var text3 = JSON.parse(text2)
        alert(text3)
        alert("did it work?")
        // var mes = this.message;
        // alert(mes) //And this works. 
        },
      databaseCall: async function(){
        var infoObj = {
          mes : this.message,
          first : this.FirstName,
          last : this.LastName,
          email : this.email
        };
        
    
        window.$.post(process.env.VUE_APP_ROOT_API + '/contactUsSQL', infoObj, function(){
          //no need to respond
        });
      }
  }
}
</script>