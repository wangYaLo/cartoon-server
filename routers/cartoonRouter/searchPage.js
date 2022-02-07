const express = require('express');
const router = express.Router();
const getSearchList = require('../../utils/cartoonUtils/getSearchPageList');
const inputSearch = require('../../utils/cartoonUtils/inputSearch');

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