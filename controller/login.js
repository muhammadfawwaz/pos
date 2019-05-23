const db = require('../models/db')

exports.tesSession = (req,res) => {
    res.json(req.session)
}

exports.processLogin = (req,res) => {
    var email = req.body.email
    var password = req.body.password

    if(req.session.email) {
        res.json({
            status: 200,
            message: "You was logged in"
        })
    }
    else {
        db.Owner.findOne({
            where: {
                email: email
            }
        }).then(result => {
            if(result) {
                if(password == result.password) {
                    req.session.email = email
                    res.json({
                        status: 200,
                        message: "Logging in success"
                    })
                }
                else {
                    res.json({
                        status: 401,
                        message: "Email or Password are wronggg"
                    })
                }
            }
            else {
                res.json({
                    status: 401,
                    message: "Email or Password are wrong"
                })
            }
        })
    }
}