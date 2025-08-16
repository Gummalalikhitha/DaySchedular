const express = require("express");
const router = express.Router();
const Todo = require("../models/Todo");
const auth = require("../middleware/authMiddleware");

// GET todos for a user
router.get("/", auth, async (req, res) => {
  const { username, email } = req.user;
  let userTodo = await Todo.findOne({ username, email });
  if (!userTodo) userTodo = await Todo.create({ username, email, tasks: [] });
  res.json(userTodo);
});

// ADD a task
router.post("/", auth, async (req, res) => {
  const { text, date,taskTime} = req.body;
  const { username, email } = req.user;
  if (!text || !date || !taskTime) return res.status(400).json({ message: "Missing fields" });

  let userTodo = await Todo.findOne({ username, email });
  if (!userTodo) {
    userTodo = new Todo({ username, email, tasks: [] });
  }

  userTodo.tasks.push({ text, date,taskTime, completed: false });
  await userTodo.save();
  res.json(userTodo);
});

// TOGGLE task completion
router.put("/:index", auth, async (req, res) => {
  const { username, email } = req.user;
  const { index } = req.params;

  const userTodo = await Todo.findOne({ username, email });
  if (!userTodo || !userTodo.tasks[index]) return res.status(404).json({ message: "Task not found" });

  userTodo.tasks[index].completed = !userTodo.tasks[index].completed;
  await userTodo.save();
  res.json(userTodo);
});

// DELETE task
router.delete("/:index", auth, async (req, res) => {
  const { username, email } = req.user;
  const { index } = req.params;

  const userTodo = await Todo.findOne({ username, email });
  if (!userTodo || !userTodo.tasks[index]) return res.status(404).json({ message: "Task not found" });

  userTodo.tasks.splice(index, 1);
  await userTodo.save();
  res.json(userTodo);
});

module.exports = router;
