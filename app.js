const express = require('express');
const config = require('./config/db');
const mongoose = require('mongoose');
const Urls = require('./routes/urls');

const app = express();

//Подключение к БД
mongoose.connect(config.db, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log("Connected to database!"))
  .catch(error => console.log(error));

app.use('/', Urls);

module.exports = app;
