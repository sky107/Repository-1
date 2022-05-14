const express = require('express');
const User = require('./models/User');
var bodyParser = require("body-parser");
var app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.post('/api/1/users',(req,res)=>{
    User.create(req.body).then(()=>{
        return res.send({
            message:"User Created"
        })
    })  





























    
})
module.exports=app;
// cross-env and config are related ,config looks for dev.json prod.json etsc files insdide config folder
// which env are defined useing during execution of scrips
// corss-env NODE_ENV=dev