import { useEffect, useState } from "react";
import "./App.css";

import {
  FaReact,
  FaGithub,
  FaCode,
  FaRocket,
  FaPalette,
  FaLightbulb,
  FaLock,
  FaBell,
  FaMoon,
  FaSun, 
  FaChartBar,
  FaBars,
  FaTimes,
  FaHome,
  FaUser,
  FaBriefcase,
  FaEnvelope,
  FaDownload,
  FaLinkedin,
  FaShieldAlt,
  FaMobileAlt,
  FaDesktop,
  FaFileDownload,
  FaTachometerAlt
} from "react-icons/fa";

import {
  SiFirebase,
  SiJavascript,
  SiPwa,
} from "react-icons/si";

import { FaRotate } from "react-icons/fa6";
import { BsDatabaseFill } from "react-icons/bs";

function App() {
  const [activeSection, setActiveSection] = useState("home");
  const [isLoading, setIsLoading] = useState(true);
  const [menuOpen, setMenuOpen] = useState(false);

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
      { threshold: 0.05, rootMargin: "0px 0px -10% 0px", }
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
      { threshold: 0.35 }
    );

    sections.forEach((section) => sectionObserver.observe(section));

    return () => {
      observer.disconnect();
      sectionObserver.disconnect();
    };
  }, []);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1200);

    return () => clearTimeout(timer);
  }, []);

  //DARK/LIGHT TOGGLE//

  const [theme, setTheme] = useState(
  localStorage.getItem("theme") || "light"
);

useEffect(() => {
  document.documentElement.setAttribute("data-theme", theme);
  localStorage.setItem("theme", theme);
}, [theme]);

const toggleTheme = () => {
  setTheme(theme === "light" ? "dark" : "light");
};


  //////////////////

  useEffect(() => {
  if (menuOpen) {
    document.body.style.overflow = "hidden";
    document.body.classList.remove("menu-open");
  
  } else {
    document.body.style.overflow = "";
  }

  return () => {
    document.body.style.overflow = "";
    document.body.classList.remove("menu-open");
  };
}, [menuOpen]);

  return (
    <main>
      {isLoading && (
        <div className="loader-screen">
          <div className="loader-logo">RP</div>
          <h1>Reycham Pana</h1>
          <p>Web Applications Developer</p>
          <div className="loader-line"></div>
        </div>
      )}

     <nav className="navbar"> 
      <div className="top-controls">
 <button className="mobile-menu-btn" onClick={() => setMenuOpen(true)}>
    <FaBars />
  </button>

  <a href="#home" className="nav-brand" onClick={() => setMenuOpen(false)}>
    <div className="nav-logo">RP</div>
  </a>

<div className="nav-right">
  <div className="nav-links">
    <a className={activeSection === "home" ? "active" : ""} href="#home">Home</a>
    <a className={activeSection === "about" ? "active" : ""} href="#about">About</a>
    <a className={activeSection === "skills" ? "active" : ""} href="#skills">Skills</a>
    <a className={activeSection === "projects" ? "active" : ""} href="#projects">Projects</a>
    <a className={activeSection === "contact" ? "active" : ""} href="#contact">Contact</a>
  </div>

  <div className="theme-switch">

  <label className="switch">
    <input
      type="checkbox"
      checked={theme === "dark"}
      onChange={toggleTheme}
    />
    <span className="slider"></span>
  </label>
</div>

</div>

</div>
</nav>

<aside className={`mobile-glass-menu ${menuOpen ? "open" : ""}`}>
  <button className="menu-close" onClick={() => setMenuOpen(false)}>
    <FaTimes />
  </button>

  <div className="mobile-menu-profile">
    <div className="nav-logo big">RP</div>
    <h3>Reycham Pana</h3>
    <p>Web Applications Developer</p>
  </div>

  <div className="mobile-menu-links">
    <a href="#home" onClick={() => setMenuOpen(false)}><FaHome /> Home</a>
    <a href="#about" onClick={() => setMenuOpen(false)}><FaUser /> About</a>
    <a href="#skills" onClick={() => setMenuOpen(false)}><FaCode /> Skills</a>
    <a href="#projects" onClick={() => setMenuOpen(false)}><FaBriefcase /> Projects</a>
    <a href="#contact" onClick={() => setMenuOpen(false)}><FaEnvelope /> Contact</a>
  </div>

  <div className="mobile-menu-extra">
    <a href="https://github.com/YOUR_USERNAME" target="_blank"><FaGithub /> GitHub</a>
    <a href="https://linkedin.com/in/YOUR_PROFILE" target="_blank"><FaLinkedin /> LinkedIn</a>
  </div>
</aside>

<div className={`app-container ${menuOpen ? "menu-open" : ""}`}>



     <section id="home" className="hero">
    <div className="hero-blobs">
    <span className="blob blob-1"></span>
    <span className="blob blob-2"></span>
    <span className="blob blob-3"></span>
  </div>

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
    
      <div className="hero-stat">
        <strong>Firebase</strong>
        <span>Backend</span>
      </div>

      <div className="hero-stat">
        <strong>React</strong>
        <span>Frontend</span>
      </div>

      <div className="hero-stat">
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

  <div className="process-grid compact-process">

  <div className="process-card">
    <span className="process-number">01</span>
    <div className="process-icon"><FaLightbulb /></div>
    <div>
      <div className="process-content">
      <h3>Plan</h3>
      <p>Understand the problem, gather requirements, and design the right solution.</p>

      </div>
    </div>
  </div>

  <div className="process-card">
    <span className="process-number">02</span>
    <div className="process-icon"><FaPalette /></div>
    <div>
      <div className="process-content"> 
      <h3>Design</h3>
      <p>Create clean, responsive layouts that feel modern and easy to use.</p>
      </div>
    </div>
  </div>

  <div className="process-card">
    <span className="process-number">03</span>
    <div className="process-icon"><FaCode /></div>
    <div>
      <div className="process-content">
         <h3>Develop</h3>
      <p>Build scalable applications using React, Firebase, and modern web tools.</p>
      </div>
    </div>
  </div>

  <div className="process-card">
    <span className="process-number">04</span>
    <div className="process-icon"><FaRocket /></div>
    <div>
      <div className="process-content">
        <h3>Improve</h3>
      <p>Test, optimize, refine, and continuously improve the user experience.</p>
      </div>
    </div>
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

  <div className="tech-card tech-react">
    <FaReact className="tech-bg-icon" />
    <h3>React</h3>
    <p>Component-based frontend development for responsive interfaces.</p>
    <span>↗ Used in: <strong>Portfolio Website</strong></span>
  </div>

  <div className="tech-card tech-firebase">
    <SiFirebase className="tech-bg-icon" />
    <h3>Firebase</h3>
    <p>Authentication, hosting, and backend services for web apps.</p>
    <span>↗ Used in: <strong>Bantay Budget</strong></span>
  </div>

  <div className="tech-card tech-firestore">
    <BsDatabaseFill className="tech-bg-icon" />
    <h3>Firestore</h3>
    <p>Real-time database for expenses, inflows, and recurring dues.</p>
    <span>↗ Used in: <strong>Bantay Budget</strong></span>
  </div>

  <div className="tech-card tech-javascript">
    <SiJavascript className="tech-bg-icon" />
    <h3>JavaScript</h3>
    <p>Application logic, UI interactions, automations, and data handling.</p>
    <span>↗ Used in: <strong>Bantay Budget</strong></span>
  </div>

  <div className="tech-card tech-pwa">
    <SiPwa className="tech-bg-icon" />
    <h3>PWA</h3>
    <p>Installable mobile-first app experience with responsive design.</p>
    <span>↗ Used in: <strong>Bantay Budget</strong></span>
  </div>

  <div className="tech-card tech-github">
    <FaGithub className="tech-bg-icon" />
    <h3>GitHub</h3>
    <p>Version control, project history, and code collaboration.</p>
    <span>↗ Used in: <strong>All Projects</strong></span>
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
        <span>
      <FaRotate />
      Recurring Expenses
      </span>
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

  <div className="features-header">
  <span className="live-badge">
    <span></span>
    Live Demo
  </span>

  <h3>7+</h3>
  <p>Core Features</p>
</div>

<div className="features-grid">

  <div className="feature-card">
    <FaShieldAlt className="feature-icon" />
    <FaShieldAlt className="feature-bg-icon" />
    <div>
      <h3>Firebase</h3>
      <p>Authentication & Firestore database for secure and real-time data management.</p>
    </div>
  </div>

  <div className="feature-card">
    <FaMobileAlt className="feature-icon" />
    <SiPwa className="feature-bg-icon" />
    <div>
      <h3>PWA</h3>
      <p>Installable mobile app experience with offline support and fast performance.</p>
    </div>
  </div>

  <div className="feature-card">
    <FaDesktop className="feature-icon" />
    <FaDesktop className="feature-bg-icon" />
    <div>
      <h3>100%</h3>
      <p>Fully responsive design that works perfectly on all devices and screen sizes.</p>
    </div>
  </div>

  <div className="feature-card">
    <FaTachometerAlt className="feature-icon" />
    <FaTachometerAlt className="feature-bg-icon" />
    <div>
      <h3>Optimized</h3>
      <p>Clean code and optimized performance for a smooth and reliable user experience.</p>
    </div>
  </div>

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
  <a href="mailto:your@email.com" className="contact-email">
    ✉ Email Me
  </a>

  <div className="contact-icon-links">
    <a href="https://github.com/YOUR_USERNAME" target="_blank" aria-label="GitHub">
      <FaGithub />
      <span>GitHub</span>
    </a>

    <a href="https://linkedin.com/in/YOUR_PROFILE" target="_blank" aria-label="LinkedIn">
      <FaLinkedin />
      <span>LinkedIn</span>
    </a>

  </div>
</div>


  </div>
</section>

</div>

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