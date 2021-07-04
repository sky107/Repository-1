/************************************
* Author : Siddharth Kumar Yadav
* Email: siddharthsk101@gmail.com
************************************/
const crypto=require('crypto');
const bcrypt=require('bcrypt');
const User=require('../models/user');
const {validationResult}=require('express-validator');


exports.postRegisterUser=(req,res,next)=>{

	const errors=validationResult(req);

	if(!errors.isEmpty()){
		return res.status(422).json({
			errorMessage:errors.array()
		})
	}
	console.log(req.body);
	const name=req.body.name;
	const email=req.body.email;
	const password=req.body.password;

	
	
	
	



	bcrypt.hash(password,12)
	.then(hashedResult=>{


		const user=new User({
		name:name,
		email:email,
		password:hashedResult
	});

	user.save()
	
	})
	.then(result=>{
		res.sendStatus(201);
	})
	.catch(err=>{res.status(200);return next(err);});
}

exports.postLoginUser=(req,res,next)=>{
	const email=req.body.email.trim();
	const password=req.body.password;
	let userTobeLogin;
	User.findOne({email:email})
	.then(user=>{

		console.log("USER IS THERE");

		if(user!==null)
		{
			userToBeLogin=user;
			return bcrypt.compare(password,user.password)
		}
		else{
			res.json({errorMessage:"User Not Found"});
		}

	})
	.then(result=>{

		//note if comparison is false then also it enters this block
		// console.log(result);

		if(result)
		{req.session.data=userToBeLogin;
				res.json({response:"Logged In"});}
	    else{
	    	res.json({response:"Invalid Credential"});
	    }
	})
	.catch(err=>{console.log(err)
			res.json({errorMessage:"User Not Found"});
	});



}

exports.getServer=(req,res,next)=>{
	console.log(req.session.data); 
	if(req.session.data!==undefined){
		res.status(200).json(req.session.data);
	}
	else{
		res.status(401).json({response:"Please Log In"})
	}
}


exports.postLogout=(req,res,next)=>{
	req.session.destroy(e=>{
		res.json({response:"Logout Success"})
	});

}



exports.postPasswordReset=(req,res,next)=>{
	crypto.randomBytes(32,(err,buffer)=>{
		if(err){
			return res.status(500).json({response:"Server Error"})
		}
		const token=buffer.toString('hex');
		User.findOne({email:req.body.email})
		.then((user)=>{
			if(!user){
				res.json({errorMessage:'No account with that email found'});
				return res.end();
			}
			user.resetToken=token;
			user.resetTokenExpiration=Date.now()+3600000;
			return user.save();
		})
		.then(result=>{
			//nodemailer code
			return res.json({response:"Success"})

		})
		.catch(err=>res.json({errorMessage:"Something went wrong"}));
	})
}

exports.postNewPassword=(req,res,next)=>{
	console.log(req.body);
	const resetToken=req.body.token;
	const newPassword=req.body.newPassword;
	const confirmNewPassword=req.body.confirmNewPassword;
	if(newPassword!==confirmNewPassword){
		res.json({errorMessage:"Password and Confirm password Not Matching"});
	}
	let userToBeReset;
	User.findOne({resetToken:resetToken,resetTokenExpiration:{$gt:Date.now()}})
	.then(user=>{
		if(!user){
			res.json({errorMessage:"User Not Found"})
		}
		userToBeReset=user;
		console.log(newPassword,"HASING ");
		return bcrypt.hash(newPassword,12);
	})
	.then(hashedPassword=>{
		console.log("USER TO BE RESET ",userToBeReset);
		userToBeReset.password=hashedPassword;
		userToBeReset.resetToken=undefined;
		userToBeReset.resetTokenExpiration=undefined;
		return userToBeReset.save();
	})
	.then(result=>{
		console.log("CHANGED PASSWORD");
		res.json({response:"Password Changed Successfully"})
	})
	.catch(err=>{console.log(err);res.json({errorMessage:"Something went wrong"})})
	
}

exports.getPasswordReset=(req,res,next)=>{
	console.log(req.params.token);
	res.render('password_reset',{
		pageTitle:'Password Reset Form',
		token:req.params.token
	});
}