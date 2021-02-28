/*Web Sockets Basics

# allows you two-way communicatoin between web server and browser
# great for realtime applications
 
*/

const WebSocket=require('ws');
const wss= new WebSocket.Server({port:4545});

//when we refresh the page , on each page ws object wss refers to server
wss.on("connection",ws=>{
console.log("New client connected");
ws.on("close",()=>{
console.log("Client Disconeected");
});

ws.on("message",data=>{
console.log(`Client has sent us:${(data)}`);
ws.send(data.toUpperCase());
});
});

