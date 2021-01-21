var express = require('express');
var app = express();
var mysql = require('mysql');
var bodyParser = require('body-parser');

app.use(bodyParser.json({ type: 'application/json' }));
app.use(bodyParser.urlencoded({ extended: true }));

var con = mysql.createConnection({
    host: '<>',
    port: '<>',
    user: '<>',
    password: '<>',
    database: '<>'
});

var server = app.listen(4545, function() {
    var host = server.address().address
    var port = server.address().port
});


con.connect(function(error) {
    if (error) console.log(error);
    else console.log("connected");
});



/*
This registratoinx route is to used during user registration 
you can test by adding parameted after the url

Ex: http://localhost:4545/registrationx.json?regname=Siddharth&regusername=skyscraperasdf84_55s9&regpassword=asfas&regemail=asdijkdstyxcvs@gmail.com&regphone=092542423

*/

app.get('/registrationx.json', function(req, res) {

    var regname = req.query.regname;
    var regemail = req.query.regemail;
    var regpassword = req.query.regpassword;
    var regphone = req.query.regphone;
    var regusername = req.query.regusername;


    con.query(`SELECT * FROM instogramusers where username='${regusername}' or email='${regemail}'`, function(error, rows, fields) {
        if (error) console.log(error)
        else {
            if (rows.length) {

                console.log("User Alreay Exists");

            } else {

                con.query(`INSERT INTO instogramusers(email,name,password,username,phone) VALUES ('${regemail}','${regname}','${regpassword}','${regusername}','${regphone}')`, function(errorx, rowsx, fieldsx) {
                    if (errorx) console.log(errorx);
                    else
                        console.log("User Registartion successful");

                });
            }
        }
        res.send(rows);

    });
});



/*
This users.json route is to used during main login screen
you can test by adding parameted after the url

Ex: http://localhost:4545/users.json?x=inkers&y=inkers

*/

app.get('/users.json', function(req, res) {
    var user_nameoremail = "";
    user_nameoremail = req.query.x;
    var password = req.query.y;
    var _name = "";
    con.query(`SELECT * FROM instogramusers where username='${user_nameoremail}' or email='${user_nameoremail}' and password='${password}'`, function(error, rows, fields) {
        if (error) console.log(error)
        else {
            if (rows.length) {

                console.log("User found: " + user_nameoremail);
                rows.slice(0, 1).map(res => _name = res.Name);
                con.query(`INSERT INTO instogramlogs(email,name) VALUES ('${user_nameoremail}','${_name}')`, function(error, rows, fields) {
                    if (error) console.log("Error in Addition" + error);
                    else console.log("Log added successfuly");

                });
            } else
                console.log("User Not found");
        }
        res.send(rows);

    });
});
