import './Skills.css'

function Skills() {
  const skillCategories = [
    {
      category: 'Frontend Development',
      icon: '⚛️',
      skills: [
        { name: 'React.js', level: 85 },
        { name: 'JavaScript (ES6+)', level: 90 },
        { name: 'CSS3 & Animations', level: 88 },
        { name: 'HTML5', level: 92 },
        { name: 'Responsive Design', level: 87 }
      ]
    },
    {
      category: 'Backend & Tools',
      icon: '🛠️',
      skills: [
        { name: 'Vite & Build Tools', level: 80 },
        { name: 'Git & Version Control', level: 85 },
        { name: 'NPM & Package Management', level: 82 },
        { name: 'REST APIs', level: 75 }
      ]
    },
    {
      category: 'AI & Research',
      icon: '🤖',
      skills: [
        { name: 'Machine Learning Concepts', level: 70 },
        { name: 'AI Research & Development', level: 75 },
        { name: 'Data Analysis', level: 72 },
        { name: 'Model Development', level: 68 }
      ]
    },
    {
      category: 'Security & Best Practices',
      icon: '🔐',
      skills: [
        { name: 'Cybersecurity Fundamentals', level: 78 },
        { name: 'Secure Coding', level: 80 },
        { name: 'Application Security', level: 76 },
        { name: 'Data Protection', level: 75 }
      ]
    }
  ]

  const otherSkills = [
    'Problem Solving', 'Critical Thinking', 'Team Collaboration',
    'Project Management', 'Documentation', 'Continuous Learning',
    'Code Review', 'Testing & QA', 'UI/UX Design'
  ]

  return (
    <div className="skills">
      <div className="skills-container">
        <h1>Technical Skills</h1>
        <p className="skills-intro">
          A comprehensive set of skills developed through education and hands-on experience in modern web development,
          AI research, and cybersecurity. Continuously expanding my expertise.
        </p>

        <div className="skills-grid">
          {skillCategories.map((category, idx) => (
            <div key={idx} className="skill-card">
              <div className="skill-header">
                <span className="skill-icon">{category.icon}</span>
                <h2>{category.category}</h2>
              </div>
              
              <div className="skill-list">
                {category.skills.map((skill, sidx) => (
                  <div key={sidx} className="skill-item">
                    <div className="skill-info">
                      <span className="skill-name">{skill.name}</span>
                      <span className="skill-percentage">{skill.level}%</span>
                    </div>
                    <div className="progress-bar">
                      <div 
                        className="progress-fill" 
                        style={{ width: `${skill.level}%` }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="other-skills">
          <h2>Other Competencies</h2>
          <div className="skills-badges">
            {otherSkills.map((skill, idx) => (
              <span key={idx} className="skill-badge">{skill}</span>
            ))}
          </div>
        </div>

        <div className="certifications">
          <h2>Current Learning Path</h2>
          <div className="cert-items">
            <div className="cert-item">
              <span className="cert-icon">📚</span>
              <h3>Advanced Web Development</h3>
              <p>Mastering full-stack development with modern frameworks and tools</p>
            </div>
            <div className="cert-item">
              <span className="cert-icon">🤖</span>
              <h3>AI & Machine Learning</h3>
              <p>Exploring AI models, deep learning, and practical applications</p>
            </div>
            <div className="cert-item">
              <span className="cert-icon">🔒</span>
              <h3>Cybersecurity Mastery</h3>
              <p>Building secure applications and understanding security threats</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Skills
