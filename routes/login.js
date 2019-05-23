var express = require('express');
var router = express.Router();
var login = require('../controller/login')

router.post('/', login.processLogin)
router.get('/', login.tesSession)

module.exports = router;
