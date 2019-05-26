var express = require('express');
var router = express.Router();
var setting = require('../controller/setting')

router.post('/select', setting.select)
router.post('/update', setting.update)

module.exports = router;
