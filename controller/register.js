const db = require('../models/db')

exports.processRegister = (req,res) => {
    var email = req.body.email
    var name = req.body.name
    var password = req.body.password

    db.Owner.create({
        email: email,
        name: name,
        password: password
    }).then(result => {
        return res.json(result)
    })
}