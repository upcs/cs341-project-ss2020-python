import express from 'express';

var testRouter = require('./javascript/bruh');
var cors = require('cors')

export default (app, http) => {

    app.use(express.json());
    app.use(cors());

    app.use('/bruh', testRouter);

    app.get('/foo', (req, res) => {
        res.json({msg: 'foo'});
    });
  
    app.post('/bar', (req, res) => {
        res.json(req.body);
    });
  
    app.listen(process.env.PORT);
}