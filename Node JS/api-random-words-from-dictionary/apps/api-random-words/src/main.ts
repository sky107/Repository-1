/**
 * This is not a production server yet!
 * This is only a minimal backend to get started.
 */

import * as express from 'express';
import * as NodeCache from 'node-cache';
const myCache = new NodeCache({stdTTL:60});
const dictionary = require("./constants/dictionary.json");
const app = express();
const GobalDictionaryKeys=Object.keys(dictionary);
const checkPresence=(prefix,sufix)=>{
const idx1:number= GobalDictionaryKeys.findIndex((e)=>e===prefix);
const idx2:number=GobalDictionaryKeys.findIndex((e)=>e===sufix);
return idx1!=-1 && idx2!=-1 && idx1!=idx2;
}
app.get('/api/:prefix/:sufix', (req, res) => {
  console.log("IP",req.ip);
  const {prefix,sufix}=req.params;
  if(checkPresence(prefix,sufix)){
    let prefixLength=prefix.length;
    let sufixLength=sufix.length;
    let words:string[]=[];
    let mp=new Map();

   const cachedData= myCache.get(prefix+sufix);
  
    if(cachedData==undefined)
    for(let i=0;i<prefixLength;i++){
      for(let j=i+1;j<prefixLength;j++){
        for(let x=0;x<sufixLength;x++){
          for(let y=x+1;y<sufixLength;y++){
            const p1=prefix.substring(i,j+1);
            const p2=sufix.substring(x,y+1);
            if(mp.get(p1+p2))continue;
            mp.set(p1+p2,true);
            words.push(p1+p2);
          }
        }
      }
      myCache.set(prefix+sufix,words);
    }


    res.send({ words: cachedData|| words });
  }else{
    res.status(404).send({
      success:false,
      code:404,
      message:"Prefix and suffix are not avaiable to meet requirements "})
  }
});

const port = process.env.port || 3333;
const server = app.listen(port, () => {
  console.log(`Listening at http://localhost:${port}/api`);
});
server.on('error', console.error);
