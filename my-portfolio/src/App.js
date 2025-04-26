// src/App.js
import React from 'react';
import './App.css';
import Header from './components/Header';
import AboutMe from './components/AboutMe';
import ProjectCard from './components/ProjectCard';
import Skills from './components/skills';
import Achievements from './components/achievements';
import Footer from './components/Footer';

function App() {
  const projects = [
    {
      title: "E-Commerce Platform",
      description: "A full-stack e-commerce platform with user authentication, product management, and payment integration.",
      technologies: ["React", "Node.js", "MongoDB", "Express"],
      imageUrl: "/images/ecommerce.jpg",
      projectUrl: "https://ecommerce-demo.com",
      githubUrl: "https://github.com/yourusername/ecommerce"
    },
    {
      title: "Task Management App",
      description: "A collaborative task management application with real-time updates and team features.",
      technologies: ["React", "Firebase", "Material-UI"],
      imageUrl: "/images/taskmanager.jpg",
      projectUrl: "https://taskmanager-demo.com",
      githubUrl: "https://github.com/yourusername/taskmanager"
    },
    {
      title: "Healthcare Dashboard",
      description: "A comprehensive healthcare analytics dashboard for patient data visualization and reporting.",
      technologies: ["React", "D3.js", "Node.js", "PostgreSQL"],
      imageUrl: "/images/healthcare.jpg",
      projectUrl: "https://healthcare-dashboard-demo.com",
      githubUrl: "https://github.com/yourusername/healthcare-dashboard"
    }
  ];

  return (
    <div className="App">
      <Header />
      <main>
        <AboutMe />
        <Skills />
        <section id="projects" className="projects-section">
          <div className="container">
            <h2 className="section-title">My Projects</h2>
            <div className="projects-grid">
              {projects.map((project, index) => (
                <ProjectCard key={index} {...project} />
              ))}
            </div>
          </div>
        </section>
        <Achievements />
      </main>
      <Footer />
    </div>
  );
}

export default App;
