const express = require("express");
const app = express();
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
const cookieParser = require("cookie-parser");

app.use(express.json());
app.use(cookieParser());

const secret = "hellokitty";
// Dummy User DB
const users = [];

// Register route
app.post("/register", async (req, res) => {
  const { username, password, email } = req.body;
  const saltRounds = 10; // Increase salt rounds for better security

  try {
    const hash = await bcrypt.hash(password, saltRounds);
    users.push({
      username: username,
      hashedPassword: hash,
      email: email,
    });
    res.status(201).send({ msg: "Sign up is successful" });
  } catch (err) {
    console.log(err);
    res.status(500).send({ msg: "Try again later" });
  }
});

// Login route
app.post("/login", async (req, res) => {
  const { username, password } = req.body;
  const user = users.find((user) => user.username === username);

  if (!user) {
    return res.status(404).send({ msg: "User does not exist" });
  }

  const match = await bcrypt.compare(password, user.hashedPassword);
  if (!match) {
    return res.status(401).send({ msg: "Incorrect credentials" });
  }

  const token = jwt.sign({ username }, secret, { expiresIn: "1h" }); // Token expires in 1 hour
  res.cookie("auth-token", token, { httpOnly: true, maxAge: 3600000 }); // Token expires in 1 hour
  res.send({ msg: "Login successful", token });
});

// Auth Middleware
function auth(req, res, next) {
  const token2 = req.cookies["authorization"];
  const token = req.cookies["auth-token"];
  if (!token) {
    return res.status(403).send({ msg: "Access denied, no token provided" });
  }

  jwt.verify(token, secret, (err, decoded) => {
    if (err) {
      return res.status(401).send({ msg: "Invalid or expired token" });
    }
    req.user = decoded; // You can store the decoded token data (e.g., username) here
    next();
  });
}

// Protected route
app.get("/messages", auth, (req, res) => {
  res.send({
    msg: "User authorized, you may access messages",
    user: req.user.username,
  });
});

// Start the server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
