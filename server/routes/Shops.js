const express = require('express');
const router = express.Router();
const { ShopItems } = require('../models');
// import { validateToken } from '../middlewares/AuthMiddleware';

router.get('/getItems', async (req, res) => {
  const items = await ShopItems.findAll();
  res.json(items);
});

module.exports = router;
