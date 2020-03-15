/**
 * ensures that dbms queries are functioning
 */
import { shallowMount } from '@vue/test-utils'
var dbms = require('../../srv/javascript/dbms');


function getDefaultData() {
    return new Promise((resolve, reject) => {
        dbms.dbquery('select * from PlantEmissions2018 where PLPRMFL=\'NUC\';', function (error, result) {

            console.log("database got queried");
            resolve(result[0].BACODE);

        });
    });
	
}

test('test dbquery for /dbms', () => {
    return expect(getDefaultData()).resolves.toEqual('TVA');
});