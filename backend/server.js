const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const dotenv = require("dotenv");

dotenv.config();


const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json());

// Routes
const authRoutes = require("./routes/authRoutes");
app.use("/api/auth", authRoutes);
const feedbackRoutes = require("./routes/feedbackRoutes");
app.use("/api/feedback",feedbackRoutes );
// app.use("/api/todos", require("./routes/todoRoutes"));
const todoRoutes = require("./routes/todoRoutes");
app.use("/api/todos", todoRoutes);
const startReminderService = require('./services/reminderService');
startReminderService();
// MongoDB connection
mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
.then(() => {
  console.log("MongoDB connected");
  app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
})
.catch((err) => console.error("MongoDB connection error:", err));


