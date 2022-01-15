/** Siddharth Kumar Yadav
* © All rights reserved 
*/
const fs=require('fs');
const path=require('path');
const morgan=require('morgan');
const helmet=require('helmet');
const bodyParser=require('body-parser');
const mongoose=require('mongoose');
const express = require('express');
const app=express();

const authRoutes=require('./routes/auth');
const recordsRoutes=require('./routes/records');
const isAuth=require('./middlewares/isAuth');

const serverLogStream = fs.createWriteStream(path.join(__dirname, 'server.log'), { flags: 'a' })
app.use(helmet());
app.use(morgan('combined', { stream: serverLogStream }))
app.use(bodyParser.json()); // To support JSON-encoded bodies
app.use(bodyParser.urlencoded({ extended: true }));
const MONGODB_URI='mongodb+srv://testdb:KdW7sPfNebUaPbHO@cluster0.v48mv.mongodb.net/myFirstDatabase?retryWrites=true&w=majority';

app.use((req,res,next)=>{ //cors browser security mechansim unlinke postman
    res.header("Access-Control-Allow-Origin","*");
    res.header(
      "Access-Control-Allow-Headers",
      "Origin,X-Requested-With,Content-Type,Accept,Authorization");
    if(req.method==='OPTIONS'){ //you can't avoid to check 
      res.header('Access-Control-Allow-Methods','PUT,POST,PATCH,DELETE,GET')
      return res.status(200).json({});
    }
    next();
  });


app.use(authRoutes);
app.use(isAuth,recordsRoutes);

app.use('/hello',(req,res,next)=>{
    return res.json({
        name:"Hello world"
    })
})

mongoose.connect(MONGODB_URI, {useNewUrlParser: true, useUnifiedTopology: true})
.then(result=>app.listen(process.env.PORT || 9999,()=>console.log("Server Online")))
.catch(err=>console.log("ERROR",err  ))


