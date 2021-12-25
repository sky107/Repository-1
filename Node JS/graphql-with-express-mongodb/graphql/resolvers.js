const User=require('../models/user');
const bcrypt=require('bcryptjs');
const validator=require('validator');


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
		}
}
