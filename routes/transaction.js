var express = require('express');
var router = express.Router();
var transaction = require('../controller/transaction')

router.post('/add', transaction.add)

module.exports = router;
