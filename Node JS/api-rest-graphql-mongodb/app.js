const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const { graphqlHTTP } = require('express-graphql');
const graphqlSchema=require('./graphql/schema');
const graphqlResolvers=require('./graphql/resolvers');
const auth=require('./middleware/auth')
const app = express();



app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader(
    'Access-Control-Allow-Methods',
    'OPTIONS, GET, POST, PUT, PATCH, DELETE'
  );
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');
  next();
});


app.use(auth);

app.use('/graphql',graphqlHTTP({
  schema: graphqlSchema,
  rootValue:graphqlResolvers,
  graphiql:true,
  customFormatErrorFn(err){
    
    if(!err.originalError){
      return err;
    }
    
    const data=err.originalError.data;
    const message=err.message || "An error occured"
    const code =err.originalError.code || 500

    return {message:message,status:code,data:data};

  }
}))



app.use((error, req, res, next) => {
  const status = error.statusCode || 500;
  const message = error.message;
  const data = error.data;
  res.status(status).json({ message: message, data: data });
});

mongoose
  .connect(
    'mongodb+srv://testdb:g0TpqYwh5RWRZYHG@cluster0.v48mv.mongodb.net/myFirstDatabase?retryWrites=true&w=majority'
  )
  .then(result => {
    app.listen(8080);
  })
  .catch(err => console.log(err));

