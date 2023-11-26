const mongoose = require('mongoose');

const todoSchema = new mongoose.Schema({
  text: String,
  fecha: String,
  done: Boolean
});

module.exports = mongoose.model('Todo', todoSchema);
