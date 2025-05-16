import React from 'react';
import './AboutMe.css';
import { FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa';
import profileImage from '../assets/images/steve.jpg';

const AboutMe = () => {
  return (
    <section id="about" className="about-section">
      <div className="about-container">
        <div className="content-wrapper">
          <div className="profile-section">
            <div className="profile-image-container">
              <img 
                src={profileImage} 
                alt="Sautu Steven" 
                className="profile-image" 
              />
            </div>
            <div className="intro-text">
              <div className="intro-header">
                <h2 className="greeting">Hi, I'm</h2>
                <h1 className="name">Sautu Steven</h1>
                <h3 className="title">Software Developer</h3>
              </div>
              <div className="intro-content">
                <p className="description">
                  I'm a passionate and results-driven software developer with a strong foundation in 
                  Information and Communication Technology (ICT). Currently in my final year at 
                  Chalimbana University, I combine academic excellence with practical skills gained through 
                  hands-on projects, internships, and collaborative tech initiatives. My work focuses on developing 
                  innovative, efficient, and scalable software solutions that address real-world problems.
                </p>
                <div className="cta-buttons">
                  <button className="btn primary-btn">Get in Touch</button>
                  <button className="btn secondary-btn">View Projects</button>
                </div>
                <div className="social-icons">
                  <a 
                    href="https://github.com/sautusteve" 
                    className="social-icon" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    aria-label="GitHub Profile"
                  >
                    <FaGithub />
                  </a>
                  <a 
                    href="https://linkedin.com/in/sautusteve" 
                    className="social-icon" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    aria-label="LinkedIn Profile"
                  >
                    <FaLinkedin />
                  </a>
                  <a 
                    href="https://twitter.com/sautusteve" 
                    className="social-icon" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    aria-label="Twitter Profile"
                  >
                    <FaTwitter />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="journey-section">
        <div className="journey-container">
          <h3 className="journey-title">My Journey</h3>
          <div className="journey-content">
            <p className="journey-text">
              I'm a software developer with a passion for creating innovative solutions
              that address real-world challenges. Currently pursuing my Bachelor's degree 
              in ICT with Education at Chalimbana University, I combine academic knowledge 
              with practical experience to develop robust and scalable applications.
              My journey has involved building educational tools, working on agriculture-based
              tech innovations like AgriVision, and exploring AI and digital culture projects. 
              I am particularly focused on leveraging technology to improve education and community
              development. With every project, I strive to build inclusive systems that are 
              adaptable, accessible, and impactful across different sectors.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutMe;