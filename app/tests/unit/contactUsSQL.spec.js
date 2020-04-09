/**
 * ensures that contact us post function is functioning
 */

const $ = require('jquery');
const app = require('../../srv/index.js');
const contactUsSQL = require('../../srv/javascript/contactUsSQL.js');
const dbmsPostCatcher = require('../../srv/javascript/dbmsPostCatcher.js');

async function getDefaultData() {
    return new Promise(async(resolve, reject) => {
        //use a dummied up JSON 
        var initTotal;
        await $.post(process.env.VUE_APP_ROOT_API + '/dbmsPostCatcher', {string: 'select count(*) as total from ContactUsData;'}, function(response) {
            console.log("init total in testing is ");
            console.log(response.res[0].total);
            initTotal = response.res[0].total;
        });

        await $.post(process.env.VUE_APP_ROOT_API + '/contactUsSQL', {
        
            mes : "test message",
            first : "testfirst",
            last : "testlast",
            email : "test@testmail.com"

        }, function(response) {
            console.log("done adding test value");
            console.log(response.mes);
        });
        var finalTotal;
        await $.post(process.env.VUE_APP_ROOT_API + '/dbmsPostCatcher', {string: 'select count(*) as total from ContactUsData;'}, function(response) {
            console.log("post total in testing is ");
            console.log(response.res[0].total);
            finalTotal = response.res[0].total;
        });

        var diff = finalTotal - initTotal;
        resolve(diff);

    });

}

describe('contactUsSQL api call', () => {

    let server;

    beforeAll(() => {
        server = app.listen(3000);
    });

    afterAll(() => {
        server.close();
    });

    test('test contactUsSQL', () => {
        return expect(getDefaultData()).resolves.toBe(1);
    });
});