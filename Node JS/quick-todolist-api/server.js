/************************************
 * Author : Siddharth Kumar Yadav
 * Email: siddharthsk101@gmail.com
 ************************************/
const fs = require("fs");
const path = require("path");
const crypto = require("crypto");
const express = require("express");
const bodyParser = require("body-parser");
const Task = require("./models/task");

const app = express();
const PORT = 5000;

app.use(bodyParser.json()); // To support JSON-encoded bodies
app.use(bodyParser.urlencoded({ extended: true }));

const sequelize = require("./util/sql");

app.use((req, res, next) => {
  //cors browser security mechansim
  res.header("Access-Control-Allow-Origin", "*");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin,X-Requested-With,Content-Type,Accept,Authorization"
  );
  if (req.method === "OPTIONS") {
    //you can't avoid to check
    res.header("Access-Control-Allow-Methods", "PUT,POST,PATCH,DELETE,GET");
    return res.status(200).json({});
  }
  next();
});

app.post("/task", (req, res, next) => {
  const { title, desc, email } = req.body;

  const newProduct = {
    email: email,
    title: title,
    description: desc,
    id: new Date().toString(),
  };

  Task.create(newProduct)
    .then((rspo) => console.log(rspo))
    .catch((ee) => console.log(ee));

  res.status(201).json({
    response: "SUCCESS",
  });
});

app.delete("/task/:id", (req, res, next) => {
  console.log(req.params);

  Task.destroy({
    where: {
      id: req.params.id,
    },
  })
    .then((re) => {
      res.status(200).json({
        response: "SUCESS",
      });
    })
    .catch((err) => {
      res.status(500);
    });
});

app.get("/task/:email", (req, res, next) => {
  Task.findAll({
    where: {
      email: req.params.email,
    },
  })
    .then((re) => {
      res.status(200).json({
        response: re,
      });
    })
    .catch((err) => {
      res.status(500);
      return next(err);
    });
});

sequelize
  .sync()
  .then((result) => {
    app.listen(PORT, () => console.log("Server Running..."));
  })
  .catch((err) => console.error(err));
