const db = require('../models/db')

exports.selectLog = (req,res) => {
    // var email = req.body.email

    // db.Trans.findAll({
    //     where: {
    //         ownerEmail: email
    //     }
    // }).then(result => {
    //     res.json(result)
    // })

    db.Trans.destroy()
    db.Cashier.destroy()
    db.Owner.destroy()
    db.Setting.destroy()
}