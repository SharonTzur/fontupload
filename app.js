var express = require('express');
var bodyParser = require('body-parser');
var app = express();
var multer = require('multer');
var fs = require('fs');


app.all('*', function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE,OPTIONS');
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});


app.get('/', function (req, res) {
    res.send('Hello World!');
});


app.set('port', process.env.PORT || 3010);

var AWS_ACCESS_KEY = process.env.AWS_ACCESS_KEY;
var AWS_SECRET_KEY = process.env.AWS_SECRET_KEY;
var S3_BUCKET = process.env.S3_BUCKET;

var server = app.listen(app.get('port'), function () {

    var host = server.address().address;
    var port = server.address().port;

    console.log('Example app listening at http://%s:%s', host, port);

    console.log(AWS_ACCESS_KEY);
    console.log(AWS_SECRET_KEY);
    console.log(S3_BUCKET);

});

app.use('/uploads', express.static('./uploads/'));

app.use(multer({ dest: './uploads/',
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
   console.log ('a');
    console.log(__dirname);
    res.end();
});

app.get('/test', function (req,res) {
    console.log(S3_BUCKET);

});
