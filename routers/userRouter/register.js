const express = require('express');
const router = express.Router({mergeParams: true});
const register = require('../../utils/loginUtils/register')

router.post('/register', (req, res, next) => {
    register(req.body.data).then((data) => {
        res.send(data)
    }).catch((error) => {
        res.send(error)
    })
})

module.exports = router;