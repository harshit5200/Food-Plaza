const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
const config = require('config');
const express = require('express');
const User = require('../../models/User');

const router = express.Router();

router.post('/', (req, res) => {
    const {email, password, token} = req.body;

    if(token){
        try{
            const decoded = jwt.verify(token, config.get('jwtSecret'));
            req.user = decoded;

            User.findById(req.user.id).then(user => {
                jwt.sign({
                    id: user.id
                }, config.get('jwtSecret'), {expiresIn: 3600}, (err, token) => {
                    if (err) throw err;
                    res.json({
                        token,
                        message: "LogIn Successfully!",
                        user:{
                            id: user.id,
                            firstName: user.firstName,
                            lastName: user.lastName,
                            email: user.email
                        },
                        success: true
                            })
                        }
                    )
                })
                .catch((err) => {
                    res.json({
                        message: 'User Not Found!',
                        success: false
                    })
                })
            }   
        catch(e){
            res.json({
                message: 'Token Invalid',
                success: false
                })
            }
        }

    else{
        if(!email || !password){
            return res.json({
                message:"Please Enter All Required Details",
                success: false
            })
        }

        User.findOne({email}).then(user => {
            if (!user){
                return res.json({
                    message: "User Doesn't Exists!",
                    success: false
                })
            }
        bcrypt.compare(password, user.password).then(ismMatch => {
            if(!ismMatch){
                return res.json({
                    message: 'Invalid Credentials!',
                    success: false
                })
            }

            jwt.sign({id: user.id}, config.get('jwtSecret'), {expiresIn: 3600}, (err, token) => {
                if (err) throw err;
                res.json({
                    success: true,
                    token,
                    user: {
                        id: user.id,
                        email: user.email,
                        }
                    })
                })
            })
        })
    }
})

module.exports = router;
