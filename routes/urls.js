//Отслеживаем URl главной страницы
const express = require('express');
const router = express.Router();

router.post('/', (req, res) => {
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

module.exports = router;
