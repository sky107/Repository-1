var http = require('http');
var fs = require('fs');
var app=require('express')();


app.get('/',(req,res)=>{
    res.json({
        message:"Siddharth Kumar Yadav",
        server_name:process.env.MESSAGE
    })
})

http.createServer(app).listen(8080);