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
                                  id="firstName"
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
                                  id="lastName"
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
                                  id="emailAddress"
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
                                  <v-textarea id="messageField" v-model="message" aria-label="About Me" rows="3">
                                  </v-textarea>
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
                          <v-dialog
                          v-model="dialog"
                          width="500"
                        >
                          <template v-slot:activator="{ on }">
                            <v-btn
                              rounded
                              v-on="on"
                              color="gray"
                            >
                              PRIVACY POLICY
                            </v-btn>
                          </template>

                          <v-card>
                            <v-card-title
                              class="headline grey lighten-2"
                              primary-title
                            >
                              Privacy Policy
                            </v-card-title>

                            <v-card-text>
                            <p>At Portland Python Pollution, accessible from http://python-portland-pollution.appspot.com, one of our main priorities is the privacy of our visitors. This Privacy Policy document contains types of information that is collected and recorded by Portland Python Pollution and how we use it.</p>

                            <p>If you have additional questions or require more information about our Privacy Policy, do not hesitate to contact us.</p>

                            <h2>General Data Protection Regulation (GDPR)</h2>
                            <p>We are a Data Controller of your information.</p>

                            <p>Portland Python Pollution legal basis for collecting and using the personal information described in this Privacy Policy depends on the Personal Information we collect and the specific context in which we collect the information:</p>
                            <ul>
                                <li>Portland Python Pollution needs to perform a contract with you</li>
                                <li>You have given Portland Python Pollution permission to do so</li>
                                <li>Processing your personal information is in Portland Python Pollution legitimate interests</li>
                                <li>Portland Python Pollution needs to comply with the law</li>
                            </ul>
                              
                            <p>Portland Python Pollution will retain your personal information only for as long as is necessary for the purposes set out in this Privacy Policy. We will retain and use your information to the extent necessary to comply with our legal obligations, resolve disputes, and enforce our policies. Our Privacy Policy was generated with the help of <a href="https://www.gdprprivacynotice.com/">GDPR Privacy Policy Generator</a> and the <a href="https://www.privacypolicygenerator.org">Privacy Policy Generator</a>.</p> 

                            <p>If you are a resident of the European Economic Area (EEA), you have certain data protection rights. If you wish to be informed what Personal Information we hold about you and if you want it to be removed from our systems, please contact us.</p>
                            <p>In certain circumstances, you have the following data protection rights:</p>
                            <ul>
                                <li>The right to access, update or to delete the information we have on you.</li>
                                <li>The right of rectification.</li> 
                                <li>The right to object.</li>
                                <li>The right of restriction.</li>
                                <li>The right to data portability</li>
                                <li>The right to withdraw consent</li>
                            </ul>

                            <h2>Log Files</h2>

                            <p>Portland Python Pollution follows a standard procedure of using log files. These files log visitors when they visit websites. All hosting companies do this and a part of hosting services' analytics. The information collected by log files include internet protocol (IP) addresses, browser type, Internet Service Provider (ISP), date and time stamp, referring/exit pages, and possibly the number of clicks. These are not linked to any information that is personally identifiable. The purpose of the information is for analyzing trends, administering the site, tracking users' movement on the website, and gathering demographic information.</p>




                            <h2>Privacy Policies</h2>

                            <P>You may consult this list to find the Privacy Policy for each of the advertising partners of Portland Python Pollution.</p>

                            <p>Third-party ad servers or ad networks uses technologies like cookies, JavaScript, or Web Beacons that are used in their respective advertisements and links that appear on Portland Python Pollution, which are sent directly to users' browser. They automatically receive your IP address when this occurs. These technologies are used to measure the effectiveness of their advertising campaigns and/or to personalize the advertising content that you see on websites that you visit.</p>

                            <p>Note that Portland Python Pollution has no access to or control over these cookies that are used by third-party advertisers.</p>

                            <h2>Third Party Privacy Policies</h2>

                            <p>Portland Python Pollution's Privacy Policy does not apply to other advertisers or websites. Thus, we are advising you to consult the respective Privacy Policies of these third-party ad servers for more detailed information. It may include their practices and instructions about how to opt-out of certain options. You may find a complete list of these Privacy Policies and their links here: Privacy Policy Links.</p>

                            <p>You can choose to disable cookies through your individual browser options. To know more detailed information about cookie management with specific web browsers, it can be found at the browsers' respective websites.</p>

                            <h2>Children's Information</h2>

                            <p>Another part of our priority is adding protection for children while using the internet. We encourage parents and guardians to observe, participate in, and/or monitor and guide their online activity.</p>

                            <p>Portland Python Pollution does not knowingly collect any Personal Identifiable Information from children under the age of 13. If you think that your child provided this kind of information on our website, we strongly encourage you to contact us immediately and we will do our best efforts to promptly remove such information from our records.</p>

                            <h2>Online Privacy Policy Only</h2>

                            <p>Our Privacy Policy applies only to our online activities and is valid for visitors to our website with regards to the information that they shared and/or collect in Portland Python Pollution. This policy is not applicable to any information collected offline or via channels other than this website.</p>

                            <h2>Consent</h2>

                            <p>By using our website, you hereby consent to our Privacy Policy and agree to its terms.</p>
                            </v-card-text>

                            <v-divider></v-divider>

                            <v-card-actions>
                              <v-spacer></v-spacer>
                              <v-btn
                                color="primary"
                                text
                                @click="dialog = false"
                              >
                                Close
                              </v-btn>
                            </v-card-actions>
                          </v-card>
                        </v-dialog>
                          <v-btn
                            :loading="isLoading"
                            :disabled="!valid" 
                            rounded
                            id="submitButton"
                            @click="submit"
                            class="ml-3 mr-0 v-btn v-btn--contained theme--light v-size--default dark">
                            <span class="v-btn__content">
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
        dialog: false,
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