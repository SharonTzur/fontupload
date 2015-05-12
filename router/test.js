/**
 * Created by admin on 4/26/2015.
 */
var express = require('express');
var router = express.Router();
var utils = require('./../util');
var db = require('./../db');

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
router.get('/subscribe',  function (req, res) {
    db.instance.findById(req.query.instanceId)
        .select('isPaid subscriptions')
        .exec(function (err, instance) {
            instance.subscriptions.push({start:Date.now(), end:null});
            instance.isPaid = true;
            instance.save(function (err, newInstace) {
                res.end();
            })
        })
});
router.get('/unsubscribe', function (req, res) {
    db.instance.findById(req.query.instanceId)
        .select('isPaid subscriptions')
        .exec(function (err, instance) {
            var last = instance.subscriptions.length - 1;
            instance.subscriptions[last].end = Date.now();
            instance.isPaid = false;
            instance.save(function (err, newInstace) {
                res.end();
            })
        })
});
module.exports = router;
