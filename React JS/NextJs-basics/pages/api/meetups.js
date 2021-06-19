import {MongoClient} from 'mongodb';





export default async function(req,res){

if(req.method=='GET' ){
//const data=req.body;
//console.log("BODY",req.body);
//const {title,image,address,description}=data;

const uri = "mongodb+srv://testdb:6GpLLxZeUbW28kjI@cluster0.v48mv.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });
client.connect(async err => {
  const collection = client.db("test").collection("new-meetups");
  // perform actions on the collection object
//const result= await collection.insertOne(data);
const  meetups=await collection.find().toArray();
console.log(meetups[0]);
let responseArray=[];
meetups.map((x)=>{

responseArray.push({
name:x.name,
_id:x._id.toString()
});

});

res.status(201).json({list:responseArray});;//successfully inserted


  client.close();
});





}
else{
res.status(400).json({message:"Try GET request"});;//successfully inserted
}

}