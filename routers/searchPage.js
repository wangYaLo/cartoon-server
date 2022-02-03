const express = require('express');
const router = express.Router();
const getSearchList = require('../utils/getSearchPageList');

router.post('/getSearchList', function(req, res, next) {
    getSearchList().then((data) => {
        res.send(data)
    }).catch((isError => {
        res.send(isError);
    }))
})

router.post('/input', (rerq, res, next) => {
    
})

module.exports = router;