// src/App.js
import React from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import ProjectCard from './components/ProjectCard';

function App() {
  return (
    <div>
      <Header />
      <main>
        {/* Your portfolio content */}
        <ProjectCard />
      </main>
      <Footer />
    </div>
  );
}

export default App;
