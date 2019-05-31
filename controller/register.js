const db = require('../models/db')

exports.processRegister = (req,res) => {
    var email = req.body.email
    var name = req.body.name
    var password = req.body.password

    // db.Setting.sync({force: true}).then(function () {
        db.Setting.create({
            email: email,
            store: [],
            address: []
        })
    // })

    db.Product.create({
        email: email,
        name: [],
        fund: [],
        price: []
    })

    db.Owner.create({
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
}