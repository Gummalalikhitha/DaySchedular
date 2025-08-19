// src/pages/Contact.js
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Contact() {
  const navigate = useNavigate();

  // Store all form data in one state
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch("https://dayschedular-backend.onrender.com/api/feedback", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData), // ✅ send formData here
      });

      const data = await response.json();
      if (data.success) {
        alert("✅ Feedback submitted successfully!");
        setFormData({ name: "", email: "", message: "" }); // reset form
      } else {
        alert("⚠️ " + data.error);
      }
    } catch (error) {
      console.error("Error submitting feedback:", error);
      alert("❌ Failed to send feedback. Try again later.");
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

      {/* Contact Section */}
      <div style={styles.container}>
        <div style={styles.card}>
          <h2 style={styles.title}>📞 Contact Us</h2>

          <div style={styles.grid}>
            {/* Get in Touch */}
            <div style={styles.contactInfo}>
              <p style={styles.subTitle}>Get in Touch</p>
              <p style={styles.infoItem}>📧 <strong>Email:</strong> gummalalikhitha@gmail.com</p>
              <p style={styles.infoItem}>
                🔗 <strong>LinkedIn:</strong>{" "}
                <a
                  href="https://in.linkedin.com/in/gummala-likhitha-99a77926a"
                  target="_blank"
                  rel="noopener noreferrer"
                  style={styles.link}
                >
                  GummalaLikhitha
                </a>
              </p>
              <p style={styles.infoItem}>
                💻 <strong>GitHub:</strong>{" "}
                <a
                  href="https://github.com/gummalalikhitha"
                  target="_blank"
                  rel="noopener noreferrer"
                  style={styles.link}
                >
                  GummalaLikhitha
                </a>
              </p>
            </div>

            {/* Feedback Form */}
            <form onSubmit={handleSubmit} style={styles.form}>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Your Name"
                style={styles.input}
                required
              />
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Your Email"
                style={styles.input}
                required
              />
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder="Your Feedback / Message"
                rows="4"
                style={styles.textarea}
                required
              ></textarea>
              <button type="submit" style={styles.button}>
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
  
    </div>
  );
}
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
  container: {
    minHeight: "90vh",
    // background: "linear-gradient(to right, #ece9e6, #ffffff)", url('about.jpg')",
     backgroundImage: "linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.5)), url('contactus.jpg')",
        backgroundSize: "cover",
    backgroundPosition: "center",
        // padding: "80px 20px",
 
     display: "flex",
    justifyContent: "center",
    alignItems: "center",
    padding: "40px 20px",
  },
    card: {
    backgroundColor: "rgba(255,255,255,0.95)",
    padding: "50px 40px",
    borderRadius: "15px",
    maxWidth: "1000px",
    width: "100%",
    boxShadow: "0 8px 20px rgba(0,0,0,0.15)",
  },
  title: {
    textAlign: "center",
    fontSize: "2.5rem",
    fontWeight: "bold",
    marginBottom: "30px",
    color: "#1a1a2e",
  },
  grid: {
    display: "grid",
    gridTemplateColumns: "1fr 1fr",
    gap: "40px",
  },

  // Contact Info
  contactInfo: {
    background: "linear-gradient(135deg, #667eea, #764ba2)",
    color: "white",
    borderRadius: "12px",
    padding: "30px",
    boxShadow: "0 5px 15px rgba(0,0,0,0.2)",
  },
  subTitle: {
    fontSize: "1.5rem",
    fontWeight: "600",
    marginBottom: "20px",
    borderBottom: "2px solid rgba(255,255,255,0.5)",
    paddingBottom: "10px",
  },
  infoItem: {
    fontSize: "1rem",
    marginBottom: "12px",
    lineHeight: "1.6",
  },
  link: {
    color: "#ffeb3b",
    textDecoration: "none",
    fontWeight: "bold",
  },

  // Form
  form: {
    display: "flex",
    flexDirection: "column",
    gap: "15px",
  },
  input: {
    padding: "12px",
    fontSize: "16px",
    borderRadius: "8px",
    border: "1px solid #ccc",
    outline: "none",
  },
  textarea: {
    padding: "12px",
    fontSize: "16px",
    borderRadius: "8px",
    border: "1px solid #ccc",
    outline: "none",
  },
  button: {
    background: "linear-gradient(135deg, #764ba2, #667eea)",
    color: "white",
    padding: "12px 20px",
    border: "none",
    borderRadius: "8px",
    fontSize: "16px",
    fontWeight: "bold",
    cursor: "pointer",
    transition: "all 0.3s ease",
  },
 };
