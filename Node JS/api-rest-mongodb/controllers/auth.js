/** Siddharth Kumar Yadav
* © All rights reserved 
*/
const crypto=require('crypto');
const bcrypt=require('bcrypt');
const jwt=require('jsonwebtoken');

const User=require('../models/user');
const { rmSync } = require('fs');


exports.postRegisterUser=async (req,res,next)=>{
    const {name,email,password}=req.body;
    
    
    let user = await User.findOne({email: req.body.email});   
    if (user) return res.status(400).send("Already exists");


    
    bcrypt.hash(password,12)
    .then(hashedPassword=>{
        const user=new User({
            name:name,
            email:email,
            password:hashedPassword
        });
        user.save();
    }
    )
    .then(resp=>{
        res.status(201).json({ response:"created" });   
    })
    .catch(err=>{
        res.status(503);
        return next(err);
    })
}


exports.postLoginUser=(req,res,next)=>{

    const {email,password}=req.body;

    let userTobeLogin;

    User.findOne({email:email})
    .then(user=>{
        if(user!==null){
            userTobeLogin=user;
            return bcrypt.compare(password,user.password)
        }else
       { errors.email = "User not found";
        res.status(404).json({ errors });}
      
    })
    .then(result=>{
        const jwtToken=jwt.sign({
            userId:userTobeLogin._id.toString(),
            email:userTobeLogin.email
        },'sky',{
            expiresIn:"720hr"
        })


        if(result){
            res.json({
                response:"Logged in",
                token:jwtToken,
                name:userTobeLogin.name,
                email:userTobeLogin.email
            })
        }else{
            res.json({response:"Invalid Credentials"})
        }
    })
    .catch(err=>{
        res.json({errorMessage:"User Not Found"})
    })

}




