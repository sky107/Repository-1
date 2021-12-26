const User=require('../models/user');
const Post =require('../models/post');
const bcrypt=require('bcryptjs');
const validator=require('validator');
const jwt=require('jsonwebtoken')

module.exports={
		hello(){
			return {text:"Hello world!",
			views:12324
		}
	},

	createUser: async function(args,req){
			const {email}=args.userInput
			console.log(args.userInput);
			const existingUser=await User.findOne({email:args.userInput.email})
			const errors=[];
			if(!validator.isEmail(args.userInput.email))
				errors.push({message:"Email is Invalid"});
			

			if(validator.isEmpty(args.userInput.password) || !validator.isLength(args.userInput.password,{min:5}))
				errors.push({message:"password too short"})

			if(errors.length > 0 ){
				console.log(errors);
				const error=new Error("Invalid Input")
				error.data=errors;
				error.code=422;
				throw error;
			}

			if(existingUser){
				const error=new Error("User already exisits");
				throw error;
			}

			const hashPw=await bcrypt.hash(args.userInput.password,12);
			const user=new User({
				email:args.userInput.email,
				name:args.userInput.name,
				password:hashPw
			});
			const createUser=await user.save();
			console.log(createUser);
			// return {_id:createUser._id.toString()};
			return {...createUser._doc,_id:createUser._id.toString()} // to transform object to string as _id is obj
		},
	login: async function(args,req) {
		
		const user=await User.findOne({email:args.email});

		if(!user){
			const error=new Error("User not found");
			error.code=401;
			throw error;
		}
		
		const isEqual=bcrypt.compare(args.password,user.password);
		if(!isEqual){
			const error=new Error("Passowrd is incorrect");
			error.code=401;
			throw error;
		}

		const token=jwt.sign({
			userId:user._id.toString(),
			email:user.email
		},'sky',{expiresIn:'1hr'});

		return {token:token,userId:user._id.toString()};
	},
	createPost: async function({postInput},req){

		if(!req.isAuth){
			const error=new Error("Not authenticated");
			error.code=401;
			throw error;
		}
		console.log("REACHING")


		const errors=[];
		if(validator.isEmpty(postInput.title) || !validator.isLength(postInput.title,{min:5}))
		{
			errors.push({message:'Title is Invalid'});
		}

		if(errors.length > 0){
			const error=new Error("Invalid input");
			error.data=errors;
			error.code=422;
			throw error;
		}

		const user=await User.findById(req.userId); // returns and obj
		if(!user){
			const error=new Error("Invalid User");
			error.code=401;
			throw error;
		}

		console.warn(user);

		const post=new Post({
			title:postInput.title,
			content:postInput.content,
			imageUrl:postInput.imageUrl,
			creator:user 
		})

		const createdPost=await post.save();

		user.posts.push(createdPost);

		await user.save();

		return {...createdPost._doc,_id:createdPost._id.toString(),createdAt:createdPost.createdAt.toISOString(),updatedAt:createdPost.updatedAt.toISOString()}
	},
	posts : async function({page},req){
			if(!req.isAuth){
			const error=new Error("Not authenticated");
			error.code=401;
			throw error;
		}

		if(!page){
			page=1;
		}

		const perPage=2;






		const totalPosts=await Post.find().countDocuments();

		const posts=await Post.find().sort({
			createdAt:-1
		})
		.skip((page-1)*perPage)
		.limit(perPage)
		.populate('creator');

		return {
			posts:posts.map(p=>{
				return {
					...p._doc,
					_id:p._id.toString(),
					createdAt:p.createdAt.toISOString(),
					updatedAt:p.updatedAt.toISOString(),
				}
			})
			,
			totalPosts:totalPosts
		}
	},
	post:async function({id},req){
		if(!req.isAuth){
			const error=new Error('Not authenticated');
			error.code=401;
			throw error
		}
		const post=await Post.findById(id).populate('creator')

		if(!post){
			const error=new Error("No post found");
			error.code=404;
			throw error
		}
		return {
			...post._doc,
			_id:post._id.toString(),
			createdAt:post.createdAt.toISOString(),
			updatedAt:post.updatedAt.toISOString()
		}
	}
}
