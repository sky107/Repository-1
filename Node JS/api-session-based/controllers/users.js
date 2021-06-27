/************************************
* Author : Siddharth Kumar Yadav
* Email: siddharthsk101@gmail.com
************************************/
const User=require('../models/user');
exports.postAddUser=(req,res,next)=>{
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
		// console.log("Saved");
		// res.send("Saved");
		res.sendStatus(201);
	})
	.catch(err=>{res.status(200);return next(err);});

}

exports.getAllUsers=(req,res,next)=>{
	User.find()
	.then(products=>{
		// console.log(products);
		res.status(200).json(products);
		// res.json(products).sendStatus(200);
	})
	.catch(err=>{res.status(500); return next(err);});
}

exports.getUser=(req,res,next)=>{
	const userId=req.params.userId;
	User.findById(userId)
	.then(user=>{
		console.log(user);
		res.status(200).json(user);
	})
	.catch(err=>{res.status(500); return next(err);});
}

exports.putUser=(req,res,next)=>{
	const userId=req.params.userId;
	const name=req.body.name;
	const email=req.body.email;
	const password=req.body.password;
	User.findById(userId)
	.then(user=>{
		user.name=name;
		user.email=email;
		user.password=password;
		return user.save();
	})
	.then(result=>{
		res.sendStatus(204)
	})
	.catch(err=>{res.status(500); return next(err);});
}

exports.deleteUser=(req,res,next)=>{
	const userId=req.params.userId;
	User.findByIdAndRemove(userId)
	.then(result=>{
		res.sendStatus(200);
	})
	.catch(err=>{res.status(500); return next(err);});
}