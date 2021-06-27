/************************************
* Author : Siddharth Kumar Yadav
* Email: siddharthsk101@gmail.com
************************************/
const mongoose=require('mongoose');
const Schema=mongoose.Schema;
const userSchema=new Schema({
	name:{
		type : String,
		required:true
	},email:{
		type : String,
		required:true
	},password:{
		type : String,
		required:true
	},resetToken:{
		type:String
	} ,
	resetTokenExpiration:{
		type:String
	}
}, { timestamps: true });

module.exports=mongoose.model('User',userSchema);
//mongoose takes model name and transform all lower case to add collection in db