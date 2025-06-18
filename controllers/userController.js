const User = require("../models/User");
const mongoose = require('mongoose');


// GET /users
const getAllUsers = async (req, res) => {
  try {
    const users = await User.find();
    res.json(users);
     res.send("welcome to getalluser details from user")
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};
// GET /users/:id
const getUserById = async (req, res) => {
  try {
     const { id } = req.params;
     // Validate ObjectId
    if (!mongoose.Types.ObjectId.isValid(id)) {
      return res.status(400).json({ message: 'Invalid user ID' });
    }
    const user = await User.findById(id);  // or mongoose.Types.ObjectId(id) if needed
    if (!user) return res.status(404).json({ message: 'User not found' });
    res.json(user);
  } catch (err) {
    res.status(500).json({ message: err.message });
    console.log("err",err);
  }
};
// post data
const createUser = async (req,res) => {
  const {username, email, mobilenumber, password} = req.body;

  const newUser = new User({ username, email, mobilenumber, password });
    await newUser.save();
  res.send("User details created successfully...")
}
// PUT /users/:id
const updateUser = async (req, res) => {
  const { id } = req.params;
  const { username, email, mobilenumber,password } = req.body;

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(400).json({ message: 'Invalid user ID' });
  }

  try {
    const user = await User.findByIdAndUpdate(id, { username, email, mobilenumber,password }, { new: true });
    if (!user) return res.status(404).json({ message: 'User not found' });
    res.json(user);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

// DELETE /users/:id
const deleteUser = async (req, res) => {
  const { id } = req.params;

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(400).json({ message: 'Invalid user ID' });
  }

  try {
    const user = await User.findByIdAndDelete(id);
    if (!user) return res.status(404).json({ message: 'User not found' });
    res.json({ message: 'User deleted successfully' });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};
module.exports = {createUser,getAllUsers,getUserById,updateUser,deleteUser};