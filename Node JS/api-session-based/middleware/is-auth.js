/************************************
* Author : Siddharth Kumar Yadav
* Email: siddharthsk101@gmail.com
************************************/
module.exports=(req,res,next)=>{
	if(!req.session.data){
		return res.status(401).json({response:"Unauthorized"})
	}
	next();
}
