const db = require('../models/db')

exports.select = (req,res) => {
    var email = req.body.email

    // db.Setting.sync({force: true}).then(function () {
    //     db.Setting.create({
    //         email: email,
    //         store: ['Pengkolan','At Turun wa Turun'],
    //         address: ['jalan deket masjid','jalan yang turun']
    //     })
    // })

    db.Setting.findOne({
        where: {
            email: email
        }
    }).then(result => {
        return res.json(result)
    })
}

exports.update = (req,res) => {
    var b = req.body
    // var a = b.toString()
    // var c = JSON.parse(a)
    // console.log(b)

    var email = b.email
    var store = b.store
    var addr = b.address

    db.Setting.update({
        store: store,
        address: addr
    }, {
        where: {
            email: email
        }
    }).then(result => {
        // console.log(result)
        res.json({
            status: 200,
            message: 'success',
            email: email
        })
    }).catch(err => {
        console.log(err)
    })
}