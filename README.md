# Portland Python Pollution
[![Build Status](https://travis-ci.org/upcs/cs341-project-ss2020-python.svg?branch=master)](https://travis-ci.org/upcs/cs341-project-ss2020-python)
[![Codecov Coverage](https://img.shields.io/codecov/c/github/upcs/cs341-project-ss2020-python/master.svg?style=flat-square)](https://codecov.io/gh/upcs/cs341-project-ss2020-python/)


[http://python-portland-pollution.appspot.com/](http://python-portland-pollution.appspot.com/)

## Sprint 4

### Summary of Completed Features

### Story Acceptance Tests

#### Story Acceptance Test 1: This user story describes the contact us page web feature.
- Brian has spent some time using the 'Plant Graphs' section of our application. He than decides he wants to contact the authors of this application. He clicks on Contact Us. He fills all the entries and clicks 'Send Info'. He is notified that his information was sent succesfully. 

#### Story Acceptance Test 2: This user story describes the News page web feature. 
- As a stakeholder, Margaret wants to be mindful about which energy companies to invest in. She wants to be able to profit on the long term but also has her morals set around the quality of the enviornment. After using our Graphing feature, Margaret navigates to the 'News' page and is greeted with several external articles that can provide her with more information about what she is looking for. She clicks on an article about the benefits of Nuclear energy and is sent to the source. 

#### Story Acceptance Test 3: This user story describes the Plant Graphs web feature. 
- Daniel is curious about the ecological impact of different cities. He navigates to our 'Plant Graphs' page and notices the 'Visualization Options' and proceeds to modify them. He chooses a distance of 200 miles, chooses Portland and Medford as two cities to compare. Under 'Plant Type' he chooses 'Oil' and under 'Metrics' he chooses 'CO2', and 'Annual Net Power'. Lastly, under 'X Axis' he chooses city. Finally, he clicks on 'Create Graph' and a detailed bar graph appears showing the desired statistics of Portland and Medford. 

#### Story Acceptance Test 4: This user story describes the Plant Graphs web feature. 
- Jackie wants to learn about all types of energy production in her city. She navigates to our 'Plant Graphs' page for our web application and sets the distance to 150, types 'Vancouver' as her city, checks all plant types, chooses 'CO2 Emmissions Rate' and 'Annual Net Power' for both her parameters and chooses the X Axis to be the city. She clicks on 'Create Graph'. The user displays all graphs under the x-axis to visualize all plant types with a color coded bar graph is displayed that shows the metric level for each plant type chosen. The different colors reflect the different plant types.

#### Story Acceptance Test 5: This user story describes user interaction with a graph
- Kelly wishes to examine the graph report when comparing Portland and Seattle. She selects all plant types in 100 miles of each city. Then, she clicks on the Annual Net Power as the parameter to show on the Y axis, clicks on plant type to show on the X axis, and finally clicks on create graph. The graph pops up seconds later with five columns of plants and with two data-sets colored for the two cities. Pondering about the energy production of coal in Seattle, Kelly moves her cursor over the corresponding bar on the graph and a pop-up immediately comes up with a value for Seattle's energy production for coal. Afterwards, she only wants to view Portland on the graph, so she clicks on the Seattle data-set label above the graph to remove it from the graph. Immediately, the Seattle data-set is hidden.

### Deployment
- The website is now deployed [here](http://python-portland-pollution.appspot.com/) on Google Cloud's App Engine.
- Using Travis-CI, the master branch will automatically be deployed to the cloud when updated. Travis-CI has a built in deployment option to Google's App Engine. In order to do so, a API was encrpyted into the repo and decryption keys were uploaded to travis.
- Because our project uses Vue as a frontend and Express as a backend, we had to run a build script to compile our Vue files into html and export them into the Express sever.

### Testing

## Sprint 3

### Data Visualization
- The "Plant Graphs" page now pulls live data from the user's query.
- Compare up two cities and two metrics for five different plant types!
- Future plans are to have a toggle option to sorting the data by plant type (current) and by city (future goal).

### Travis CI
- Our project is now in correspondance with Travis CI framework. We added a .travis.yml file in our root directory.
- Also discovered an interactive testing tool 'watch' which can be used by adding '--watch' at the end of the "test:unit" line
- in the package.json file. 
- Build Badage: [![Build Status](https://travis-ci.org/upcs/cs341-project-ss2020-python.svg?branch=master)](https://travis-ci.org/upcs/cs341-project-ss2020-python)

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
