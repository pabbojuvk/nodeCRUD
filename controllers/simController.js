const Sim = require("../models/Sim");


const simController = async (req,res) => {
  const {Name, mobilenumber, logo} = req.body;

  const newsim = new Sim({ Name, mobilenumber, logo });
    await newsim.save();
  res.send("SimCard with details")
}

module.exports = simController;