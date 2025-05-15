import React from 'react';
import './AboutMe.css';

const AboutMe = () => {
  return (
    <section id="about" className="about-section">
      <div className="full-page-container">
        <div className="about-grid">
          <div className="name-column">
            <div className="name-content">
              <p className="greeting">Hi!</p>
              <h1 className="name">SAUTU STEVEN</h1>
              <p className="title">SOFTWARE DEVELOPER</p>
            </div>
          </div>
          <div className="description-column">
            <div className="description-content">
              <p className="description-text">
                I am a motivated and enthusiastic individual with a solid background in Information and Communication Technology (ICT) and a strong passion for Software Development and Systems Engineering. Currently in my fourth year of the Bachelor of ICT with Education program at Chalimbana University, I am keen to discover innovative solutions that make a significant global impact.
              </p>
              <p className="description-text">
                My goal is to utilize my skills in software development and systems engineering to develop robust and scalable solutions that enhance educational methodologies and strengthen digital security. With a focus on creativity, innovation, and inclusivity, I am prepared to contribute to an organization that prioritizes excellence and embraces new technological challenges on an international scale.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutMe;