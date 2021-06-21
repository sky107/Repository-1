const Product=require('../models/products');
//convention capital letter




exports.getAddProduct=(req,res,next)=>{




};


exports.postAddProduct=(req,res,next)=>{
	const product=new Product(req.body.title);
	product.save();
}