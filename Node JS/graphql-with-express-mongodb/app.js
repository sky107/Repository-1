const path = require('path');
const fs=require('fs');
const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const multer = require('multer');
const { graphqlHTTP } = require('express-graphql');
const graphqlSchema=require('./graphql/schema');
const graphqlResolvers=require('./graphql/resolvers');
const auth=require('./middleware/auth')
const app = express();

const fileStorage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, 'images');
  },
  filename: (req, file, cb) => {
    cb(null, new Date().toISOString() + '-' + file.originalname);
  }
});

const fileFilter = (req, file, cb) => {
  if (
    file.mimetype === 'image/png' ||
    file.mimetype === 'image/jpg' ||
    file.mimetype === 'image/jpeg'
  ) {
    cb(null, true);
  } else {
    cb(null, false);
  }
};

// app.use(bodyParser.urlencoded()); // x-www-form-urlencoded <form>
app.use(bodyParser.json()); // application/json
app.use(
  multer({ storage: fileStorage, fileFilter: fileFilter }).single('image')
);


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

app.put('/post-images',(req,res,next)=>{

  if(!req.isAuth){
    throw new Error("Not authenticated");
  } 

  if(!req.file){
    return res.status(200).json({message:'No file provided'})
  }
  
  if(req.body.oldPath){
    clearImage(req.body.oldPath);
    return res.status(201).json({message:"file stored",filePath:req.file.path});
  }


})


app.use('/graphql',graphqlHTTP({
  schema: graphqlSchema,
  rootValue:graphqlResolvers,
  graphiql:true,
  customFormatErrorFn(err){
    // err.originalError  find in missing character in query 
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
  console.log(error);
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


const clearImage = filePath => {
  filePath = path.join(__dirname, '..', filePath);
  fs.unlink(filePath, err => console.log(err));
};
