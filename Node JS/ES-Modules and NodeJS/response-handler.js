import fs from 'fs/promises';

//const fs=require('fs').promises;
//to use promises we should import like this

import path,{dirname} from 'path';
import {fileURLToPath} from 'url';

const __filename=fileURLToPath(import.meta.url);
const __dirname=dirname(__filename);

export const resHandler=(req, res, next) => {

//res.sendFile(path.join(__dirname,'my-page.html'));
// To use this concept of sending file we need to import and define additional things as mentioned ni the above




//promise based approach the traditional appproach is callback function approach
fs.readFile('my-page.html','utf8')
.then((data)=>res.send(data))
.catch((err)=>console.log(err));
  //fs.readFile('my-page.html', 'utf8', (err, data) => {
   // res.send(data);
  //});


//so basically we can use promises in code node js api mentioned in official docs 
};

export default resHandler;