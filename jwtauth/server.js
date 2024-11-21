const express = require("express");
const app = express();
const jwt = require("jsonwebtoken");
app.use(express.json());
//Dummy User DB

//LOGIN
app.post("/login", (req, res) => {
  const { username, password } = req.body;
  const user = users.find((user) => user.username === username);
  if (!user) {
    res.status(402).send({ msg: "user does not exists" });
  }
});
