// src/App.js
import React from 'react';
import './App.css';
import Header from './components/Header';
import AboutMe from './components/AboutMe';
import ProjectCard from './components/ProjectCard';
import Skills from './components/skills';
import Achievements from './components/achievements';
import ContactForm from './components/ContactForm';
import ScrollToTop from './components/ScrollToTop';
import DarkModeToggle from './components/DarkModeToggle';
import Footer from './components/Footer';

function App() {
  const projects = [
    {
      title: "Agrivion AI",
      description: "An AI-powered platform for farmers to optimize crop management, pest control, and yield prediction.",
      technologies: ["React", "Node.js", "TensorFlow", "Python", "MongoDB"],
      imageUrl: "/assets/images/agrivion.png",
      projectUrl: "#",
      githubUrl: "#"
    },
    {
      title: "Zentra Smart Shopping",
      description: "A team project presented at the 16th ICT-AGM, featuring smart shopping recommendations and price tracking.",
      technologies: ["React", "Firebase", "Material-UI", "Node.js"],
      imageUrl: "/assets/images/Logo-zentra.png",
      projectUrl: "#",
      githubUrl: "#"
    },
    {
      title: "E-Commerce Platform",
      description: "A full-stack e-commerce platform with user authentication, product management, and payment integration.",
      technologies: ["React", "Node.js", "MongoDB", "Express"],
      imageUrl: "/assets/images/SteveCode-logo.png",
      projectUrl: "https://ecommerce-demo.com",
      githubUrl: "https://github.com/yourusername/ecommerce"
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
        <ContactForm />
      </main>
      <ScrollToTop />
      <DarkModeToggle />
      <Footer />
    </div>
  );
}

export default App;
