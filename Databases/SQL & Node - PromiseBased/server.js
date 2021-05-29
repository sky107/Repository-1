const db=require('./dbconfig');

//db.end();when applicatoin shut down NO NEED

db.execute('SELECT * FROM node_sql_table')
 .then( ([rows,fields]) => {
    var i=0;
	for(i=0;i<rows.length;i++){
	console.log(rows[i].name);
	console.log(rows[i].email);
	console.log(rows[i].password);
	console.log("------------------");
	}
  })
.catch((err)=>console.log(err));