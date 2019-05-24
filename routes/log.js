var express = require('express');
var router = express.Router();
var log = require('../controller/log')

router.post('/', log.selectLog)

module.exports = router;
