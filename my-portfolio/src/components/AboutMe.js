import React from 'react';

const AboutMe = () => {
  return (
    <section id="about" className="about-section">
      <div className="container">
        <h2 className="section-title">About Me</h2>
        <div className="about-content">
          <div className="about-text">
            <p>
              Hello! I'm Steven Sautu, a passionate Full Stack Developer with a keen eye for creating
              elegant solutions to complex problems. With a strong foundation in both front-end and
              back-end development, I strive to build scalable and user-friendly applications.
            </p>
            <p>
              I am currently a fourth-year student at Chalimbana University pursuing a Bachelor of ICT - Education.
              My journey in software development began with a curiosity for how things work on the web.
              Since then, I've worked on various projects, from small business websites to complex
              enterprise applications. I'm constantly learning and adapting to new technologies to
              deliver the best possible solutions.
            </p>
            <p>
              Based in Lusaka, Zambia, I'm passionate about leveraging technology to solve real-world problems
              and create meaningful experiences for users. I believe in writing clean, maintainable code
              and following best practices in software development.
            </p>
          </div>
          <div className="about-stats">
            <div className="stat-item">
              <h3>3+</h3>
              <p>Years Experience</p>
            </div>
            <div className="stat-item">
              <h3>20+</h3>
              <p>Projects Completed</p>
            </div>
            <div className="stat-item">
              <h3>15+</h3>
              <p>Happy Clients</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutMe;
