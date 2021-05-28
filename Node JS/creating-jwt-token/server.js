const jwt=require('jsonwebtoken');
const token=jwt.sign({
email:'siddharth',
password:'hello'
},
'secretkey',
{expiresIn:'1hr'}
);
console.log(token);
