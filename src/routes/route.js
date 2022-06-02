const express = require('express');
// const externalModule = require('./logger')
const logger=require('../logger/logger.js')
const helper=require('../util/helper.js')
const formatter=require('../validator/formatter.js')
const router = express.Router();

router.get('/test-me', function (req, res) {
    // console.log('The constant in logger route has a value '+externalModule.endpoint)
    // console.log('The current batch is '+externalModule.batch)
    // externalModule.log()
    // res.send('My first ever api!')
    logger.xyz();
    helper.printDate()
    helper.printMonth()
    helper.getBatchInfo()
    formatter.trim()
    formatter.changeToLowerCase()
    formatter.changeToLowerCase()



});

// router.get('/test-me1', function (req, res) {
//     res.send('My second ever api!')
// });


module.exports = router;
// adding this comment for no reasons
