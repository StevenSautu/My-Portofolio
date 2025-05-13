import React, { useState, useEffect } from 'react';
import './Header.css';

// Custom SVG Icons
const CodeIcon = ({ small }) => (
  <svg 
    xmlns="http://www.w3.org/2000/svg" 
    viewBox="0 0 24 24"
    width={small ? "24" : "28"} 
    height={small ? "24" : "28"} 
    fill="none" 
    stroke="currentColor" 
    strokeWidth="2" 
    strokeLinecap="round" 
    strokeLinejoin="round" 
    className={small ? "logo-icon-mobile" : "logo-icon"}
  >
    <polyline points="16 18 22 12 16 6"></polyline>
    <polyline points="8 6 2 12 8 18"></polyline>
  </svg>
);

const MenuIcon = () => (
  <svg 
    xmlns="http://www.w3.org/2000/svg" 
    viewBox="0 0 24 24" 
    width="24" 
    height="24" 
    fill="none" 
    stroke="var(--agri-light-yellow)" 
    strokeWidth="2" 
    strokeLinecap="round" 
    strokeLinejoin="round"
  >
    <line x1="3" y1="12" x2="21" y2="12"></line>
    <line x1="3" y1="6" x2="21" y2="6"></line>
    <line x1="3" y1="18" x2="21" y2="18"></line>
  </svg>
);

const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setMobileMenuOpen(false);
  };

  return (
    <header className={scrolled ? 'scrolled' : ''}>
      <div className="container">
        {/* Desktop Header */}
        <div className="desktop-header">
          <div className="header-profile">
            <div className="logo">
              <CodeIcon />
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
              <li><a href="#skills">Skills</a></li>
              <li><a href="#achievements">Achievements</a></li>
              <li><a href="#certificates">Certificates</a></li>
              <li><a href="#contact">Contact</a></li>
            </ul>
          </nav>
        </div>
        
        {/* Mobile Header */}
        <div className="mobile-header">
          <div className="header-profile-mobile">
            <div className="logo-mobile">
              <CodeIcon small />
            </div>
            <div className="header-text-mobile">
              <h1>Steven Sautu</h1>
              <h2>Full Stack Developer</h2>
            </div>
          </div>
          
          <button 
            onClick={toggleMobileMenu} 
            className="menu-button"
            aria-label="Toggle navigation menu"
          >
            {mobileMenuOpen ? (
              <span className={`hamburger active`}></span>
            ) : (
              <MenuIcon />
            )}
          </button>
        </div>
        
        {/* Mobile Menu with animation */}
        {mobileMenuOpen && (
          <nav className="mobile-nav">
            <ul>
              <li><a href="#about" onClick={closeMobileMenu}>About Me</a></li>
              <li><a href="#projects" onClick={closeMobileMenu}>Projects</a></li>
              <li><a href="#skills" onClick={closeMobileMenu}>Skills</a></li>
              <li><a href="#achievements" onClick={closeMobileMenu}>Achievements</a></li>
              <li><a href="#certificates" onClick={closeMobileMenu}>Certificates</a></li>
              <li><a href="#contact" onClick={closeMobileMenu}>Contact</a></li>
            </ul>
          </nav>
        )}
      </div>
    </header>
  );
};

export default Header;