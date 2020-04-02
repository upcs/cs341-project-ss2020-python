//dbmsPostCatcher.js

var express = require('express');
var router = express.Router();
var dbms = require('./dbms');


router.post('/', function (req, res) {
    console.log(req.body.string);
    
    dbms.dbquery(req.body.string, function (error, response) {
        
        console.log("PostCatcher:");
        console.log(response);
        res.send({res : response});
    }); 
});

module.exports = router;