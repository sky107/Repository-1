const cluster = require('cluster');
const { cleanSession } = require('selenium-webdriver/safari');

console.log(cluster.isMaster); // true

if (cluster.isMaster) { // if is in master mode first 
  // cause server.js to be exectued in child mode
  cluster.fork();
  cluster.fork();
  cluster.fork();
  cluster.fork();
  cluster.fork();
  cluster.fork();

} else {

  // I'm a child behave like a normal server


  const app = require('express')();


  const doWork = (time) => {

    const date = new Date();

    while (new Date() - date < time) { }
  }

  app.get('/', (req, res, next) => {
    doWork(5000);
    res.send("HI")
  })

  app.get('/fast', (req, res, next) => {
    res.send("FAST")
  })

  app.listen(3000, () => console.log("OK"))
}


// pm2 start server.js - i 0
// pm2 list    
// pm2 show server             
// pm2 monit     
// pm2 delete server                 
