const express = require("express");
const bodyParser = require("body-parser");

const app = express();
const path = require("path");
const multer = require("multer");

const fileStorage = multer.diskStorage({
  destination: (req, file, cb) => {
    //create the folder it will not aoutomatically create
    cb(null, "uploads");
  },
  filename: (req, file, cb) => {
    // Note use random genrator becaus naming convecntions varies OS
    cb(null, Date.now() + "-" + file.originalname);
  },
});

let RESPONSE = "SAVED";
const fileFilter = (req, file, cb) => {
  console.log(file);
  if (file.mimetype === "application/pdf") {
    cb(null, true);
  } else {
    RESPONSE = "INVALID FILE TYPE";
    cb(null, false);
  }
};

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
//Remember to use text type in input fields of html form
app.use(
  multer({
    dest: "images",
    storage: fileStorage,
    fileFilter: fileFilter,
  }).single("resume")
);

app.get("/", (req, res, next) => {
  res.sendFile(path.join(__dirname, "index.html"));
});

app.post("/save", (req, res, next) => {
  res.send(RESPONSE);
});

// app.post('/')
app.listen(8000, () => console.log("server running"));
