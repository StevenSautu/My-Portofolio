import React from 'react';
import './AboutMe.css';

const AboutMe = () => {
  return (
    <section id="about" className="about-section">
      <div className="container">
        <div className="about-row">
          <div className="about-heading">
            <h1>Hi! My name is Sautu Steven</h1>
          </div>
          <div className="about-text">
            <p>
              <strong>Software Developer Engineer, IT Support Specialist, and at AgriVision</strong> based in Lusaka, Zambia 🇿🇲, with a strong background in software engineering. I am passionate about creating efficient, scalable, and robust software solutions that address real-world challenges.
            </p>
            <p>
              In addition to software development, I provide IT support services, ensuring smooth operation and maintenance of systems. I have experience troubleshooting technical issues, optimizing workflows, and enhancing system performance.
            </p>
            <p>
              With a commitment to continuous learning, I focus on staying current with the latest technologies, ensuring that I bring the best practices to each project.
            </p>
            <div className="about-stats">
              <div className="stat-item">
                <h3>1.5+</h3>
                <p>Years Experience</p>
              </div>
              <div className="stat-item">
                <h3>10+</h3>
                <p>Projects Completed</p>
              </div>
              <div className="stat-item">
                <h3>5+</h3>
                <p>Technologies Mastered</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutMe;
