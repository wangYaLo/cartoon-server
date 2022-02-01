const express = require('express');
const app = express();
const router = express.Router();
const htmlDownLoad = require('../utils/getHomePageData');

router.post('/getHomePageData', function(req, res, next) {
    htmlDownLoad().then((data) => {
        res.send(data)
    }).catch((isError => {
        res.send(isError);
    }))
})

module.exports = router;