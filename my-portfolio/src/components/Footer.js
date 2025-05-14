import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-section">
            <h3>Connect With Me</h3>
            <div className="social-links">
              <a href="https://sautu.steven.com/" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
                <i className="fab fa-github"></i>
              </a>
              <a href="https://linkedin.com/in/sautusteven" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                <i className="fab fa-linkedin"></i>
              </a>
              <a href="https://facebook.com/steve.erics.sautu" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
                <i className="fab fa-facebook"></i>
              </a>
            </div>
          </div>
          
          <div className="footer-section contact-info">
            <h3>Contact Information</h3>
            <p><i className="fas fa-envelope"></i> sautusteve@gmail.com</p>
            <p><i className="fas fa-phone"></i> +260 973 608 983</p>
            <p><i className="fas fa-map-marker-alt"></i> Lusaka, Zambia</p>
            <p><i className="fas fa-graduation-cap"></i> Fourth Year Student, Bachelor of ICT - Education, Chalimbana University</p>
          </div>
        </div>
      
        <div className="footer-bottom">
          <p className="copyright">&copy; {new Date().getFullYear()} All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;