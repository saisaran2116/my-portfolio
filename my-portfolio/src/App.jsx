import { useState } from 'react'
import './App.css'

function App() {
  // State for contact form
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)

  // Handle form change
  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  // Handle form submit
  const handleSubmit = (e) => {
    e.preventDefault()
    setIsSubmitting(true)
    
    // Simulate API request
    setTimeout(() => {
      setIsSubmitting(false)
      setIsSubmitted(true)
      setFormData({ name: '', email: '', subject: '', message: '' })
      
      // Clear success message after 5 seconds
      setTimeout(() => {
        setIsSubmitted(false)
      }, 5000)
    }, 1200)
  }

  return (
    <div className="app-wrapper" id="home">
      {/* Background Ambient Lights */}
      <div className="ambient-light-1"></div>
      <div className="ambient-light-2"></div>

      {/* Sticky Navigation Bar */}
      <nav className="navbar">
        <div className="nav-logo">SSG.</div>
        <div className="nav-links">
          <a href="#home">Home</a>
          <a href="#about">About</a>
          <a href="#skills">Skills</a>
          <a href="#projects">Projects</a>
          <a href="#contact">Contact</a>
        </div>
      </nav>

      {/* Main Content Container */}
      <div className="portfolio-container">
        
        {/* Hero Section */}
        <header className="hero-section">
          <p className="hero-pretitle">Hello World, I'm</p>
          <h1 className="hero-title">Sai Saran Gaddanti</h1>
          <p className="hero-subtitle">
            A passionate Full Stack Developer specializing in building responsive, high-performance web applications and crafting elegant digital experiences.
          </p>
          <div className="hero-ctas">
            <a href="#projects" className="btn btn-primary">Explore My Work</a>
            <a href="#contact" className="btn btn-secondary">Get In Touch</a>
          </div>
        </header>

        {/* About Section */}
        <section className="about-section" id="about">
          <h2 className="section-title">About Me</h2>
          <div className="about-card glass-panel">
            <p>
              I am a software engineer driven by curiosity and a commitment to crafting premium web solutions. 
              My expertise spans the entire development stack, enabling me to build seamless, interactive frontend 
              interfaces that integrate robustly with secure and scalable backend architectures. I enjoy translating 
              complex business needs into optimized, clean code that delivers exceptional user experience.
            </p>
          </div>
        </section>

        {/* Skills Section */}
        <section className="skills-section" id="skills">
          <h2 className="section-title">Skills</h2>
          <div className="skills-grid">
            
            {/* Frontend Skills */}
            <div className="skills-category glass-panel">
              <h3>
                <svg viewBox="0 0 24 24" width="20" height="20" stroke="currentColor" strokeWidth="2.5" fill="none" strokeLinecap="round" strokeLinejoin="round" style={{color: 'var(--color-secondary)'}}><polyline points="16 18 22 12 16 6"></polyline><polyline points="8 6 2 12 8 18"></polyline></svg>
                Frontend Development
              </h3>
              <ul className="skills-list">
                <li>React.js</li>
                <li>TypeScript</li>
                <li>JavaScript (ES6+)</li>
                <li>HTML5 / CSS3</li>
                <li>SASS / Less</li>
                <li>Redux Toolkit</li>
                <li>Vite</li>
              </ul>
            </div>

            {/* Backend Skills */}
            <div className="skills-category glass-panel">
              <h3>
                <svg viewBox="0 0 24 24" width="20" height="20" stroke="currentColor" strokeWidth="2.5" fill="none" strokeLinecap="round" strokeLinejoin="round" style={{color: 'var(--color-primary)'}}><rect x="2" y="2" width="20" height="8" rx="2" ry="2"></rect><rect x="2" y="14" width="20" height="8" rx="2" ry="2"></rect><line x1="6" y1="6" x2="6.01" y2="6"></line><line x1="6" y1="18" x2="6.01" y2="18"></line></svg>
                Backend & Database
              </h3>
              <ul className="skills-list">
                <li>Node.js</li>
                <li>Express.js</li>
                <li>MongoDB</li>
                <li>PostgreSQL</li>
                <li>REST APIs</li>
                <li>GraphQL</li>
                <li>JSON Web Tokens</li>
              </ul>
            </div>

            {/* Tools & DevOps */}
            <div className="skills-category glass-panel">
              <h3>
                <svg viewBox="0 0 24 24" width="20" height="20" stroke="currentColor" strokeWidth="2.5" fill="none" strokeLinecap="round" strokeLinejoin="round" style={{color: 'var(--color-violet)'}}><circle cx="12" cy="12" r="3"></circle><path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 1 1-2.83 2.83l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-4 0v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 1 1-2.83-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1 0-4h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 1 1 2.83-2.83l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 4 0v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 1 1 2.83 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 0 4h-.09a1.65 1.65 0 0 0-1.51 1z"></path></svg>
                DevTools & Workflow
              </h3>
              <ul className="skills-list">
                <li>Git / GitHub</li>
                <li>Docker</li>
                <li>AWS Services</li>
                <li>CI/CD Pipelines</li>
                <li>Linux Shell</li>
                <li>Postman</li>
              </ul>
            </div>

          </div>
        </section>

        {/* Projects Section */}
        <section className="projects-section-wrapper" id="projects">
          <h2 className="section-title">Featured Projects</h2>
          <div className="projects-grid">
            
            {/* Project 1 */}
            <div className="project-card glass-panel">
              <div className="project-meta">
                <span className="project-tag">React</span>
                <span className="project-tag">Node.js</span>
                <span className="project-tag">MongoDB</span>
              </div>
              <h3>DevFlow</h3>
              <p>
                A robust developer collaboration platform featuring real-time Q&A, markdown editing, syntax-highlighted code blocks, voting systems, and customized recommendation feeds.
              </p>
              <div className="project-links">
                <a href="https://github.com/saisaran2116" target="_blank" rel="noopener noreferrer" className="project-link">
                  <svg viewBox="0 0 24 24" width="18" height="18" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path></svg>
                  Source Code
                </a>
                <a href="#" className="project-link">
                  <svg viewBox="0 0 24 24" width="18" height="18" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path><polyline points="15 3 21 3 21 9"></polyline><line x1="10" y1="14" x2="21" y2="3"></line></svg>
                  Live Demo
                </a>
              </div>
            </div>

            {/* Project 2 */}
            <div className="project-card glass-panel">
              <div className="project-meta">
                <span className="project-tag">TypeScript</span>
                <span className="project-tag">Chart.js</span>
                <span className="project-tag">PostgreSQL</span>
              </div>
              <h3>SaaSify Dashboard</h3>
              <p>
                A premium subscription analytics dashboard with interactive charting, real-time activity tracking, custom cohort analysis, and simulated metric reporting.
              </p>
              <div className="project-links">
                <a href="https://github.com/saisaran2116" target="_blank" rel="noopener noreferrer" className="project-link">
                  <svg viewBox="0 0 24 24" width="18" height="18" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path></svg>
                  Source Code
                </a>
                <a href="#" className="project-link">
                  <svg viewBox="0 0 24 24" width="18" height="18" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path><polyline points="15 3 21 3 21 9"></polyline><line x1="10" y1="14" x2="21" y2="3"></line></svg>
                  Live Demo
                </a>
              </div>
            </div>

            {/* Project 3 */}
            <div className="project-card glass-panel">
              <div className="project-meta">
                <span className="project-tag">React</span>
                <span className="project-tag">Gemini API</span>
                <span className="project-tag">WebSockets</span>
              </div>
              <h3>AIGen Chat Client</h3>
              <p>
                An elegant conversational AI client providing seamless chat sessions, rich markdown rendering, customizable system prompts, and detailed usage analytics.
              </p>
              <div className="project-links">
                <a href="https://github.com/saisaran2116" target="_blank" rel="noopener noreferrer" className="project-link">
                  <svg viewBox="0 0 24 24" width="18" height="18" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path></svg>
                  Source Code
                </a>
                <a href="#" className="project-link">
                  <svg viewBox="0 0 24 24" width="18" height="18" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path><polyline points="15 3 21 3 21 9"></polyline><line x1="10" y1="14" x2="21" y2="3"></line></svg>
                  Live Demo
                </a>
              </div>
            </div>

          </div>
        </section>

        {/* Contact Section */}
        <section className="contact-section" id="contact">
          <h2 className="section-title">Get In Touch</h2>
          <div className="contact-layout">
            
            {/* Contact Info Details */}
            <div className="contact-info">
              <h3>Let's collaborate!</h3>
              <p>
                Have an exciting project idea or want to discuss opportunities? Send me a message and let's build something extraordinary together.
              </p>
              
              <div className="contact-details">
                <div className="contact-item">
                  <div className="contact-icon">
                    <svg viewBox="0 0 24 24" width="20" height="20" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path><polyline points="22,6 12,13 2,6"></polyline></svg>
                  </div>
                  <span>gaddantisaisaran@gmail.com</span>
                </div>

                <div className="contact-item">
                  <div className="contact-icon">
                    <svg viewBox="0 0 24 24" width="20" height="20" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path><circle cx="12" cy="10" r="3"></circle></svg>
                  </div>
                  <span>Hyderabad, India</span>
                </div>

                <div className="contact-item">
                  <div className="contact-icon">
                    <svg viewBox="0 0 24 24" width="20" height="20" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="7" width="20" height="14" rx="2" ry="2"></rect><path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"></path></svg>
                  </div>
                  <span>Available for Full-Time Roles & Freelance</span>
                </div>
              </div>
            </div>

            {/* Contact Form Card */}
            <div className="contact-form-card glass-panel">
              {isSubmitted && (
                <div className="form-success-msg">
                  Message sent successfully! Thank you.
                </div>
              )}
              <form onSubmit={handleSubmit}>
                <div className="form-group">
                  <label htmlFor="name">Your Name</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    className="form-control"
                    placeholder="Enter your name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="email">Email Address</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    className="form-control"
                    placeholder="Enter your email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="subject">Subject</label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    className="form-control"
                    placeholder="Subject line"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="message">Message</label>
                  <textarea
                    id="message"
                    name="message"
                    className="form-control"
                    placeholder="Write your message here..."
                    value={formData.message}
                    onChange={handleChange}
                    required
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="btn btn-primary"
                  style={{ width: '100%', padding: '0.9rem' }}
                  disabled={isSubmitting}
                >
                  {isSubmitting ? 'Sending Message...' : 'Send Message'}
                </button>
              </form>
            </div>

          </div>
        </section>

        {/* Footer Section */}
        <footer className="portfolio-footer">
          <div className="footer-socials">
            <a href="https://github.com/saisaran2116" target="_blank" rel="noopener noreferrer" className="social-btn">
              <svg viewBox="0 0 24 24" width="20" height="20" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path></svg>
            </a>
            <a href="https://linkedin.com/" target="_blank" rel="noopener noreferrer" className="social-btn">
              <svg viewBox="0 0 24 24" width="20" height="20" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect x="2" y="9" width="4" height="12"></rect><circle cx="4" cy="4" r="2"></circle></svg>
            </a>
            <a href="mailto:gaddantisaisaran@gmail.com" className="social-btn">
              <svg viewBox="0 0 24 24" width="20" height="20" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path><polyline points="22,6 12,13 2,6"></polyline></svg>
            </a>
          </div>
          <p>© {new Date().getFullYear()} Sai Saran Gaddanti. All Rights Reserved.</p>
        </footer>

      </div>
    </div>
  )
}

export default App

