
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


---------------------------------------


https://cheatsheetseries.owasp.org/cheatsheets/Nodejs_Security_Cheat_Sheet.html#perform-application-activity-logging




https://www.youtube.com/watch?v=fGrSmBk9v-4


-----------------------



https://medium.com/@amit007xpo/using-express-react-views-for-templating-engine-in-express-app-14e70f2d5a65


----------------------



https://www.geeksforgeeks.org/how-to-display-flash-messages-using-connect-flash-module-in-node-js/


-------------------------









https://mherman.org/blog/primer-on-swig-templating/





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


What is CI?

Process of merge all code changes into a single branch
It is used monstly when multiple engineers working over it

What is CI Server?
Server that runs automatic cheks (test) on the codebase to ensure nothing breaks

CI Flow

Developer pushes the code to github
CI Server detects changes new push occured
CI Server will clone to server virtucal machine run test and
If test pass push notification automatice deploy else followup

Common CI Providers : => travis ,  AWS



-------


Mongoose
----



An Object-Document-Mapping library




It allows to create models to handle with database easily




Schemas & Models, Instances, Queries me helpful



---------------
## AWS
aws configure

aws list iam-users  // you can define in console wheather to access in cmd or not

aws cloudhsell offers online terminal



ec2 instance start, create a key value pair, download pem / putty , it allocates a volume ny default, configure the userdata ie Example starting php web server  ie. the script that will run the very first time of instacnce staart , you can start/stop/terminate, 

security groups -> firewall to ec2 instances



if you will restart instance public ipv4 might change but private ipv4 will remain same

PORT

22 = SSH
21 = FTP
22 = SFTP
80 =HTTP
443 =HTTPS


Linux 

SSH Command line uses ssh protocol 
CMd will access certain port of remote machine

ssh -i ec2testkeypair.pem ec2-user@3.93.150.10

yes

chmod 0400 ec2testkeypair.pem      


ssh -i ec2testkeypair.pem ec2-user@3.93.150.10

you will get enter the shell

you need to open port 22 in securiy group in order to access machine through cli


// never enter aws credentials in ec2 instance as anyone can access it
// use iam roles


// Reserved or Convertible



EBS
// these are usb network sticks attached that data persist after  instance terminate

// you can create snapshot (backup image) and transfer to other region in case of requirement
// 

EBS Archive -> Cheaper 75%

// you can create image for an exisint e2 instance callled AMI , and launch instance based upon it
// AMI are faster way of hassle free instalation of again and again server configurations


// EC2 INstance store is alternative high performance to EBS as ebs limited performance


// EFS mounted on 100 Linux instances , acros multiple region 3x to ebs

ebs -> one instance 


efs ->  remove hassle of snapshots and copyring to other region instance creation

Fsx -> 3rd party filesystem will  implemnet



Load balancing

3 Levels -> Applicatoin Layer 7 HTTP , Network Layer 4 , Classic Load balancing

// adding load balancer is easy, simply add instances group , makr sure security group of each eposes relevant port for load balancing , 

// ASG for flipkart sale / machine learning type of thing


###s3 Bucket region to region differ


S3 bucket is backbone, and you can even use to host statick website, simply upload static file and settings, enabel hosting, index.html as entry point ...., make sure it  bucket should be publically available


Bucket Versioning

Bucket log will create logs in bucket to some folder if you want
Glacier takes time to recover but cheaper




lightsail -> Simplified versions



AWS RDS -> SQL 

Aurora -> created by AWS , cloud ooptimized not open source not free
Postrgres / SQL

ElasticCache -> Inmemory DB Managed Redis/ Memcached


Redshift for warehouse & analytics

EMR -> Bigdata handoop cluster mangement

Athena -> analysising data in S3 bucket

DocumentDB -> Top of MongoDB

Neptunre -> Graph DB

Beanstack -> Paas, 3tier mostly , dashboard for monitoring
its code centric Developer point of view

while CloudFormation any data/not necessary an application


route53 -> Managed DNS
Normal, Weighted to ec2 instances, Low latency policy










---------


## Debug Notes


Configuring TS


npx tsc --init --rootDir src --outDir build \
--esModuleInterop --resolveJsonModule --lib es6 \
--module commonjs --allowJs true --noImplicitAny true




-------------------------

Mac Setup cmmands

https://pastebin.com/2a9YDByP
--------------------



https://www.sitepoint.com/using-redis-node-js/




https://www.section.io/engineering-education/logging-with-winston/


https://medium.com/swlh/rabbitmq-developing-message-based-applications-a56003c55649



https://www.calsoftinc.com/blogs/2017/04/rabbitmq-robust-way-messaging-application.html




https://www.gosquared.com/blog/making-dashboard-faster


https://www.youtube.com/watch?v=wbnOmXWyd9E


https://www.youtube.com/watch?v=wXfKmtohjpc

https://medium.com/@andy.neale/securing-node-web-applications-5d5f9bc21926



https://stackoverflow.blog/2020/03/02/best-practices-for-rest-api-design/


https://www.npmjs.com/package/apicache


https://upstash.com/blog/serverless-database-connections



npmjs.com/package/connect-multiparty


https://www.npmjs.com/package/zxcvbn


https://vocajs.com/


https://web.dev/efficiently-load-third-party-javascript/


https://medium.com/@naubit/top-free-heroku-alternatives-for-every-case-49358dfd72b6


https://github.com/s3fs-fuse/s3fs-fuse



Data Visulization Techniques - > https://datastudio.google.com/u/0/reporting/0B_U5RNpwhcE6SF85TENURnc4UjA/preview/




https://www.npmjs.com/package/query-string


https://www.npmjs.com/package/loadtest




https://docs.bullmq.io/

https://medium.com/@techsuneel99/scaling-email-sending-with-node-js-and-aws-ses-a-guide-to-sending-50-000-emails-at-once-31a785193a7e




https://devhints.io/









---------------------------





Repetative Code Snippets
----


Jwt - Access Tokena and Refresh Token



![1675440332954](https://user-images.githubusercontent.com/69970001/224452021-fa224e15-c622-43a7-9e49-3f3fb2882f4b.jpeg)




------------


Handling Realtime Notificaitons

![1676053250023](https://user-images.githubusercontent.com/69970001/224452037-135d4218-ae84-47bf-b5c8-fcc5ef8b3a4f.jpeg)

![1676053250504](https://user-images.githubusercontent.com/69970001/224452038-56ad68ff-64aa-4806-9028-100818ae6216.jpeg)





--------------------


https://blog.devgenius.io/pagination-in-node-js-512fbb809103



