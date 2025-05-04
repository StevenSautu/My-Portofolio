import React from 'react';
import profileImg from '../assets/images/steve.jpg';

const AboutMe = () => {
  return (
    <section id="about" className="about-section">
      <div className="container">
        <h2 className="section-title">About Me</h2>
        <div className="about-content">
          <div className="about-image">
            <img src={profileImg} alt="Steven Sautu" />
          </div>
          <div className="about-text">
            <p>
              <strong>Software Developer Engineer, IT Support Specialist, and At Agrivion</strong> based in Lusaka, Zambia 🇿🇲🇿🇲, with a strong background in software engineering. I am passionate about creating efficient, scalable, and robust software solutions that address real-world challenges. My work is rooted in solving complex problems through well-structured, high-quality code and system design.
            </p>
            <p>
              In addition to software development, I provide IT support services, ensuring smooth operation and maintenance of systems. I have experience troubleshooting technical issues, optimizing workflows, and enhancing system performance. Whether working on backend systems, databases, or providing hands-on support, I strive to deliver reliable and impactful solutions.
            </p>
            <p>
              With a commitment to continuous learning, I focus on staying current with the latest technologies, ensuring that I bring the best practices to each project. My goal is to help organizations thrive by integrating innovative software engineering practices with reliable IT support.
            </p>
            <div className="about-stats">
              <div className="stat-item">
                <h3>3+</h3>
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
