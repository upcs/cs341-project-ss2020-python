
var express = require('express');
var router = express.Router();
var dbms = require('./dbms');

//default get for HW4
router.get('/', function (req, res) {

    dbms.dbquery('select * from PlantEmissions2018 where PLPRMFL=\'NUC\';', function (error, result) {

        res.send(result);

    });
});

module.exports = router;