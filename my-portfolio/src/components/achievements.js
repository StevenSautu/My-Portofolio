import React from 'react';
import './achievements.css';

const Achievements = () => {
  const achievements = [
    {
      id: 1,
      title: "Best Developer Award",
      organization: "Tech Excellence Awards 2023",
      description: "Recognized for outstanding contributions to web development and innovative solutions.",
      date: "December 2023",
      icon: "🏆"
    },
    {
      id: 2,
      title: "Certified Full Stack Developer",
      organization: "Meta",
      description: "Completed advanced certification in full stack development with distinction.",
      date: "October 2023",
      icon: "📜"
    },
    
    {
      id: 3,
      title: "Hackathon Winner",
      organization: "CodeFest 2023",
      description: "First place in the annual coding competition for developing an innovative healthcare app.",
      date: "August 2023",
      icon: "💻"
    },
    {
      id: 4,
      title: "Open Source Contributor",
      organization: "GitHub",
      description: "Made significant contributions to popular open source projects with over 500+ stars.",
      date: "June 2023",
      icon: "🌟"
    },
    {
      id: 5,
      title: "Tech Conference Speaker",
      organization: "WebDev Summit 2023",
      description: "Presented on 'Building Scalable Web Applications' to an audience of 500+ developers.",
      date: "April 2023",
      icon: "🎤"
    },
    {
      id: 6,
      title: "Published Technical Article",
      organization: "Medium",
      description: "Article on 'Modern JavaScript Patterns' reached over 10,000 readers.",
      date: "February 2023",
      icon: "📝"
    }
  ];

  return (
    <section id="achievements" className="achievements-section">
      <div className="container">
        <h2 className="section-title">Achievements</h2>
        <div className="achievements-grid">
          {achievements.map((achievement) => (
            <div key={achievement.id} className="achievement-card">
              <div className="achievement-icon">{achievement.icon}</div>
              <div className="achievement-content">
                <h3>{achievement.title}</h3>
                <p className="organization">{achievement.organization}</p>
                <p className="description">{achievement.description}</p>
                <p className="date">{achievement.date}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Achievements; 