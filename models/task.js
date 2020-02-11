const mongoose = require('mongoose');
const config = require('../config/db');

const TaskShema = mongoose.Schema({
  title: {
    type: String,
    default: "No title"
  },
  description: {
    type: String,
    default: "No Description"
  }
});

const Task = module.exports = mogoose.model('Task', 'TaskShema');

module.exports.getTaskById = function(id, callback) {
  Task.findById(id, callback);
};

module.exports.getTaskByTitle = function(title, callback) {
  const query = { title: title };
  Task.findById(query, callback);
};

module.exports.addTask = function(newTask, callback) {
  newTask.save(callback);
};
