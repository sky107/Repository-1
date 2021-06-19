import {MongoClient} from 'mongodb';





export default async function(req,res){

if(req.method=='POST' ){
const data=req.body;
console.log("BODY",req.body);
//const {title,image,address,description}=data;

const uri = "mongodb+srv://testdb:6GpLLxZeUbW28kjI@cluster0.v48mv.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });
client.connect(async err => {
  const collection = client.db("test").collection("new-meetups");
  // perform actions on the collection object
const result= await collection.insertOne(data);

  client.close();
});
res.status(201).json({message:"Success"});;//successfully inserted






}
else{
res.status(400).json({message:"Try post request"});;//successfully inserted
}

}