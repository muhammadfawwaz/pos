const db = require('../models/db')

exports.select = (req,res) => {
    var email = req.body.email

    db.Setting.findOne({
        where: {
            email: email
        }
    }).then(result => {
        return res.json(result)
    })
}

exports.update = (req,res) => {
    var email = req.body.email
    var store = req.body.store
    var addr = req.body.address

    db.Setting.update({
        store: store,
        address: addr
    }, {
        where: {
            email: email
        }
    }).then(result => {
        res.json({
            status: 200,
            message: 'success'
        })
    })
}