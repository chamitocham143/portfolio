import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'

import { useEffect} from "react";
import "./App.css";

import {
  FaReact,
  FaGithub,
  FaMobileAlt,
  FaFire,
  FaCode,
  FaRocket,
  FaPalette,
  FaLightbulb,
  FaLock,
  FaBell,
  FaMoon, 
  FaChartBar,
  FaSyncAlt,
} from "react-icons/fa";

import {
  SiFirebase,
  SiJavascript,
  SiPwa,
} from "react-icons/si";

import { BsDatabaseFill } from "react-icons/bs";

function App() {

  const [activeSection, setActiveSection] = useState("home");

useEffect(() => {
  const revealElements = document.querySelectorAll(".reveal");

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("active");
          observer.unobserve(entry.target);
        }
      });
    },
    {
      threshold: 0.15,
    }
  );

  revealElements.forEach((element) => observer.observe(element));

  const sections = document.querySelectorAll("section[id]");

const sectionObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        setActiveSection(entry.target.id);
      }
    });
  },
  {
    threshold: 0.35,
  }
);

sections.forEach((section) => sectionObserver.observe(section));

return () => {
  observer.disconnect();
  sectionObserver.disconnect();
};  

}, []);



  return (
    <main>
      <nav className="navbar">
  <div className="nav-logo">
    RP
  </div>
  <div className="nav-links">
  <a className={activeSection === "home" ? "active" : ""} href="#home">
    Home
  </a>

  <a className={activeSection === "about" ? "active" : ""} href="#about">
    About
  </a>

  <a className={activeSection === "skills" ? "active" : ""} href="#skills">
    Skills
  </a>

  <a className={activeSection === "projects" ? "active" : ""} href="#projects">
    Projects
  </a>

  <a className={activeSection === "contact" ? "active" : ""} href="#contact">
    Contact
  </a>
</div>
</nav>

     <section id="home" className="hero">
  <div className="hero-content">

    <p className="badge fade-up">👋 Hello, I'm Reycham Pana</p>

    <h1 className="fade-up delay-1">
        Web Applications Developer building reliable, modern, and user-friendly apps.
    </h1>

      <p className="hero-description fade-up delay-2">
          I specialize in creating responsive web applications using React,
          JavaScript, Firebase, Firestore, and modern UI design. I enjoy building
          practical apps that solve real problems.
      </p>
      
   <p className="availability">
  🟢 Available for web application projects
</p>

<div className="buttons fade-up delay-3">
  <a href="#projects" className="btn primary">View My Work</a>
  <a href="/resume.pdf" className="btn secondary" download>
    Download Resume
  </a>
</div>

<div className="hero-socials">
  <a href="https://github.com/YOUR_USERNAME" target="_blank">
    GitHub
  </a>
  <a href="https://linkedin.com/in/YOUR_PROFILE" target="_blank">
    LinkedIn
  </a>
</div>

<a href="#about" className="scroll-down">
  ↓ Scroll
</a>

    <div className="hero-stats fade-up delay-3">
      <div>
        <strong>React</strong>
        <span>Frontend</span>
      </div>

      <div>
        <strong>Firebase</strong>
        <span>Backend</span>
      </div>

      <div>
        <strong>PWA</strong>
        <span>Mobile Ready</span>
      </div>
    </div>
  </div>
</section>

      <section id="about" className="section about-section reveal">
  <div className="about-grid">
    <div className="about-card">
      <div className="about-avatar">RP</div>

      <h2>About Me</h2>

      <p>
        Hi, I'm Reycham. I build modern web applications focused on clean
        design, reliable functionality, and smooth user experiences.
      </p>

      <p>
        I enjoy turning ideas into polished products using React, JavaScript,
        Firebase, Firestore, and mobile-first design principles.
      </p>
    </div>

    <div className="about-details">
      <div className="about-detail">
        <span><FaReact /></span>
        <div>
          <h3>Frontend Development</h3>
          <p>Building responsive and interactive React interfaces.</p>
        </div>
      </div>

      <div className="about-detail">
        <span><SiFirebase /></span>
        <div>
          <h3>Firebase Applications</h3>
          <p>Creating apps with authentication, Firestore, and real-time data.</p>
        </div>
      </div>

      <div className="about-detail">
        <span><SiPwa /></span>
        <div>
          <h3>Mobile-First Design</h3>
          <p>Designing smooth experiences for mobile, tablet, and desktop.</p>
        </div>
      </div>

      <div className="about-detail">
        <span><FaRocket /></span>
        <div>
          <h3>Product Thinking</h3>
          <p>Focusing on features that are practical, useful, and polished.</p>
        </div>
      </div>
    </div>
  </div>
</section>

      <section className="section process-section reveal">

  <p className="section-kicker">
    How I Build
  </p>

  <h2>My Development Process</h2>

  <p className="section-intro">
    Every application starts with understanding the problem,
    designing a clean solution, and refining it through
    continuous improvements.
  </p>

  <div className="process-grid">

    <div className="process-card">
      <div className="process-icon"><FaLightbulb /></div>
      <h3>Plan</h3>
      <p>
        Understand the problem, gather requirements,
        and design an intuitive user experience.
      </p>
    </div>

    <div className="process-card">
      <div className="process-icon"><FaPalette /></div>
      <h3>Design</h3>
      <p>
        Create responsive layouts that are clean,
        modern, and easy to use.
      </p>
    </div>

    <div className="process-card">
      <div className="process-icon"><FaCode /></div>
      <h3>Develop</h3>
      <p>
        Build scalable applications using React,
        Firebase, JavaScript, and modern web technologies.
      </p>
    </div>

    <div className="process-card">
      <div className="process-icon"><FaRocket /></div>
      <h3>Improve</h3>
      <p>
        Test, optimize, refine, and continuously
        improve every feature.
      </p>
    </div>

  </div>

</section>


<section id="skills" className="section tech-section reveal">
  <p className="section-kicker">Featured Technologies</p>

  <h2>Tools I Use to Build Web Applications</h2>

  <p className="section-intro">
    These are the technologies I use to design, build, deploy, and improve
    modern web applications.
  </p>

  <div className="tech-grid">
    <div className="tech-card">
      <div className="tech-icon"><FaReact /></div>
      <h3>React</h3>
      <p>Component-based frontend development for responsive interfaces.</p>
      <span>Used in: Portfolio Website</span>
    </div>

    <div className="tech-card">
      <div className="tech-icon"><SiFirebase /></div>
      <h3>Firebase</h3>
      <p>Authentication, hosting, and backend services for web apps.</p>
      <span>Used in: Bantay Budget</span>
    </div>

    <div className="tech-card">
      <div className="tech-icon"><BsDatabaseFill /></div>
      <h3>Firestore</h3>
      <p>Real-time database for expenses, inflows, and recurring dues.</p>
      <span>Used in: Bantay Budget</span>
    </div>

    <div className="tech-card">
      <div className="tech-icon"><SiJavascript /></div>
      <h3>JavaScript</h3>
      <p>Application logic, UI interactions, automations, and data handling.</p>
      <span>Used in: Bantay Budget</span>
    </div>

    <div className="tech-card">
      <div className="tech-icon"><SiPwa /></div>
      <h3>PWA</h3>
      <p>Installable mobile-first app experience with responsive design.</p>
      <span>Used in: Bantay Budget</span>
    </div>

    <div className="tech-card">
      <div className="tech-icon"><FaGithub /></div>
      <h3>GitHub</h3>
      <p>Version control, project history, and code collaboration.</p>
      <span>Used in: All Projects</span>
    </div>
  </div>
</section>


      <section id="projects" className="section projects-section reveal">
  <p className="section-kicker">Featured Project</p>
  <h2>Bantay Budget</h2>

  <p className="section-intro">
    A mobile-first Progressive Web App for managing income, expenses,
    recurring dues, notifications, app lock security, and Firebase-powered
    real-time data.
  </p>

  <div className="showcase reveal">
    <div className="phone-mockup main-phone">
      <img src="/bantay-dashboard-dark.png" alt="Bantay Budget dashboard dark mode" />
    </div>

    <div className="showcase-content">
      <h3>Smart Personal Finance for Everyone</h3>
      <p>
        Bantay Budget is a Progressive Web App built with React and Firebase 
        that helps users manage income, expenses, recurring bills, notifications, 
        and financial planning through a clean, mobile-first experience.
      </p>

      <div className="feature-list">
        <span>
          <SiFirebase />
            Firebase Authentication
        </span>
        <span>
        <BsDatabaseFill />
        Firestore Database
      </span>
        <span>🔁 Recurring Expenses</span>
        <span>
        <FaBell />
          Smart Notifications
        </span>
        <span>
          <FaLock />
          App Lock
        </span>
        <span>
        <FaMoon />
        Dark Mode
        </span>
        <span>
        <SiPwa />
        Progressive Web App
        </span>
        <span>
        <FaChartBar />
        Dashboard UI
        </span>
          </div>

      <div className="project-buttons">
        <a href="https://bantaybudget.fyi" target="_blank" className="btn primary">
          Live Demo
        </a>
        <a href="#" target="_blank" className="btn dark-btn">
          GitHub
        </a>
      </div>
    </div>
  </div>

  </section>

  <section className="project-highlights reveal">

  <div className="highlight-card">
    <h3>7+</h3>
    <p>Core Features</p>
  </div>

  <div className="highlight-card">
    <h3>Firebase</h3>
    <p>Authentication & Firestore</p>
  </div>

  <div className="highlight-card">
    <h3>PWA</h3>
    <p>Installable Mobile App</p>
  </div>

  <div className="highlight-card">
    <h3>100%</h3>
    <p>Responsive Design</p>
  </div>

</section>

<div className="screenshot-gallery reveal">
  <div className="gallery-card">
    <img src="/bantay-login.png" alt="Bantay Budget login screen" />
    <span>Login</span>
  </div>

  <div className="gallery-card">
    <img src="/bantay-dashboard-light.png" alt="Bantay Budget light dashboard" />
    <span>Light Dashboard</span>
  </div>

  <div className="gallery-card">
    <img src="/bantay-recurring.png" alt="Bantay Budget recurring expenses" />
    <span>Recurring</span>
  </div>

  <div className="gallery-card">
    <img src="/bantay-notifications.png" alt="Bantay Budget notifications" />
    <span>Notifications</span>
  </div>
</div>



<section className="section projects-list-section">
  <p className="section-kicker">More Work</p>

  <h2>Featured Projects</h2>

  <p className="section-intro">
    A collection of web applications and product ideas I have built,
    improved, or am currently developing.
  </p>

  <div className="projects-list-grid">
    <div className="project-list-card">
      <span className="project-status live">🟢 Production</span>
      <h3>Bantay Budget</h3>
      <p>
        A Firebase-powered personal finance PWA for managing income,
        expenses, recurring dues, notifications, and app security.
      </p>

      <div className="project-stack">
        <span>Firebase</span>
        <span>Firestore</span>
        <span>PWA</span>
      </div>
    </div>

    <div className="project-list-card">
      <span className="project-status live">🟢 Live</span>
      <h3>React Portfolio Website</h3>
      <p>
        A modern personal portfolio built with React to showcase projects,
        technologies, development process, and professional branding.
      </p>

      <div className="project-stack">
        <span>React</span>
        <span>CSS</span>
        <span>GitHub</span>
      </div>
    </div>

    <div className="project-list-card">
      <span className="project-status progress">🟡 In Progress</span>
      <h3>Budget Analytics Dashboard</h3>
      <p>
        A planned dashboard enhancement for visualizing spending trends,
        monthly comparisons, and financial insights.
      </p>

      <div className="project-stack">
        <span>Charts</span>
        <span>Analytics</span>
        <span>UI/UX</span>
      </div>
    </div>
  </div>
</section>


      <section id="skills" className="section">
        <h2>Skills</h2>

        <div className="skills">
          <span>React</span>
          <span>JavaScript</span>
          <span>HTML</span>
          <span>CSS</span>
          <span>Firebase</span>
          <span>Firestore</span>
          <span>GitHub</span>
          <span>PWA</span>
          <span>Responsive Design</span>
          <span>UI/UX</span>
        </div>
      </section>

      <section className="section">
        <h2>Experience</h2>

        <div className="card">
          <h3>Web Applications Developer</h3>
          <p>
            Building web applications with focus on clean design, reliable
            functionality, real-time data, responsive layouts, and user-friendly
            workflows.
          </p>
        </div>
      </section>

      <section id="contact" className="section contact-section">
  <div className="contact-card">
    <p className="section-kicker">Contact</p>

    <h2>Let’s Build Something Great Together</h2>

    <p>
      Whether you need a web application, a Firebase-powered solution,
      or want to connect about software development, I’d love to hear from you.
    </p>

    <div className="contact-actions">
      <a href="mailto:chamzbahandi@gmail.com" className="btn primary">
        Email Me
      </a>

      <a href="https://github.com/YOUR_USERNAME" target="_blank" className="btn dark-btn">
        GitHub
      </a>

      <a href="https://linkedin.com/in/YOUR_PROFILE" target="_blank" className="btn dark-btn">
        LinkedIn
      </a>

      <a href="/resume.pdf" className="btn secondary-green" download>
        Download Résumé
      </a>
    </div>
  </div>
</section>

<footer>
  <p>
    © {new Date().getFullYear()} Reycham Pana. All rights reserved.
  </p>

  <p className="footer-version">
    Portfolio v1.0.0
  </p>
</footer>
      
    </main>
  );
}

export default App;