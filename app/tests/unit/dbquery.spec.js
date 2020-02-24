/**
 * ensures that dbms and sqlMidWare are functioning as expected
 * that is, we send a get to sqlMidWare, where the get request exists just for testing
 * and that get sends a default query to the database. We're checking that first value returned
 * contains the expected values
 */

const $ = require('jquery');

test('test GET for /sqlMidWare', () => {


    $.get('http://localhost:3000/sqlMidWare', function (response) {
        var testText = response[0].BACODE;
        expect(testText).toBe("TVA");
    });

});