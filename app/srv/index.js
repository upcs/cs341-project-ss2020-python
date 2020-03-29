import express from 'express';

//router that handles get/post requests for database queries
var dataRouter = require('./javascript/sqlMidWare');

export default (app, http) => {

    app.use(express.json());
    app.use(express.urlencoded({ extended: true }));

    //this tells the express server to allow requests from localhost:8080 (our vue app)
    app.use(function (req, res, next) {
        res.header("Access-Control-Allow-Origin", "*"); 
        res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
        next();
    });

    app.use('/sqlMidWare', dataRouter);

    //handle production
    if (process.env.NODE_ENV === 'production') {
        app.use(express.static(__dirname + '/public'));

        app.get(/.*/, (req, res) => res.sendFile(__dirname + 'public/index.html'));
    }
  
    app.listen(process.env.PORT);
}