
const { response } = require('express');
const User = require('../models/user');

module.exports = (req, res, next) => {
    const { API_KEY } = req.query

    User.findAll({ where: { apiKey: API_KEY } })
        .then(response => {


            if (response.length === 0) {
                res.json({ response: "Invalid API Key" })
            } else {
                next();
            }
        })
        .catch(err => {
            return res.status(500).send({
                errorMessage: [{
                    "msg": err
                }]
            })
        })
    // next();
}