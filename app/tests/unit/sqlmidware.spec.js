/**
 * ensures that sql midware post function is functioning
 */

const $ = require('jquery');


function getDefaultData() {
    return new Promise((resolve, reject) => {
        //use a dummied up JSON 
        $.post('http://localhost:3000/sqlMidWare', {
            distance: 100,
            'city': 'Portland',
            'plant': 'coal',
            longitude: -122.7,
            latitude: 45.5
        }, function (responseData) {

            var resData = parseFloat(responseData[0].avgCO2);
            //resData is what the test will check
            resolve(resData);
        }
        );
    });

}

test('test dbquery for /dbms', () => {
    return expect(getDefaultData()).resolves.toBeGreaterThan(100);
});