const Task = require('../models/task');
const errorHandler = require('../helpers/error');

module.exports.addTask = async (req, res) => {
  try {
    let newTask = await new Task({
      title: req.body.title,
      description: req.body.description
    }).save();
    res.status(201).json(newTask);
  }
  catch(err) {
      errorHandler(res, err);
  }
};

module.exports.getAllTasks = async (req, res) => {
  try {
    const tasks = await Task.find({});
    res.status(201).json(tasks);
  }
  catch(err) {
    errorHandler(res, err);
  }
};
