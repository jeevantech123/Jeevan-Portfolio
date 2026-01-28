import React, { useState } from 'react';
import { Github, Linkedin, Mail, ExternalLink, Menu, X, Download, Code2, Briefcase, User, BookOpen, Link } from 'lucide-react';
import './Portfolio.css';

// Main Portfolio Component
export default function Portfolio() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  // YOUR INFO - CUSTOMIZE THIS SECTION
  const personalInfo = {
    name: "Jeevan Jayagopan",
    title: "Computer Science Student",
    university: "Sophomore @ DePaul University",
    email: "jeevanjayagopan@gmail.com",
    github: "https://github.com/jeevantech123",
    linkedin: "https://www.linkedin.com/in/jeevan-jayagopan-71a118309/",
    leetcode: "https://leetcode.com/u/JeevanTech/",
    linktree: "https://linktr.ee/jeevantech123",
    resumeLink: "/Jeevan-Portfolio/Jeevan_Jayagopan_Resume.pdf", // Add your resume link here
    bio: "I'm a passionate CS student interested in full-stack development, machine learning, and building things that matter. Currently seeking internship opportunities for Spring/Summer 2026."
  };

  // YOUR PROJECTS - ADD YOUR REAL PROJECTS HERE
  const projects = [
    {
      title: "This Website!",
      description: "This website was my first major project. I learned how to ship and deploy code, as well as connecting frontend and backend together.",
      tech: ["React", "Node.js", "JavaScript", "HTML/CSS"],
      github: "https://github.com/jeevantech123/Jeevan-Portfolio",
      demo: "",
      image: "🚀"
    },
    {
      title: "WIP",
      description: "Currently working on this project! ",
      tech: ["Python"],
      github: "https://github.com/yourusername/project2",
      demo: "",
      image: "💡"
    },

  ];

  // YOUR SKILLS
  const skills = {
    "Languages": ["Python", "JavaScript", "Java", "x86-64 Assembly"],
    "Frontend": ["HTML/CSS"],
    "Backend": ["Node.js", "Express"],
    "Tools": ["Git", "Docker", "VS Code"]
  };

  // Navigation scroll handler
  const scrollToSection = (sectionId) => {
    setActiveSection(sectionId);
    setIsMenuOpen(false);

    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="portfolio">
      {/* Navigation */}
      <nav className="navbar">
        <div className="nav-container">
          <div className="nav-content">
            <h1 className="nav-logo">
              Jeevan's Portfolio
            </h1>

            {/* Desktop Navigation */}
            <div className="nav-links-desktop">
              {['home', 'projects', 'about', 'contact'].map((section) => (
                <button
                  key={section}
                  onClick={() => scrollToSection(section)}
                  className={`nav-link ${activeSection === section ? 'active' : ''}`}
                >
                  {section}
                </button>
              ))}
            </div>

            {/* Mobile Menu Button */}
            <button
              className="mobile-menu-btn"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X /> : <Menu />}
            </button>
          </div>

          {/* Mobile Navigation */}
          {isMenuOpen && (
            <div className="nav-links-mobile">
              {['home', 'projects', 'about', 'contact'].map((section) => (
                <button
                  key={section}
                  onClick={() => scrollToSection(section)}
                  className="nav-link-mobile"
                >
                  {section}
                </button>
              ))}
            </div>
          )}
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="hero-section">
        <div className="container">
          <div className="hero-content">
            <img
              src="profile.png"
              alt="Profile"
              className="profile-image"
            />

            <h1 className="hero-title">
              {personalInfo.name}
            </h1>

            <p className="hero-subtitle">
              {personalInfo.title}
            </p>

            <p className="hero-university">
              {personalInfo.university}
            </p>

            <div className="social-links">
              <a
                href={personalInfo.github}
                target="_blank"
                rel="noopener noreferrer"
                className="social-icon"
              >
                <Github className="icon" />
              </a>
              <a
                href={personalInfo.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="social-icon"
              >
                <Linkedin className="icon" />
              </a>
              <a
                  href={personalInfo.leetcode}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="social-icon"
                >
                  <Code2 className="icon" />
                </a>
                <a
                    href={personalInfo.linktree}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="social-icon"
                  >
                    <Link className="icon" />
                  </a>
              <a
                href={`mailto:${personalInfo.email}`}
                className="social-icon"
              >
                <Mail className="icon" />
              </a>
            </div>

            <div className="hero-cta">
              <a
                href={personalInfo.resumeLink}
                className="btn-primary"
              >
                <Download className="btn-icon" />
                Download Resume
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="projects-section">
        <div className="container">
          <div className="section-header">
            <Code2 className="section-icon" />
            <h2 className="section-title">Projects</h2>
          </div>

          <p className="section-description">
                                Here are some of the projects I've built to showcase my skills and passion for development. Each project represents a unique challenge and learning experience. Most of my projects will be on GitHub, while on this website will be my proudest ones.
                              </p>
          <div className="projects-grid">
            {projects.map((project, index) => (
              <div key={index} className="project-card">
                <div className="project-emoji">{project.image}</div>

                <h3 className="project-title">
                  {project.title}
                </h3>

                <p className="project-description">
                  {project.description}
                </p>

                <div className="tech-tags">
                  {project.tech.map((tech, i) => (
                    <span key={i} className="tech-tag">
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="project-links">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="project-link"
                  >
                    <Github className="link-icon" />
                    <span>Code</span>
                  </a>

                  {project.demo && (
                    <a
                      href={project.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="project-link"
                    >
                      <ExternalLink className="link-icon" />
                      <span>Demo</span>
                    </a>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="about-section">
        <div className="container">
          <div className="section-header">
            <User className="section-icon" />
            <h2 className="section-title">About Me</h2>
          </div>

          <div className="about-grid">
            <div className="about-text">
              <p className="about-bio">
                {personalInfo.bio}
              </p>

              <div className="about-details">
                <div className="about-item">
                  <Briefcase className="about-icon" />
                  <span>Open to internship opportunities</span>
                </div>
                <div className="about-item">
                  <BookOpen className="about-icon" />
                  <span>{personalInfo.university}</span>
                </div>
              </div>
            </div>

            <div className="skills-card">
              <h3 className="skills-title">Skills</h3>

              {Object.entries(skills).map(([category, items]) => (
                <div key={category} className="skill-category">
                  <h4 className="skill-category-title">{category}</h4>
                  <div className="skill-tags">
                    {items.map((skill, i) => (
                      <span key={i} className="skill-tag">
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="contact-section">
        <div className="container-narrow">
          <div className="section-header-center">
            <Mail className="section-icon" />
            <h2 className="section-title">Get In Touch</h2>
          </div>

          <p className="contact-text">
            I'm currently looking for internship opportunities. Let's connect!
          </p>

          <a
            href={`mailto:${personalInfo.email}`}
            className="btn-primary-large"
          >
            <Mail className="btn-icon" />
            {personalInfo.email}
          </a>

          <div className="contact-social">
            <a
              href={personalInfo.github}
              target="_blank"
              rel="noopener noreferrer"
              className="contact-social-icon"
            >
              <Github className="icon-large" />
            </a>
            <a
              href={personalInfo.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="contact-social-icon"
            >
              <Linkedin className="icon-large" />
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <div className="container">
          <p className="footer-text">
            © 2026 {personalInfo.name}
          </p>
        </div>
      </footer>
    </div>
  );
}