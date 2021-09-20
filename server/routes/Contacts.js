const express = require('express');
const router = express.Router();
const { Contacts, ContactItems } = require('../models');


router.post('/addmessage/:userId', async (req, res) => { 
  const userId = req.params.userId;
  const { name, email, message } = req.body;

  const { id } = await Contacts.findOne({ where: { userId: userId } });

  const newContactItem = await ContactItems.create({
    name: name,
    contactId: id,
    email: email,
    message: message,
    userId: userId,
  });
  res.json(newContactItem);
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
