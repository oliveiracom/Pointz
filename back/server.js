const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");


var corsOptions = {
  origin: "http://localhost:4200",
  optionsSuccessStatus: 200,
};

const app = express();

app.listen(8099, () => {
  console.log("Server started!");
});

app.use(cors(corsOptions));

app.use(bodyParser.json());

let users = [
  {
    id: 1,
    name: "Lorelai Gilmore",
    email: "lorgilmore@gmail.com",
    pass: "1234",
    address: [],
  },
  {
    id: 2,
    name: "Rory Gilmore",
    email: "reoryleigh@gmail.com",
    pass: "1234",
    address: [],
  },
];

let gifts = [
  {
    id:1,
    item: "Viagem ao Centro da Terra",
    price: 2500,
    qtd: 4
  },
  {
    id:2,
    item: "Cruzeiro Trinagulo das Bermudas",
    price: 2500,
    qtd: 4
  },
  {
    id:2,
    item: "City Tour beco diagonal",
    price: 4500,
    qtd: 4
  }
]

app.route("/api/users").get((req, res) => {
  res.send({ users });
});

app.route("/api/gifts").get((req, res) => {
  res.send({ gifts });
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
  res.status(200).send(req.body);
});

app.route("/api/auth").post((req, res) => {
  const authUser = users.find( item => item.email === req.body.email);
  if (!authUser) {return null;}
  const authPass = users.find( item => item.password === req.body.password);
  if(authPass && authUser) {
    return res.send(201, {
      code: 9901,
      user: {
        email: req.body.email
      },
    });
  }
   return res.send(201, {
      code: 9909
    });
});

/* app.route('/api/cats/:name').delete((req, res) => {
    res.sendStatus(204)
  }) */
