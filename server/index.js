const express = require('express');
const app = express();
const cors = require('cors');

const db = require('./models');

app.use(cors());
app.use(express.json()); // for parsing application/json
app.use(express.urlencoded({ extended: true }));

const usersRouter = require('./routes/Users');
app.use('/user', usersRouter);

db.sequelize.sync().then(() => {
  app.listen(3001, () => {
    console.log('Server Running on Port 3001');
  });
});
