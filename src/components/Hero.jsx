import './Hero.css'

function Hero({ setCurrentPage }) {
  return (
    <section className="hero">
      <div className="hero-container">
        <div className="hero-content">
          <div className="hero-avatar">
            <img 
              src="https://avatars.githubusercontent.com/u/199259058?v=4" 
              alt="Imran Ansari"
              className="avatar-large"
            />
          </div>
          
          <h1 className="hero-title">Imran Ansari</h1>
          <p className="hero-subtitle">Full Stack Developer & AI Enthusiast</p>
          
          <p className="hero-description">
            Computer Science student at Gossner College, Ranchi | Passionate about Web Development, 
            Cybersecurity & AI | Building innovative solutions for real-world problems
          </p>

          <div className="hero-stats">
            <div className="stat">
              <span className="stat-number">95%</span>
              <span className="stat-label">Matriculation</span>
            </div>
            <div className="stat">
              <span className="stat-number">BSc</span>
              <span className="stat-label">Current Study</span>
            </div>
            <div className="stat">
              <span className="stat-number">4+</span>
              <span className="stat-label">Tech Skills</span>
            </div>
          </div>

          <div className="hero-cta">
            <button 
              className="btn btn-primary"
              onClick={() => setCurrentPage('contact')}
            >
              Get In Touch
            </button>
            <a 
              href="https://github.com/imran-0101" 
              target="_blank" 
              rel="noopener noreferrer"
              className="btn btn-secondary"
            >
              View GitHub
            </a>
          </div>

          <div className="social-links">
            <a href="https://github.com/imran-0101" target="_blank" rel="noopener noreferrer" title="GitHub">
              🐙
            </a>
            <a href="mailto:contact@imranansari.com" title="Email">
              📧
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" title="LinkedIn">
              💼
            </a>
          </div>
        </div>

        <div className="hero-animation">
          <div className="floating-card card-1">React</div>
          <div className="floating-card card-2">JavaScript</div>
          <div className="floating-card card-3">AI/ML</div>
          <div className="floating-card card-4">Security</div>
        </div>
      </div>
    </section>
  )
}

export default Hero
