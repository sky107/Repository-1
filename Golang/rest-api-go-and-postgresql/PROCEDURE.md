STEP -1 : => 
CREATE TABLE movies (id SERIAL,
			movieID varchar(50) NOT NULL,
			movieName varchar(50) NOT NULL,
			PRIMARY KEY (id)
)


INSERT INTO movies (movieID,movieName) VALUES ('1','m1'),('2','m2'),('3','m3');
------------------------------------
Now in  index.go
we have used 

fmt and log - printing meassages & errors
encoding/json - Go core package for handling JSON data

database/sql - Go core pacakge for handling sql based communication
net/http- Go core http pkg that handling http requests.


[mux] -> for URL macher and routing, helps in matching 
[pq] => Go postgres driver for handle db/sql package



-----------------

First, run go mod init example.com/m. This will generate a go.mod file that saves the third-party libraries we require. To install mux run go get github.com/gorilla/mux. To install pq run go get github.com/lib/pq