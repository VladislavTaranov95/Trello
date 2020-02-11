const express = require('express');
const config = require('./config/db');
const mongoose = require('mongoose');
const Task = require('./models/task');
const urls = require('./routes/urls');

const app = express();

//Порт, по которому будем подключаться к локальному серверу
const port = 3000;

//Подключение к БД
mongoose.connect(config.db, { useNewUrlParser: true, useUnifiedTopology: true });

//Обработчики подключение к БД
mongoose.connection.on('connected', () => {
  console.log("Connected to database!");
})

mongoose.connection.on('error', (err) => {
  console.log("No connection! Error: " + err);
})

app.use('/', urls);

//Запускаем сервер
app.listen(port, () => {
  console.log("Server started by port:" + port)
});

/*
Создали файл, в котором экспортировали объект
*/
