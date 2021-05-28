JWT
------

So basically to generate a JWT inside node application you need to run npm install --save jsonwebtoken 

after that import it , then store it and use sign function with three argument data object, secret key, and an object that contatins field expiresIn:'1hr' //random period

assign it to a const variable and your jwt is ready