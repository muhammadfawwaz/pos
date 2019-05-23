exports.processLogin = (req,res) => {
    var email = req.body.email
    var password = req.body.password

    if(req.session.username) {
        res.json({
            status: 200,
            message: "You was logged in"
        })
    }

    db.Owner.findOne({
        email: email
    }).then(result => {
        if(result) {
            if(password == result.password) {
                res.json({
                    status: 200,
                    message: "Logging in success"
                })
            }
            else {
                res.json({
                    status: 401,
                    message: "Username or Password are wrong"
                })
            }
        }
        else {
            res.json({
                status: 401,
                message: "Username or Password are wrong"
            })
        }
    })
}