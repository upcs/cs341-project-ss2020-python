//contactUsSQL.js

var express = require('express');
var router = express.Router();
var dbms = require('./dbms');


//req is the infoObj
router.post('/', async function (req, res) {
    //testing how the form data looks when sent in a post
    console.log(req.body);
    console.log("post sent");
    
    var _secretKey = "test key chicken";
    // try {
    //     simpleCrypto = new SimpleCrypto(_secretKey);

    //     var lastName = simpleCrypto.encrypt(req.body.last);
    //     var email = simpleCrypto.encrypt(req.body.email);
    //     var message = simpleCrypto.encrypt(req.body.mes);
    //     var firstName = simpleCrypto.encrypt(req.body.first);
    // } 
    // catch (err) {
    //     console.log(err);
    // }
    var CryptoJS = require("crypto-js");
    try{
        var lastName = CryptoJS.AES.encrypt(req.body.last, _secretKey).toString();
        var email = CryptoJS.AES.encrypt(req.body.email, _secretKey).toString();
        var message = CryptoJS.AES.encrypt(req.body.mes, _secretKey).toString();
        var firstName = CryptoJS.AES.encrypt(req.body.first, _secretKey).toString();
        console.log("Data was encrypted succesfully.")
    }
    catch(err){
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