const db = require('../models/db')

exports.processRegister = (req,res) => {
    console.log(req.body)
    var email = req.body.email
    var name = req.body.name
    var password = req.body.password

    db.Owner.sync({force: true}).then(function () {
        db.Owner.create({
            email: email,
            username: username,
            password: password
        })
        return res.send(JSON.stringify({status: 200}))
    });
}