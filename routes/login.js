var express = require('express');
var router = express.Router();
var login = require('../controller/login')

router.post('/', login.processLogin)

module.exports = router;
