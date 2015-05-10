/**
 * Created by admin on 4/26/2015.
 */
var express = require('express');
var router = express.Router();
var utils = require('./../util');

router.post('/', function (req, res) {
    //console.log(req);
    console.log('BODY > ' + JSON.stringify(req.body));
    console.log('params > ' + JSON.stringify(req.params));
    console.log('QUERY > ' + JSON.stringify(req.query));
    res.send('success');

});
router.get('/', function (req, res) {
    //console.log(req);
    console.log('BODY > ' + JSON.stringify(req.body));
    console.log('params > ' + JSON.stringify(req.params));
    console.log('QUERY > ' + JSON.stringify(req.query));
    utils.verifyInstance(req.query.instance, 'w7xAS1HDscOwYBYzw4jCqSfDhAU7BgPDqMOQOzlvw4jDnMK6wrJKw6fCoDUIcA==', req);
    res.send('success');

});

module.exports = router;
