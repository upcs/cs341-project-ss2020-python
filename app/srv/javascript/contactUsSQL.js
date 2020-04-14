//contactUsSQL.js
var express = require('express');
var router = express.Router();
var dbms = require('./dbms');
var keyObj = require('../../passwords.json');

//req is the infoObj
router.post('/', async function (req, res) {
    //testing how the form data looks when sent in a post
    console.log(req.body);
    console.log("post sent");
    //Will only print on express server console. 
    // console.log("Data before encryption: ");
    // console.log(req.body.first);
    // console.log(req.body.last);
    // console.log(req.body.email);
    // console.log(req.body.mes);
    
    var _secretKey = keyObj.dbKey;
    
    //New crypto algorithm,
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

    //Will only print on express server console.
    // console.log("Data after encryption: ");
    // console.log(firstName);
    // console.log(lastName);
    // console.log(email);
    // console.log(message);
    
    //insert into ContactUsData values ("testerson", "test", "test@test.com", "hello world");
    var sqlCommand = "INSERT INTO ContactUsData VALUES ('"+lastName+"', '"
    +firstName+"', '"+email+"', '"+message+"');";

    console.log(sqlCommand);
    dbms.dbquery(sqlCommand, function () {
        
    }); 
    res.send({mes : "done"});
});

module.exports = router;