var express = require('express');
var router = express.Router();
var dbms = require('./dbms');

//get for testing response of databse
router.get('/', function(req, res) {

    var plantType = req.body.PLANTTYPE;
    console.log("" +plantType);

    var queryString = 'select * from PlantEmissions2018 where PLPRMFL=\'NUC\'';

    dbms.dbquery(queryString, function(error, results) {
        res.send(results);
    });

});

//post for querying database based on parameters from JSON
router.post('/', function(req, res) {

    var plantType = req.body.PLANTTYPE;
    console.log("" +plantType);

    var queryString = 'select * from PlantEmissions2018 where PLPRMFL=\'NUC\'';

    dbms.dbquery(queryString, function(error, results) {
        res.send(results);
    });

});

module.exports = router;