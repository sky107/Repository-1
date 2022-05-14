docker network create goals-net
docker build -t goals-backend-image .  
docker run -d --name mongodbContainer --network goals-net mongo
docker run -d --name goalsBackendContainer --rm -p 80:80 --network goals-net goals-backend-image



docker build -t goals-fronent-image .     
docker run --name goals-fronent --rm  -p 3000:3000 -it  goals-fronent-image
// use node:14 to solve error with 18





// no need to add rm and d flag in compose flag
docker-compose up -d
docker-compose down  // all containers but not volumnes
docker-compose down -v // if volumes 
