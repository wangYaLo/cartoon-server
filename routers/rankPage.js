const express = require('express');
const router = express.Router();
const getRankPage = require('../utils/getRankPageData');

router.post('/getRankPageData', function(req, res, next) {
    getRankPage().then((data) => {
        res.send(data)
    }).catch((isError => {
        res.send(isError);
    }))
})

module.exports = router;