const express = require("express");
const bodyParser = require("body-parser");
const cookieParser = require("cookie-parser");
const session = require("express-session");
const users = require("./users.js");
const PORT = 4000;

const app = express();
app.use(cookieParser("hello world"));
app.use(bodyParser.json());
app.use(
  session({
    secret: "beeeeeeeeep",
    saveUninitialized: false,
    resave: false,
    cookie: { maxAge: 1000 * 60 * 60 },
  })
);
app.get("/", (req, res) => {
  //req.session
  console.log(req.session);
  console.log(req.session.id);
  req.session.verified = true; //sessionId bar bar nayi na bane

  res.cookie("hello", "world", { maxAge: 1000 * 60 * 60, signed: true });
  res.send("Hello World!");
});
//REGISTER
//LOGIN
//1. verify username and password
//2. create session
//3. send cookie back to the client (happens automatically via express-session)
app.post("/api/auth", (req, res) => {
  const { username, password } = req.body;
  const user = users.find(
    (user) => user.username === username && user.password === password
  );
  if (user) {
    req.session.user = user;
    req.session.verified = true;
    res.send({ user: user });
  } else {
    res.send({ msg: "BAD CREDS" });
  }
});
//PROTECTED RESOURCE
//4. verify if session is valid
//5. send protected resource
app.get("/api/protected", (req, res) => {
  if (!req.session.user) {
    //if session is not valid
    res.send({ msg: "NOT LOGGED IN" });
  } else {
    res.send({ user: req.session.user });
  }
});
app.listen(PORT, () => {
  console.log(`Server started on port ${PORT}`);
});

//Auth -> express session
//Auth -> JWT
