const mongoose = require('mongoose');
const config = require('../config/db');

const TaskSchema = mongoose.Schema({
  title: {
    type: String,
    default: "No title"
  },
  description: {
    type: String,
    default: "No Description"
  }
});

const Task = module.exports = mongoose.model('Task', TaskSchema);
