const db = require('../models/db')

exports.selectLog = (req,res) => {
    var email = req.body.email

    db.Trans.findAll({
        where: {
            ownerEmail: email
        }
    }).then(result => {
        res.json(result)
    })
}