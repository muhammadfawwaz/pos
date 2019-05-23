const db = require('../models/db')

exports.processRegister = (req,res) => {
    var email = req.body.email
    var username = req.body.username
    var password = req.body.password

    db.Owner.sync({force: false}).then(function () {
        var ins = db.Owner.create({
            email,
            username,
            password,
        })
    
        return res.send(JSON.stringify(ins))
    });
}