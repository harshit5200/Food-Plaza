const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
const config = require('config');
const express = require('express');
const router = express.Router();

const User = require('../../models/User');

router.post('/', (req, res) => {
    const { email, firstName, lastName, password, mobileNo, address, city, state, pincode } = req.body;
    if (!email || !firstName || !lastName || !password || !mobileNo || !address || !city || !state || !pincode){
        res.json({
            success: false,
            message: "Please Fill All The Required Details!"
        })
    }
    
    User.findOne({
        email
    }).then(user => {
        if (user){
            return res.json({
                success: false,
                message: "User Already Exists!"
            })
        }
        
        const newUser = new User({
            email, firstName, lastName, password, mobileNo, address, city, state, pincode
        })
        
        bcrypt.genSalt(10, (err, salt) => {
            bcrypt.hash(newUser.password, salt, (err, hash) => {
                if (err){
                    throw err;
                }
                newUser.password = hash
                newUser.save().then(user => {
                    jwt.sign({
                        id: user._id
                    },
                        config.get('jwtSecret'),
                        {expiresIn: 3600},
                        (err, token) => {
                            if (err){
                                throw err;
                            }
                            res.json({
                                success: true,
                                message: "Registration Completed!",
                                token,
                                user:{
                                    id: user._id,
                                    firstName: user.firstName,
                                    lastName: user.lastName,
                                    email: user.email
                                }
                            })
                        }
                    )
                })
            })
        })
    })
})

module.exports = router;