/************************************
* Author : Siddharth Kumar Yadav
* Email: siddharthsk101@gmail.com
************************************/
const fs=require('fs');
const path=require('path');
const express=require('express');
const morgan=require('morgan');
const helmet=require('helmet');
const bodyParser=require('body-parser');
const swaggerJsDoc=require('swagger-jsdoc');
const swaggerUi=require('swagger-ui-express');
const mongoose=require('mongoose');
const session=require('express-session');
const MONGODB_URI='mongodb+srv://testdb:eaLM1Xc7uT2djg7O@cluster0.v48mv.mongodb.net/myFirstDatabase?retryWrites=true&w=majority';
const MongoDBStore=require('connect-mongodb-session')(session);
const store= new MongoDBStore({uri:String(MONGODB_URI),collection:'sessions'});
const userRoutes=require('./routes/users');
const authRoutes=require('./routes/auth');
const app=express();
const PORT=process.env.PORT || 5000;
const serverLogStream = fs.createWriteStream(path.join(__dirname, 'server.log'), { flags: 'a' })
app.use(helmet());
app.use(morgan('combined', { stream: serverLogStream }))
app.use(bodyParser.json()); // To support JSON-encoded bodies
app.use(bodyParser.urlencoded({ extended: true }));
const swaggerOptions = {
  swaggerDefinition: {
    info: {
      version: "1.0.0",
      title: "Session Based API",
      description: "Creator : Siddharth Kumar Yadav \n\n  This api demostrated the working with cookies, sessions to make a  session based api and storage of session in MongoDB using express-session  package with CRUD operations",
      contact: {
        name: "Siddharth Kumar Yadav"
      },
      servers: ["http://localhost:5000"]
    }
  },
  // ['.server/*.js']
  apis: ["server.js"]
};

app.use((req,res,next)=>{ //cors browser security mechansim unlinke postman
  res.header("Access-Control-Allow-Origin","*");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin,X-Requested-With,Content-Type,Accept,Authorization");
  if(req.method==='OPTIONS'){ //you can't avoid to check 
    res.header('Access-Control-Allow-Methos','PUT,POST,PATCH,DELETE,GET')
    return res.status(200).json({});
  }
});

app.use(session({secret:'siddharth_kumaryadav',resave:false,saveUninitialized:false,store:store}));
app.use(authRoutes);
app.use(userRoutes);
const swaggerDocs = swaggerJsDoc(swaggerOptions);
app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerDocs));



mongoose.connect(MONGODB_URI, {useNewUrlParser: true, useUnifiedTopology: true})
.then(result=>app.listen(PORT,()=>console.log("Server Online")))
.catch(err=>console.log("ERROR",err  ))


/**
 * @swagger
 * /login:
 *   post:
 *     description: To perform login operation
 *     parameters:
 *      - name: email
 *        description: email of the user
 *        in: formData
 *        required: true
 *        type: string
 *      - name: password
 *        description: password of the user
 *        in: formData
 *        required: true
 *        type: string
 *     responses:
 *       200:
 *         description: Created
 */




/**
 * @swagger
 * /register:
 *   post:
 *     description: To add a new user
 *     parameters:
 *      - name: name
 *        description: name of the user
 *        in: formData
 *        required: true
 *        type: string
 *      - name: email
 *        description: email of the user
 *        in: formData
 *        required: true
 *        type: string
 *      - name: password
 *        description: password of the user
 *        in: formData
 *        required: true
 *        type: string
 *     responses:
 *       200:
 *         description: Created
 */


/**
 * @swagger
 * /reset:
 *   post:
 *     description: To reset the user password
 *     parameters:
 *      - name: email
 *        description: email of the user
 *        in: formData
 *        required: true
 *        type: string
 *     responses:
 *       200:
 *         description: Created
 */


/**
 * @swagger
 * /reset/:token:
 *   post:
 *     description: To reset the user password
 *     responses:
 *       200:
 *         description: Created
 */




/**
 * @swagger
 * /users:
 *   post:
 *     description: To add a new user
 *     parameters:
 *      - name: name
 *        description: name of the user
 *        in: formData
 *        required: true
 *        type: string
 *      - name: email
 *        description: email of the user
 *        in: formData
 *        required: true
 *        type: string
 *      - name: password
 *        description: password of the user
 *        in: formData
 *        required: true
 *        type: string
 *      - name: confirmPassword
 *        description: confirm password of the user
 *        in: formData
 *        required: true
 *        type: string
 *     responses:
 *       200:
 *         description: Created
 */


 /**
 * @swagger
 * /users:
 *   get:
 *     description: To get all users
 *     responses:
 *       200:
 *         description: Success
 */

 /**
 * @swagger
 * /users/:userId:
 *   get:
 *     description: To get single user
 *     parameters:
 *      - name: userId
 *        description: MongoDB _id
 *        in: formData
 *        type: string
 *     responses:
 *       200:
 *         description: Success
 */


  /**
 * @swagger
 * /users/:userId:
 *   put:
 *     description: To update a user
 *     parameters:
 *      - name: email
 *        description: email
 *        in: formData
 *        type: string
 *      - name: password
 *        description: password
 *        in: formData
 *        type: string
 *      - name: name
 *        description: name
 *        in: formData
 *        type: string
 *     responses:
 *       200:
 *         description: Success
 */


 

  /**
 * @swagger
 * /users/:userId:
 *   delete:
 *     description: To delete user
 *     parameters:
 *      - name: userId
 *        description: MongoDB _id
 *        in: formData
 *        type: string
 *      
 *     responses:
 *       200:
 *         description: Success
 */




 


 
  /**
 * @swagger
 * /server:
 *   get:
 *     description: To get sesssion details
 *     responses:
 *       200:
 *         description: Success
 */
