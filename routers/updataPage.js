const express = require('express');
const app = express();
const router = express.Router();
const getUpdataPage = require('../utils/getUpdataPageData');

router.post('/getUpdataPageData', function(req, res, next) {
    getUpdataPage().then((data) => {
        res.send(data)
    }).catch((isError => {
        res.send(isError);
    }))
})

module.exports = router;