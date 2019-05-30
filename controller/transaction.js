const db = require('../models/db')
const momentz = require('moment-timezone')

exports.add = (req,res) => {
    var ownerEmail = req.body.ownerEmail;
    var cashierEmail = req.body.cashierEmail
    var name = req.body.name
    var count = req.body.count
    var price = req.body.price
    var total = req.body.total
    var money = req.body.money
    var change = req.body.change

    console.log(cashierEmail)

    db.Cashier.findOne({
        where: {
            email: cashierEmail
        },
    }).then(cashier => {
        var d = new Date()
        var month = momentz.tz(d.getMonth()+1,'MM','UTC').clone().tz('Asia/Jakarta').format('M')
        console.log(cashier.month,month)
        if(cashier.month == month) {
            cashier.perMonth = cashier.perMonth + 1
            cashier.total = cashier.total + 1
        }
        else {
            cashier.perMonth = 0
            cashier.month = month
            cashier.total = cashier.total + 1
        }
        cashier.reload().then(rel => {
            db.Cashier.update({
                month: cashier.month,
                perMonth: cashier.perMonth,
                total: cashier.total
            }, {
                where: {
                    email: cashier.email
                }
            })
        })
    })

    // db.Cashier.update({
        
    // },{
    //     where: {
    //         email: cashierEmail
    //     }
    // }).then(result => {
    //     var d = new Date()
    //     var month = momentz.tz(d.getMonth()+1,'MM','UTC').clone().tz('Asia/Jakarta').format('M')
    //     result.total += 1
    //     console.log(result.month,month)
    //     if(result.month == month) result.perMonth += 1
    //     else {
    //         result.month = month
    //         result.perMonth = 0 
    //     }
    // })

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
            ownerEmail: ownerEmail,
            cashierEmail: cashierEmail
        })
    })
}