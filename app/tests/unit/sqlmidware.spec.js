/**
 * ensures that sql midware post function is functioning
 */

const $ = require('jquery');


function getDefaultData() {
    return new Promise((resolve, reject) => {
        //use a dummied up JSON 
        $.post(process.env.VUE_APP_ROOT_API + '/sqlMidWare', {
            'distance': 100,
            'plant': 'coal',
            longitude: -122.7,
            latitude: 45.5,
            metric: "CO2 Emission Rate (lb/MWh)"
        }, function (responseData) {

            var resData = parseFloat(responseData.average[0].average);
            //resData is what the test will check
            resolve(resData);
        }
        );
    });

}

test('test dbquery for /dbms', () => {
    return expect(getDefaultData()).resolves.toBeGreaterThan(100);
});