JWT
------

So basically to generate a JWT inside node application you need to run npm install --save jsonwebtoken 

after that import it , then store it and use sign function with three argument data object, secret key, and an object that contatins field expiresIn:'1hr' //random period

assign it to a const variable and your jwt is ready


𝐖𝐡𝐚𝐭 𝐢𝐬 𝐉𝐖𝐓 𝐚𝐮𝐭𝐡𝐞𝐧𝐭𝐢𝐜𝐚𝐭𝐢𝐨𝐧 ?
JSON Web Token (JWT) is authentication mechanism which acts as a claim between server and client to exchange information.

𝐖𝐡𝐲 𝐉𝐖𝐓 𝐚𝐮𝐭𝐡𝐞𝐧𝐭𝐢𝐜𝐚𝐭𝐢𝐨𝐧 𝐢𝐬 𝐧𝐞𝐞𝐝𝐞𝐝 ?
There are mainly to ways by which server can identify client and process request.

𝟏. 𝐒𝐞𝐬𝐬𝐢𝐨𝐧 𝐈𝐝 - Session id is stored on the server side so that whenever client make a req server checks session id and process request.

𝐏𝐫𝐨𝐛𝐥𝐞𝐦 𝐰𝐢𝐭𝐡 𝐒𝐞𝐬𝐬𝐢𝐨𝐧 𝐈𝐝
In modern web apps There can be multiple servers present. Session id will only be stored on that server and if clients request has went to another server it does not identify client.

𝟐. 𝐇𝐨𝐰 𝐉𝐖𝐓 𝐒𝐨𝐥𝐯𝐞𝐬 𝐭𝐡𝐢𝐬 𝐩𝐫𝐨𝐛𝐥𝐞𝐦 ?
In JWT authentication Session is not stored on server side.

1. User Passes Credentials (email, password) to server.
2. Server Checks in database if this user present.
3. If user is present server creates Signature Token using (Header , Payload ).
4. Header specifys which encryption algorithm to be used. (SHA -256)
5. Payload is Users data like email.
6. Server encrypts It using secret key.
7. Sends this Token to the client and for every request client has to send this token.
8. Server verify token at every client request by decrypting token.
9. This works because Server is only having secret key for encyption and decryption.
