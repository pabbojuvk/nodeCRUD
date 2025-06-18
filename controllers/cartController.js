const Cart = require('../models/Cart');

const addToCart = async (req, res) => {
  const { userId, productId, quantity } = req.body;

  const ncart = new Cart({userId, productId, quantity})
    // let cart = await Cart.findOne({ userId })

    await ncart.save();
    res.send("Cart details added")
};
module.exports = addToCart;