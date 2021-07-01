/************************************
* Author : Siddharth Kumar Yadav
* Email: siddharthsk101@gmail.com
************************************/
module.exports=(req,res,next)=>{
	console.log(req.session);
	if(!req.session.data){
		return res.status(401).json({response:"Unauthorized"})
	}
	next();
}
