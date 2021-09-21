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
      approval: false,
    });

    res.json(newItem);
  }
);

router.put(
  '/approveItem/:itemId',
  async (req, res) => {

    const itemId = req.params.itemId;
    console.log("item Id: ", itemId)
    const prevItem = await ShopItems.findByPk(itemId);

    const updatedItem = await ShopItems.update(
      { approval: true },
      { where: { id: (prevItem.dataValues.id) } }
    )

    res.json(updatedItem);
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
router.put(
  '/approveShop/:shopId',
  async (req, res) => {
    console.log("test shop approval")
    const shopId = req.params.shopId;
    // console.log("shop Id: ", shopId)
    const prevShop = await Shops.findByPk(shopId);
    // console.log(prevShop)
    const updatedShop = await Shops.update(
      { regApproval: true },
      { where: { id: (prevShop.dataValues.id) } }
    )
    console.log("updatedShop", updatedShop)
    res.json(updatedShop);
  }
);
router.get('/getShops', async (req, res) => {
  const shops = await Shops.findAll();
  res.json(shops);
});

router.get('/getItems', async (req, res) => {
  const items = await ShopItems.findAll();
  res.json(items);
});

router.get('/getShopItems', async (req, res) => {
  const items = await ShopItems.findAll({
    where: {
      approval: true
    }
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
