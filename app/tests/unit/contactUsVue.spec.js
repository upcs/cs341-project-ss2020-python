import { mount, createLocalVue, shallowMount } from '@vue/test-utils'
import ContactUs from '@/views/ContactUs'
import vuetify from 'vuetify'
import VueRouter from 'vue-router'
import Vue from 'vue'

//const main = require('../../src/main.js');
const $ = require('jquery');

describe('ContactUs', () => {
    let wrapper;
    beforeEach(() => { 
        Vue.use(vuetify)
        wrapper = mount(ContactUs);
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