
What is mongoose?



An Object-Document-Mapping library




It allows to create models to handle with database easily




Schemas & Models, Instances, Queries me helpful



const mongoose=require('mongoose');

const Schema=mongoose.Schema;

//mongodb is schemales

const productSchema=new Schema({

//_id will be automatically added

title:{

	type:String ,
	
	required:true	
	
	},
	
	price:{
	
	type:Number,
	
	required:true
	
	},
	
	description:{
	
	type:String,
	
	required:true
	
	},
	
	imageUrl:{
	
	type:String,
	
	required:true
	
	}

});

module.exports=mongoose.model('Product',productSchema);
			     //this name will changed to lowercase and will be added as collection in mongodb , databse name will be 				  pickup from url during connection
