const express=require('express');
const router=express.Router();
const bcrypt=require('bcrypt');


//const prodcCOnter=require('./controllers');


//router.get('/add-produ',prodcutsController.getAddProd);



router.post('/login',async(req,res,next)=>{
console.log(req.body);


const email=req.body.email;
const password=req.body.password;

console.log(req.body);



if(email==='siddharthks101@gmail.com'){
console.log("verified");
// const hashedPassword= await bcrypt.hash('sky',12);

// console.log(hashedPassword);
bcrypt.compare(String("$2b$12$ozoW1BSYWj3KrKcFsWCzSuL/AHCZQH7EpVWR1Qag46eRMpNwCHZxO"),String(password))
.then(isTrue=>{
	if(isTrue===true){
		console.log("correct password");
	}else
	{
		console.log("invalid password");
	}
})
.catch(err=>console.log("BCRYPT ERROR",err))

}else{
// throw new Error("Email Address not found ");
}






res.status(200).json({message:'login route'})


});

router.post('/register',(req,res,next)=>{
console.log(req.body);
res.status(200).json({message:'register route'})
});

module.exports=router;