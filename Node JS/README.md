
GraphQL Core Concepts 
-----------------



*  Stateless , client independent API



* Higher Flexible than REST




* Extensive Queries to exchange and manage Data



* All Queries are mapped to one end point





GraphQL vs REST
----------



* REST APIs are great for static data requirements 




* GraphQL gives you higher flexibilyy by exposing a full query language to the client






* Both REST and GraphQL can be implement in any frameowk and actucally enven with any server-side language








npm and Node as a build tool
-----
npm is a cli ,  to install & manage the function/algorithm that are isolated and ready to use for dev, called packages 


Example :

	  To install a specific version use | npm install <name>@<version> | Ex:express
	
	
	  To install development dependency | npm instlall <name> --save-dev | Ex:nodemon 
	
	
	
Basically , when we develop a react application so we use say, react-scripts that is also written in  nodejs which compiler the modern ReactJS code to miniifed optimised browser executable code by trasnforming using webpacks & other packages and npm acts a build tool also.
	



Deployment  (Best Practices)
----------- 
-> Use .env files | we can configure env variable before 'node app.js' command type file with modified scripts

-> Reduce error output details to the client

-> Set secure response headers | Ex using helmet -> app.use(helmet())  | add addtional headers for secruity

-> Add assets compression | Ex using compressio -> app.use(compression()) | reduce the css and other chunks of files 

-> configre logging | Ex using morgan -> app.use(morgan()) | logs error in realtime , we can configure to write in filestream

-> use SSL/TLS | we can generate public and private key to produce a certificate on port of server within few minutes using https pkg , but browser should recognize is valid as vertificate from other authorities (trusted) will run without warning.


Note to depolyment in Heroku-> If we are storing some data on server heroku restarts /sleeps hence entire code get re exectued in FREETIER , hence data does not  persists so use third party like AWS S3 , etc . In case of own server IP virtual machine ,no issue.



By default Heroku run on certain port so use proces.ENV else it might crash your nodejs application , just a precaution check
	
	
MVC
----------
MVC is a pattern to develop a web application mainly backend which structures the code into folder and functionaliy for efficient management and development during writing code. We should be clearly able to identify the  function and frontend separately

Models : are object responsible for represting data and working like fetching, saving, etc. Doesn't matter if you manage dta in memory,files , db. Contains data-related logics

Views : what user sees in the frontend. Shouldn't contain too much logic.

Controllers : connecting point of Views(Frontend) and Models (logics). Connects Model and View. should only make sure that the two can communicate (in both direction)



-----------------------------

Why REST API?



You can  return interface as a form of html page , but every tech like during building mobile application can't render it as it might be possible that language doesn't support , so insted to interfaces we need to send data which is totally decoupled from fronted & independent of  consuming language , so to transfer data not user interfaces we need to build REST APIs





Naming Conventions for Code Quality : 



https://api.gov.au/standards/national_api_standards/naming-conventions.html



https://restfulapi.net/resource-naming/


https://nordicapis.com/10-best-practices-for-naming-api-endpoints/





---------------------

What is JSON?

JSON stands for JavaScript Object Notation and a typically JSON data structure looks like this:

{
    "name": "Your Name",
    "age": 29,
    "courses": [
        "angular-the-complete-guide",
        "react-the-complete-guide"
    ],
    "profile": {
        "joined": "2017-05-21",
        "courses": 2
    },
    "averageRating": 4.8,
    "active": true
}
It looks a lot like a normal JavaScript object, but one important difference is that all key names are enclosed by double quotation marks (").

Besides that, you can store text (string), numeric (integers and floats) and boolean data as well as nested objects and arrays.

-------------------------



Mongoose
----



An Object-Document-Mapping library




It allows to create models to handle with database easily




Schemas & Models, Instances, Queries me helpful



---------------


## Redis Resource



https://www.sitepoint.com/using-redis-node-js/


