const express = require('express');
const app = express();
const router = express.Router();
const getListPage = require('../utils/getListPageData');

router.post('/getListPageData', function(req, res, next) {
    getListPage(req.body.url).then((data) => {
        res.send(data)
    }).catch((isError => {
        res.send(isError);
    }))
})

module.exports = router;