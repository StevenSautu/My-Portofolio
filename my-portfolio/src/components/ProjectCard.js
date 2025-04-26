import React from 'react';

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
            <span key={index} className="tech-tag">
              {tech}
            </span>
          ))}
        </div>
        <div className="project-links">
          <a href={projectUrl} target="_blank" rel="noopener noreferrer" className="live-demo">
            Live Demo
          </a>
          <a href={githubUrl} target="_blank" rel="noopener noreferrer" className="github-link">
            GitHub
          </a>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
