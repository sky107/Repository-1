const fs=require('fs');
const path=require('path');
const express=require('express');
const morgan=require('morgan');
const helmet=require('helmet');
const bodyParser=require('body-parser');
const swaggerJsDoc=require('swagger-jsdoc');
const swaggerUi=require('swagger-ui-express');
const authRoutes=require('./routes/authRoutes');
const usersRoutes=require('./routes/usersRoutes');
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
      title: "Posts API",
      description: "Creator : Siddharth Kumar Yadav",
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
app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerDocs));



/**
 * @swagger
 * /login:
 *  post:
 *    description: To check authentication of the user
 *    responses:
 *      '200':
 *        description: A successful response
 */


/**
 * @swagger
 * /register:
 *   post:
 *     description: Get all books
 *     parameters:
 *      - name: title
 *        description: title of the book
 *        in: formData
 *        required: true
 *        type: string
 *      - name: Data
 *        description: title of the book
 *        in: formData
 *        required: true
 *        type: string
 *        
 *     responses:
 *       200:
 *         description: Created
 */

//Remember this swagger comments are very sensetive you need to provide space after :

app.use(authRoutes);





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
 * /users/:id:
 *   put:
 *     description: modify user details
 *     parameters:
 *      - name: name
 *        description: name of the user
 *        in: formData
 *        required: false
 *        type: string
 *      - name: email
 *        description: email of the user
 *        in: formData
 *        required: false
 *        type: string
 *      - name: password
 *        description: password of the user
 *        in: formData
 *        required: false
 *        type: string
 *      - name: confirmPassword
 *        description: confirm password of the user
 *        in: formData
 *        required: false
 *        type: string
 *     responses:
 *       200:
 *         description: Created
 */


 /**
 * @swagger
 * /users/:id:
 *   delete:
 *     description: To delete a new user
 *     parameters:
 *      - name: userId
 *        description: userId of the user
 *        in: formData
 *        required: true
 *        type: string
 *      
 *     responses:
 *       200:
 *         description: Created
 */




 /**
 * @swagger
 * /users:
 *   get:
 *     description: To get list of all users
 *     parameters:
 *      - name: userId
 *        description: userId of the user
 *        in: formData
 *        required: true
 *        type: string
 *      
 *     responses:
 *       200:
 *         description: Created
 */
app.use(usersRoutes);

app.listen(PORT,()=>console.log("Server Online"));
