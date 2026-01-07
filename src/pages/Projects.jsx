import { useState } from 'react'
import './Projects.css'

function Projects() {
  const [filter, setFilter] = useState('all')

  const projects = [
    {
      id: 1,
      title: 'Portfolio Website',
      description: 'Modern portfolio built with React & Vite featuring dark mode, animations, and responsive design',
      tech: ['React', 'Vite', 'CSS3', 'JavaScript'],
      category: 'frontend',
      github: 'https://github.com/imran-0101',
      live: '#',
      image: '🌐'
    },
    {
      id: 2,
      title: 'Web Application with Dark Mode',
      description: 'Full-featured web app with persistent dark mode, component-based architecture, and smooth animations',
      tech: ['React', 'CSS Variables', 'LocalStorage'],
      category: 'frontend',
      github: 'https://github.com/imran-0101',
      live: '#',
      image: '🎨'
    },
    {
      id: 3,
      title: 'AI Model Research Project',
      description: 'Exploring machine learning models and their applications in real-world scenarios',
      tech: ['Python', 'Machine Learning', 'Data Analysis'],
      category: 'ai',
      github: '#',
      live: '#',
      image: '🤖'
    },
    {
      id: 4,
      title: 'Cybersecurity Learning Platform',
      description: 'Educational platform for learning cybersecurity concepts and best practices',
      tech: ['React', 'Security', 'Education'],
      category: 'security',
      github: 'https://github.com/imran-0101',
      live: '#',
      image: '🔐'
    },
    {
      id: 5,
      title: 'Interactive Dashboard',
      description: 'Dynamic dashboard with real-time data visualization and interactive components',
      tech: ['React', 'JavaScript', 'CSS3', 'Charts'],
      category: 'frontend',
      github: '#',
      live: '#',
      image: '📊'
    },
    {
      id: 6,
      title: 'Responsive Web Design',
      description: 'Fully responsive website optimized for all devices with modern UI/UX principles',
      tech: ['HTML5', 'CSS3', 'JavaScript', 'Responsive Design'],
      category: 'frontend',
      github: '#',
      live: '#',
      image: '📱'
    }
  ]

  const filteredProjects = filter === 'all' 
    ? projects 
    : projects.filter(project => project.category === filter)

  return (
    <div className="projects">
      <div className="projects-container">
        <h1>Portfolio Projects</h1>
        <p className="projects-intro">
          Showcase of projects demonstrating my expertise in frontend development, AI research, and cybersecurity
        </p>

        <div className="filter-buttons">
          <button 
            className={`filter-btn ${filter === 'all' ? 'active' : ''}`}
            onClick={() => setFilter('all')}
          >
            All Projects
          </button>
          <button 
            className={`filter-btn ${filter === 'frontend' ? 'active' : ''}`}
            onClick={() => setFilter('frontend')}
          >
            Frontend
          </button>
          <button 
            className={`filter-btn ${filter === 'ai' ? 'active' : ''}`}
            onClick={() => setFilter('ai')}
          >
            AI/ML
          </button>
          <button 
            className={`filter-btn ${filter === 'security' ? 'active' : ''}`}
            onClick={() => setFilter('security')}
          >
            Security
          </button>
        </div>

        <div className="projects-grid">
          {filteredProjects.map((project, idx) => (
            <div key={project.id} className="project-card" style={{animationDelay: `${idx * 0.1}s`}}>
              <div className="project-image">
                <span className="project-emoji">{project.image}</span>
              </div>

              <div className="project-content">
                <h3>{project.title}</h3>
                <p className="project-description">{project.description}</p>

                <div className="project-tech">
                  {project.tech.map((t, tidx) => (
                    <span key={tidx} className="tech-tag">{t}</span>
                  ))}
                </div>

                <div className="project-links">
                  <a 
                    href={project.github} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="project-link github"
                    title="View on GitHub"
                  >
                    🐙 GitHub
                  </a>
                  <a 
                    href={project.live}
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="project-link live"
                    title="View Live Demo"
                  >
                    🔗 Live Demo
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        {filteredProjects.length === 0 && (
          <div className="no-projects">
            <p>No projects found in this category.</p>
          </div>
        )}
      </div>
    </div>
  )
}

export default Projects
