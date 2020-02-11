const express = require('express');
const config = require('./config/db');
const mongoose = require('mongoose');
const Task = require('./models/task')

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

//Отслеживаем URl главной страницы
app.post('/', (req, res) => {
  res.send("Main page");

  let newTask = new Task({
    title: req.body.title,
    description: req.body.description
  });

  Task.addTask(newTask, (err, task) => {
    if(err)
      res.json({ success: false, message: "Error adding new task." });
    else
      res.json({ success: true, message: "New task successfully added." });
  })
});

//Запускаем сервер
app.listen(port, () => {
  console.log("Server started by port:" + port)
});

/*
Создали файл, в котором экспортировали объект
*/
