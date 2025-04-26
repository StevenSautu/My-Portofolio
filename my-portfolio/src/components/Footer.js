import React from 'react';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="social-links">
            <a href="https://github.com/yourusername" target="_blank" rel="noopener noreferrer">
              <i className="fab fa-github"></i>
            </a>
            <a href="https://linkedin.com/in/sautusteven" target="_blank" rel="noopener noreferrer">
              <i className="fab fa-linkedin"></i>
            </a>
            <a href="https://facebook.com/steve.erics.sautu" target="_blank" rel="noopener noreferrer">
              <i className="fab fa-facebook"></i>
            </a>
          </div>
          <div className="contact-info">
            <p><i className="fas fa-envelope"></i> Email: sautusteve@gmail.com</p>
            <p><i className="fas fa-phone"></i> Phone: +260 973 608 983</p>
            <p><i className="fas fa-map-marker-alt"></i> Location: Lusaka, Zambia</p>
            <p><i className="fas fa-graduation-cap"></i> Education: Fourth Year Student, Bachelor of ICT - Education, Chalimbana University</p>
          </div>
          <div className="copyright">
            <p>&copy; {new Date().getFullYear()} Steven Sautu. All rights reserved.</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
