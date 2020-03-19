## Sprint 3

### Travis CI
- Our project is now in correspondance with Travis CI framework. We added a .travis.yml file in our root directory.
- Also discovered an interactive testing tool 'watch' which can be used by adding '--watch' at the end of the "test:unit" line
- in the package.json file. 

### Contact Us page cleanup.
- More HTML modification for the contact us page for visual austhetic. 

### News Page
- For the news page we converted the formating from the carousel format to the tiles format in order to display multiple news articles at once.
- We were having issues tracking the button clicking of the carousel object and resorted to this solutio which turned out great. All of the news 
- articles on that page work and allow the user the "explore" to the news article.

### Search Bar
- We created a custom google search, but the formatting of vue makes it quite difficult to implement in comparison to standard html and css. 
- Unfortunately due to the time constraints, we were not able to find a quick solution for this and have to push this assignment to the next sprint. 

### Code Coverage
- CODECOV_TOKEN="c87a5e6c-9f16-49e7-883b-75f4b8026ea0"
- Report Badge Format: [![Codecov Coverage](https://img.shields.io/codecov/c/github/upcs/cs341-project-ss2020-python/master.svg?style=flat-square)](https://codecov.io/gh/upcs/cs341-project-ss2020-python/)

## Sprint 2

### Vue
- Vue is now integrated as a frontend with Vuetify as the UI framework.
- Routing between pages uses Vue's built in router, vue-router.

### Data Visualization
- The project uses ChartJS as a library to generate interactive bar graphs when given data.

### Geocoding
- Our data selection form allows the user to input any valid city. When submitted, the page uses a geocoding API that converts an address, city, or state into a latitude and longitude that we can pull corresponding data to.

### Dummy Demo
- A demo page with pre-filed data is implemented to show what our data visualization should look like in the beta release.
- This page will eventually be converted as a walk-through demonstration to show the user how our visualization tool.

### About Us page
- Created an about us page that provides information a brief paragraph about our vision of the future and our motivation for pursuing clean energy production methods.

### Contact Us
- Created a prototype contact us page that will allow users to enter their email information and an optional message describing their motivation, concerns, etc.
- Currently has no behavioral implementation, just basic visuals that will be implemented in a future sprint.

### News Page
- Created a skeleton for the news page which will have pictures and links to the latest news about Portland's energy news. Got the "carousel" template to work in order to click through different pictures. 

# Sprint 1 Updates

### Website Design
Implementing html and css of the home page has started. In addition to this, the heat map page to display pollution and energy use of cities has also started to be developed.

### Database
A google MySQL database for the project has been established with associated storage. The database has filled tables for data about electricity prices, power plant emissions, and air pollutants across the United States. Sources for this can be found in the project's wiki.

### Frontend: Vue
After a week of investigation, we have decided on implementing Vue as a frontend framework to organize our html, css, and js files. It's main strength we found was the vast amount of user-made libraries. One is called BootstrapVue which contains component plugins for different premade html elements. Furthermore, we found Vuetify to use as a user interface framework to unify our pages style and intend to deploy in future releases.
