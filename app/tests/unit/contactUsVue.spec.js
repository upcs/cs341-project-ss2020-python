import { mount, createLocalVue, shallowMount } from '@vue/test-utils'
import ContactUs from '@/views/ContactUs'
import vuetify from 'vuetify'
import VueRouter from 'vue-router'
import Vue from 'vue'

//const main = require('../../src/main.js');
const $ = require('jquery');
const app = require('../../srv/index.js');
const localVue = createLocalVue()
localVue.use(VueRouter)
const router =  new VueRouter()

describe('ContactUs', () => {

  let server;
  
  beforeAll(() => {
      server = app.listen(3000);
  });

  afterAll(() => {
      server.close();
  });

  let wrapper;
  beforeEach(() => { 
      Vue.use(vuetify)
      wrapper = mount(ContactUs, {
        //localVue,
        stubs: ['router-link']
        //router
      })
  });  

  it('testing the databaseCall function', async () => {
    wrapper.vm.message = "test message"
    wrapper.vm.FirstName = "George"
    wrapper.vm.LastName = "Clooney"
    wrapper.vm.email = "georgie@cloon.com"
    var result = await wrapper.vm.databaseCall();
    expect(result).toBe("done");  
  })
})