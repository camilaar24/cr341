const user = require('../models/user')
const bcrypt = require ('bcryptjs')
const jwt = require('jsonwebtoken')


const register = (req, res, next) => {
    bcrypt.hash(req.body.password, 10, function(err, hashedPass){
        if(err) {
            res.json({
                error: err
            })
        }
    })
    let user = new user ({
        name: req.body.name,
        email: req.body.email,
        phone: req.body.phone,
        password: hashedPass
    })
    user.save()
    .then(user =>{
        res.json({
            message: 'An error occured!'
        })
    })
}

module.exports = {
    register
}