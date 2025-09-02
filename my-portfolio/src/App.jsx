import './App.css'

function App() {
  return (
    <div className="portfolio-container">
      <header className="portfolio-header">
        <h1>Sai Saran Gaddanti</h1>
        <p className="subtitle">Full Stack Developer | Problem Solver | Tech Enthusiast</p>
      </header>
      <section className="about-section">
        <h2>About Me</h2>
        <p>
          Welcome to my professional portfolio! I am passionate about building scalable web applications and solving real-world problems with technology. Explore my skills and projects below.
        </p>
      </section>
      <section className="skills-section">
        <h2>Skills</h2>
        <ul className="skills-list">
          <li>JavaScript / TypeScript</li>
          <li>React.js / Redux</li>
          <li>Node.js / Express</li>
          <li>HTML5 / CSS3 / SASS</li>
          <li>MongoDB / SQL</li>
          <li>Git / GitHub</li>
          <li>REST APIs</li>
          <li>UI/UX Design</li>
        </ul>
      </section>
      <section className="projects-section">
        <h2>Projects</h2>
        <div className="project-card">
          <h3>Project Title 1</h3>
          <p>Short description of your project, technologies used, and your role.</p>
          <a href="#" target="_blank" rel="noopener noreferrer">View Project</a>
        </div>
        <div className="project-card">
          <h3>Project Title 2</h3>
          <p>Short description of your project, technologies used, and your role.</p>
          <a href="#" target="_blank" rel="noopener noreferrer">View Project</a>
        </div>
        {/* Add more projects as needed */}
      </section>
      <footer className="portfolio-footer">
        <p>
          Contact: <a href="mailto:gaddantisaisaran@gmail.com">gaddantisaisaran@gmail.com</a> | 
          <a href="https://linkedin.com/" target="_blank" rel="noopener noreferrer"> LinkedIn</a> | 
          <a href="https://github.com/" target="_blank" rel="noopener noreferrer"> GitHub</a>
        </p>
      </footer>
    </div>
  )
}

export default App
