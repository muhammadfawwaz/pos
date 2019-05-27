var express = require('express');
var router = express.Router();
var loginmobile = require('../controller/loginmobile')

router.post('/', loginmobile.processLogin)

module.exports = router;
