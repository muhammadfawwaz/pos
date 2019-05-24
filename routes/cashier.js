var express = require('express');
var router = express.Router();
var cashier = require('../controller/cashier')

router.post('/add', cashier.addCashier)
router.post('/delete', cashier.deleteCashier)
router.post('/select', cashier.selectCashier)

module.exports = router;
