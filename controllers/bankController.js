const Account = require("../models/bank");

const bankController = async (req,res)=>{
     try {
        const {bankname,accountnum,name,ifsc,area,city} = req.body;
        const newACholder = new Account({bankname,accountnum,name,ifsc,area,city});
        await newACholder.save();
        res.send("Bank details created...")
        
     } catch (error) {
      console.log(error)
        
     }
}

module.exports = bankController;