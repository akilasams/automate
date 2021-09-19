const express = require('express');
const router = express.Router();
const { ShopItems, Shops, Orders } = require('../models');
const fileUpload = require('../middlewares/UploadMiddleware');
// import { validateToken } from '../middlewares/AuthMiddleware';

router.post(
  '/addItem/:userId',
  fileUpload.single('image'),
  async (req, res) => {
    const {
      itemName,
      unitPrice,
      modelNo,
      quantity,
      condition,
      description,
      category,
      year,
      country,
    } = req.body;

    const imagePath = req.file.path;
    const userId = req.params.userId;
    const { id } = await Shops.findOne({ where: { userId: userId } });

    const newItem = await ShopItems.create({
      itemName: itemName,
      unitPrice: unitPrice,
      modelNo: modelNo,
      quantity: quantity,
      condition: condition,
      description: description,
      category: category,
      year: year,
      country: country,
      shopId: id,
      userId: userId,
      image: imagePath,
    });

    res.json(newItem);
  }
);

router.post('/placeOrder', async (req, res) => {
  const { itemId, userId } = req.body;

  const item = await ShopItems.findOne({ where: { id: itemId } });

  const newOrder = await Orders.create({
    amount: item.unitPrice,
    userId: userId,
  });

  res.json(newOrder);
});

router.get('/getItems', async (req, res) => {
  const items = await ShopItems.findAll();
  res.json(items);
});

router.get('/getItem/byId/:itemId', async (req, res) => {
  const itemId = req.params.itemId;

  const item = await ShopItems.findOne({ where: { id: itemId } });
  res.json(item);
});

router.get('/byId/:shopId', async (req, res) => {
  const shopId = req.params.shopId;
  const shop = await Shops.findOne({ where: { id: shopId } });
  res.json(shop);
});

module.exports = router;
