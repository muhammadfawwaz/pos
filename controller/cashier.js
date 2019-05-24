const db = require('../models/db')

exports.selectCashier = (req,res) => {
    var email = req.body.email

    db.Cashier.sync({force: false}).then(function () {
        db.Cashier.findAll({
            where: {
                emailOwner: email
            }
        }).then(result => {
            res.json(result)
        })
    })
}

exports.addCashier = (req,res) => {
    var email = req.body.email
    var name = req.body.name
    var password = req.body.password

    db.Cashier.sync({force: false}).then(function () {
        db.Cashier.create({
            email: email,
            name: name,
            password: password
        }).then(result => {
            return res.json({
                status: 200,
                email: email,
                message: 'success'
            })
        }).catch(err => {
            return res.json({
                status: 401,
                email: email,
                message: err
            })
        })
    })
}

exports.deleteCashier = (req,res) => {
    var email = req.body.email

    db.Cashier.destroy({
        where: {
            email: email
        }
    }).then(result => {
        return res.json({
            status: 200,
            email: email,
            message: 'success'
        })
    }).catch(err => {
        return res.json({
            status: 401,
            email: email,
            message: err
        })
    })
}