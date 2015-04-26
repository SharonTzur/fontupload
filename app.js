var express = require('express');
var bodyParser = require('body-parser');
var app = express();
var multer = require('multer');
var fs = require('fs');
var aws = require('aws-sdk');
var zlib = require('zlib');

app.all('*', function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE,OPTIONS');
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});

app.get('/', function (req, res) {
    res.send('Hello World!');
});

var AWS_SECRET_KEY = process.env.AWS_SECRET_KEY,
    AWS_ACCESS_KEY = process.env.AWS_ACCESS_KEY,
    S3_BUCKET = process.env.S3_BUCKET;

fs.readFile(__dirname + '/credentials.json', function (err, data) {
    if (data)
    {
        var credentials = JSON.parse(data.toString());
        AWS_ACCESS_KEY = credentials.access_key;
        AWS_SECRET_KEY =  credentials.secret_key;
        S3_BUCKET = credentials.bucket;
    }
});

app.set('port', process.env.PORT || 3020);


var server = app.listen(app.get('port'), function () {

    var host = server.address().address;
    var port = server.address().port;

    console.log('Example app listening at http://%s:%s', host, port);

});

app.use('/uploads', express.static('./uploads/'));

app.use(multer({
    dest: './uploads/',
    rename: function (fieldname, filename) {
        return filename;
    },
    onFileUploadStart: function (file) {
        console.log(file.originalname + ' is starting ...')
    },
    onFileUploadComplete: function (file) {
        console.log(file.fieldname + ' uploaded to  ' + file.path);
        //done=true;
    }
}));
//app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));


app.post('/upload', function (req, res) {
    console.log(JSON.stringify(req.body));
    var name = req.files.upl.name;
    var ext = name.split('.');
    ext = ext[ext.length - 1];
    var cssFile = name.replace(ext,'css');
    var format = (ext == 'ttf') ? 'truetype' : ext;
    //res.end('temp down');
    console.log('"' + AWS_ACCESS_KEY +'"  "' +  AWS_SECRET_KEY + '" "' + S3_BUCKET +'"' );

    upload(req.files.upl.path, name, function (evt) {
        console.log(evt);
    }, function (err, data) {
        console.log(err, data);
        fs.writeFile(cssFile, '@font-face {font-family:"' + name.replace('.' + ext, '') + '";' +
            ' src:url("' + data.Location + '") format("' + format + '") ; }', function (err) {
            if (!err)
            {
                upload(cssFile, cssFile, function (evt) {
                    console.log(evt)
                }, function (err,data) {
                    res.send({error:err,data:data, name:cssFile});
                }, true)
            }

        });

    });
});

function upload (file, name, progress, done, css) {

    aws.config.update({accessKeyId: AWS_ACCESS_KEY, secretAccessKey: AWS_SECRET_KEY});
    var ct = (css) ? 'text/css' : 'application/octet-stream';
    var body = fs.createReadStream(file);//.pipe(zlib.createGzip());
    var s3obj = new aws.S3({
        params: {
            Bucket: S3_BUCKET,
            Key: name,
            ACL: 'public-read',
            ContentType : ct
    }
    });
    //console.log(body);
    console.log(ct);
    s3obj.upload({Body: body})
        .on('httpUploadProgress',progress)
        .send(done)

}
app.post('/test', function (req, res) {
    //console.log(req);
    console.log('BODY > ' +  JSON.stringify( req.body));
    console.log('QUERY > ' + JSON.stringify(req.query));
    console.log(S3_BUCKET);
    res.send('success');
});

