/**
 * Created by admin on 4/26/2015.
 */
var express = require('express');
var router = express.Router();

router.post('/', function (req, res) {
    //console.log(req);
    console.log('BODY > ' + JSON.stringify(req.body));
    console.log('params > ' + JSON.stringify(req.params));
    console.log('QUERY > ' + JSON.stringify(req.query));
    res.send('success');

});

module.exports = router;
