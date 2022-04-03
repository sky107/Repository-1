use users

db.users.insertMany([{
name:"sky2",
hobbies :[{title:"Sports",frequency:3},
phone:123213232},
{
name:"Sky",
hobbies :[{title:"Cooking",frequency:2},
phone:123213232}
},
{
name:"AA",
hobbies :[{title:"Cooking",frequency:2},
phone:123213232},
age:12
}])

db.users.find({age:{$exists:true}}).pretty()

db.users.find({age:{$exists:true,$gte:30}}).pretty() // should exists and greater than 30

db.users.find({age:{$exists:true,$ne:null}}).pretty() // should exists and greater than 30

db.users.find({phone:{$type:["double","string"]}}).pretty() // type of data

// REGEX

db.movies.find({summary:{$regex:/musical/ }}) // find musical in all the documents


-----------------


db.users.find({age:{$gt:30}})
        //method //field // filter // value



What is aggregation ?

transform the data retreived with sort of funnel like logic



Query Operator
- 
db.users.find({runtime:{$le:10}}) // all queries give cursor of first 20 records in mognodb shell


Querying embeeded fields

db.users.findOne({ "ratings.total.aversge":{$gt:7}}).pretty()

generes : ["Drama","Action","Animal","Home"]

db.users.findOne({generes:["Drama"]}) // exactly array with "Drama"
db.users.findOne({generes:"Drama"}) //  array has "Drama"

 db.users.findOne({runtime:{$in:[12,23,43]}}) // includes in elements in the array


OR and NOR (Logical)

db.users.find({ $or:[{<field>:<filter>},{<field><filter>},{ratings:{$gt:6}},{},{},{}]    }).count();


db.users.find({runtime:{$not:{$eq:60}}})  // not is not passed in array


Element Operators

db.users.find({age:{$exists:true,$ne:null}}) // null fields will also found

Type of Operators

db.users.find({phone:{$type:"String"}})

elemMatch
$all // orders does not matters

cusrsors get first 20 records by default , it saves resources 

use moviesData

const dataCursors=db.moviesData.find()

 dataCursor.next() // will give data until exhausted

dataCursors.forEach(doc=>printjson(doc)) 

db.movies.find().sort({"ratings.average":1})  // 1 means ascending , -1 means descending

db.movies.find().sort({"ratings.average":1,runtime:-1}) // will sort with both keeping in mind

 // Skipping of Data in MongoDB
dataCursor.skip(100).limit(10) //   .count() can be misleading after that

dataCursor.sort({"raigns.average":1}).skip(100).limit(10) 
// mongodb will automatically adjust and optimze the order for you




PROJECTIONS

db.movies.find({},{name:1,runtime:1,raings:1}).pretty()

db.movies.find({},{ // how values are projected 
    {name:1,generes:1,runtime:1,"schedules.time",_id:0  // bydefault it will be 0 but for id its 1}
})


// PROJECTIONS IN ARRAY

db.find({genres:"Drma"},{"genres.$":1})


// PROJECTION with $slice
how to slice certain number of elements in field of array
db.movies.find({"ratings.average":{gt:9}    },{
    genres:{$slice:2},
    name:1
}).pretty()


$slice:[<skip>,<numbers_to_return>]






Projectoin Operator







Update Operator


