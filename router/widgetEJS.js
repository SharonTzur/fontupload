/**
 * Created by admin on 4/26/2015.
 */
var express = require('express');
var router = express.Router();
var globals = require('./../globals');
var utils = require('./../util');
var qs = require('querystring');

router.get('/', function (req, res)
{
    console.log('WidgetEJS has been called upon us');
    console.log(req.query);
    var instance = req.query.instance;
    var appId = qs.parse(req.headers.referer).appDefinitionId;
    var file = req.baseUrl.replace("/", "");
    if (file == 'seo') file = 'widget';
    //console.log ('>appId : ', appId);
    //console.log ('>globals.wix : ', JSON.stringify(globals.wix));
    //console.log(globals.wix[appId].user + ': ');
    var secret = globals.wix[appId].secret ? globals.wix[appId].secret : globals.WIX_APP_SECRETX;
    if (instance && utils.verifyInstance(instance, secret, req, res))
    {
        utils.load(req, function (data)
        {
            //var data = data._doc;
            var code = data.code;
            delete data.code;


            res.render(file + '.ejs', {
                compId    : req.query.origCompId || req.query.compId,
                instanceId: req.query.instanceId,
                data      : JSON.stringify(data).replace(/\\"/g, "\\'"),
                code      : JSON.stringify(code).replace(/\\"/g, "\\'"),
                paid      : data.paid,
                isTrial   : data.isTrial,
                trialTime : data.trialTime
                //server: 'http://fontupload.herokuapp.com'
                //server: 'http://84.109.234.163:8080'
            })
        });
    }
    else
        res.sendStatus(403);
});

module.exports = router;
