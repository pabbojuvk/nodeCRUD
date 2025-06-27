
const { default: mongoose } = require("mongoose");

const accountSchema = new mongoose.Schema({
    bankname:String,
    accountnum:String,
    name:String, 
    ifsc:String,
    city:String,
    area:String,
    type:String
 }, {
     timestamps: true
    
    }); 
module.exports = mongoose.model('Account',accountSchema);    