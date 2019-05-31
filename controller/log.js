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

    // db.Cashier.findAll().then(result => {
    //     res.json(result)
    // })

    // db.Trans.destroy({
    //     where: {},
    //     truncate: true
    // })
    // db.Cashier.destroy({
    //     where: {},
    //     truncate: true
    // })
    // db.Owner.destroy({
    //     where: {},
    //     truncate: true
    // })
    // db.Setting.destroy({
    //     where: {},
    //     truncate: true
    // })
}