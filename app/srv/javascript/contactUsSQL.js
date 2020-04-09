//contactUsSQL.js

var express = require('express');
var router = express.Router();
var dbms = require('./dbms');
var SimpleCrypto = require("simple-crypto-js").default;

//req is the infoObj
router.post('/', async function (req, res) {
    //testing how the form data looks when sent in a post
    console.log(req.body);
    console.log("post sent");
    
    var _secretKey = "test key chicken";
    try {
        simpleCrypto = new SimpleCrypto(_secretKey);

        var lastName = simpleCrypto.encrypt(req.body.last);
        var email = simpleCrypto.encrypt(req.body.email);
        var message = simpleCrypto.encrypt(req.body.mes);
        var firstName = simpleCrypto.encrypt(req.body.first);
    } 
    catch (err) {
        console.log(err);
    }
    
    //insert into ContactUsData values ("testerson", "test", "test@test.com", "hello world");
    var sqlCommand = "INSERT INTO ContactUsData VALUES ('"+lastName+"', '"
    +firstName+"', '"+email+"', '"+message+"');";

    console.log(sqlCommand);
    dbms.dbquery(sqlCommand, function () {
        
    }); 
    res.send({mes : "done"});
});

module.exports = router;