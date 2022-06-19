
SQL vs NoSQL Databases
----------------------

SQL stands fro Structured query language , as the name suggest its schema  based well structured data in form of tables to retrive data we use comands say, 'SELECT * FROM <tablename> WHERE marks < 50' . So this will fetch all recordds form table where mark field is lesser than 50. So when we query from multiple table simuntanelously we join the commands and execute it . It can be expensive



NoSQL works on concpet of Collections and Documents so , we have database inside it we have collections and inside collection data is stored as documents. It use spliting conecpt which helps to retrive faster. 


------------------------------------
Scaling of Databases
----------

Horizontal Scaling : Add more servers and split data in servers .

Vertical Scaling : make exisiting server stronger like storage , CPU ,memory . Most cloud provider provide easily select optiona dn ready to work


Now, Horizontal scaling is very bad idea in case of SQL as joining lots of queries will make code un-performant,hence not-possible but vertical scaling is possible also SQL has limitation for lots of (thousands) read and write queries per second.

On the other hand , In NoSQL  data in merged into nested int a few collections. Both vertical and horizontal savling is possible. Great performance for mass read and write

Conclusion : It depends of Type of Data you want to store , if you want more clean splitting into table data is independent go wit SQL otherwise go with NoSQL

--  Siddharth Kumar Yadav
  
  
  
  
  
  --------------
  Debug Notes : => 
  Clonning of one db to another MacOS, make sure both data base are create in mysql workbench
  
  mysqldump -u root --password='' db1 | mysql -u root -p db2


