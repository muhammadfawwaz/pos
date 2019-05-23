const db = require('../models/db')
let jwt = require('jsonwebtoken');

exports.tesSession = (req,res) => {
    res.json(req.session)
}

exports.processLogin = (req,res) => {
    var email = req.body.email
    var password = req.body.password

    db.Owner.findOne({
        where: {
            email: email
        }
    }).then(result => {
        if(result) {
            if(password == result.password) {
                let token = jwt.sign({
                    email: email,
                    password: password
                },process.env.SESSION_SECRET,{ expiresIn: '24h'})
            
                res.json({
                    status: 200,
                    token: token,
                    message: 'Logging in success'
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