import { mount, createLocalVue, shallowMount } from '@vue/test-utils'
import GraphInfo from '@/views/GraphInfo'
import vuetify from 'vuetify'
import VueRouter from 'vue-router'
import Vue from 'vue'
const app = require('../../srv/index.js');



describe('GraphInfo', () => {
    let wrapper;
    let server;

    beforeAll(() => {
      server = app.listen(3000)
    });
    
    beforeEach(() => { 
        Vue.use(vuetify)
        wrapper = mount(GraphInfo, {
            created() {
                this.$vuetify.lang = {
                  t: () => {},
                };
              this.$vuetify.theme = { dark: false };
              this.$vuetify.slots = { scopedSlots: ''}
            }
        });
    }); 

    afterAll(() => {
        server.close()
    });

  it('input fields render', () => {
        expect(wrapper.find('#graphInfo').exists()).toBe(true)
        expect(wrapper.find('#city1').exists()).toBe(true)
        expect(wrapper.find('#checkboxSC').exists()).toBe(true)
        expect(wrapper.find('#plantType').exists()).toBe(true)
        expect(wrapper.find('#dataParameter').exists()).toBe(true)
  })

  it('click submit with empty data creating error messages', () => {
        let btn = wrapper.find('button')
        btn.trigger('click')
        console.log("Clicked submit button with empty inputs")
        expect(wrapper.find('#city1Err').exists()).toBe(true)
        console.log("City 1 parameter error created")

        expect(wrapper.find('#plantErr').exists()).toBe(true)
        console.log("Plant type parameter error created")

        expect(wrapper.find('#param1Err').exists()).toBe(true)
        console.log("Metric parameter 1 error created")
  })

  it('check second city checkbox and check if input is rendered', () => {
      let btn = wrapper.find('#checkboxSC')
      btn.trigger('click')
      expect(wrapper.find('#city2').exists()).toBe(true)
      
  })

  it('testing the cityInfoGetter function to retrieve long and lat', async () => {
    wrapper.vm.city = "Portland"
    var latsAndLongs = await wrapper.vm.cityInfoGetter([wrapper.vm.city]);
    expect(latsAndLongs[0].lat != null).toBe(true)  
  })

  it('testing the formPost function', async () => {
    var latsAndLongs = await wrapper.vm.cityInfoGetter(['Portland']);

    wrapper = mount(GraphInfo, {
      data() {
        return {
          slider: 100,
          plant: ['Coal'],
          city: 'Portland',
          selectedData: 'CO2 Emission Rate (lb/MWh)'
        }
      },
      created() {
          this.$vuetify.lang = {
            t: () => {},
          };
        this.$vuetify.theme = { dark: false };
        this.$vuetify.slots = { scopedSlots: ''}
      }
    });

    await wrapper.vm.formPost() 
    //formPost should log finished chart_data local var
    expect(wrapper.vm.chart_data.datasets[0].label).toBe("Portland-CO2 Emission Rate (lb/MWh)");
    expect(wrapper.vm.chart_data.datasets[0].yAxisID).toBe("CO2 Emission Rate (lb/MWh)");
    expect(wrapper.vm.chart_data.datasets[0].stack).toBe("0");
    expect(wrapper.vm.chart_data.datasets[0].data).toStrictEqual([2484.322]);
  })
})