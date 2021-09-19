const express = require('express');
const router = express.Router();
const { Carts, CartItems } = require('../models');

router.post('/addToCart/:userId', async (req, res) => {
  const userId = req.params.userId;
  const { itemId, quantity, unitPrice } = req.body;

  const { id } = await Carts.findOne({ where: { userId: userId } });

  const newCartItem = await CartItems.create({
    itemId: itemId,
    cartId: id,
    unitPrice: unitPrice,
    quantity: quantity,
    userId: userId,
  });
  res.json(newCartItem);
});

router.get('/getItems/:userId', async (req, res) => {
  const userId = req.params.userId;

  const { id } = await Carts.findOne({ where: { userId: userId } });

  const cartItems = await CartItems.findAll({ where: { cartId: id } });
  res.json(cartItems);
});

router.delete('/deleteItem/:cartItemId', async (req, res) => {
  const cartItemId = req.params.cartItemId;

  await CartItems.destroy({ where: { id: cartItemId } });
  res.json('Success');
});

module.exports = router;
