"use strict";
const fs = require("fs");
const join = require("path").join;
var aws = require("aws-sdk");
var ses = new aws.SES({ region: "us-east-1" });
var mimemessage = require("mimemessage");
var s3 = new aws.S3({ region: "us-east-1" });
var streamToBuffer = require("stream-to-buffer");
const stream = require("stream");
const s3Zip = require("s3-zip");
const REGION = "us-east-1";
const BUCKET = "reach.earthlink.reports"; //not used yet
const FOLDER = "earthlink-test"; // not used yet
let financeReport = ['AR Rollforward','AR Trial Balance','Bad Debt', 'Billing Journal', 'Daily Future Credits', 'Daily Payment Transactions',
  'Daily Refund Transactions', 'Revenues','Mid-cycle Data Pack','Mid-cycle Upgrade','Monthly Payment Transactions','Monthly Refund Transactions']
let marketingReport = ['Daily Chrun', 'Daily Gross Adds', 'Daily Reconnection', 'Daily Subscriber Status','Subscribers Summary','Daily Disconnects','Daily Reconnection']
// Usage
//  Daily Usage Report
//    Report Prefix : EL-DailyUsageReport 
let reportToCsvFile = {
  "Daily Chrun": ["EL-DailyChurn"],
  "AR Rollforward":["EL-AR_Rollforward"],
  "AR Trial Balance":["EL-ARTrialBalance",""],
  "Daily Future Credits":["EL-DailyFutureCredits"],
  "Daily Gross Adds": ["EL-DailyActivation_"],
  "Daily Reconnection": ["EL-DailyReconnection"],
  "Daily Subscriber Status": ["EL-DailySubscribersStatus"],
  "Daily Disconnects":["EL-DailyDisconnects"],
  "Subscribers Summary": ["EL-DailyGrossAddsSummary"],
  "Mid-cycle Data Pack":["EL-Mid-CycleDataPack"],
  "Mid-cycle Upgrade":["EL-Mid-CycleUpgrade"],
  "Bad Debt": ["EL-BadDebt"],
  "Billing Journal": ["EL-Billing_Journal"],
  "Daily Future Credits": ["EL-DailyFutureCredits"],
  "Daily Payment Transactions": ["EL-DailyPaymentTransactions-Combined", "EL-DailyPaymentTransactions-Failed",
    "EL-DailyPaymentTransactions-Success"],
  "Daily Refund Transactions": ["EL-DailyRefundTransactions-Combined", "EL-DailyRefundTransactions-Failed",
    "EL-DailyRefundTransactions-Success"],
    "Monthly Refund Transactions": ["EL-MonthlyRefundTransactions-Combined", "EL-MonthlyRefundTransactions-Failed",
    "EL-MonthlyRefundTransactions-Success"],
    "Monthly Payment Transactions": ["EL-MonthlyPaymentTransactions-Combined", "EL-MonthlyPaymentTransactions-Failed",
    "EL-MonthlyPaymentTransactions-Success"],
  "Revenues": ["EL-AR_Report", "EL-AR_MonthlyReport"]
}
module.exports.send = async (event) => {
  const { date } = event;
  let finalArray = [];
  for  (let folder of financeReport) {
    
    for  (let subfolder of reportToCsvFile[folder]) {
      let s = 'Finance/' + folder; // For Finance Reports 
      s += '/' + subfolder
      s += '_' + date + '.csv';
     await s3.headObject({
       Bucket:'reach-reports-dev-test', // bucket name
       Key:"earthLink-dev/"+s  // add additional prefix as intside inside earthLink-dev folder 
     }).promise().then(res=>{
        finalArray.push(s);
      }).catch(err=>{
        // console.log("NOT EXISTS IN BUCKET")
      })
    }
  }
  for  (let folder of marketingReport) {
  
    for  (let subfolder of reportToCsvFile[folder]) {
      let s = 'Marketing/' + folder; // For Marketing Reports 
      s += '/' + subfolder
      s += '_' + date + '.csv';
     await s3.headObject({   // checking wheather it is available in S3 Bucket or not becuase s3zip will not run (throw error) if found some key unavailable
       Bucket:'reach-reports-dev-test',
       Key:"earthLink-dev/"+s
     }).promise().then(res=>{
        finalArray.push(s);
      }).catch(err=>{
        // console.log("NOT EXISTS IN BUCKET")
      })
    }
  }
const streamofzip = await s3Zip.setRegisterFormatOptions('zip-encrypted', require("archiver-zip-encrypted"))
.setArchiverOptions({zlib: {level: 8}, encryptionMethod: 'aes256', password: '123'}).archive(
  { region: REGION, bucket: "reach-reports-dev-test"},
  "earthLink-dev/",
  finalArray
); // produce a streamofZip
streamToBuffer(streamofzip, async (err, buffer) => { // Buffer Conversion , we don't wan't to allocate the disk memory
  const data = buffer;
  // console.log("BUFFER", data);
  var mailContent = mimemessage.factory({
    contentType: "multipart/mixed",
    body: [],
  });
  mailContent.header("From", "siddharthsk1234@gmail.com");
  mailContent.header("To", "siddharthsk1234@gmail.com");
  mailContent.header("Subject", "Reach Mobile Reports");
  var alternateEntity = mimemessage.factory({
    contentType: "multipart/alternate",
    body: [],
  });
  var htmlEntity = mimemessage.factory({
    contentType: "text/html;charset=utf-8",
    body:
      "<html>" +
      "<head></head>" +
      "<body>" +
      "<h1>Attachments test</h1>" +
      "<p>PFA</p>" +
      "</body>" +
      "</html>",
  });
  alternateEntity.body.push(htmlEntity);
  mailContent.body.push(alternateEntity);
  var attachmentEntity = mimemessage.factory({
    contentType: "application/zip",
    contentTransferEncoding: "base64",
    body: data?.toString("base64")?.replace(/([^\0]{76})/g, "$1\n"),
  });
  attachmentEntity.header(
    "Content-Disposition",
    'attachment ;filename="attachments.zip"'
  );
  mailContent.body.push(attachmentEntity)
  try {
    let key = await ses
      .sendRawEmail({
        RawMessage: { Data: mailContent.toString() },
      })
      .promise();
    console.log("MAIL SENT SUCCESSFULLY!!");
    return {
      statusCode: 200,
      body: JSON.stringify(
        {
          message: "Go Serverless v3.0! Your function executed successfully!",
          input: event,
        },
        null,
        2
      ),
    };
  } catch (e) {
    console.log("FAILURE IN SENDING MAIL!!", e); return {
      statusCode: 400,
      body: JSON.stringify(
        {
          message: "Go Serverless v3.0! Your function executed successfully!",
          input: event,
        },
        null,
        2
      ),
    };
  }
});
};









