const express = require('express');
const router = express.Router();
const { ShopItems } = require('../models');

router.get('/', async (req, res) => { 
  const listofAds = await ShopItems.findAll();
  res.json(listofAds);
});

router.post('/postad', async (req, res) => {
  const { name, description, price, quantity, condition, category, vehicleModel, year, country, photo1} = req.body;
  //bcrypt.hash(password, 10).then((hash) => {
    await ShopItems.create({name: name, description: description,  price: price, quantity: quantity, condition: condition, category: category, vehicleModel: vehicleModel, year: year, country: country, photo1: photo1});
    res.json('SUCCESS');
  });
//});

//router.post('/login', async (req, res) => {
  //const { username, password } = req.body;
  //const user = aw ait Users.findOne({ where: { username: username } });
  //if (!user) res.json({ error: 'User Doesnt Exist' });
  //bcrypt.compare(password, user.password).then((match) => {
    //if (!match) res.json({ error: 'Wrong Username and Password Combination' });
    //res.json('YOU LOGGED IN!');
  //});
//});

module.exports = router;
