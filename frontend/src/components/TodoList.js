import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate, Link } from "react-router-dom";

const TodoList = () => {
  const [task, setTask] = useState("");
  const [date, setDate] = useState("");
  const [todos, setTodos] = useState([]);
  const [taskTime, setTaskTime] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    fetchTodos();
  }, []);

  const fetchTodos = async () => {
    try {
      const token = localStorage.getItem("token");
      const res = await axios.get("https://dayschedular-backend.onrender.com/api/todos", {
        headers: { Authorization: `Bearer ${token}` },
      });
      setTodos(res.data.tasks);
    } catch (err) {
      console.error("Error fetching todos:", err.message);
      alert("Session expired. Please login again.");
      navigate("/login");
    }
  };

  const handleAdd = async () => {
    if (!task || !date || !taskTime) {
      alert("Please enter all the details!");
      return;
    }
    try {
      const token = localStorage.getItem("token");
      const res = await axios.post(
        "https://dayschedular-backend.onrender.com/api/todos",
        { text: task, date, taskTime},
    { headers: { Authorization: `Bearer ${token}` } }
      );
      setTodos(res.data.tasks);
      setTask("");
      setDate("");
      setTaskTime("");
    } catch (err) {
      console.error("Add task error:", err.message);
      alert("Failed to add task. Please login again.");
    }
  };

  const handleToggle = async (index) => {
    try {
      const token = localStorage.getItem("token");
      const res = await axios.put(
        `https://dayschedular-backend.onrender.com/api/todos/${index}`,
        {},
        { headers: { Authorization: `Bearer ${token}` } }
      );
      setTodos(res.data.tasks);
    } catch (err) {
      console.error("Toggle task error:", err.message);
    }
  };

  const handleDelete = async (index) => {
    try {
      const token = localStorage.getItem("token");
      const res = await axios.delete(
        `https://dayschedular-backend.onrender.com/api/todos/${index}`,
        { headers: { Authorization: `Bearer ${token}` } }
      );
      setTodos(res.data.tasks);
    } catch (err) {
      console.error("Delete task error:", err.message);
    }
  };

  const handleLogout = () => {
    const confirmLogout = window.confirm("Are you sure you want to logout?");
    if (confirmLogout) {
      localStorage.removeItem("token");
      navigate("/");
    }
  };

  return (
    <div style={styles.container}>
      <nav style={styles.navbar}>
        <div style={styles.logo}>📋 DayScheduler</div>
        <div style={styles.navLinks}>
          <Link to="/" style={styles.navItem}>Home</Link>
          <Link to="/about" style={styles.navItem}>About</Link>
          <button onClick={handleLogout} style={styles.logoutButton}>Logout</button>
        </div>
      </nav>

      <div style={styles.panel}>
        <h1>Welcome to DayScheduler</h1>
        <div style={styles.inputContainer}>
          <input
            type="text"
            placeholder="Enter a task..."
            value={task}
            onChange={(e) => setTask(e.target.value)}
            style={styles.input}
          />
          <input
            type="date"
            value={date}
            onChange={(e) => setDate(e.target.value)}
            style={styles.input}
          />
          <input
  type="time"
  value={taskTime}
  onChange={(e) => setTaskTime(e.target.value)}
  style={styles.input}
/>

          <button onClick={handleAdd} style={styles.addButton}>
            Add Task
          </button>
        </div>

        <ul style={styles.list}>
          {todos.map((todo, idx) => (
            <li key={idx} style={styles.listItem}>
              <div>
                <span
                  style={{
                    fontWeight: "bold",
                    textDecoration: todo.completed ? "line-through" : "none",
                    color: todo.completed ? "#28a745":"#000",
                  }}
                >
                  {todo.text}
                </span>
                <div style={{ fontSize: "12px", color: "#888" }}>
                  📅 {todo.date} 🕒 {todo.taskTime }
                </div>
            

              </div>
              <div>
                <button
                  onClick={() => handleToggle(idx)}
                  style={{
                    ...styles.completeButton,
                    backgroundColor: todo.completed ? "#28a745" : "#ffc107",
                    
                  }}
                >
                  {todo.completed ? "Completed" : "Mark Complete"}
                </button>
                <button
                  onClick={() => handleDelete(idx)}
                  style={styles.deleteButton}
                >
                  ❌
                </button>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

const styles = {
  container: {
    width: "100vw",
    height: "100vh",
    backgroundImage: "url('background.jpg')",
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    padding: 0,
    margin: 0,
    overflow: "hidden", // 🚀 Hides scrollbars
    display: "flex",
    flexDirection: "column",
  },
  navbar: {
    background: "linear-gradient(135deg, #3d3448, #667eea)",
    padding: "12px 30px",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    color: "white",
  },
  logo: {
    fontSize: "22px",
    fontWeight: "bold",
  },
  navLinks: {
    display: "flex",
    gap: "20px",
    alignItems: "center",
  },
  navItem: {
    color: "#fff",
    textDecoration: "none",
    fontSize: "16px",
    transition: "color 0.3s ease",
  },
  logoutButton: {
    backgroundColor: "#dc3545",
    color: "#fff",
    border: "none",
    padding: "8px 12px",
    borderRadius: "5px",
    cursor: "pointer",
    fontSize: "16px",
    transition: "background-color 0.3s ease",
  },
  panel: {
    backgroundColor: "rgba(0, 0, 0, 0.6)",
    padding: "30px",
    borderRadius: "10px",
    color: "white",
    width: "100%",
    maxWidth: "600px",
    margin: "auto",
    boxShadow: "0px 4px 15px rgba(0,0,0,0.2)",
  },
  inputContainer: {
    display: "flex",
    flexDirection: "column",
    marginBottom: "20px",
    gap: "8px",
  },
  input: {
    padding: "10px",
    fontSize: "16px",
    borderRadius: "5px",
    border: "none",
    outline: "none",
  },
  addButton: {
    padding: "10px 15px",
    backgroundColor: "#007BFF",
    color: "#fff",
    border: "none",
    cursor: "pointer",
    borderRadius: "5px",
  },
  list: {
    listStyleType: "none",
    padding: 0,
    maxHeight: "300px",
    overflowY: "auto", // ✅ If tasks overflow, still scroll inside panel (not whole page)
    scrollbarWidth: "none", // Firefox
  },
  listItem: {
    backgroundColor: "#f9f9f9",
    padding: "10px",
    marginBottom: "8px",
    borderRadius: "4px",
    color: "#333",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
  },
  completeButton: {
    marginRight: "10px",
    padding: "6px 10px",
    border: "none",
    color: "#fff",
    borderRadius: "4px",
    cursor: "pointer",
  },
  deleteButton: {
    backgroundColor: "#dc3545",
    color: "#fff",
    border: "none",
    padding: "6px 10px",
    borderRadius: "4px",
    cursor: "pointer",
  },
};

export default TodoList;

