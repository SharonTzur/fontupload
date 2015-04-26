/**
 * Created by admin on 4/26/2015.
 */
var express = require('express');
var router = express.Router();
var db = require('./../db');
var async = require('async');


router.post('/', function (req, res) {
    var params = req.body;
    async.parallel({
        findP       : function (callback) {
            db.widgetSettingsModel.find({instanceId:params.instanceId})
                .where('compId').equals(params.compId)
                .exec(function (err, ws) {
                    if (ws[0])
                        callback(null, ws[0]);
                    else {
                        var p = new db.widgetSettingsModel({
                            compId    : params.compId,
                            instanceId: params.instanceId
                        });
                        p.save(function (e, newP) {
                            callback(null, newP);
                        })
                    }
                });
        },
        findUploaded: function (callback) {
            db.uploadedFontsModel.find({compId:params.compId})
                .exec(function (err, list) {
                    callback(null, list)
                })
        }
    }, function (e, result) {

        res.send({
            p: result.findP,
            list: result.findUploaded
        })
    })
});

module.exports = router;
