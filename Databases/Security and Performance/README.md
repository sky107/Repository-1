Role Beased Access Control


Step -1 Authentication

Step -2 Privilage  - Resouce , Action 


Different Types of Databse Users

Admin => 

Developer =>CRUD without  createing users 

Data Scientist  => FETCH ONLY




createUser()

updateUser()


Builtin Roles

Database User => read/write
Database Admin => dbAdmin,userAdmin,dbOwner
All Database Roles => readAnyDatabse, readWriteDatabse,dbAdminAnyDatabse

ClusterAdmin

Backup/Restore

SuperUser


--------------------------------



Transport Encryption

TLS/SSL  




---------------------------------


Capped Collections

user prfdb

db.createCollection("capped",{capped:true,size:1000,max:<no_of_dec>})

// in capped collcetion we get data sorted by  id

after few records first records will vanish similar to queue




What are replica sets

when you hit a reqest from client to db server you get a node called primary node and then if you want to distribte your load when primary node becomes offline incase 1B request per second then secnodary node will be used as primary node automcatilcally , that replica creation is part of DB Admin


`

Shrading (Horizontal Scaling)

Distributed Systems
Shard Key in each collection added


