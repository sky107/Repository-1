const express=require('express');
const router=express.Router();








router.post('/login',(req,res,next)=>{
console.log(req.body);
res.status(200).json({message:'login route'})

});

router.post('/register',(req,res,next)=>{
console.log(req.body);
res.status(200).json({message:'register route'})
});

module.exports=router;