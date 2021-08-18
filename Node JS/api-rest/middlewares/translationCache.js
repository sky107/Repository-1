
const { reset } = require('nodemon');
const redisClient = require('../util/redis');

module.exports = (req, res, next) => {

    const { transText, to_lang, from_lang } = req.body;

    if (to_lang == from_lang) {
        return res.json({
            result: [{
                translation: transText
            }]
        })
    }

    redisClient.get(transText.trim(), (err, data) => {
        if (err) throw err;

        if (data === null) next();
        else {
            data = JSON.parse(data);

            if (data[to_lang]) {

                res.status(200).send({
                    result: [{
                        translation: data[to_lang]
                    }]
                })

            }
            else if (data) {

                res.locals.isPresentinRedis = true;
                res.locals.existingData = data

                next();
            }
        }
    });
};

