const express=require('express');
const adminRoutes=require('./routes/admin');
const shopRoutes=require('./routes/shop');
const path=require('path');


//use does not match exact but get do


const bodyParser=require('body-parser');
const app=express();

app.use(bodyParser.urlencoded({extended:false}));
app.use(express.static(path.join(__dirname,'public')));
//not like a function just like a object , order matter of middleware
app.use('/admin',adminRoutes); //filtering paths make changes in that files also if any post request in form with relative path
app.use(shopRoutes);

//step by step so we need to add at the last when above not found
app.use((req,res,next)=>{
res.status(404).sendFile(path.join(__dirname,'views','404.html'));
});




//for parsing the input request as a json body paser is userd



//app.use is middleware which offers three argument and will not use other defined middlewares until we exectures next() inside first middleware

//by default it is get request 

//app.use('/',(req,res,next)=>{
//console.log("Inside middleware");
//console.log(req.body);
//by default body is configured by express in json form unlike in tradition http sever creation method using dependency http we need to split string obtained after Buffer with = in traditional html form 


//to send the responsed 
//Note : in tradition create web server we need to configure header as text/html but in express it gets automatically adjusted But make sure html content should be in a single line else nodejs will throw error

//res.send('<h1>Hello world</h1><button>Hello world</button>');
//next();
//to go to the next middleware of the funnel
//});

//2nd middleware
//app.use((req,res,next)=>{
//console.log("Inside another middleware");
//console.log("Siddharth Kumar Yadav");
//})

app.listen(4545,()=>console.log("Server running"));