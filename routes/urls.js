//Отслеживаем URl главной страницы
const express = require('express');
const router = express.Router();
const controllerTask = require('../controllers/task');

router.post('/', controllerTask.addTask);
router.get('/', controllerTask.getAllTasks);


router.get('/', (res, req) => {
  res.send("<h2>Main page</h2>");
});

module.exports = router;
