const Todo = require("../models/Todo");

exports.getTodos = async (req, res) => {
  try {
    const todoDoc = await Todo.findOne({ email: req.user.email });
    if (!todoDoc) return res.json([]);
    res.json(todoDoc.tasks);
  } catch (err) {
    res.status(500).json({ message: "Server error" });
  }
};

exports.addTodo = async (req, res) => {
  const { text, date } = req.body;
  if (!text || !date) return res.status(400).json({ message: "Missing fields" });

  const newTask = { text, date, completed: false };

  try {
    let todoDoc = await Todo.findOne({ email: req.user.email });

    if (!todoDoc) {
      todoDoc = new Todo({
        username: req.user.username,
        email: req.user.email,
        tasks: [newTask],
      });
    } else {
      todoDoc.tasks.push(newTask);
    }

    await todoDoc.save();
    res.json(newTask);
  } catch (err) {
    res.status(500).json({ message: "Error saving task" });
  }
};

exports.updateTodo = async (req, res) => {
  const { id } = req.params;
  const { completed } = req.body;

  try {
    const todoDoc = await Todo.findOne({ email: req.user.email });
    if (!todoDoc) return res.status(404).json({ message: "No tasks found" });

    const task = todoDoc.tasks.id(id);
    if (!task) return res.status(404).json({ message: "Task not found" });

    task.completed = completed;
    await todoDoc.save();
    res.json(task);
  } catch (err) {
    res.status(500).json({ message: "Error updating task" });
  }
};

exports.deleteTodo = async (req, res) => {
  const { id } = req.params;

  try {
    const todoDoc = await Todo.findOne({ email: req.user.email });
    if (!todoDoc) return res.status(404).json({ message: "No tasks found" });

    todoDoc.tasks = todoDoc.tasks.filter(task => task._id.toString() !== id);
    await todoDoc.save();

    res.json({ message: "Task deleted" });
  } catch (err) {
    res.status(500).json({ message: "Error deleting task" });
  }
};
