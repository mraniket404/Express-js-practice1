const express = require('express');

const path = require('path');

const userRouter = express.Router();

const utilpath = require('../utils/utilpath');
userRouter.get('/', (req, res, next) => {
    console.log(' request received', req.method, req.url, req.body);
   res.sendFile(path.join(utilpath,'/views/home.html'));
})

module.exports = userRouter;