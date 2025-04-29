
import React, { useState } from 'react';
import './Header.css';

const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  return (
    <header>
      {/* Desktop Header */}
      <div className="container">
        <div className="desktop-header">
          <div className="header-profile">
            <div className="avatar">
              <span>SS</span>
            </div>
            <div className="header-text">
              <h1>Steven Sautu</h1>
              <h2>Full Stack Developer</h2>
            </div>
          </div>
          
          <nav className="desktop-nav">
            <ul>
              <li><a href="#about">About Me</a></li>
              <li><a href="#projects">Projects</a></li>
              <li><a href="#contact">Contact</a></li>
              <li><a href="#skills">Skills</a></li>
              <li><a href="#achievements">Achievements</a></li>
            </ul>
          </nav>
        </div>
        
        {/* Mobile Header */}
        <div className="mobile-header">
          <div className="header-profile-mobile">
            <div className="avatar-mobile">
              <span>SS</span>
            </div>
            <div className="header-text-mobile">
              <h1>Steven Sautu</h1>
              <h2>Full Stack Developer</h2>
            </div>
          </div>
          
          <button onClick={toggleMobileMenu} className="menu-button">
            <span className={`hamburger ${mobileMenuOpen ? 'active' : ''}`}></span>
          </button>
        </div>
        
        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <nav className="mobile-nav">
            <ul>
              <li><a href="#about">About Me</a></li>
              <li><a href="#projects">Projects</a></li>
              <li><a href="#contact">Contact</a></li>
              <li><a href="#skills">Skills</a></li>
              <li><a href="#achievements">Achievements</a></li>
            </ul>
          </nav>
        )}
      </div>
    </header>
  );
};

export default Header;