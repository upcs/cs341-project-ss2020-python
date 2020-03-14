## Sprint 3

### Travis CI
- Our project is now in correspondance with Travis CI framework. We added a .travis.yml file in our root directory.
- Also discovered an interactive testing tool 'watch' which can be used by adding '--watch' at the end of the "test:unit" line
- in the package.json file. 

### Contact Us page cleanup.
- More HTML modification for the contact us page for visual austhetic. 

## Sprint 2

### Vue
- Vue is now integrated as a frontend with Vuetify as the UI framework.
- Router between pages uses Vue's built in router, vue-router.

### Data Visualization
- The project uses ChartJS as a library to generate interactive bar graphs when given data.

### Geocoding
- Our data selection form allows the user to input any valid city. When submitted, the page uses a geocoding API that converts an address, city, or state into a latitude and longitude that we can pull corresponding data to.

## Sprint 1

### Website Design
Implementing html and css of the home page has started. In addition to this, the heat map page to display pollution and energy use of cities has also started to be developed.

### Database
A google MySQL database for the project has been established with associated storage. The database has filled tables for data about electricity prices, power plant emissions, and air pollutants across the United States. Sources for this can be found in the project's wiki.

### Frontend: Vue
After a week of investigation, we have decided on implementing Vue as a frontend framework to organize our html, css, and js files. It's main strength we found was the vast amount of user-made libraries. One is called BootstrapVue which contains component plugins for different premade html elements. Furthermore, we found Vuetify to use as a user interface framework to unify our pages style and intend to deploy in future releases.
