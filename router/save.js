/**
 * Created by admin on 4/26/2015.
 */
var express = require('express');
var router = express.Router();
var db = require('./../db');


router.post('/', function (req, res) {
    var settings = req.body.settings;
    db.instance.findById(settings._id)
        .exec(function (err, instance) {
            var comp = instance.comp.id(req.body.compId);
            comp.code = settings.code;
            comp.save(function (err, cmp) {
                res.send((err) ? 'error' : 'success')
            })
        });
});
/*
 router.post('/', function (req, res) {
 var settings = req.body.settings;
 db.widgetSettingsModel.findByIdAndUpdate(settings._id,
 {code:settings.code},
 function (a, b, c) {
 res.send('success')
 })
 });
 */

module.exports = router;
