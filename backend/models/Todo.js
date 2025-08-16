// backend/models/Todo.js
const mongoose = require("mongoose");

const taskSchema = new mongoose.Schema({
  text: { type: String, required: true },
  date: { type: String, required: true },        // YYYY-MM-DD
  taskTime: { type: String, required: true },    // HH:mm
  completed: { type: Boolean, default: false },
  reminderSent: { type: Boolean, default: false } // <--- new
});

const userTodoSchema = new mongoose.Schema({
  username: { type: String, required: true },
  email: { type: String, required: true },
  tasks: [taskSchema],
});

module.exports = mongoose.model("Todo", userTodoSchema);
