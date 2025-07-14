const express = require('express');

const hostRouter = express.Router();
const path = require('path');
const utilpath= require('../utils/utilpath');


hostRouter.get('/host/home', (req, res, next) => {
    console.log('home page request received', req.method, req.url, req.body);
    res.sendFile(path.join(utilpath,'/views/formpage.html'));
})

hostRouter.post('/register', (req, res, next) => {
    console.log(' request received', req.method, req.url, req.body);
    res.sendFile(path.join(utilpath,'/views/submitform.html'));
})

module.exports = hostRouter;