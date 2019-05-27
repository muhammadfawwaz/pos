const db = require('../models/db')

exports.add = (req,res) => {
    var ownerEmail = req.body.ownerEmail;
    var cashierEmail = req.body.cashierEmail
    var name = req.body.name
    var count = req.body.count
    var price = req.body.price
    var total = req.body.total
    var money = req.body.money
    var change = req.body.change

    db.Trans.create({
        ownerEmail: ownerEmail,
        cashierEmail: cashierEmail,
        name: name,
        count: count,
        price: price,
        total: total,
        money: money,
        change: change
    }).then(result => {
        res.json({
            status: 200,
            message: 'success',
        })
    })
}