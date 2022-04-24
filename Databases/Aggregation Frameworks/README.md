db.persons.aggregate([

    // step 1
    {$match: {gender:"Female" }},
    {$group:{
        _id:{state:"$locatoin.state"},
        totalPersons:{$sum:1}
    }},
    {$sort:{toalPersons:-1}}
]).pretty()

// this runs on mongodb server 
// not as usual after fetching all records filtering them



db.personse.aggregate([
    {
        // You can pass repeated multiple stages of aggregation
        // since we need to exclude the _id in next stage exclude here only
        
        $projects:{
            _id:0,
            name:1, // since we need in next pipeline
            email:1,
            birthday:{
                $toDate:'$dob.date' // shortcut to convert when we need not to consider error or null
            }
            location:{
                type:"Point",
                coordinates:[
                   // "$location.coordinates.longitude", // this will return string so convert it to number / double
                    {$convert:{
                        input:"$location.coordinates.longitude",
                        to:'double',
                        onError:0,
                        onNull:0
                    }},
                      {$convert:{
                        input:"$location.coordinates.latitude",
                        to:'double',
                        onError:0,
                        onNull:0
                    }}
                  //  "$location.coordinates.latitude"
                ]
            }
        }
    },

    {$projects:{
        _id : 0,
        gender:1,
        fullName:{
           // $concat:["$name.first","","$name.last"],
           // $concat:[$toUpper:"$name.first",'","$toUpper:"$name.last"],
           // $concat:[$toUpper:{$substrCP:['name.first',0,1}  ]}
                    ,"",{$toUppper:'$name.last'}
                    ]
        }
    }}
])

// Above shows the three versions of concat we can use to transform data









DIFFERNCE BETWEEN $group and $project

$group =>  n=>1 (group one doc form available)

$project => 1=> 1 ( one document to one)




$unwind:{ "$hobbies"}














PROJEcTSIONS WITH ARRAY


db.friends.aggreagate([
    {
        $projects:{_id:0,examScore:{$slice:["]}}
    }
])





// GETTING LENGHT OF ARRAY OF PARTICULAR ARRAY FILED IN DOCUMENT

db.friends.aggregate([
    {
        $project:{_id:0,numScores:{$size:"$examScores"}}
    }
])




MongoDB actually tries its best to optimize your Aggregation Pipelines without interfering with your logic.


$out will funnel the entire records into a  collectoin names

