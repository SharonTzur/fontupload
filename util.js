/**
 * Created by admin on 4/27/2015.
 */
//var Buffer = require('buffer').Buffer;
var crypto = require("crypto");
var db = require('./db');
var async = require('async');


module.exports = {

    encodeTextForURL: function (text) {
        return encodeURIComponent(text).replace(/'/g, "%27").replace(/"/g, "%22")
    },

    verifyInstance: function (instance, secret, req, res) {
        // spilt the instance into signature and data
        var pair = instance.split('.');
        var signature = this.decode(pair[0], 'binary');
        var data = pair[1];
        var wixData = JSON.parse(this.decode(pair[1], 'binary'));
        // sign the data using hmac-sha1-256
        var hmac = crypto.createHmac('sha256', secret);
        var newSignature = hmac.update(data).digest('binary');
        if (req) req.query.instanceId = wixData.instanceId;
        return (signature === newSignature);

        /*
         {
         callback.call(scope, req, res, wixData.instanceId, true);
         return true;
         }
         else {
         callback.call(scope, req, res, wixData.instanceId, false);

         return false;
         }
         */

    },

    verifyHeader: function (instance, secret, req, signature) {
        var hmac = crypto.createHmac('sha256', secret);
        var newSignature = hmac.update(instance).digest('base64');
        if  (newSignature.substring(0, newSignature.length - 1) == signature.replace(/_/g,'/').replace(/-/g, '+'))
            return true;
        else
        {
            console.log(newSignature.substring(0, newSignature.length - 1) + ' not equal ' +signature.replace(/_/g,'/').replace(/-/g, '+') )
            return false;
        }


    },
    escapeRegExp  : function (string) {
        return string.replace(/([.*+?^=!:${}()|\[\]\/\\])/g, "\\$1");
    },

    replaceAll: function (string, find, replace) {
        return string.replace(new RegExp(this.escapeRegExp(find), 'g'), replace);
    },

    decode: function (data, encoding) {
        encoding = encoding === undefined ? 'utf8' : encoding;
        var buf = new Buffer(data.replace(/-/g, '+').replace(/_/g, '/'), 'base64');
        return encoding ? buf.toString(encoding) : buf;
    },
    collect: function ()
    {
        var ret = {};
        var len = arguments.length;
        for (var i = 0; i < len; i++)
        {
            for (var p in arguments[i])
            {
                if (arguments[i].hasOwnProperty(p))
                {
                    ret[p] = arguments[i][p];
                }
            }
        }
        return ret;
    },
    trimParams: function (obj)
    {
        for (var key in obj)
        {
            if (obj[key].indexOf(',') != -1)
            {
                var multiParamArr = obj[key].split(',');
                for (var i = 0; i < multiParamArr.length; i++)
                {
                    multiParamArr[i] = multiParamArr[i].trim();
                }
                obj[key] = multiParamArr.join(',');
            }
        }
        return obj;
    },


    load: function (req, callback) {
        console.log('load was called');
        var params = req.query;
        console.log('loading instanceId : ' +  params.instanceId );
        console.log('loading compId : ' +  params.compId );
        async.parallel({
            findP       : function (callback) {
                db.widgetSettingsModel.find({instanceId: params.instanceId})
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
                                console.log('new P');
                                callback(null, newP);
                            })
                        }
                    });
            },
            findUploaded: function (callback) {
                db.uploadedFontsModel.find({instanceId: params.instanceId})
                    .exec(function (err, list) {
                        callback(null, list)
                    })
            }
        }, function (e, result) {

            callback({
                p   : result.findP._doc,
                list: result.findUploaded._doc
            });
        })


    }

};