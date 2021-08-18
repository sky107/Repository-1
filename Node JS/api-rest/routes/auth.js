/************************************
* Author : Siddharth Kumar Yadav
* Email: siddharthsk101@gmail.com
************************************/

const express = require('express');
const { check, body } = require('express-validator');
const router = express.Router();
const auth = require('../controllers/auth');


router.post('/register', [check('email').isEmail().normalizeEmail().withMessage('Please Enter valid Email'),
check('name').isLength({ min: 2 }).withMessage("Please Enter valid Name")], auth.postRegisterUser);

module.exports = router;