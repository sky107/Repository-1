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

const app=express();
const PORT=5000;

app.use(helmet());
const serverLogStream = fs.createWriteStream(path.join(__dirname, 'server.log'), { flags: 'a' })
app.use(morgan('combined', { stream: serverLogStream }))
app.use(bodyParser.json()); // To support JSON-encoded bodies
app.use(bodyParser.urlencoded({ extended: true }));

const authRoutes=require('./routes/auth');
const translateRoutes=require('./routes/translate');
const translationCache=require('./middlewares/translationCache');
const isAuth=require('./middlewares/isAuth');
const sequelize=require('./util/sql');

const swaggerOptions = {
    swaggerDefinition: {
      info: {
        version: "1.0.0",
        title: "Web Server for Translation",
        description: "Creator : Siddharth Kumar Yadav \n\n  Translation of text using Optimised Redis Caching technique ",
        contact: {
          name: "Siddharth Kumar Yadav"
        },
        servers: ["http://localhost:5000"]
      }
    },
    // ['.server/*.js']
    apis: ["server.js"]
};
const swaggerDocs = swaggerJsDoc(swaggerOptions);


app.use((req,res,next)=>{ //cors browser security mechansim 
    res.header("Access-Control-Allow-Origin","*");
    res.header(
      "Access-Control-Allow-Headers",
      "Origin,X-Requested-With,Content-Type,Accept,Authorization");
    if(req.method==='OPTIONS'){ //you can't avoid to check 
      res.header('Access-Control-Allow-Methods','PUT,POST,PATCH,DELETE,GET')
      return res.status(200).json({});
    }
    next();
});

// Do Not Change the Order !!
app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerDocs));
app.use(authRoutes);
app.use(isAuth,translationCache,translateRoutes);

sequelize.sync()
.then(result=>{
    app.listen(PORT,()=>console.log("Server Running..."));
})
.catch(err=>console.error(err));



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
 *     responses:
 *       200:
 *         description: Created
 */


/**
 * @swagger
 * /translate/:API_KEY:
 *   post:
 *     description: To translate the text
 *     parameters:
 *      - name: transText
 *        description: name of the user
 *        in: formData
 *        required: true
 *        type: string
 *      - name: from_lang
 *        description: name of the user
 *        in: formData
 *        required: true
 *        type: string
 *      - name: to_lang
 *        description: email of the user
 *        in: formData
 *        required: true
 *        type: string
 *     responses:
 *       200:
 *         description: Created
 */



