use testdb
db.places.insertOne({name:"Insdustrial Area Indore",location:{type:"Point",coordinates:[22.7579729,75.8555147]}})
db.places.insertOne({name:"Insdustrial Area Indore",location:{type:"Point",coordinates:[22.7582803,75.8408749]}})

<!-- P1 -->

db.places.find({location:{$near:{$geometry:{type:"Point",coordinates:[22.7579729,75.8555147]}}}})

  <!-- near the P1 -->
  <!-- Got one eroor you will need to index it -->

db.places.createIndex({location:"2dsphere"})

  <!-- Creating an index -->

db.places.find({location:{$near:{$geometry:{type:"Point",coordinates:[22.758112,75.8408123]},$maxDistance :3000,$minDistance:0}}})

<!-- this will give how many coordinates are inside the range of the p1 with maxDistance : 3000metres and min distsance 0m -->

<!-- checking which points are within the shpae of polygon  -->

const p1=[2234,23424]
const p2=[343,-2]
const p3=[1,2]
const p4=[34,53]

db.places.find({location:{$geoWithin:{$geometry:{type:"Polygon",coordinates:[[p1,p2,p3,p4,p1]]}}}})

<!-- completing the polygon with p1 and will help to get all within it-->

find wheather the point is inside the regions availbale in db

db.areas.insertOne({name:"Park",location:{type:"Polygon",coordinates:[p1,p2,p3,p4,p1]}})
db.areas.createIndex({location:"2dsphere"})
db.areas.find({area:{$geoIntersects:{$geometry:{type:"Point",coordinates:[24,23423]}}}})

<!-- this will return the region in which all these ponit in present -->

<!--  1/radius mean we want to look inside 1km radius -->

db.places.find({location:{$geoWithin:{$centerSphere:[[pc],1/6378.1]}}})
