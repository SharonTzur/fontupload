/**
 * Created by admin on 4/26/2015.
 */

var fs = require('fs');

module.exports = {
    AWS_SECRET_KEY: process.env.AWS_SECRET_KEY,
    AWS_ACCESS_KEY: process.env.AWS_ACCESS_KEY,
    S3_BUCKET: process.env.S3_BUCKET,
    uristring: process.env.MONGOLAB_URI,

    trialPeriod : 1209600000,     //14 days
    //trialPeriod : 2592000000,       //30 days
    //trialPeriod : 600000,           //10 minutes

    wix: {},

    init: function (mongoose) {
        var self = this;

        self.wix[process.env.WIX_APP_IDO] = {secret: process.env.WIX_APP_SECRETO, user: 'Oren'};
        self.wix[process.env.WIX_APP_IDX] = {secret: process.env.WIX_APP_SECRETX, user: 'Rotem'};
        //console.log(JSON.stringify( self.wix) );

        fs.readFile(__dirname + '/credentials.json', function (err, data) {
            if (data) {
                var credentials = JSON.parse(data.toString());
                self.AWS_ACCESS_KEY = credentials.access_key;
                self.AWS_SECRET_KEY = credentials.secret_key;
                self.S3_BUCKET = credentials.bucket;
                self.uristring = credentials.mongo;
                self.wix[credentials.wix_app_id] = {
                    secret: credentials.wix_secret,
                    user: credentials.user
                };
            }
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