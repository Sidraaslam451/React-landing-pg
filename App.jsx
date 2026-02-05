import React, { useState } from "react";
import "./App.css";

function App() {
  // 1. State for Dark/Light Mode (Default: true yani dark)
  const [isDarkMode, setIsDarkMode] = useState(true);

  // 1. State setup (Ismein hum check karenge ki button 'active' hai ya nahi)
  const [isClicked, setIsClicked] = useState(false);

  // 2. Click Handler (Ye true ko false aur false ko true banayega)
  const handleLearnClick = () => {
    setIsClicked(!isClicked);
  };

  // Theme toggle function
  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode);
  };

  return (
    <div className={isDarkMode ? "app-container dark" : "app-container light"}>
      {/* Navbar Section */}
      <nav className="navbar">
        <div className="nav-left">
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg"
            className="logo"
            alt="React"
          />
          <span className="version">v19.2</span>
          <div className="search-box">
            Search <span className="kbd">Ctrl K</span>
          </div>
        </div>
        <div className="nav-right">
          <span>Learn</span>
          <span>Reference</span>
          <span>Community</span>
          <span>Blog</span>
          {/* Theme Toggle Icon Clickable */}
          <button onClick={toggleTheme} className="icon-btn">
            {isDarkMode ? "☀️" : "🌙"}
          </button>
          <button className="icon-btn">🌐</button>
          <button className="icon-btn">GitHub</button>
        </div>
      </nav>

      {/* Hero Section */}
      <main className="hero-section">
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg"
          className="hero-logo"
          alt="React big"
        />
        <h1 className="title">React</h1>
        <p className="subtitle">
          The library for web and native user interfaces
        </p>

        <div className="btn-group">
          {/* Learn React Button with Dynamic Color */}
          <button
            className="learn-btn"
            style={{
              // Agar isClicked true hai to Orange (#ff5733), warna Cyan (#58c4dc)
              backgroundColor: isClicked ? "#ffffff" : "#00FFFF"
            }}
            onClick={handleLearnClick}
          >
            Learn React
          </button>
          <button className="api-btn">API Reference</button>
        </div>
      </main>
    </div>
  );
}

export default App;
