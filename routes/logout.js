var express = require('express');
var router = express.Router();
var logout = require('../controller/logout')

router.post('/', logout.processLogout)

module.exports = router;
