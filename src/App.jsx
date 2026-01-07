import { useState, useEffect } from 'react'
import './App.css'
import Header from './components/Header'
import Footer from './components/Footer'
import Hero from './components/Hero'
import Home from './pages/Home'
import About from './pages/About'
import Contact from './pages/Contact'
import Skills from './pages/Skills'
import Projects from './pages/Projects'

function App() {
  const [currentPage, setCurrentPage] = useState('home')
  const [darkMode, setDarkMode] = useState(() => {
    const saved = localStorage.getItem('darkMode')
    return saved ? JSON.parse(saved) : true
  })

  useEffect(() => {
    localStorage.setItem('darkMode', JSON.stringify(darkMode))
    if (darkMode) {
      document.documentElement.classList.add('dark-mode')
    } else {
      document.documentElement.classList.remove('dark-mode')
    }
  }, [darkMode])

  const renderPage = () => {
    switch(currentPage) {
      case 'home':
        return <Home />
      case 'about':
        return <About />
      case 'skills':
        return <Skills />
      case 'projects':
        return <Projects />
      case 'contact':
        return <Contact />
      default:
        return <Home />
    }
  }

  return (
    <div className="app">
      <Header 
        currentPage={currentPage} 
        setCurrentPage={setCurrentPage}
        darkMode={darkMode}
        setDarkMode={setDarkMode}
      />
      {currentPage === 'home' && <Hero setCurrentPage={setCurrentPage} />}
      <main className="main-content">
        {renderPage()}
      </main>
      <Footer />
    </div>
  )
}

export default App
