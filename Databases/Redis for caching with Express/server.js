/*
Author : Siddharth Kumar Yadav
Email : siddharthsk101@gmail.com
*/

const express = require("express");
const fetch = require("node-fetch");
const redis = require("redis");

const PORT = 5000;
const REDIS_PORT = 6379;

const client = redis.createClient(REDIS_PORT);

const app = express();

const setResponse = (username, repos) => {
  return `<h2>${username} has ${repos} Github Repository</h2>`;
};

const cache = (req, res, next) => {
  const { username } = req.params;
  client.get(username, (err, data) => {
    if (err) throw err;
    if (data !== null) {
      res.send(setResponse(username, data));
    } else {
      next();
    }
  });
};

const getRepos = async (req, res, next) => {
  try {
    const { username } = req.params;
    const response = await fetch(`https://api.github.com/users/${username}`);
    const data = await response.json();

    console.log(data);
    const repos = data.public_repos;
    client.setex(username, 3600, repos);

    res.send(setResponse(username, repos));
  } catch (err) {
    res.status(500);
  }
};
app.get("/repo/:username", cache, getRepos);
app.listen(5000, () => {
  console.log("Server Online");
});
