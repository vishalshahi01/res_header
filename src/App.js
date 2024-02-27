import React, { useState } from 'react';
import './App.css';

function App() {
  const [navOpen, setNavOpen] = useState(false);

  return (
    <>
      <div className="navbar">
        <div className="navbar-container">
          <h2 className='brand'>Responsive Header</h2>
          <div className="toggle-button" onClick={() => setNavOpen(!navOpen)}>
            <div className={navOpen ? "hamburger open" : "hamburger"}></div>
            <div className={navOpen ? "hamburger open" : "hamburger"}></div>
            <div className={navOpen ? "hamburger open" : "hamburger"}></div>
          </div>
          <div className={navOpen ? "nav-links open" : "nav-links"}>
            <a href="Home">Home</a>
            <a href="About">About</a>
            <a href="Skills">Skills</a>
            <a href="Projects">Project</a>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
