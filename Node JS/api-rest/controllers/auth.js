/************************************
* Author : Siddharth Kumar Yadav
* Email: siddharthsk101@gmail.com
************************************/
const crypto = require('crypto');
const User = require('../models/user');
const { validationResult } = require('express-validator');

exports.postRegisterUser = (req, res, next) => {

    const errors = validationResult(req);

    if (!errors.isEmpty()) {
        return res.status(422).json({
            errorMessage: errors.array()
        })
    }

    const { email, name } = req.body;



    crypto.randomBytes(12, (err, buffer) => {
        if (err)
            return res.status(500).json({
                errorMessage: [{
                    "msg": "Server Error"
                }]
            })

        const apiKey = buffer.toString("hex").toUpperCase();
        User.findAll({ where: { email: email } })
            .then(user => {

                const newUser = {
                    name: name,
                    email: email,
                    apiKey: apiKey
                };

                if (user.length === 0) {

                    User.create(newUser)
                    res.status(201).json({
                        response: [newUser]
                    });

                } else {

                    res.status(409).json({
                        errorMessage: [{
                            "msg": "User already Exists"
                        }]
                    });
                }

            })
            .catch(err => { res.status(500); return next(err) })
    })

}