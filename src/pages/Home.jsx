import { useState, useEffect } from 'react'
import './Home.css'

function Home() {
  const [currentSlide, setCurrentSlide] = useState(0)

  const slides = [
    {
      title: 'Welcome to React',
      subtitle: 'Build amazing web applications',
      color: '#ff6b6b'
    },
    {
      title: 'Modern & Fast',
      subtitle: 'Built with Vite and React',
      color: '#4ecdc4'
    },
    {
      title: 'Dark Mode Ready',
      subtitle: 'Enjoy a comfortable viewing experience',
      color: '#45b7d1'
    },
    {
      title: 'Fully Responsive',
      subtitle: 'Works on all devices',
      color: '#96ceb4'
    }
  ]

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length)
    }, 4000)
    return () => clearInterval(timer)
  }, [slides.length])

  const goToSlide = (index) => {
    setCurrentSlide(index)
  }

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length)
  }

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length)
  }

  return (
    <div className="home">
      <div className="slideshow-container">
        {slides.map((slide, index) => (
          <div
            key={index}
            className={`slide ${index === currentSlide ? 'active' : ''}`}
            style={{ backgroundColor: slide.color }}
          >
            <div className="slide-content">
              <h1 className="slide-title">{slide.title}</h1>
              <p className="slide-subtitle">{slide.subtitle}</p>
            </div>
          </div>
        ))}

        <button className="prev" onClick={prevSlide}>❮</button>
        <button className="next" onClick={nextSlide}>❯</button>
      </div>

      <div className="dots-container">
        {slides.map((_, index) => (
          <button
            key={index}
            className={`dot ${index === currentSlide ? 'active' : ''}`}
            onClick={() => goToSlide(index)}
          />
        ))}
      </div>

      <section className="home-content">
        <h2>Welcome to Our React Application</h2>
        <p>This is a modern, responsive web application built with React and Vite.</p>
        <p>Features:</p>
        <ul>
          <li>✨ Beautiful animated slideshow</li>
          <li>🌙 Dark mode toggle with persistent storage</li>
          <li>📱 Fully responsive design</li>
          <li>⚡ Fast and optimized with Vite</li>
          <li>🎨 Modern UI components</li>
        </ul>
      </section>
    </div>
  )
}

export default Home
