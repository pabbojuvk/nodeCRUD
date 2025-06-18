const mongoose = require('mongoose');

const simItemSchema = new mongoose.Schema({
    Name: {
        type:String,
        required:true
    },
  mobilenumber: {
    type: String,
    ref: 'Product', // assuming a Product model exists
    required: true
  },
  logo: {
    type: String,
    required: true,
    default: 1
  }
},{ timestamps: true });

module.exports = mongoose.model('Sim', simItemSchema);