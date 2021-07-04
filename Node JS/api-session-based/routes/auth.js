/************************************
/************************************
* Author : Siddharth Kumar Yadav
* Email: siddharthsk101@gmail.com
************************************/
const express=require('express');
const {check,body} =require('express-validator');
const router=express.Router();
const isAuth=require('../middleware/is-auth');
const User=require('../models/user');
const auth=require('../controllers/auth');

router.post('/register',
	[check('email')
	.isEmail() //means anywhere cookie , params , body
	.normalizeEmail()
	.withMessage('Please Enter valid Email Address')
	.custom((value,{req})=>{
		if(value==='admin@gmail.com'){
			throw new Error("This email is Mysteriouos")
		}
		return true;
	}),
	body('password','Please enter a password with only numbers and text with atlest 5 characters')//means body
	.isLength({min:5})
	],
	auth.postRegisterUser)
	//WE CAN CONFIGUIRE CONFIRM PASSWORD HERE ONLY USING EXPRESS CUSTOM VALIDATOR

router.post('/login',auth.postLoginUser);

router.post('/logout',isAuth,auth.postLogout);

router.get('/server',isAuth,auth.getServer);

router.post('/reset',auth.postPasswordReset); //to enter the email address

router.get('/reset/:token',auth.getPasswordReset); // sent to email

router.post('/new-password',auth.postNewPassword); //post request for new password

module.exports=router;