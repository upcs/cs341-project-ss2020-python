
var express = require('express');
var router = express.Router();
var dbms = require('./dbms');

//this get exists for testing purposes. Our website will issue post requests that pass data
router.get('/', function (req, res) {

    //selects all nuclear power plants
    dbms.dbquery('select * from PlantEmissions2018 where PLPRMFL=\'NUC\';', function (error, result) {

        console.log("database got queried");
        res.send(result);

    });
});


router.post('/', function (req, res) {
    //testing how the form data looks when sent in a post
    console.log(JSON.stringify(req.body));
    console.log("post sent");
    //res.send({});
});

module.exports = router;