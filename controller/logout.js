exports.processLogout = (req,res) => {
    if(req.session.email) req.session.destroy()
    res.json({
        status: 200,
        message: 'Successfully logout'
    })
}