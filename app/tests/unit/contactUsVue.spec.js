import { mount, createLocalVue } from '@vue/test-utils'
import ContactUs from '@/views/ContactUs'
import vuetify from 'vuetify'
import Vue from 'vue'
import flushPromises from 'flush-promises';
import VueRouter from 'vue-router'

const app = require('../../srv/index.js');

async function getDefaultData(wrapper) {
  return new Promise(async(resolve, reject) => {
      var resutlt = await wrapper.vm.databaseCall();
      resolve(resutlt);
  });
}

Vue.use(vuetify)

const localVue = createLocalVue();
localVue.use(VueRouter)
const router = new VueRouter()

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
      wrapper = mount(ContactUs, {
        localVue,
        router,
        sync: false
      })
  });  

  it('testing the databaseCall function', async () => {
    wrapper.vm.message = "test message"
    wrapper.vm.FirstName = "George"
    wrapper.vm.LastName = "Clooney"
    wrapper.vm.email = "georgie@cloon.com"
    var result = await getDefaultData(wrapper);
    expect(result).toBe("done");  
  })

  it('tests redirect on submit', async () => {
    wrapper.find("#firstName").setValue("First")
    wrapper.find("#lastName").setValue("Last")
    wrapper.find("#emailAddress").setValue("first@last.com")
    wrapper.find("#messageField").setValue("hi there")

    await flushPromises();
    await wrapper.vm.submit()
   
    expect(wrapper.vm.$route.path).toBe('/thankyou')
  })
})