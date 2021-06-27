/************************************
* Author : Siddharth Kumar Yadav
* Email: siddharthsk101@gmail.com
************************************/
const crypto=require('crypto');
const bcrypt=require('bcrypt');

const {validationResult}=require('express-validator');


exports.postRegisterUser=(req,res,next)=>{

	const errors=validationResult(req);

	if(!errors.isEmpty()){
		return res.status(422).json({
			errorMessage:errors.array()
		})
	}
	const name=req.body.name;
	const email=req.body.email;
	const password=req.body.password;

	const user=new User({
		name:name,
		email:email,
		password:password
	});

	user.save()
	.then(result=>{
		res.sendStatus(201);
	})
	.catch(err=>{res.status(200);return next(err);});
}

exports.postLoginUser=(req,res,next)=>{
	const email=req.body.email.trim();
	const password=req.body.password;

	User.findOne({email:email,password:password})
	.then(user=>{
		if(user!==null)
		{req.session.user=user;
				res.json({response:"Logged In"});}
				else{
					res.json({response:"User Not Found"});
				}
	})
	.catch(err=>{console.log(err)
		res.json({response:"Something went wrong"});
	});



}

exports.getServer=(req,res,next)=>{
	if(req.session.user!==undefined){
		res.status(200).json(req.session.user);
	}
	else{
		res.status(401).json({response:"Please Log In"})
	}
}


exports.postLogout=(req,res,next)=>{
	req.session.destroy(e=>{
		res.json({response:"Logout Success"});
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
				req.flash('error','No account with that email found')
				return res.end();
			}
			user.resetToken=token;
			user.resetTokenExpiration=Date.now()+3600000;
			return user.save();
		})
		.then(result=>{
			//nodemailer code
		})
		.catch(err=>console.log(err));
	})
}

exports.postNewPassword=(req,res,next)=>{
	const resetToken=req.params.token;
	const newPassword=req.body.newPassword;
	let userToBeReset;
	User.findOne({resetToken:resetToken,resetTokenExpiration:{$gt:Date.now()}})
	.then(user=>{
		userToBeReset=user;
		return bcrypt.hash(newPassword);
	})
	.then(hashedPassword=>{
		userToBeReset.password=hashedPassword;
		userToBeReset.resetToken=undefined;
		userToBeReset.resetTokenExpiration=undefined;
		return userToBeReset.save();
	})
	.then(result=>{
		//
	})
	.catch(err=>console.log(err))

}