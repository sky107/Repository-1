#!/usr/bin/env bash

# Stops all current containers and delete them (fresh environment)
docker stop $(docker ps -a -q)
docker rm $(docker ps -a -q)

docker build -t load-balanced-app .
docker run -e "MESSAGE=First instance" -p 8081:8080 -d load-balanced-app
docker run -e "MESSAGE=Second instance" -p 8082:8080 -d load-balanced-app

cd nginx-docker
docker build -t load-balance-nginx .
docker run -p 8080:80 -d load-balance-nginx

