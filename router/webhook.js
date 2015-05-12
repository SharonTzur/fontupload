/**
 * Created by admin on 4/29/2015.
 */
var express = require('express');
var util = require('./../util');
var db = require('./../db');
var globals = require('./../globals');
var async = require('async');
var router = express.Router();

var routeProvision = {
    "/provision/disabled": function (req, res) {
        console.log('/provision/disabled');
        db.instance.findByIdAndUpdate(req.body['instance-id'],
            {comp: []},
            function (err, inst) {
                res.end();
            });
    },

    "billing": function (req, res, upgrade) {
        db.instance.findById(req.body['instance-id'])
            .select('isPaid subscriptions')
            .exec(function (err, instance) {
                if (upgrade)
                    instance.subscriptions.push({start: Date.now(), end: null});
                else  {
                    var last = instance.subscriptions.length - 1;
                    instance.subscriptions[last].end = Date.now();
                }
                instance.isPaid = upgrade;
                instance.save(function (err, newInstace) {
                    res.end();
                })
            })

    },

    "/billing/upgrade": function (req, res) {
        this.billing(req,res, true);
    },

    "/billing/cancel": function (req, res) {
        this.billing(req,res, false);
    },

    "/provision/provision": function (req, res) {
        console.log(req.body['instance-id'] + ' just opened the app');
        res.end();
    }
};
router.post('/', function (req, res) {
    //console.log(req);
    console.log('>>> WEBHOOK headers');
    if (verify(req)) {
        console.log(req.headers['x-wix-event-type']);
        routeProvision[req.headers['x-wix-event-type']](req, res);// "/provision/provision"
        console.log(JSON.stringify(req.body));
        console.log('success');
    }
    else
        res.statusCode(403);

});
function verify(req) {
    var headers = req.headers;
    var wixHeaders = {};
    var queryParams = util.trimParams(req.params);
    for (var header in headers) {
        if (header.indexOf('x-wix-') == 0 && header != 'x-wix-signature') {
            wixHeaders[header] = headers[header].trim();
        }
    }
    var hash = (headers['content-type'] == 'application/x-www-form-urlencoded') ?
        parseUrlEncodedRequest(req, wixHeaders) :
        parseGenericRequest(req, wixHeaders);
    return util.verifyHeader(hash, globals.wix[headers['x-wix-application-id']].secret, null, headers['x-wix-signature']);

}
function parseGenericRequest(req, wixHeaders) {
    console.log('=== parseGenericRequest ===');
    var query = '';

    for (var key in query) {
        query[key] = query[key]
    }
    var strToHash = 'POST';

    var allParams = util.collect(query, wixHeaders);


    var keyArray = Object.keys(allParams);
    keyArray.sort();

    keyArray.forEach(function (key) {
        if (allParams[key].trim) {
            allParams[key] = allParams[key].trim();
        }
        strToHash += '\n' + allParams[key];
    });

    strToHash += '\n' + JSON.stringify(req.body);
    return strToHash;

}

function parseUrlEncodedRequest(req, wixHeaders) {
    console.log('dont know what do do');
    var body = req.body,
        strToHash = 'POST\n';
    var queryParams = util.trimParams(req.query);
    var allParams = collect(queryParams, body, wixHeaders);

    var keyArray = Object.keys(allParams);
    keyArray.sort();

    keyArray.forEach(function (key) {
        if (allParams[key].trim) {
            allParams[key] = allParams[key].trim();
        }
        strToHash += allParams[key] + '\n';
    });

    return '\n' + strToHash;
}

module.exports = router;
// x-wix-event-type "/provision/provision"