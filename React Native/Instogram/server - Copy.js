var express = require('express');
var app = express();
var mysql = require('mysql');
var bodyParser = require('body-parser');

app.use(bodyParser.json({ type: 'application/json' }));
app.use(bodyParser.urlencoded({ extended: true }));

var con = mysql.createConnection({
    host: '<hostname>',
    port: '<portname>',
    user: '<username>',
    password: '<password>',
    database: '<dbname>'
});

var server = app.listen(4545, function() {
    var host = server.address().address
    var port = server.address().port
});


con.connect(function(error) {
    if (error) console.log(error);
    else console.log("connected");
});

app.get('/users.json', function(req, res) {
    var user_nameoremail = "";
        user_nameoremail = req.query.x;
    var password = req.query.y;
	var _name="";
	console.log(user_nameoremail+password);
    con.query(`SELECT * FROM instogramusers where username='${user_nameoremail}' or email='${user_nameoremail}' and password='${password}'`, function(error, rows, fields) {
        if (error) console.log(error)
        else {
            if (rows.length){
                console.log(rows.length);
		rows.slice(0,1).map(res=>_name=res.Name);
	con.query(`INSERT INTO instogramlogs(email,name) VALUES ('${user_nameoremail}','${_name}')`,function(error,rows,fields){
if(error)console.log("Error in Addition"+error);
else console.log("Log added successfuly");

});
}
            else
                console.log("User Not found");
        }
        res.send(rows);

    });
});