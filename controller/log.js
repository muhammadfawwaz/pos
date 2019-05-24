const db = require('../models/db')

exports.selectLog = (req,res) => {
    db.Trans.sync({force: true}).then(function () {
        db.Trans.create({
            ownerEmail: 'muhammad.afif81@gmail.com',
            cashierEmail: 'anggara@dimas.co',
            name: ['sabun', 'odol', 'permen'],
            count: [1,1,3],
            price: [2800,5000,100],
            total: 8100,
            money: 10000,
            change: 1900
        })

        db.Trans.create({
            ownerEmail: 'muhammad.afif81@gmail.com',
            cashierEmail: 'anggara@dimas.co',
            name: ['lele'],
            count: [2],
            price: [6000],
            total: 12000,
            money: 15000,
            change: 3000
        })
    })
}