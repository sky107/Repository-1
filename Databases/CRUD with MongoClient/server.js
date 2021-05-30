const fs=require('fs');

const express=require('express');
const bodyParser=require('body-parser');
const MongoClient = require('mongodb').MongoClient;
const app=express();
app.use(bodyParser.urlencoded({extended:false}));

const uri = "mongodb+srv://testdb:4PHKYi39uENtjywf@cluster0.v48mv.mongodb.net/shop?retryWrites=true&w=majority";


const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });

app.get('/',(req,res,next)=>{
res.send('<h1>Form </h1> <form action="/add" method="POST">Name:<input name="name"/><br/>Email:<input name="email"/><br/><button type="submit"> LogIn</button></form>');
})

app.post('/add',(req,res,next)=>{
console.log(req.body);
res.redirect('/');
//res.send(`<h1>data submitted</h1>`);

const name=req.body.name;
const email=req.body.email;

client.connect(err => {


	
  const collection = client.db("test").collection("shop");	

  collection.insertOne({
	name:name,
	email:email})


//console.log("------------------------------");
//var cursor=client.db("test").collection("shop").find();
//cursor.each(function(err,doc){
//	console.log(doc);
//	});



//client.db("test").collection("shop").updateOne({
  //      "name": "siddharth"
  //  }, {
  //      $set: {
  //          "name": "sharukh khan"
  //      }
  //  });



//client.db("test").collection("shop").deleteOne({
//"name":"mayank"
//})


});



});




app.listen(4545,()=>console.log("server running"));