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
