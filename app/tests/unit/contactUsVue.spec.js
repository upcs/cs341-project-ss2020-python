import { mount } from '@vue/test-utils'
import ContactUs from '@/views/ContactUs'
import vuetify from 'vuetify'
import Vue from 'vue'


const app = require('../../srv/index.js');

async function getDefaultData(wrapper) {
  return new Promise(async(resolve, reject) => {
      var resutlt = await wrapper.vm.databaseCall();
      resolve(resutlt);
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
    expect(result).toBe("done");  
  })
})