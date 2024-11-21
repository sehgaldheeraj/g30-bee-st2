const router = require("express").Router();
const User = require("../models/User.model");
router.post("/", async (req, res) => {
  const user = req.body;
  console.log(user);
  try {
    await User.create(user); //adds data + saves
    res.json({ message: "User created successfully" });
  } catch (err) {
    res.json({ message: err.message });
  }
});

router.get("/", async (req, res) => {
  //simply query all users
  //send it back as a response
  try {
    const users = await User.find(); //to query data
    res.json({ users: users, message: "Users found successfully" });
  } catch (error) {
    res.json({ message: error.message });
  }
});
router.get("/:id", async (req, res) => {
  try {
    const user = await User.findById(req.params.id);
    res.json({ user: user, message: "User found successfully" });
  } catch (error) {
    res.json({ message: error.message });
  }
});
router.patch("/:id", async (req, res) => {
  try {
    const user = await User.findById(req.params.id);
    User.calculateGrade(user);
    await user.save();
    res.json({ user: user, message: "User updated successfully" });
  } catch (error) {
    res.json({ message: error.message });
  }
});
router.delete("/:id", async (req, res) => {
  try {
    const user = await User.findByIdAndDelete(req.params.id);
    res.json({ user: user, message: "User deleted successfully" });
  } catch (error) {
    res.json({ message: error.message });
  }
});
module.exports = router;
