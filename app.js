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

var server = app.listen(app.get('port'), function () {

    var host = server.address().address;
    var port = server.address().port;

    console.log('Example app listening at http://%s:%s', host, port);

    console.log(__dirname);

});
app.use(express.static('./uploads/'));

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