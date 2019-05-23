const db = require('../models/db')

exports.processRegister = (req,res) => {
    console.log(req.body)
    var email = req.body.email
    var username = req.body.username
    var password = req.body.password

    // db.Owner.sync({force: false}).then(function () {
    //     var ins = db.Owner.create({
    //         email: email,
    //         username: username,
    //         password: password
    //     })
    //     return res.send(JSON.stringify(ins))
    // });
}