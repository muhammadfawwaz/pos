const db = require('../models/db')

exports.select = (req,res) => {
    var email = req.body.email

    db.Product.findAll({
        where: {
            email: email
        }
    }).then(result => {
        res.json(result)
    })
}

exports.add = (req,res) => {
    var email = req.body.email
    var name = req.body.name
    var fund = req.body.fund
    var price = req.body.price

    db.findOne({
        where: {
            email: email
        }
    }).then(result => {
        var newName = result.name
        var newFund = result.fund
        var newPrice = result.price

        newName.push(name)
        newFund.push(fund)
        newPrice.push(price)

        db.Product.update({
            name: newName,
            fund: newFund,
            price: newPrice
        }, {
            where: {
                email: email
            }
        }).then(x => {
            res.json({
                status: 200,
                message: 'success'
            })
        })
    })
}

exports.delete = (req,res) => {
    var index = req.body.index
    var email = req.body.email

    db.findOne({
        where: {
            email: email
        }
    }).then(result => {
        var newName = result.name
        var newFund = result.fund
        var newPrice = result.price

        newName.splice(index,1)
        newFund.push(index,1)
        newPrice.push(index,1)

        db.Product.update({
            name: newName,
            fund: newFund,
            price: newPrice
        }, {
            where: {
                email: email
            }
        }).then(x => {
            res.json({
                status: 200,
                message: 'success'
            })
        })
    })
}

exports.update = (req,res) => {
    var b = req.body
    // var a = b.toString()
    // var c = JSON.parse(a)
    // console.log(b)

    var email = b.email
    var name = b.name
    var fund = b.fund
    var price = b.price
    var index = parseInt(b.index)

    db.Product.findOne({
        where: {
            email: email
        }
    }).then(result => {
        var newName = result.name
        var newFund = result.fund
        var newPrice = result.price

        newName[index] = name
        newFund[index] = fund
        newPrice[index] = price

        db.Product.update({
            name: newName,
            fund: newFund,
            price: newPrice
        }, {
            where: {
                email: email
            }
        }).then(x => {
            res.json({
                status: 200,
                message: 'success'
            })
        })
    })

    
}