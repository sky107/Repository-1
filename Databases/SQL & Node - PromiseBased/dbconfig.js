const mysql=require('mysql2');

//  one connection and end in each query , hence unefficient
// so we establish a pool 

const pool=mysql.createPool({

host:'localhost',
user:'root',
database:'node_sql',
password:''
});

module.exports=pool.promise();
//promises allow to write more structured code