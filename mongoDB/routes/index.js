const router = require("express").Router();
//const User = require("../models/User");
const usersRoutes = require("./users.routes");
router.use("/users", usersRoutes);
module.exports = router;
