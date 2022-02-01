const express = require('express');
const router = express.Router();
const cartoonDetails = require('../utils/getCartoonDetails')
const pageDetails = require('../utils/getPageDetails')

router.post('/getPageDetails', (req, res, next) => {
    console.log();
    pageDetails(req.body.url).then((data) => {
        res.send(data)   
    }).catch((error) => {
        res.send(error)
    })
})
router.post('/getCartoonDetails', (req, res, next) => {
    console.log(req.body.url);
    cartoonDetails(req.body.url).then((imgUrlArr) => {
        res.send(imgUrlArr)
    }).catch((error) => {
        res.send(error)
    })
})

module.exports = router