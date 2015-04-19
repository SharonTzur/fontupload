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
app.use(bodyParser.json());

app.post('/upload', function (req, res) {
    console.log('a');
    console.log(JSON.stringify(req.body));
    console.log(AWS_ACCESS_KEY +' ' +  AWS_SECRET_KEY + ' ' + S3_BUCKET );
    aws.config.update({accessKeyId: AWS_ACCESS_KEY, secretAccessKey: AWS_SECRET_KEY});

    var body = fs.createReadStream(req.files.upl.path).pipe(zlib.createGzip());
    var s3obj = new aws.S3({
        params: {
            Bucket: S3_BUCKET,
            Key: req.files.upl.name
        }
    });
    s3obj.upload({Body: body}).
        on('httpUploadProgress', function (evt) {
            console.log(evt);
        }).
        send(function (err, data) {
            console.log(err, data);
            res.send({error:err,data:data});
        });
});

app.get('/test', function (req, res) {
    console.log(S3_BUCKET);
});

