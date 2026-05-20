import React, { useMemo } from 'react';
import { Code2, Globe, Download, MapPin, GraduationCap } from 'lucide-react';
import './App.css';
import GitHubImg from './assets/GitHub.png';
import LinkedInImg from './assets/linkedin.png';
const userData = {
  name: "Archith Manduva",
  role: "Student",
  school: "Seven Lakes High School",
  location: "Katy, TX",
  github: "https://github.com/ArchithM",
  linkedin: "https://www.linkedin.com/in/archith-manduva-54016233a/",
  resumePath: "/resume.pdf", 
  profilePic: "https://via.placeholder.com/150", 
  
  about: "Placeholder",
  
  techStack: ["Node.js", "Java", "Python", "Arduino", "SQL", "React"],
  
  projects: [
    { title: "Project One", description: "Placeholder", link: "#" },
  ],
  
  experience: [
    { organization: "Placeholder", role: "Placeholder", date: "Summer 2023" },

  ],
  
  awards: [
    { title: "Placeholder", date: "2023" },
  ]
};


const StarryBackground = () => {
  const stars = useMemo(() => {
    return Array.from({ length: 300 }).map((_, i) => ({
      id: i,
      top: `${Math.random() * 100}%`,
      left: `${Math.random() * 100}%`,
      animationDelay: `${Math.random() * 5}s`,
      size: `${Math.random() * 2 + 1}px`
    }));
  }, []);

  return (
    <div className="sky-container">
      {stars.map((star) => (
        <div
          key={star.id}
          className="star"
          style={{
            top: star.top,
            left: star.left,
            width: star.size,
            height: star.size,
            animationDelay: star.animationDelay,
          }}
        />
      ))}
    </div>
  );
};

function App() {
  return (
    <div className="app-wrapper">
      <StarryBackground />
      
      <main className="content-container">
        
        <section className="glass-card profile-card">
          <img src={userData.profilePic} alt={userData.name} className="profile-img" />
          <div className="profile-info">
            <h1>{userData.name}</h1>
            <h2>{userData.role}</h2>
            
            <div className="profile-details">
              <span className="detail-item"><GraduationCap size={16} /> {userData.school}</span>
              <span className="detail-item"><MapPin size={16} /> {userData.location}</span>
            </div>

            <div className="social-links">
              <a href={userData.github} target="_blank" rel="noreferrer" aria-label="GitHub"><img src={GitHubImg} width = {20} height={20} alt="GitHub" /></a>
              <a href={userData.linkedin} target="_blank" rel="noreferrer" aria-label="LinkedIn"><img src={LinkedInImg} width={20} height={20} alt="LinkedIn" /></a>
              <a href={userData.resumePath} download className="resume-btn"><Download size={16} /> Resume</a>
            </div>
          </div>
        </section>

        <section className="section">
          <h3>About</h3>
          <p>{userData.about}</p>
        </section>

        <section className="section">
          <h3>Tech Stack</h3>
          <div className="tags-container">
            {userData.techStack.map((tech, i) => (
              <span key={i} className="tag">{tech}</span>
            ))}
          </div>
        </section>

        <section className="section">
          <h3>Projects</h3>
          <div className="list-container">
            {userData.projects.map((proj, i) => (
              <div key={i} className="list-item">
                <div className="item-header">
                  <a href={proj.link} target="_blank" rel="noreferrer" className="item-title link">{proj.title}</a>
                </div>
                <p className="item-desc">{proj.description}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="section">
          <h3>Experience & Extracurriculars</h3>
          <div className="list-container">
            {userData.experience.map((exp, i) => (
              <div key={i} className="list-item flex-row">
                <div>
                  <div className="item-title">{exp.organization}</div>
                  <div className="item-desc">{exp.role}</div>
                </div>
                <div className="item-date">{exp.date}</div>
              </div>
            ))}
          </div>
        </section>

        <section className="section">
          <h3>Awards</h3>
          <div className="list-container">
            {userData.awards.map((award, i) => (
              <div key={i} className="list-item flex-row">
                <div className="item-title">{award.title}</div>
                <div className="item-date">{award.date}</div>
              </div>
            ))}
          </div>
        </section>

      </main>
    </div>
  );
}

export default App;