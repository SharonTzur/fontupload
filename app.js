var express = require('express');
var bodyParser = require('body-parser');
var app = express();
var multer = require('multer');
var mongoose = require('mongoose');
var db = require('./db');
var globals = require('./globals');
var r = require('./route');
var utils = require('./util');
var ejs = require('ejs');

app.all('*', function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE,OPTIONS');
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});

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

app.use(bodyParser.json());       // to support JSON-encoded bodies
app.use(bodyParser.urlencoded({     // to support URL-encoded bodies
    extended: true
}));

//    routers
r.route(app, ['upload', 'load', 'save', 'test', 'webhook',
    ['seo', 'widgetAndSettings'],
    ['settings', 'widgetAndSettings'],
    ['widget', 'widgetAndSettings']]);



app.set('views', 'public');
app.set('view engine', 'ejs');


app.set('port', process.env.PORT || 8080);

var server = app.listen(app.get('port'), function () {

    var host = server.address().address;
    var port = server.address().port;

    console.log('Example app listening at http://%s:%s', host, port);
    globals.init(mongoose);

});

app.use('/uploads', express.static('./uploads/'));
app.use(express.static('./public/'));
app.use('/demo', function (req,res)
{
    res.sendFile( __dirname +  '/public/demo.html');
} );


var mongodb = mongoose.connection;
mongodb.on('error', console.error.bind(console, 'connection error:'));
mongodb.once('open', function () {
    db.init(this.base);
});

app.post('/gemsapp', function(req, res){


    var options = {
        root: __dirname + '/',
        dotfiles: 'deny',
        headers: {
            'x-timestamp': Date.now(),
            'x-sent': true
        }
    };

    //res.send('Hello');
    res.sendFile('./public/gems/index.html',options)
});
app.get('/gemsapp', function(req, res){


    var options = {
        root: __dirname + '/',
        dotfiles: 'deny',
        headers: {
            'x-timestamp': Date.now(),
            'x-sent': true
        }
    };

    //res.send('Hello');
    res.sendFile('./public/gems/index.html',options)
});
