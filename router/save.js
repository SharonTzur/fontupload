/**
 * Created by admin on 4/26/2015.
 */
var express = require('express');
var router = express.Router();
var db = require('./../db');
var async = require('async');


router.post('/', function (req, res) {
    var settings = req.body.settings;
    db.widgetSettingsModel.findByIdAndUpdate(settings._id,
        {code:settings.code},
        function (a, b, c) {
            res.send('success')
        })
});

module.exports = router;
