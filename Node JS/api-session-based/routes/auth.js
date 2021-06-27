/************************************
* Author : Siddharth Kumar Yadav
* Email: siddharthsk101@gmail.com
************************************/
const express=require('express');
const router=express.Router();
const isAuth=require('../middleware/is-auth');
const User=require('../models/user');
const auth=require('../controllers/auth');

router.post('/register',auth.postRegisterUser);

router.post('/login',auth.postLoginUser);

router.post('/logout',isAuth,auth.postLogout);

router.get('/server',isAuth,auth.getServer);

router.post('/reset',auth.postPasswordReset);

router.post('/reset/:token',auth.postNewPassword);

module.exports=router;