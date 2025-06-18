const mongoose = require('mongoose');

const cartItemSchema = new mongoose.Schema({
    userId: {
        type:String,
        required:true
    },
  productId: {
    type: String,
    ref: 'Product', // assuming a Product model exists
    required: true
  },
  quantity: {
    type: String,
    required: true,
    default: 1
  }
},{ timestamps: true });

module.exports = mongoose.model('Cart', cartItemSchema);
