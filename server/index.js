const express = require('express');
const app = express();
const cors = require('cors');
const path = require('path');

const db = require('./models');

app.use(cors());
app.use(express.json()); // for parsing application/json
app.use(express.urlencoded({ extended: true }));

const usersRouter = require('./routes/Users');
app.use('/user', usersRouter);
const shopsRouter = require('./routes/Shops');
app.use('/shop', shopsRouter);
const ContactRouter = require('./routes/Contacts');
app.use('/contactus', ContactRouter);
const AdsRouter = require('./routes/ShopItems');
app.use('/ads', AdsRouter);
const CartRouter = require('./routes/Carts');
app.use('/cart', CartRouter);
const PaymentRouter = require('./routes/Payments');
app.use('/payments', PaymentRouter);
app.use('/uploads/images', express.static(path.join('uploads', 'images')));
app.use('/uploads/pdf', express.static(path.join('uploads', 'pdf')));

db.sequelize.sync().then(() => {
  app.listen(3001, () => {
    console.log('Server Running on Port 3001');
  });
});
