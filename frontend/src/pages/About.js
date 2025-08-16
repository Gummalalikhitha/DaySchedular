import React from "react";
import { useNavigate } from "react-router-dom";

const About = () => {
  const navigate = useNavigate();

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

      {/* About Section */}
      <div style={styles.aboutContainer}>
        <div style={styles.aboutContent}>
          <h1 style={styles.title}>Why DayScheduler?</h1>
          <p style={styles.description}>
            In a world full of distractions and chaos, <strong>productivity</strong> becomes a superpower.
            <br /><br />
            <strong>DayScheduler</strong> is more than just a To-Do list. It’s your daily planner, motivator, and goal partner.
            Whether you're a student, professional, or dreamer, this empowers you to:
          </p>
          <ul style={styles.features}>
            <li>✅ <strong>Prioritize</strong> your daily tasks effortlessly</li>
            <li>📅 Stay on track with <strong>clear deadlines</strong></li>
              <li>📧 Get timely <strong>email reminders</strong> for your scheduled tasks</li>
            <li>🌱 Build consistent, <strong>productive habits</strong></li>
             <li>🎯 Crush goals <strong>one task at a time</strong></li>
          </ul>
          <p style={styles.motivation}>
            “Success is the sum of small efforts repeated day in and day out.” – Robert Collier
          </p>
          <button style={styles.getStartedButton} onClick={() => navigate("/login")}>
            Start Planning Now
          </button>
        </div>
      </div>
    </div>
  );
};

const styles = {
  navbar: {
   
     background: "linear-gradient(135deg, #3d3448ff, #667eea)",
    color: "white",
    padding: "15px 40px",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    boxShadow: "0 4px 6px rgba(0,0,0,0.2)",
    position: "sticky",
    top: 0,
    zIndex: 999,
  },
  logo: {
    fontSize: "22px",
    fontWeight: "bold",
    color: "white",
    cursor: "pointer",
    letterSpacing: "0.5px",
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
  aboutContainer: {
    backgroundImage: "linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.5)), url('about.jpg')",
    backgroundSize: "cover",
    backgroundPosition: "center",
    padding: "80px 20px",
    minHeight: "90vh",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  aboutContent: {
    backgroundColor: "rgba(255, 255, 255, 0.9)",
    padding: "50px 40px",
    borderRadius: "12px",
    textAlign: "center",
    maxWidth: "850px",
    width: "100%",
    color: "#222",
    boxShadow: "0 8px 25px rgba(0, 0, 0, 0.15)",
    backdropFilter: "blur(4px)",
    animation: "fadeIn 1s ease-in-out",
  },
  title: {
    fontSize: "2.8rem",
    marginBottom: "20px",
    color: "#1a1a2e",
    fontWeight: "700",
  },
  description: {
    fontSize: "1.15rem",
    lineHeight: "1.8",
    marginBottom: "30px",
    color: "#444",
  },
  features: {
    textAlign: "left",
    fontSize: "1.05rem",
    lineHeight: "1.8",
    margin: "0 auto 30px",
    maxWidth: "500px",
    paddingLeft: "10px",
  },
  motivation: {
    fontStyle: "italic",
    color: "#764ba2",
    fontSize: "1.1rem",
    marginBottom: "30px",
  },
  getStartedButton: {
    padding: "14px 30px",
    fontSize: "16px",
    background: "linear-gradient(135deg, #764ba2, #667eea)",
    color: "white",
    border: "none",
    borderRadius: "8px",
    cursor: "pointer",
    fontWeight: "bold",
    letterSpacing: "0.5px",
    transition: "transform 0.2s ease, box-shadow 0.2s ease",
  },
};

export default About;
