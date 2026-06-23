import React, { useMemo } from 'react';
import { Code2, Globe, Download, MapPin, GraduationCap } from 'lucide-react';
import './App.css';
import GitHubImg from './assets/GitHub.png';
import LinkedInImg from './assets/linkedin.png';
const userData = {
  name: "Archith Manduva",
  role: "Student Developer & CS Educator",
  school: "Seven Lakes High School",
  location: "Katy, TX",
  github: "https://github.com/ArchithM",
  linkedin: "https://www.linkedin.com/in/archith-manduva-54016233a/",
  resumePath: "/resume.pdf",
  profilePic: "https://via.placeholder.com/150",

  about:
    "High school student passionate about computer science, machine learning, and education. I enjoy building software projects, exploring systems-level programming, and applying AI and data science to real-world problems. Outside of programming, I help teach younger students through MECCLab and mentor peers in competitive programming and robotics.",

  techStack: [
    "Python",
    "Java",
    "JavaScript",
    "TypeScript",
    "React",
    "Node.js",
    "Arduino",
    "SQL",
    "PyTorch",
    "scikit-learn",
    "Pandas",
    "NumPy",
    "Matplotlib",
    "Flask",
    "Git",
    "HTML/CSS",
    "R"
  ],

  projects: [
    {
      title: "PyMorph",
      description:
        "A programming language built on top of Python focused on experimentation with language design and developer tooling.",
      link: "https://github.com/ArchithM"
    },
    {
      title: "SimpleGit",
      description:
        "A simplified Git GUI designed to make version control more accessible and intuitive for developers.",
      link: "https://github.com/ArchithM"
    },
    {
      title: "Linux Emulator on Windows",
      description:
        "Systems-level project exploring operating system behavior and Linux-style environments on Windows.",
      link: "https://github.com/ArchithM"
    },
    {
      title: "Hurricane Property Value Analysis",
      description:
        "Used Random Forests and XGBoost models to analyze the financial impact of hurricanes on Gulf Coast property values using FEMA, HURDAT2, and Harris County datasets.",
      link: "#"
    },
    {
      title: "Dynamic Graph Algorithms Research",
      description:
        "Researched how predictive models can improve dynamic graph algorithms during the UC San Diego FinDS program, with applications in routing and disease tracking.",
      link: "#"
    },
    {
      title: "Brain Tumor Detection ML Model",
      description:
        "Built a machine learning model during Harvard LINC Camp to identify brain tumors from neuroscience imaging data.",
      link: "#"
    }
  ],

  experience: [
    {
      organization: "MECCLab",
      role: "Co-founder & Computer Science Co-Lead",
      date: "2025 - Present"
    },
    {
      organization: "FIRST Robotics Club",
      role: "Programming Director",
      date: "2026 - Present"
    },
    {
      organization: "Computer Science Club",
      role: "Competitive Programming Co-Lead",
      date: "2026 - Present"
    },
    {
      organization: "HackClub",
      role: "Co-founder & Captain",
      date: "2025 - Present"
    },
    {
      organization: "Houston Museum of Natural Science",
      role: "SciTeen Mentor",
      date: "2025"
    },
    {
      organization: "Best in Class Education Center",
      role: "Teacher's Assistant",
      date: "2023 - 2024"
    }
  ],

  awards: [
    {
      title: "USACO Gold Division",
      date: "2025"
    },
    {
      title: "Climate Resilience Award - Modeling the Future Challenge",
      date: "2026"
    },
    {
      title: "Presidential Volunteer Service Award (Gold)",
      date: "2024"
    },
    {
      title: "AP Scholar with Distinction",
      date: "2025"
    },
    {
      title: "UIL District-19 Computer Science Written - 1st Place",
      date: "2026"
    },
    {
      title: "Oracle Certified Associate, Java SE 8 Programmer",
      date: "2024"
    }
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
          <h3>Leadership & Experience</h3>
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