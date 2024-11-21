const express = require("express");
const path = require("path");
const ejs = require("ejs");

const app = express();
let people = ["geddy", "neil", "alex"];
app.set("view engine", "ejs");

app.get("/", (req, res) => {
  //res.send({ msg: "hello world" });
  //   res.end(`
  //     <h1>Learning SSR using EJS</h1>
  //     `);

  res.render("home", { people });
});

app.listen(4000, () => {
  console.log("server is running on port 4000");
});
