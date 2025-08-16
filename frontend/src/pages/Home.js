import React from "react";
import { useNavigate } from "react-router-dom";

const Home = () => {
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

      {/* Fullscreen Hero Section */}
      <header style={styles.hero}>
        <div style={styles.heroOverlay}>
          <h1 style={styles.heading}>Stay Organized, Stay Motivated💡</h1>
          <p style={styles.subText}>
            Start each day with a plan. Prioritize. Track. Complete. <br />
            Your productivity partner is here!
          </p>
          <button style={styles.ctaButton} onClick={() => navigate("/register")}>
            Get Started
          </button>
        </div>

        {/* Author text at bottom inside the image */}
        <p style={styles.authorText}>
      
        <span style={{ fontWeight: "bold", letterSpacing: "1px",color: "#2b1d38ff" }}>DayScheduler</span> 
  <span style={{fontWeight: "bold", color: "#2b1d38ff"}}>   |   Developed by Gummala Likhitha</span>  
  <span style={{fontWeight: "bold", color: "#2b1d38ff" }}>  |   © {new Date().getFullYear()} All Rights Reserved</span>
      </p>
        
      </header>
    </div>
  );
};

const styles = {
  navbar: {
    // backgroundColor: "#1a1a2e",
    background: "linear-gradient(135deg, #764ba2, #667eea)",
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
  hero: {
    height: "100vh", // full height, no void space
    backgroundImage: "url('home.jpg')",
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    display: "flex",
    flexDirection: "column", // allows author text at bottom
    justifyContent: "center",
    alignItems: "center",
    position: "relative",
  },
  heroOverlay: {
    textAlign: "center",
    color: "black",
    maxWidth: "700px",
    padding: "40px 20px",
  },
  heading: {
    fontSize: "3rem",
    marginBottom: "20px",
  },
  subText: {
    fontSize: "1.2rem",
    marginBottom: "30px",
  },
  ctaButton: {
    // padding: "12px 28px",
    // fontSize: "16px",
    // backgroundColor: "#764ba2",
    // color: "black",
    // border: "none",
    // borderRadius: "8px",
    // cursor: "pointer",
    // fontWeight: "600",
    // transition: "transform 0.2s ease-in-out",
      
    background: "linear-gradient(135deg, #764ba2, #667eea)",
    color: "black",
    padding: "12px",
    fontSize: "16px",
    borderRadius: "6px",
    cursor: "pointer",
    border: "none",
    fontWeight: "bold",
    transition: "transform 0.2s, box-shadow 0.2s",
  
  },
  authorText: {
    position: "absolute",
    bottom: "10px",
    width: "100%",
    textAlign: "center",
    fontSize: "0.9rem",
    color: "black",
    fontStyle: "italic",
   
  },
};

export default Home;
