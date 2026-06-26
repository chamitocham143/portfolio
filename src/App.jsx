import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'

import "./App.css";

function App() {
  return (
    <main>
      <nav className="navbar">
        <h2>Reycham Pana</h2>
        <div>
          <a href="#about">About</a>
          <a href="#projects">Projects</a>
          <a href="#skills">Skills</a>
          <a href="#contact">Contact</a>
        </div>
      </nav>

      <section className="hero">
        <p className="badge">Web Applications Developer</p>
        <h1>Building clean, reliable, and mobile-friendly web applications.</h1>
        <p>
          I create responsive web apps using React, JavaScript, Firebase,
          Firestore, and modern UI design.
        </p>

        <div className="buttons">
          <a href="#projects" className="btn primary">View Projects</a>
          <a href="#contact" className="btn secondary">Contact Me</a>
        </div>
      </section>

      <section id="about" className="section">
        <h2>About Me</h2>
        <p>
          I am a Web Applications Developer focused on building practical,
          user-friendly, and reliable applications. I enjoy creating apps that
          solve real problems with clean interfaces and smooth user experiences.
        </p>
      </section>

      <section id="projects" className="section">
        <h2>Featured Projects</h2>

        <div className="project featured">
          <div>
            <p className="badge">Featured Project</p>
            <h3>Bantay Budget</h3>
            <p>
              A Firebase-powered monthly expenses tracker PWA with real-time
              data, authentication, recurring expenses, notifications, dark mode,
              and mobile-first design.
            </p>

            <div className="tags">
              <span>JavaScript</span>
              <span>Firebase</span>
              <span>Firestore</span>
              <span>PWA</span>
              <span>Responsive UI</span>
            </div>
          </div>
        </div>

        <div className="grid">
          <div className="card">
            <h3>Recurring Expenses System</h3>
            <p>
              Automated recurring dues with pending, paid, and on-hold statuses.
            </p>
          </div>

          <div className="card">
            <h3>Portfolio Website</h3>
            <p>
              A modern React portfolio built to showcase projects, skills, and
              professional experience.
            </p>
          </div>

          <div className="card">
            <h3>Firebase Auth App</h3>
            <p>
              Authentication flow with login, registration, password reset, and
              email verification.
            </p>
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

      <section id="contact" className="section contact">
        <h2>Let’s Work Together</h2>
        <p>
          Interested in working together or learning more about my projects?
        </p>

        <a href="mailto:chamzbahandi@gmail.com" className="btn primary">
          Email Me
        </a>
      </section>

<footer>
  © {new Date().getFullYear()} Reycham Pana. All rights reserved.
</footer>
      
    </main>
  );
}

export default App;