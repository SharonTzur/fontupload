var express = require('express');
var bodyParser = require('body-parser');
var app = express();
var multer = require('multer');
var mongoose = require('mongoose');
var db = require('./db');
var globals = require('./globals');
var r = require('./route');

app.use(bodyParser.json());       // to support JSON-encoded bodies
app.use(bodyParser.urlencoded({     // to support URL-encoded bodies
    extended: true
}));

//    routers
r.route(app, [ 'upload', 'load' , 'save', 'test'  ]);

//app.set('views', 'cloud/views');
//app.set('view engine', 'ejs');

app.all('*', function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE,OPTIONS');
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});

app.get('/', function (req, res) {
    res.send('Hello World!');
});

app.set('port', process.env.PORT || 3020);

var server = app.listen(app.get('port'), function () {

    var host = server.address().address;
    var port = server.address().port;

    console.log('Example app listening at http://%s:%s', host, port);
    globals.init(mongoose);

});

app.use('/uploads', express.static('./uploads/'));
app.use(express.static('./public/'));

app.use(multer({
    dest                : './uploads/',
    rename              : function (fieldname, filename) {
        return filename;
    },
    onFileUploadStart   : function (file) {
        console.log(file.originalname + ' is starting ...')
    },
    onFileUploadComplete: function (file) {
        console.log(file.fieldname + ' uploaded to  ' + file.path);
        //done=true;
    }
}));

var mongodb = mongoose.connection;
mongodb.on('error', console.error.bind(console, 'connection error:'));
mongodb.once('open', function () {
    db.init(this.base);
});

