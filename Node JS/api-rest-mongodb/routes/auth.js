const express=require('express');
const router=express.Router();

const auth=require('../controllers/auth');

router.post('/register',auth.postRegisterUser);
router.post('/login',auth.postLoginUser);


module.exports=router;


