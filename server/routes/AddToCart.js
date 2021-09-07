const express = require('express');
const router = express.Router();
const { AddToCart } = require('../models');


router.post('/addtocart', async (req, res) => {
  const { item, price, quantity} = req.body;
 
    await AddToCart.create({ item: item, price: price, quantity: quantity});
    res.json('SUCCESS');
  });


module.exports = router;
