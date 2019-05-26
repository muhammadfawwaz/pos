const db = require('../models/db')

exports.select = (req,res) => {
    var email = req.body.email

    db.Setting.sync({force: true}).then(function () {
        db.Setting.create({
            email: email,
            store: ['Pengkolan','At Turun wa Turun'],
            address: ['jalan deket masjid','jalan yang turun']
        })
    })

    // db.Setting.findOne({
    //     where: {
    //         email: email
    //     }
    // }).then(result => {
    //     return res.json(result)
    // })
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