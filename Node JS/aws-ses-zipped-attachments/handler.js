'use strict';
const fs=require('fs');
var aws = require('aws-sdk');
var ses = new aws.SES({region: 'us-east-1'});
var mimemessage = require('mimemessage');
var AdmZip = require("adm-zip");
var s3 = new aws.S3({region:'us-east-1'});
// importig specific file from s3 bucket

var params = {Bucket: 'reach-reports-dev-test', Key: 'ghost-mobile/revenue_and_billing/non_payment/ghost-mobile-non_payment_2022-04-05.csv'};

// importing file on server and storing temporirly
var fileNameOnServer = fs.createWriteStream('report.csv');

async function sendMail(subject, data) {
s3.getObject(params).createReadStream().pipe(fileNameOnServer); // store it at location fileNameOnServer
var zip = new AdmZip();
zip.addFile("report.csv");
var willSendthis = zip.toBuffer();
zip.writeZip("attachments.zip"); // zip its as attachmetntss


var mailContent = mimemessage.factory({contentType: 'multipart/mixed',body: []});
mailContent.header('From', 'siddharthsk1234@gmail.com');
mailContent.header('To','siddharthsk1234@gmail.com');
mailContent.header('Subject', 'Customer service contact info');

var alternateEntity = mimemessage.factory({
  contentType: 'multipart/alternate',
  body: []
});

var htmlEntity = mimemessage.factory({
  contentType: 'text/html;charset=utf-8',
  body:  '<html>'+ 
         '<head></head>'+ 
         '<body>'+ 
         '<h1>Attachments test</h1>'+ 
         '<p>PFA your monthly reports</p>'  + 
         '</body>'+ 
         '</html>' 
});


alternateEntity.body.push(htmlEntity);
mailContent.body.push(alternateEntity);

var data = fs.readFileSync('attachments.zip');
var attachmentEntity = mimemessage.factory({
contentType: 'application/zip',
contentTransferEncoding: 'base64',
body: data.toString('base64').replace(/([^\0]{76})/g, "$1\n")
});
attachmentEntity.header('Content-Disposition', 'attachment ;filename="attachments.zip"');
mailContent.body.push(attachmentEntity);
  const emailParams = {
        Destination: {
          ToAddresses: ["siddharthsk1234@gmail.com"],
        },
        Message: {
          Body: {
            Text: { Data: data },
          },
          Subject: { Data: subject },
        },
        Source: "siddharthsk1234@gmail.com",
  };
      
  try {
        let key = await ses.sendRawEmail({
          RawMessage:{Data:mailContent.toString()}
        }).promise();
        console.log("MAIL SENT SUCCESSFULLY!!");
  } catch (e) {
        console.log("FAILURE IN SENDING MAIL!!",e);
      }  
  return;
}




module.exports.hello = async (event) => {
  sendMail("Your monthly reports", "Sample Body");
  return {
    statusCode: 200,
    body: JSON.stringify(
      {
        message: 'Go Serverless v3.0! Your function executed successfully!',
        input: event,
      },
      null,
      2
    ),
  };
};
