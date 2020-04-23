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
        wrapper.vm.secondCity = true
        btn.trigger('click')
        console.log("Clicked submit button with empty inputs")
        expect(wrapper.find('#city1Err').exists()).toBe(true)
        console.log("City 1 parameter error created")
        expect(wrapper.find('#city2Err').exists()).toBe(true)
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
    wrapper = mount(GraphInfo, {
      data() {
        return {
          slider: 100,
          plant: ['Coal'],
          city: 'Portland',
          city2: 'Seattle',
          secondCity: true,
          sortBy: 'plant',
          selectedData: ['CO2 Emission Rate (lb/MWh)', 'Annual Net Power (MWh)']
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
    expect(wrapper.vm.chart_data.datasets[1].label).toBe("Portland-Annual Net Power (MWh)");
    expect(wrapper.vm.chart_data.datasets[2].label).toBe("Seattle-CO2 Emission Rate (lb/MWh)");
    expect(wrapper.vm.chart_data.datasets[3].label).toBe("Seattle-Annual Net Power (MWh)");
    expect(wrapper.vm.chart_data.datasets[0].yAxisID).toBe("CO2 Emission Rate (lb/MWh)");
    expect(wrapper.vm.chart_data.datasets[1].yAxisID).toBe("Annual Net Power (MWh)");
    expect(wrapper.vm.chart_data.datasets[2].yAxisID).toBe("CO2 Emission Rate (lb/MWh)");
    expect(wrapper.vm.chart_data.datasets[3].yAxisID).toBe("Annual Net Power (MWh)");
    expect(wrapper.vm.chart_data.datasets[0].stack).toBe("0");
    expect(wrapper.vm.chart_data.datasets[1].stack).toBe("1");
    expect(wrapper.vm.chart_data.datasets[2].stack).toBe("0");
    expect(wrapper.vm.chart_data.datasets[3].stack).toBe("1");
    expect(wrapper.vm.chart_data.datasets[0].data).toStrictEqual([2484.322]);
    expect(wrapper.vm.chart_data.datasets[1].data).toStrictEqual([5367383]);
    expect(wrapper.vm.chart_data.datasets[2].data).toStrictEqual([2484.322]);
    expect(wrapper.vm.chart_data.datasets[3].data).toStrictEqual([5367383]);
  })

  it ('test formatChartByCity', async () => {
    wrapper = mount(GraphInfo, {
      data() {
        return {
          slider: 100,
          plant: ['Coal'],
          city: 'Portland',
          city2: 'Seattle',
          selectedData: ['CO2 Emission Rate (lb/MWh)', 'Annual Net Power (MWh)'],
          sortBy: 'city',
          secondCity: true,
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

    await wrapper.vm.formPost();
    
    expect(wrapper.vm.chart_data.labels).toStrictEqual(["Portland", "Seattle"]);
    expect(wrapper.vm.chart_data.datasets[0].yAxisID).toBe("CO2 Emission Rate (lb/MWh)");
    expect(wrapper.vm.chart_data.datasets[1].yAxisID).toBe("Annual Net Power (MWh)");
    expect(wrapper.vm.chart_data.datasets[0].label).toBe("Coal-CO2 Emission Rate (lb/MWh)");
    expect(wrapper.vm.chart_data.datasets[1].label).toBe("Coal-Annual Net Power (MWh)");
    expect(wrapper.vm.chart_data.datasets[0].stack).toBe(0);
    expect(wrapper.vm.chart_data.datasets[1].stack).toBe(1);
    expect(wrapper.vm.chart_data.datasets[0].data).toStrictEqual([2484.322, 2484.322]);
    expect(wrapper.vm.chart_data.datasets[1].data).toStrictEqual([5367383, 5367383]);
  })

  it ('tests formPost error handling (invalid city)', async () => {
    wrapper = mount(GraphInfo, {
      data() {
        return {
          slider: 100,
          plant: ['Coal'],
          city: 'InvalidCity',
          city2: 'AlsoInvalid',
          selectedData: ['CO2 Emission Rate (lb/MWh)'],
          secondCity: true
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

    await wrapper.vm.formPost();

    expect(wrapper.find('#city1ErrNoResults').exists()).toBe(true)
    expect(wrapper.find('#city2ErrNoResults').exists()).toBe(true)
    expect(wrapper.vm.chart_data).toBeNull();
  })

  it ('tests formPost error handling (duplicate city)', async () => {
    wrapper = mount(GraphInfo, {
      data() {
        return {
          slider: 100,
          plant: ['Coal'],
          city: 'Portland',
          city2: 'Portland',
          secondCity: true,
          selectedData: ['CO2 Emission Rate (lb/MWh)'],
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

    await wrapper.vm.formPost();

    expect(wrapper.find('#city2ErrDuplicate').exists()).toBe(true);
    expect(wrapper.vm.chart_data.datasets.length).toBe(1);
  })

  it ('tests formPost no results handing', async () => {
    wrapper = mount(GraphInfo, {
      data() {
        return {
          slider: 10,
          plant: ['Nuclear'],
          city: 'Bend',
          selectedData: ['CO2 Emission Rate (lb/MWh)'],
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

    await wrapper.vm.formPost();

    expect(wrapper.find('#missingResults').exists()).toBe(true);
    expect(wrapper.vm.noDataMessage[0]).toStrictEqual(["Bend", "Nuclear", "CO2 Emission Rate (lb/MWh)"]);
  })

})