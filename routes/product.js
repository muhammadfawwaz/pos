var express = require('express');
var router = express.Router();
var product = require('../controller/product')

router.post('/select', product.select)
router.post('/update', product.update)
router.post('/delete', product.delete)
router.post('/add', product.add)

module.exports = router;
