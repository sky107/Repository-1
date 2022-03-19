const express = require('express');
const app = express();
const { v4: uuidv4 } = require('uuid');
const AWS = require('aws-sdk');
const keys = require('./keys')
const bodyParser = require('body-parser')


const s3 = new AWS.S3({
  accessKeyId: keys.accessKeyId, // on cofiguring IAM policy and users this will work fine
  secretAccessKey: keys.secretAccessKey
})

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));


app.put('/upload', (req, res, next) => {
  console.log(req.body);
  const { files, } = req.body;
  const { id } = req.query;
  const key = `${id}/${uuidv4()}.pdf`;



  s3.getSignedUrl('putObject', {
    Bucket: 'heatpump-bucket',
    ContentType: 'pdf'
  }, (err, url) => {

    res.send({ key, url, err })
  })





})



app.listen(4000, () => console.log("Server Online"));