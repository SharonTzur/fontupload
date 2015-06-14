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
    console.log(req);
    var instance = req.query.instance;
    var appId = qs.parse(req.headers.referer).appDefinitionId;
    /*
     if (!appId)
     {
     res.send('No App Id, probably not loading from wix');
     return;
     }
     */
    var file = req.baseUrl.replace("/", "");
    if (file == 'seo') file = 'widget';
    //console.log ('>appId : ', appId);
    //console.log ('>globals.wix : ', JSON.stringify(globals.wix));
    //console.log(globals.wix[appId].user + ': ');
    if (instance && utils.verifyInstance(instance, globals.wix[appId].secret, req, res))
    {
        res.sendFile(file + '.html', {root: __dirname + '/../public/'});
        /*
         utils.load(req, function (data) {
         //var data = data._doc;
         var code = data.code;
         delete data.code;


         /!*
         res.render(file + '.ejs', {
         compId    : req.query.origCompId || req.query.compId ,
         instanceId: req.query.instanceId,
         data      : JSON.stringify(data), //.replace(/\\"/g, "\\'")
         code: code,
         paid: data.paid,
         server: 'http://fontupload.herokuapp.com'
         //server: 'http://84.109.234.163:8080'
         })
         *!/
         });
         */
    }
    else
        res.sendStatus(403);
});

module.exports = router;
