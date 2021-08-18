/************************************
* Author : Siddharth Kumar Yadav
* Email: siddharthsk101@gmail.com
************************************/

const translate = require('@vitalets/google-translate-api');
const redisClient = require('../util/redis');

exports.postTextTranslate = (req, res, next) => {

    const { transText, from_lang, to_lang } = req.body;

    const inputData = from_lang ? { from: from_lang, to: to_lang } : { to: to_lang };

    translate(transText, inputData).then(response => {

        const result = response.text;

        if (res.locals.isPresentinRedis === true) {
            let newData = { ...res.locals.existingData, [to_lang]: result };
            redisClient.setex(transText, 18000, JSON.stringify(newData));
        }
        else {
            redisClient.setex(transText, 18000, JSON.stringify({ [to_lang]: result }));
        }
        res.json({
            result: [{ translation: result }]
        });

    }).catch(error => {
        res.status(400).send({
            errorMessage: [{
                msg: error.message
            }]
        })
    });
}