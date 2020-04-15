import { mount } from '@vue/test-utils'
import ContactUs from '@/views/ContactUs'
import vuetify from 'vuetify'
import Vue from 'vue'


const app = require('../../srv/index.js');
const $ = require('jquery');

async function getDefaultData(wrapper) {
  return new Promise(async(resolve, reject) => {
      //use a dummied up JSON 
      var initTotal;
      await $.post(process.env.VUE_APP_ROOT_API + '/dbmsPostCatcher', {string: 'select count(*) as total from ContactUsData;'}, function(response) {
          console.log("init total in testing is ");
          console.log(response.res[0].total);
          initTotal = response.res[0].total;
      });

      await wrapper.vm.databaseCall();
      
      var finalTotal;
              
      await $.post(process.env.VUE_APP_ROOT_API + '/dbmsPostCatcher', {string: 'select count(*) as total from ContactUsData;'}, function(response) {
          console.log("post total in testing is ");
          console.log(response.res[0].total);
          finalTotal = response.res[0].total;
      });

      var diff = finalTotal - initTotal;
      resolve(diff);

  });

}

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
        stubs: ['router-link']
      })
  });  

  it('testing the databaseCall function', async () => {
    wrapper.vm.message = "test message"
    wrapper.vm.FirstName = "George"
    wrapper.vm.LastName = "Clooney"
    wrapper.vm.email = "georgie@cloon.com"
    var result = await getDefaultData(wrapper);
    expect(result).toBe(1);  
  })
})