import './About.css'

function About() {
  return (
    <div className="about">
      <div className="about-container">
        <h1>About Me</h1>
        <div className="about-content">
          <section className="intro-section">
            <h2>Who Am I?</h2>
            <p>
              Hello! I'm <strong>Imran Ansari</strong>, a passionate Computer Science student currently pursuing my 
              <strong> Bachelor of Science (B.Sc) in Computer Application</strong> at <strong>Gossner College, Ranchi</strong>. 
              With a strong academic foundation and active participation in emerging technologies like AI and Model R&D, 
              I'm dedicated to building innovative solutions that make a real impact in the IT industry.
            </p>
            <p>
              I believe in the power of continuous learning and practical application of knowledge. My journey from 
              high school to college has equipped me with both technical expertise and problem-solving skills.
            </p>
          </section>

          <section className="education-section">
            <h2>Education Journey</h2>
            <div className="timeline">
              <div className="timeline-item">
                <div className="timeline-marker">🎓</div>
                <div className="timeline-content">
                  <h3>Bachelor of Science - Computer Application</h3>
                  <p><strong>Gossner College, Ranchi</strong></p>
                  <p className="timeline-date">Currently Pursuing</p>
                  <p className="timeline-desc">Focusing on web development, cybersecurity, AI, and software engineering practices</p>
                </div>
              </div>
              
              <div className="timeline-item">
                <div className="timeline-marker">📚</div>
                <div className="timeline-content">
                  <h3>Intermediate (12th Grade)</h3>
                  <p><strong>Xavier's College, Ranchi</strong></p>
                  <p className="timeline-date">Completed</p>
                  <p className="score">Score: <strong>60%</strong></p>
                </div>
              </div>

              <div className="timeline-item">
                <div className="timeline-marker">🏫</div>
                <div className="timeline-content">
                  <h3>Matriculation (10th Grade)</h3>
                  <p><strong>High School, chitarpur, ramgarh</strong></p>
                  <p className="timeline-date">Completed with Distinction</p>
                  <p className="score">Score: <strong>95%</strong> ⭐</p>
                </div>
              </div>
            </div>
          </section>

          <section className="awards-section">
            <h2>Awards & Achievements</h2>
            <div className="awards-grid">
              <div className="award-card">
                <span className="award-icon">🏆</span>
                <h3>Merit Scholar</h3>
                <p>Recognition for outstanding performance in academics with 95% in matriculation</p>
              </div>
              
              <div className="award-card">
                <span className="award-icon">⭐</span>
                <h3>School Excellence Award</h3>
                <p>Awarded by High School, chitarpur for academic excellence and discipline</p>
              </div>

              <div className="award-card">
                <span className="award-icon">🚀</span>
                <h3>AI & Model Research Participant</h3>
                <p>Active participant in AI and Machine Learning research and development projects</p>
              </div>

              <div className="award-card">
                <span className="award-icon">💻</span>
                <h3>Tech Innovator</h3>
                <p>Developing cutting-edge web applications and exploring emerging technologies</p>
              </div>
            </div>
          </section>

          <section className="skills-section">
            <h2>Core Competencies</h2>
            <div className="skills-grid">
              <div className="skill-category">
                <h3>Web Development</h3>
                <ul>
                  <li>React.js & Modern JavaScript (ES6+)</li>
                  <li>Responsive UI/UX Design</li>
                  <li>Vite & Build Tools</li>
                  <li>CSS3 Animations & Dark Mode</li>
                </ul>
              </div>

              <div className="skill-category">
                <h3>AI & Research</h3>
                <ul>
                  <li>Machine Learning Concepts</li>
                  <li>Model Development & R&D</li>
                  <li>Data Analysis</li>
                  <li>Research Methodology</li>
                </ul>
              </div>

              <div className="skill-category">
                <h3>Security & Best Practices</h3>
                <ul>
                  <li>Cybersecurity Fundamentals</li>
                  <li>Secure Coding Practices</li>
                  <li>Application Security</li>
                  <li>Data Protection</li>
                </ul>
              </div>

              <div className="skill-category">
                <h3>Professional Skills</h3>
                <ul>
                  <li>Problem-Solving & Critical Thinking</li>
                  <li>Project Management</li>
                  <li>Team Collaboration</li>
                  <li>Continuous Learning</li>
                </ul>
              </div>
            </div>
          </section>

          <section className="current-work">
            <h2>What I'm Working On</h2>
            <ul>
              <li>🤖 <strong>AI & Model R&D:</strong> Actively participating in research and development of AI models and machine learning solutions</li>
              <li>⚛️ <strong>Modern Web Development:</strong> Building responsive, scalable web applications with React and Vite</li>
              <li>🔐 <strong>Cybersecurity:</strong> Learning advanced security practices and building secure applications</li>
              <li>📚 <strong>Continuous Learning:</strong> Exploring new technologies and methodologies in computer science</li>
            </ul>
          </section>

          <section className="vision">
            <h2>My Vision for IT Industry</h2>
            <p>
              I aspire to become a skilled full-stack developer and AI researcher who creates innovative solutions 
              that address real-world challenges. I'm committed to:
            </p>
            <ul>
              <li>✨ Building secure, scalable, and user-centric applications</li>
              <li>🔬 Contributing to AI research and advancing intelligent systems</li>
              <li>🤝 Collaborating with teams to deliver impactful projects</li>
              <li>📈 Staying at the forefront of technology and industry trends</li>
              <li>💡 Mentoring and sharing knowledge with the developer community</li>
            </ul>
          </section>

          <section className="connect">
            <h2>Let's Connect</h2>
            <p>
              I'm always open to discussing projects, collaborations, and opportunities in web development and AI research. 
              Feel free to reach out!
            </p>
            <ul>
              <li>🐙 GitHub: <a href="https://github.com/imran-0101" target="_blank" rel="noopener noreferrer">@imran-0101</a></li>
              <li>📍 Location: Ranchi, India</li>
              <li>🎓 Education: BSc Computer Application (Gossner College, Ranchi)</li>
              <li>🚀 Focus: Web Development, AI Research, Cybersecurity</li>
            </ul>
          </section>
        </div>
      </div>
    </div>
  )
}

export default About
