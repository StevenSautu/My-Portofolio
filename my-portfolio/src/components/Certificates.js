import React from 'react';
import './Certificates.css';

const Certificates = () => {
  const certificates = [
    {
      id: 1,
      title: 'Full Stack Web Development',
      issuer: 'FreeCodeCamp',
      date: '2023',
      image: '/certificates/fullstack.jpg',
      link: '#'
    },
    {
      id: 2,
      title: 'JavaScript Algorithms and Data Structures',
      issuer: 'FreeCodeCamp',
      date: '2023',
      image: '/certificates/javascript.jpg',
      link: '#'
    },
    {
      id: 3,
      title: 'Responsive Web Design',
      issuer: 'FreeCodeCamp',
      date: '2023',
      image: '/certificates/responsive.jpg',
      link: '#'
    }
  ];

  return (
    <section id="certificates" className="certificates-section">
      <div className="container">
        <h2 className="section-title">Certificates</h2>
        <div className="certificates-grid">
          {certificates.map((cert) => (
            <div key={cert.id} className="certificate-card">
              <div className="certificate-image">
                <img src={cert.image} alt={cert.title} />
              </div>
              <div className="certificate-info">
                <h3>{cert.title}</h3>
                <p className="issuer">{cert.issuer}</p>
                <p className="date">{cert.date}</p>
                <a href={cert.link} target="_blank" rel="noopener noreferrer" className="view-certificate">
                  View Certificate
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Certificates; 