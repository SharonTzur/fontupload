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
    console.log('upload func called' + file);
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
    console.log('db was called');
    var params = req.body;
    db.instance.findById(params.instanceId)
        .exec(function (err, instance) {
            instance.uploadedFonts.addToSet({
                url: params.urlData.Location,
                fileName: params.fileName
            });
            instance.save(function (err, i) {
                res.send((err) ? 'error' : 'success');
            })
        });

});

router.post('/', function (req, res) {
    console.log('upload was called');
    //console.log(JSON.stringify(req.body));
    if (!req.files)
    {
        res.end(500);
        return
    }
    var name = req.files.upl.name;
    var ext = name.split('.');
    ext = ext[ext.length - 1];
    var cssFile = name.replace(ext, 'css');
    var format = (ext == 'ttf') ? 'truetype' : (ext == 'otf') ? 'opentype' : ext;
    //res.end('temp down');

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
                    console.log('upload send');
                    res.send({error: err, data: data, name: cssFile, origfile: name});
                }, true)
            }

        });

    });
});

module.exports = router;
