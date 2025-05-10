import React from 'react';
import './ProjectCard.css';


const ProjectCard = ({ title, description, technologies, imageUrl, projectUrl, githubUrl }) => {
  return (
    <div className="project-card">
      <div className="project-image">
        <img src={imageUrl} alt={title} />
      </div>
      <div className="project-content">
        <h3>{title}</h3>
        <p>{description}</p>
        <div className="technologies">
          {technologies.map((tech, index) => (
            <span key={index} className="tech-tag">{tech}</span>
          ))}
        </div>
        <div className="project-links">
          <a href={projectUrl} className="live-demo" target="_blank" rel="noopener noreferrer">
            <i className="fas fa-external-link-alt"></i> Live Demo
          </a>
          <a href={githubUrl} className="github-link" target="_blank" rel="noopener noreferrer">
            <i className="fab fa-github"></i> GitHub
          </a>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
