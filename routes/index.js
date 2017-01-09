let express = require('express');
let router = express.Router();
let ip = require('ip');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express', host: ip.address() });
});

module.exports = router;
