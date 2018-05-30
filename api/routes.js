var express = require('express');
var app = express();
var router = express.Router();

const getChannel = require('./src/channel');

router.route('/')

  .post(getChannel)

module.exports = router;