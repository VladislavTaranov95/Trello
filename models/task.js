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
