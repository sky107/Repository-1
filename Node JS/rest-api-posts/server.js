const fs=require('fs');
const path=require('path');
const express=require('express');
const morgan=require('morgan');
const helmet=require('helmet');
const bodyParser=require('body-parser');
const swaggerJsDoc=require('swagger-jsdoc');
const swaggerUi=require('swagger-ui-express');
const authRoutes=require('./routes/authRoutes');
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
 *       201:
 *         description: Created
 */

app.use(authRoutes);

app.listen(PORT,()=>console.log("Server Online"));

