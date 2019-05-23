var express = require('express');
var router = express.Router();
var register = require('../controller/register')

router.post('/', register.processRegister)

module.exports = router;
