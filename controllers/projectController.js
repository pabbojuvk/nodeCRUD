const Project = require("../models/project");
const mongoose = require('mongoose');
const { getCurrentDateISO } = require("../utils/Dateutil");

//post 
const createproject = async (req, res) => {
    try {
        console.log("Date",getCurrentDateISO.name);
        const {title,id,description,status,stage,createdAt,createdBy} = req.body;
        const newpro = new Project({title,id,description,status,stage,createdAt:getCurrentDateISO(),createdBy});    
        await newpro.save();
        res.send("project Post API Created..by me");

    } catch (error) {
        console.error(error.message);
        
    }
    
}
//get
const gettingproject = async (req, res) => {
    try {
        const projects = await Project.find();
        res.status(200).json(projects)
    } catch (error) {
        res.status(500).json({ message : error.message})
    }
    
}
//put
const updateproject = async (req, res) => {
    // const { id } = req.params;
    const { title,id,description,status,stage,createdAt,createdBy } = req.body; //doubt about duplicate
  
    if (!mongoose.Types.ObjectId.isValid(id)) { 
      return res.status(400).json({ message: 'Invalid user ID' });
    }
  
    try {
      const user = await Project.findByIdAndUpdate(id, { title,id,description,status,stage,createdAt,createdBy }, { new: true });
      if (!user) return res.status(404).json({ message: 'User not found' });
      res.json(user);
    } catch (err) {
      res.status(400).json({ message: err.message });
    }
  
}
// DELETE /users/:id
const deleteproject = async (req, res) => {
   
     const { id } = req.params;
   
     if (!mongoose.Types.ObjectId.isValid(id)) {
       return res.status(400).json({ message: 'Invalid user ID' });
     }
   
     try {
       const newpro = await Project.findByIdAndDelete(id);
       if (!newpro) return res.status(404).json({ message: 'User not found' });
       res.json({ message: 'User deleted successfully' });
     } catch (err) {
       res.status(500).json({ message: err.message });
     }
   }

module.exports = { createproject,gettingproject,updateproject,deleteproject}