const express = require('express');
const router = express.Router();
const { ShopItems, Shops } = require('../models');
// import { validateToken } from '../middlewares/AuthMiddleware';

router.get('/getItems', async (req, res) => {
  const items = await ShopItems.findAll();
  res.json(items);
});

router.get('/byId/:shopId', async (req, res) => {
  const shopId = req.params.shopId;
  const shop = await Shops.findOne({ where: { id: shopId } });
  res.json(shop);
});

module.exports = router;
