/************************************
* Author : Siddharth Kumar Yadav
* Email: siddharthsk101@gmail.com
************************************/
const express=require('express');
const router=express.Router();
const users=require('../controllers/users');
const isAuth=require('../middleware/is-auth');
router.get('/users',isAuth,users.getAllUsers);
router.post('/users',isAuth,users.postAddUser);
router.get('/users/:userId',isAuth,users.getUser);
router.put('/users/:userId',isAuth,users.putUser);
router.delete('/users/:userId',isAuth,users.deleteUser);
module.exports=router;