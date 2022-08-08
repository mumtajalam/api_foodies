const express = require("express");

const User = require("../models/User");

const router = express.Router();
//http://localhost:4000/user/adduser
router.post("/adduser", async (req, res) => {
  try {
    const tempUser = new User({
      username: req.body.username,
      name: req.body.name,
      email: req.body.email,
      mobile: req.body.mobile,
      password: req.body.password,
    });
    const response = await tempUser.save();
    res.status(201).json(response);
  } catch (err) {
    res.status(400).json(err);
  }
});

//http://localhost:4000/user/alluser
router.get("/alluser", async (req, res) => {
  try {
    const response = await User.find();
    res.status(200).json(response);
  } catch (err) {
    res.status(400).json(err);
  }
});

//http://localhost:4000/user/login
router.post("/login", async (req, res) => {
  const tempUsername = req.body.username;
  const temopassword = req.body.password;
  try {
    const response = await User.find({
      username: tempUsername,
      password: temopassword,
    });

    if (response.length === 0) {
      res.status(422).json("user not found");
    } else if (response.length === 1) {
      res.status(200).json(response[0]);
    } else {
      res.status(422).json("error in login, please contact customer care");
    }
  } catch (err) {
    res.status(400).json(err);
  }
});
module.exports = router;
