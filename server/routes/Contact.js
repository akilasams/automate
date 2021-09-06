const express = require('express');
const router = express.Router();
const { Contact } = require('../models');


router.post('/contact', async (req, res) => {
  const { name, email, message} = req.body;
  //bcrypt.hash(password, 10).then((hash) => {
    await Contact.create({name: name, email: email, message: message});
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
