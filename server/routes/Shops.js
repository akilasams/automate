const express = require('express');
const router = express.Router();
const { ShopItems, Shops, Orders, OrderItems } = require('../models');
const imageUpload = require('../middlewares/ImageUploadMiddleware');
// import { validateToken } from '../middlewares/AuthMiddleware';

router.post(
  '/addItem/:userId',
  imageUpload.single('image'),
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
      approval: false,
    });

    res.json(newItem);
  }
);

router.put('/approveItem/:itemId', async (req, res) => {
  const itemId = req.params.itemId;
  console.log('item Id: ', itemId);
  const prevItem = await ShopItems.findByPk(itemId);

  const updatedItem = await ShopItems.update(
    { approval: true },
    { where: { id: prevItem.dataValues.id } }
  );

  res.json(updatedItem);
});

router.post('/buyNow', async (req, res) => {
  const { itemId, userId, quantity, unitPrice } = req.body;

  const newOrder = await Orders.create({
    amount: unitPrice,
    userId: userId,
  });

  const newOrderItem = await OrderItems.create({
    quantity: quantity,
    ShopItemId: itemId,
    OrderId: newOrder.id,
  });

  res.json(newOrder);
});

router.post('/placeOrder', async (req, res) => {
  const { userId, cartItemsList, total } = req.body;

  const newOrder = await Orders.create({
    amount: total,
    userId: userId,
  });

  await cartItemsList.forEach((cartItem) => {
    OrderItems.create({
      quantity: cartItem.quantity,
      ShopItemId: cartItem.itemId,
      OrderId: newOrder.id,
    });
  });

  res.json(newOrder);
});

router.put('/approveShop/:shopId', async (req, res) => {
  console.log('test shop approval');
  const shopId = req.params.shopId;
  // console.log("shop Id: ", shopId)
  const prevShop = await Shops.findByPk(shopId);
  // console.log(prevShop)
  const updatedShop = await Shops.update(
    { regApproval: true },
    { where: { id: prevShop.dataValues.id } }
  );
  console.log('updatedShop', updatedShop);
  res.json(updatedShop);
});
router.get('/getShops', async (req, res) => {
  const shops = await Shops.findAll();
  res.json(shops);
});

router.get('/getAds', async (req, res) => {
  const countofAds = await ShopItems.count();
  res.json(countofAds);
});

router.get('/getItems', async (req, res) => {
  const items = await ShopItems.findAll();
  res.json(items);
});

router.get('/getShopItems', async (req, res) => {
  const items = await ShopItems.findAll({
    where: {
      approval: true,
    },
  });
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
