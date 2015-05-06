/**
 * Created by admin on 4/26/2015.
 */
var express = require('express');
var router = express.Router();
var globals = require('./../globals');
var utils = require('./../util');
var qs = require('querystring');

router.get('/', function (req, res) {
    //console.log(req);
    var instance = req.query.instance;
    var appId = qs.parse(req.headers.referer).appDefinitionId;

    var file = req.baseUrl.replace("/", "");
    console.log(globals.wix[appId].user + ': ');
    if (instance && utils.verifyInstance(instance, globals.wix[appId].secret, req, res)) {
        utils.load(req, function (data) {
            //var data = data._doc;
            var code = data.p.code;
            delete data.p.code;
            res.render(file + '.ejs', {
                compId    : req.query.origCompId || req.query.compId ,
                instanceId: req.query.instanceId,
                data      : JSON.stringify(data), //.replace(/\\"/g, "\\'")
                code: code,
                pad: data.p.paid

            })
        });
    }
    else
        res.sendStatus(403);
});

module.exports = router;
