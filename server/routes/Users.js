const express = require('express');
const router = express.Router();
const { Users, Shops, Carts, Contacts } = require('../models');
const bcrypt = require('bcrypt');
const { sign } = require('jsonwebtoken');
const { validateToken } = require('../middlewares/AuthMiddleware');
const fileUpload = require('../middlewares/FileUploadMiddleware');

router.post('/regCustomer', async (req, res) => {
  const { firstName, lastName, mobileNumber, address, email, password } =
    req.body;
  await bcrypt.hash(password, 10).then((hash) => {
    Users.create({
      firstName: firstName,
      lastName: lastName,
      mobileNumber: mobileNumber,
      userRole: 'Customer',
      address: address,
      email: email,
      password: hash,
    }).then((user) => {
      Carts.create({
        userId: user.id,
      });
      Contacts.create({
        userId: user.id,
      });
    });
    res.json('Success');
  });
});
router.post('/regAdmin', async (req, res) => {
  const { firstName, lastName, mobileNumber, address, email, password } =
    req.body;
  bcrypt.hash(password, 10).then((hash) => {
    Users.create({
      firstName: firstName,
      lastName: lastName,
      mobileNumber: mobileNumber,
      userRole: 'Admin',
      address: address,
      email: email,
      password: hash,
    });
    res.json('Success');
  });
});

router.post('/regShop', fileUpload.single('file'), async (req, res) => {
  const {
    firstName,
    lastName,
    mobileNumber,
    address,
    email,
    password,
    serviceType,
    shopName,
  } = req.body;

  const filePath = req.file.path;

  await bcrypt.hash(password, 10).then((hash) => {
    Users.create({
      firstName: firstName,
      lastName: lastName,
      mobileNumber: mobileNumber,
      userRole: 'Shop',
      address: address,
      email: email,
      password: hash,
    }).then((user) => {
      Shops.create({
        shopName: shopName,
        serviceType: serviceType,
        userId: user.id,
        file: filePath,
        regApproval: false,
      });
      Contacts.create({
        userId: user.id,
      });
    });
  });

  res.json('Success');
});

router.post('/login', async (req, res) => {
  const { email, password } = req.body;
  const user = await Users.findOne({ where: { email: email } });

  if (!user) res.json({ error: "User doesn't exist" });

  const shop = await Shops.findOne({
    where: {
      userId: user.id,
    },
  });

  // if (shop.regApproval === 0) {
  //   res.json({ error: "Shop registration not approved" });
  // }
  if (
    user.userRole !== 'Shop' ||
    (user.userRole === 'Shop' && shop.regApproval == 1)
  ) {
    bcrypt.compare(password, user.password).then((match) => {
      if (!match) res.json({ error: 'Wrong Username or Password' });

      const accessToken = sign(
        { firstName: user.firstName, id: user.id, userRole: user.userRole },
        'secret'
      );
      res.json(accessToken);
    });
  } else if (user.userRole === 'Shop' && shop.regApproval == 0) {
    res.json({ error: 'Shop registration not approved' });
  }
});

router.get('/byId/:userId', async (req, res) => {
  const userId = req.params.userId;
  const user = await Users.findOne({ where: { id: userId } });
  res.json(user);
});

router.get('/getCount', async (req, res) => {
  const countofUsers = await Users.count();
  res.json(countofUsers);
});

router.get('/getAllUsers', async (req, res) => {
  const listofUsers = await Users.findAll();
  res.json(listofUsers);
});

router.get('/auth', validateToken, (req, res) => {
  res.json(req.user);
});

module.exports = router;
