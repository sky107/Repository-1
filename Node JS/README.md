npm and Node as a build tool
-----
npm is a cli ,  to install & manage the function/algorithm that are isolated and ready to use for dev, called packages 


Example :

	  To install a specific version use | npm install <<name>>@<<version>> | Ex:express
	
	
	  To install development dependency | npm instlall <<name>> --save-dev | Ex:nodemon 
	
	
	
Basically , when we develop a react application so we use say, react-scripts that is also written in  nodejs which compiler the modern ReactJS code to miniifed optimised browser executable code by trasnforming using webpacks & other packages and npm acts a build tool also.
	
	
	
	
MVC
----------
MVC is a pattern to develop a web application mainly backend which structures the code into folder and functionaliy for efficient management and development during writing code. We should be clearly able to identify the  function and frontend separately

Models : are object responsible for represting data and working like fetching, saving, etc. Doesn't matter if you manage dta in memory,files , db. Contains data-related logics

Views : what user sees in the frontend. Shouldn't contain too much logic.

Controllers : connecting point of Views(Frontend) and Models (logics). Connects Model and View. should only make sure that the two can communicate (in both direction)







-----------------------------


Mongoose
----



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
