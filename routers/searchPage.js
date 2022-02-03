const express = require('express');
const router = express.Router();
const getSearchList = require('../utils/getSearchPageList');
const inputSearch = require('../utils/inputSearch');

router.post('/getSearchList', function(req, res, next) {
    getSearchList().then((data) => {
        res.send(data)
    }).catch((isError => {
        res.send(isError);
    }))
})

router.post('/input', (req, res, next) => {
    inputSearch(req.body.value).then((data) => {
        res.send(data)
    }).catch((isError => {
        res.send(isError);
    }))
})

module.exports = router;