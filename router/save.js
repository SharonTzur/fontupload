/**
 * Created by admin on 4/26/2015.
 */
var express = require('express');
var router = express.Router();
var db = require('./../db');


router.post('/', function (req, res) {
    var settings = req.body.settings;
    console.log('saving');
    db.instance.findById(settings._id)
        .exec(function (err, instance) {
            var comp = instance.comp.id(req.body.compId);
            comp.code = settings.code;
            instance.save(function (err, cmp) {
                res.send((err) ? 'error' : 'success')
            })
        });
});

module.exports = router;
