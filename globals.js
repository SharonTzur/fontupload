/**
 * Created by admin on 4/26/2015.
 */

var fs = require('fs');

module.exports = {
    AWS_SECRET_KEY: process.env.AWS_SECRET_KEY,
    AWS_ACCESS_KEY: process.env.AWS_ACCESS_KEY,
    S3_BUCKET     : process.env.S3_BUCKET,
    uristring     : process.env.MONGOLAB_URI,
    WIX_APP_SECRETX: process.env.WIX_APP_SECRETX,
    WIX_APP_SECRETO: process.env.WIX_APP_SECRETO,
    WIX_APP_IDX    : process.env.WIX_APP_IDX,
    WIX_APP_IDO    : process.env.WIX_APP_IDO,

    wix: {
        WIX_APP_IDO: process.env.WIX_APP_SECRETO,
        WIX_APP_IDX: process.env.WIX_APP_SECRETX
    },


    init: function (mongoose) {
        var self = this;
        fs.readFile(__dirname + '/credentials.json', function (err, data) {
            if (data) {
                var credentials = JSON.parse(data.toString());
                self.AWS_ACCESS_KEY = credentials.access_key;
                self.AWS_SECRET_KEY = credentials.secret_key;
                self.S3_BUCKET = credentials.bucket;
                self.uristring = credentials.mongo;
                //self.WIX_APP_SECRET = credentials.wix_secret;
                //self.WIX_APP_ID = credentials.wix_app_id;
                self.wix[credentials.wix_app_id] = credentials.wix_secret;
            }
            console.log(JSON.stringify('wix creds are: ' + self.wix));
            mongoose.connect(self.uristring, function (err) {
                if (err) {
                    console.log('ERROR connecting to: ' + self.uristring + '. ' + err);
                } else {
                    console.log('Succeeded connected to: ' + self.uristring);
                }
            });
        });
    }
};