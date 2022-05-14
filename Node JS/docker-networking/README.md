docker build -t fav-note .                          
docker run --name fav -d --rm -p 3000:3000  fav-note //image buit earlier

docker run --name fav  --rm -p 3000:3000  fav-node // crasehd and rm flag removes so docker ps will give zero contianer


comment the mongodb code and then run tis run fine


host.docker.internal wiill map your machine ip

so use 
 'mongodb://host.docker.internal:27017/swfavorites'


// creating a mongodb image container


docker run mongo
Quit above

docker run -d --name mongodbcontainer  mongo
// WE WILL NEVER NEED -P FLAG AS IT IS USED TO CONNECT LOCCAL MACHINE TO SOME PORT EXPORSURE

docker inspect mongodbcontainer

check the ip address and hard code insted of host.docker.internal // annoying 



Creating Container Networks
docker network create fav-net             
docker run run -d --name mongodbContainer mongo --network fav-net mongo

use  'mongodb://mongodbContainer:27017/swfavorites', 

if a request leaves a container pass through gateway ip address resolve as per containerName

docker run --name fav --network fav-net -d --rm -p 3000:3000 fav-note