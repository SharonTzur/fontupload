/**
 * Created by admin on 4/26/2015.
 */

var fs = require('fs');

module.exports = {
    AWS_SECRET_KEY: process.env.AWS_SECRET_KEY,
    AWS_ACCESS_KEY: process.env.AWS_ACCESS_KEY,
    S3_BUCKET     : process.env.S3_BUCKET,
    uristring     : process.env.MONGOLAB_URI,
    //WIX_APP_SECRET : require("./WixKey"),



init: function (mongoose) {
        var self = this;
        fs.readFile(__dirname + '/credentials.json', function (err, data) {
            if (data) {
                var credentials = JSON.parse(data.toString());
                self.AWS_ACCESS_KEY = credentials.access_key;
                self.AWS_SECRET_KEY = credentials.secret_key;
                self.S3_BUCKET = credentials.bucket;
                self.uristring = credentials.mongo;
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