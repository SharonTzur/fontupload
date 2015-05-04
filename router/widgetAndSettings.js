/**
 * Created by admin on 4/26/2015.
 */
var express = require('express');
var router = express.Router();
var globals = require('./../globals');
var utils = require('./../util');

router.get('/', function (req, res) {
    //console.log(req);
    var instance = req.query.instance;
    var file = req.baseUrl.replace("/", "");
    if (instance && utils.verifyInstance(instance, globals.WIX_APP_SECRET, req, res)) {
        utils.load(req, function (data) {
            //var data = data._doc;
            var code = data.p.code;
            delete data.p.code;
            res.render(file + '.ejs', {
                compId    : req.query.compId,
                instanceId: req.query.instanceId,
                data      : JSON.stringify(data), //.replace(/\\"/g, "\\'")
                code: code

            })
        });
    }
    else
        res.sendStatus(403);
});

module.exports = router;
