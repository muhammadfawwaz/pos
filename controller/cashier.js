const db = require('../models/db')
const momentz = require('moment-timezone')

exports.selectCashier = (req,res) => {
    var email = req.body.email

    // db.Cashier.sync({force: false}).then(function () {
        db.Cashier.findAll({
            where: {
                emailOwner: email
            }
        }).then(result => {
            db.Setting.findOne({
                where: {
                    email: email
                }
            }).then(result1 => {
                res.json({
                    result: result,
                    result1: result1
                })
            })
        })
    // })
}

exports.addCashier = (req,res) => {
    var email = req.body.email
    var name = req.body.name
    var password = req.body.password
    var emailOwner = req.body.emailOwner
    var branch = req.body.branch
    var d = new Date()
    var month = momentz.tz(d.getMonth(),'MM','UTC').clone().tz('Asia/Jakarta').month()
    console.log(d.getMonth(),month,branch)

    // db.Cashier.sync({force: false}).then(function () {
        db.Cashier.create({
            email: email,
            name: name,
            password: password,
            emailOwner: emailOwner,
            month: month,
            perMonth: [],
            total: 0,
            branch: branch
        }).then(result => {
            return res.json({
                status: 200,
                email: email,
                message: 'success'
            })
        }).catch(err => {
            console.log(err)
            return res.json({
                status: 401,
                email: email,
                message: err
            })
        })
    // })
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