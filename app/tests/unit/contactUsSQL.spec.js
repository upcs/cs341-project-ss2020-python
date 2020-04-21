/**
 * ensures that contact us post function is functioning
 */

const $ = require('jquery');
const app = require('../../srv/index.js');

async function getDefaultData() {
    return new Promise(async(resolve, reject) => {
        await $.post(process.env.VUE_APP_ROOT_API + '/contactUsSQL', {
            mes : "test message",
            first : "testfirst",
            last : "testlast",
            email : "test@testmail.com"

        }, function(response) {
            resolve(response.mes);
        });
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

    test('test contactUsSQL', async () => {
        const result = await getDefaultData();
        expect.assertions(1);
        return expect(result).toBe("done");
    });
});