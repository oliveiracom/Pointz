const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");

require("./data/users.js");

var corsOptions = {
  origin: "http://localhost:4200",
  optionsSuccessStatus: 200,
};

const app = express();

app.listen(8000, () => {
  console.log("Server started!");
});

app.use(cors(corsOptions));

app.use(bodyParser.json());

app.route("/api/users").get((req, res) => {
  res.send({ users });
});

app.route("/api/users/:id").get((req, res) => {
  const reqUserId = req.params["id"];
  res.send({ name: reqUserId });
});

app.route("/api/users").post((req, res) => {
  users.push(req.body);
  res.send(201, req.body);
});

app.route("/api/users/:id").put((req, res) => {
  res.send(200, req.body);
});

/* app.route('/api/cats/:name').delete((req, res) => {
    res.sendStatus(204)
  }) */
