const User = require("../models/User");


const registerController = async (req,res) => {
  const {username, email, mobilenumber, password} = req.body;

  const newUser = new User({ username, email, mobilenumber, password });
    await newUser.save();
  res.send("welcome to Register PAge with details")
}

module.exports = registerController;