import React, { useState } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleLogin = async () => {
    if (!username || !password) {
      alert("Please fill in all fields");
      return;
    }

    try {
      const res = await axios.post("https://dayschedular-backend.onrender.com/api/auth/login", {
        username,
        password,
      });

      if (res.data.success) {
        localStorage.setItem("token", res.data.token);
        alert("Login successful!");
        navigate("/todolist");
      } else {
        alert(res.data.message || "Invalid credentials");
      }
    } catch (err) {
      console.error(err);
      const msg = err.response?.data?.message || "Something went wrong!";
      alert(msg);
    }
  };

  return (
    <div>
      {/* Navbar */}
      <nav style={styles.navbar}>
        <div style={styles.logo}>📋 DayScheduler</div>
        <ul style={styles.navLinks}>
          <li style={styles.navItem} onClick={() => navigate("/")}>Home</li>
          <li style={styles.navItem} onClick={() => navigate("/about")}>About</li>
            <li style={styles.navItem} onClick={() => navigate("/contact")}>ContactUs</li>
          <li style={styles.navItem} onClick={() => navigate("/login")}>Login</li>
        </ul>
      </nav>

      {/* Login Form */}
      <div style={styles.container}>
        <div style={styles.card}>
          <h2 style={styles.title}>Welcome to DayScheduler📋 </h2>
          <p style={styles.subtitle}>Log in to continue your journey</p>

          <input
            type="text"
            placeholder="Username or Email"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            style={styles.input}
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            style={styles.input}
          />
          <button onClick={handleLogin} style={styles.button}>
            Login
          </button>

          <p style={styles.forgotPassword}>
            <Link to="/reset-password" style={styles.link}>Forgot Password?</Link>
          </p>
          <p style={styles.register}>
            Don’t have an account? <Link to="/register" style={styles.link}>Register</Link>
          </p>
        </div>
      </div>
    </div>
  );
};

const styles = {
  navbar: {
    // backgroundColor: "#1a1a2e",
    // background: "linear-gradient(135deg, #764ba2, #667eea)",
     background: "linear-gradient(135deg, #3d3448ff, #667eea)",
    color: "white",
    padding: "15px 40px",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    boxShadow: "0 4px 8px rgba(0,0,0,0.2)",
    position: "sticky",
    top: 0,
    zIndex: 999,
  },
  logo: {
    fontSize: "22px",
    fontWeight: "bold",
    color: "white",
    cursor: "pointer",
  },
  navLinks: {
    listStyle: "none",
    display: "flex",
    gap: "25px",
    margin: 0,
    padding: 0,
  },
  navItem: {
    fontSize: "16px",
    color: "white",
    cursor: "pointer",
    transition: "color 0.3s ease",
  },
  container: {
    minHeight: "90vh",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    backgroundImage: "linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.5)), url('login.jpg')",
    backgroundSize: "cover",
    backgroundPosition: "center",
    padding: "30px",
  },
  card: {
    background: "rgba(255, 255, 255, 0.9)",
    padding: "40px 30px",
    borderRadius: "12px",
    boxShadow: "0 8px 25px rgba(0,0,0,0.15)",
    display: "flex",
    flexDirection: "column",
    gap: "15px",
    width: "350px",
    textAlign: "center",
    backdropFilter: "blur(6px)",
  },
  title: {
    fontSize: "1.8rem",
    fontWeight: "700",
    color: "#1a1a2e",
    marginBottom: "5px",
  },
  subtitle: {
    fontSize: "0.95rem",
    color: "#555",
    marginBottom: "20px",
  },
  input: {
    padding: "12px",
    fontSize: "15px",
    borderRadius: "6px",
    border: "1px solid #ccc",
    outline: "none",
    transition: "border 0.3s ease, box-shadow 0.3s ease",
  },
  button: {
    background: "linear-gradient(135deg, #764ba2, #667eea)",
    color: "white",
    padding: "12px",
    fontSize: "16px",
    borderRadius: "6px",
    cursor: "pointer",
    border: "none",
    fontWeight: "bold",
    transition: "transform 0.2s ease, box-shadow 0.2s ease",
  },
  forgotPassword: {
    marginTop: "10px",
  },
  register: {
    marginTop: "5px",
  },
  link: {
    color: "#764ba2",
    textDecoration: "none",
    fontWeight: "bold",
  },
};

export default Login;
