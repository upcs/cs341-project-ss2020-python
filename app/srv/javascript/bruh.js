
var express = require('express');
var router = express.Router();
//var dbms = require('./dbms');

//default get for HW4
router.get('/', function (req, res) {

    var orderList = [
        { TOPPING: "cherry", QUANTITY: "2" },
        { TOPPING: "chocolate", QUANTITY: "6" },
        { TOPPING: "plain", QUANTITY: "3" }
    ];

    res.send(orderList);
});

module.exports = router;