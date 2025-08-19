import React, { useState } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";

const Register = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleRegister = async () => {
    if (!username || !email || !password) {
      alert("Please fill all the fields");
      return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      alert("Invalid email format. Please enter a valid email.");
      return;
    }

    try {
      const res = await axios.post("https://dayschedular-backend.onrender.com/api/auth/register", {
        username,
        email,
        password,
      });
      alert(res.data.message);
      navigate("/login");
    } catch (err) {
      const errorMsg = err.response?.data?.message || "Registration failed";
      alert(errorMsg);
    }
  };

  return (
    <div style={styles.wrapper}>
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

      {/* Register Form */}
      <div style={styles.container}>
        <div style={styles.card}>
          <h2>Register to DayScheduler</h2>

          <input
            type="text"
            placeholder="Username"
            value={username}
            onChange={e => setUsername(e.target.value)}
            style={styles.input}
          />

          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={e => setEmail(e.target.value)}
            style={styles.input}
          />

          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={e => setPassword(e.target.value)}
            style={styles.input}
          />

          <button onClick={handleRegister} style={styles.button}>
            Register
          </button>

          <p style={styles.register}>
            Already have an account? <Link to="/login">Login here</Link>
          </p>
        </div>
      </div>
    </div>
  );
};

const styles = {
  wrapper: {
    minHeight: "100vh",
    display: "flex",
    flexDirection: "column",
  },
  navbar: {
    // backgroundColor: "#1a1a2e",
      background: "linear-gradient(135deg, #3d3448ff, #667eea)",
    color: "white",
    padding: "15px 40px",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    boxShadow: "0 4px 6px rgba(0,0,0,0.1)",
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
    transition: "color 0.3s",
  },
  container: {
    flex: 1,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    backgroundImage: "url('register.jpg')",
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    padding: "30px",
  },
  card: {
    background: "rgba(255, 255, 255, 0.9)",
    padding: "35px",
    borderRadius: "12px",
    boxShadow: "0 8px 25px rgba(0,0,0,0.2)",
    display: "flex",
    flexDirection: "column",
    gap: "15px",
    width: "320px",
    textAlign: "center",
    backdropFilter: "blur(8px)",
  },
  input: {
    padding: "12px",
    fontSize: "15px",
    borderRadius: "6px",
    border: "1px solid #ccc",
    outline: "none",
    transition: "border-color 0.3s",
  },
  button: {
    background: "linear-gradient(135deg, #764ba2, #667eea)",
    color: "#fff",
    padding: "12px",
    fontSize: "16px",
    borderRadius: "6px",
    cursor: "pointer",
    border: "none",
    fontWeight: "bold",
    transition: "transform 0.2s, box-shadow 0.2s",
  },
  register: {
    // fontSize: "14px",
    // color: "#333",
    // marginTop: "10px",
    // textDecoration: "none",
     // fontSize: "14px",
    color: "#333",
    marginTop: "10px",
    textDecoration: "none",

  },
};

export default Register;

