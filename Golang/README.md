Go is a fantastic and quite elegant language. Go aims to speed the efficiency of low-level languages such as C. Go shines most with its ability to utilize multi-core processing, which ensures low memory usage and low GPU power.



----------

YOU WILL NOT GET IT
----

Start the docker, Inside settings turn off Docker Composev2 off if required


SPIN DOCKER

npm run watch l=hello/main.go

onChange of dir, smart use of images and docker container to map everything to a local port from that container, now enjoy Debug Mode with Go 






-----------





create a serveless go project from template



```
export GO111MODULE="on" 

```

Now inside serverless.yml do some changes

Comment out the 1st pattern
```

package:
  patterns:
    # - '!./**'
    - ./bin/**

```

Update MakeFile

```
.PHONY: build clean deploy

build:
	dep ensure -v
	env GOARCH=amd64 GOOS=linux  go build -ldflags="-s -w" -o bin/supermain ${l}
	sh build-image.sh

deploy-build:
	dep ensure -v
	env GOARCH=amd64 GOOS=linux go build -ldflags="-s -w" -o bin/hello hello/main.go
	env GOARCH=amd64 GOOS=linux go build -ldflags="-s -w" -o bin/world world/main.go

clean:
	rm -rf ./bin ./vendor Gopkg.lock

deploy: clean deploy-build
	sls deploy --verbose


```


build-image.sh
```
if [[ "$(docker images -q docker-image:test 2> /dev/null)" == "" ]];
then
  echo "BUILDING-IMAGE-ONCE"
  docker build -t docker-image:test . 
  # docker rm -f sky-sls  
  docker run --name sky-sls -p 9000:8080 docker-image:test 
else
  docker rm -f sky-sls
  echo "ALREAY IMAGE"
  docker rmi $(docker images 'docker-image:test' -a -q)
 docker build -t docker-image:test . 
  docker run --name  sky-sls -p 9000:8080 docker-image:test  
fi
```

Dockerfile Content


```
FROM public.ecr.aws/lambda/go:1

# Copy function code
COPY bin/supermain ${LAMBDA_TASK_ROOT}

# Set the CMD to your handler (could also be done as a parameter override outside of the Dockerfile)
CMD [ "supermain" ]
```





  ```
npm init --y
npm i serverless 
sudo npm i -g nodemon
```



Paste below script 
```

 "scripts": {
    "build": "make",
    "start": "npm run watch",
    "deploy":"make deploy",
    "openDebugUrl":"open -a 'Google Chrome' http://localhost:9000/2015-03-31/functions/function/invocations",
    "watch": "npm run openDebugUrl && nodemon --watch . -e go --exec npm run build l=Please_provide_path_of_lambda_debug_by_l_argument_with_npm_run_watch"
  },
```



DEbg notes

```



sls invoke local -f hello --docker --docker-arg "--platform linux/amd64"

https://anthony-f-tannous.medium.com/aws-deployments-using-serverless-and-localstack-36395f316afa

sls offline --useDocker -docker-arg "--platform linux/amd64"



Install GO
Install deep from apple macports

Trun this off
go: modules disabled by GO111MODULE=off; see 'go help modules'



Then run using docker 
Don’t forget to place everything in go/src of macOS dir



https://dev.to/hackmamba/build-a-rest-api-with-golang-and-mongodb-fiber-version-4la0



export GO111MODULE="on" 


Very important
#[GOARCH=amd64 GOOS=linux go build main.go] -> upload this binary upload in aws as a zip if you are uploading directly 
reference https://www.youtube.com/watch?v=zHcef4eHOc8



curl -X GET "http://localhost:9000/2015-03-31/functions/function/invocations"





GOARCH=amd64 GOOS=linux go build main.go 
docker build -t docker-image:test .      
docker run -p 9000:8080 docker-image:test





```






https://docs.gofiber.io/
