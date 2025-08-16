import React, { useState } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";

const ResetPassword = () => {
   const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const handleReset = async () => {
    if (!email || !newPassword || !confirmPassword) {
      alert("Please fill in all fields");
      return;
    }

    try {
      const res = await axios.post("http://localhost:5000/api/auth/reset-password", {
        email,
        newPassword,
        confirmPassword,
      });

      alert(res.data.message);
    } catch (err) {
      const msg = err.response?.data?.message || "Something went wrong!";
      alert(msg);
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

    <div style={styles.container}>

      <div style={styles.card}>
        <h2>Reset Your Password</h2>
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          style={styles.input}
        />
        <input
          type="password"
          placeholder="New Password"
          value={newPassword}
          onChange={(e) => setNewPassword(e.target.value)}
          style={styles.input}
        />
        <input
          type="password"
          placeholder="Confirm New Password"
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
          style={styles.input}
        />
        <button onClick={handleReset} style={styles.button}>Update Password</button>
        <p style={{ marginTop: "10px" }}>
            Login with new password!!{" "}
            <Link to="/login" style={styles.loginLink}>Login here</Link>
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
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    height: "100vh",
     backgroundImage: "url('reset.jpg')", // 👈 Update if needed
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
  },

    card: {
    backgroundColor: "rgba(0, 0, 0, 0.6)",
    padding: "30px",
    borderRadius: "8px",
    boxShadow: "0 2px 10px rgba(0,0,0,0.1)",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    color: "white",
    gap: "15px",
    width: "350px",
  },
  input: {
    padding: "10px",
    fontSize: "14px",
    borderRadius: "4px",
    border: "2px solid #ccc",
     width: "80%",
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
  loginLink: {
    textDecoration: "none",
    color:" #ae8ad4ff",
    fontWeight: "bold",
    fontSize: "14px",
    marginTop: "10px",
    
   
  },
};

export default ResetPassword;
