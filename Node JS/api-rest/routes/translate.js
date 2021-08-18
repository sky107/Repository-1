/************************************
* Author : Siddharth Kumar Yadav
* Email: siddharthsk101@gmail.com
************************************/

const express=require('express');
const {check,body}=require('express-validator');
const router=express.Router();
const auth=require('../controllers/auth');
const translate=require('../controllers/translate');


router.post('/translate',translate.postTextTranslate);

module.exports=router;