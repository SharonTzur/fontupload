/**
 * Created by admin on 4/26/2015.
 */
var express = require('express');
var router = express.Router();
var utils = require('./../util');


router.post('/', function (req, res) {
    utils.load(req, function (data) {
        res.send(data);
    });
});
module.exports = router;