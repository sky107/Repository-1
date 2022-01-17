// import express=require('express'); // only avaiable in nodejs , @types/node on installation error goes out
import express from 'express';
import todoRoutes from './routes/todos';
import bodyParser from 'body-parser';


const app=express();

app.use(bodyParser.json());

app.use(todoRoutes);


app.listen(3000);

// uncomment the output dir and assing as ./dist so all js files under dist and all ts files at one place
