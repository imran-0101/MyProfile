import './Header.css'

function Header({ currentPage, setCurrentPage, darkMode, setDarkMode }) {
  return (
    <header className="header">
      <div className="header-container">
        <div className="logo">
          <img 
            src="https://avatars.githubusercontent.com/u/199259058?v=4" 
            alt="Imran Ansari"
            className="profile-photo"
          />
          <span>Imran Ansari</span>
        </div>
        <nav className="nav">
          <button 
            className={`nav-link ${currentPage === 'home' ? 'active' : ''}`}
            onClick={() => setCurrentPage('home')}
          >
            Home
          </button>
          <button 
            className={`nav-link ${currentPage === 'about' ? 'active' : ''}`}
            onClick={() => setCurrentPage('about')}
          >
            About
          </button>
          <button 
            className={`nav-link ${currentPage === 'skills' ? 'active' : ''}`}
            onClick={() => setCurrentPage('skills')}
          >
            Skills
          </button>
          <button 
            className={`nav-link ${currentPage === 'projects' ? 'active' : ''}`}
            onClick={() => setCurrentPage('projects')}
          >
            Projects
          </button>
          <button 
            className={`nav-link ${currentPage === 'contact' ? 'active' : ''}`}
            onClick={() => setCurrentPage('contact')}
          >
            Contact
          </button>
        </nav>
        <button 
          className="theme-toggle"
          onClick={() => setDarkMode(!darkMode)}
          title={darkMode ? 'Switch to Light Mode' : 'Switch to Dark Mode'}
        >
          {darkMode ? '☀️' : '🌙'}
        </button>
      </div>
    </header>
  )
}

export default Header
