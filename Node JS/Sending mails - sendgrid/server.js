const express=require('express');
const app=express();
const nodemailer=require('nodemailer');
const sendgridTransport=require('nodemailer-sendgrid-transport');

const transporter=nodemailer.createTransport(sendgridTransport({
auth:{
api_key:'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'
}
}));

app.get('/',(req,res,next)=>{

transporter.sendMail({
to:'siddharthsk101@gmail.com',
from:'siddharthsk1234@gmail.com',
subject:'Test Message',
html:'<h1>Hello, this test message sent using SendGrid</h1>'
}).catch(err=>console.log(err));

res.send('<h1>hello</h1>')


});
app.listen(4545,()=>console.log("server running"));


