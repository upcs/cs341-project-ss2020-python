import express from 'express';

//router that handles get/post requests for database queries
var dataRouter = require('./javascript/sqlMidWare');

export default (app, http) => {

    app.use(express.json());
    app.use(express.urlencoded({ extended: true }));

    //this tells the express server to allow requests from localhost:8080 (our vue app)
    app.use(function (req, res, next) {
        res.header("Access-Control-Allow-Origin", "http://localhost:8080"); 
        res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
        next();
    });

    app.use('/sqlMidWare', dataRouter);
  
    app.listen(process.env.PORT);
}