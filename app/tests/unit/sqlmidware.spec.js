/**
 * ensures that sql midware post function is functioning
 */

const $ = require('jquery');
const midWare = require('../../srv/javascript/sqlMidWare.js');
const app = require('../../srv/index.js');

function getCoalData() {
    return new Promise((resolve, reject) => {
        //use a dummied up JSON 
        $.post(process.env.VUE_APP_ROOT_API + '/sqlMidWare', {
            'distance': 100,
            'plant': 'coal',
            longitude: -122.6741949,
            latitude: 45.5202471,
            metric: "CO2 Emission Rate (lb/MWh)"
        }, function (responseData) {

            var resData = parseFloat(responseData.average[0].average);
            //resData is what the test will check
            resolve(resData);
        }
        );
    });
}

function getNuclearData() {
    return new Promise((resolve, reject) => {
        //use a dummied up JSON 
        $.post(process.env.VUE_APP_ROOT_API + '/sqlMidWare', {
            distance: 100,
            plant: 'nuclear',
            longitude: -122.6741949,
            latitude: 45.5202471,
            metric: "CO2 Emission Rate (lb/MWh)"
        }, function (responseData) {

            var resData = parseFloat(responseData.average[0].average);
            //resData is what the test will check
            resolve(resData);
        }
        );
    });
}

function getGasData() {
    return new Promise((resolve, reject) => {
        //use a dummied up JSON 
        $.post(process.env.VUE_APP_ROOT_API + '/sqlMidWare', {
            distance: 100,
            plant: 'natural gas',
            longitude: -122.6741949,
            latitude: 45.5202471,
            metric: "CO2 Emission Rate (lb/MWh)"
        }, function (responseData) {

            var resData = parseFloat(responseData.average[0].average);
            //resData is what the test will check
            resolve(resData);
        }
        );
    });
}

function getWaterData() {
    return new Promise((resolve, reject) => {
        //use a dummied up JSON 
        $.post(process.env.VUE_APP_ROOT_API + '/sqlMidWare', {
            distance: 100,
            plant: 'hydroelectric',
            longitude: -122.6741949,
            latitude: 45.5202471,
            metric: "CO2 Emission Rate (lb/MWh)"
        }, function (responseData) {

            var resData = parseFloat(responseData.average[0].average);
            //resData is what the test will check
            resolve(resData);
        }
        );
    });
}

function getOilData() {
    return new Promise((resolve, reject) => {
        //use a dummied up JSON 
        $.post(process.env.VUE_APP_ROOT_API + '/sqlMidWare', {
            distance: 100,
            plant: 'oil',
            longitude: -122.6741949,
            latitude: 45.5202471,
            metric: "CO2 Emission Rate (lb/MWh)"
        }, function (responseData) {
            var resData = parseFloat(responseData.average[0].average);
            //resData is what the test will check
            resolve(resData);
        }
        );
    });
}

function getCoalPowerData() {
    return new Promise((resolve, reject) => {
        //use a dummied up JSON 
        $.post(process.env.VUE_APP_ROOT_API + '/sqlMidWare', {
            distance: 100,
            plant: 'coal',
            longitude: -122.6741949,
            latitude: 45.5202471,
            metric: "annual net power (mwh)"
        }, function (responseData) {
            var resData = parseFloat(responseData.average[0].average);
            //resData is what the test will check
            resolve(resData);
        }
        );
    });
}

function getRoot() {
    return new Promise((resolve, reject) => {
        //use a dummied up JSON 
        $.get(process.env.VUE_APP_ROOT_API + '/sqlMidWare', {
        }, function (responseData) {

            var resData = parseFloat(responseData[0].YEAR);
            //resData is what the test will check
            resolve(resData);
        }
        );
    });
}

describe('sqlMidWare api calls', () => {

    let server;

    beforeAll(() => {
        server = app.listen(3000);
    });

    afterAll(() => {
        server.close();
    });

    test('Coal emissions', () => {
        return expect(getCoalData()).resolves.toBeGreaterThan(2484);
    });
    
    test('Nuclear emissions', () => {
        return expect(getNuclearData()).resolves.toBe(NaN);
    });
    
    test('Natural Gas emissions', () => {
        return expect(getGasData()).resolves.toBeGreaterThan(900);
    });
    
    test('Oil emissions', () => {
        return expect(getOilData()).resolves.toBeGreaterThan(1900);
    });
    
    test('Hydroelectric emissions', () => {
        return expect(getWaterData()).resolves.toBe(NaN);
    });
    
    test('Coal power', () => {
        return expect(getCoalPowerData()).resolves.toBeGreaterThan(5367300);
    });
    
    test('root GET request', () => {
        return expect(getRoot()).resolves.toBe(2018);
    });

});