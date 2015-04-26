/**
 * Created by admin on 4/26/2015.
 */
var express = require('express');
var router = express.Router();
var aws = require('aws-sdk');
var fs = require('fs');
var db = require('./../db');
var globals = require('./../globals');


function upload(file, name, progress, done, css) {

    aws.config.update({accessKeyId: globals.AWS_ACCESS_KEY, secretAccessKey: globals.AWS_SECRET_KEY});
    var ct = (css) ? 'text/css' : 'application/octet-stream';
    var body = fs.createReadStream(file);//.pipe(zlib.createGzip());
    var s3obj = new aws.S3({
        params: {
            Bucket     : globals.S3_BUCKET,
            Key        : name,
            ACL        : 'public-read',
            ContentType: ct
        }
    });
    console.log(ct);
    s3obj.upload({Body: body})
        .on('httpUploadProgress', progress)
        .send(done)

}
router.post('/db', function (req, res) {
    var params = req.body;
    db.uploadedFontsModel.find({compId: params.compId})
        .where('fileName').equals(params.fileName)
        .where('url').equals(params.urlData.Location)
        .exec(function (e, files) {
            if (files[0]) {
                res.send('allready exist');
            }
            else {
                var newFile = db.uploadedFontsModel({
                    compId  : params.compId,
                    url     : params.urlData.Location,
                    fileName: params.fileName
                });
                newFile.save(function (f) {
                    res.send('new instance');
                })
            }
        })

});

router.post('/', function (req, res) {
    console.log(JSON.stringify(req.body));
    var name = req.files.upl.name;
    var ext = name.split('.');
    ext = ext[ext.length - 1];
    var cssFile = name.replace(ext, 'css');
    var format = (ext == 'ttf') ? 'truetype' : ext;
    //res.end('temp down');
    console.log('"' + AWS_ACCESS_KEY + '"  "' + AWS_SECRET_KEY + '" "' + S3_BUCKET + '"');

    upload(req.files.upl.path, name, function (evt) {
        console.log(evt);
    }, function (err, data) {
        console.log(err, data);
        fs.writeFile(cssFile, '@font-face {font-family:"' + name.replace('.' + ext, '') + '";' +
            ' src:url("' + data.Location + '") format("' + format + '") ; }', function (err) {
            if (!err) {
                upload(cssFile, cssFile, function (evt) {
                    console.log(evt)
                }, function (err, data) {
                    res.send({error: err, data: data, name: cssFile, origfile: name});
                }, true)
            }

        });

    });
});

module.exports = router;
