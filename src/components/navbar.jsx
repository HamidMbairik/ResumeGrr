// src/components/Navbar.jsx
import { useState, useEffect, useRef } from 'react'

const Navbar = () => {
  const navRef = useRef(null)
  const [isScrolled, setIsScrolled] = useState(false)
  const [activeLink, setActiveLink] = useState('Home')

  const links = ['Home', 'Features', 'Try it', 'Pricing']

  // Click handler
  const handleLinkClick = (linkName) => {
    setActiveLink(linkName)
    const target = document.getElementById(linkName)
    if (target) {
      target.scrollIntoView({ behavior: 'smooth', block: 'start' })
    }
  }

  // Detect scroll for styling + active link
  useEffect(() => {
    const onScroll = () => {
      setIsScrolled(window.scrollY > 10)
      for (let i = links.length - 1; i >= 0; i--) {
        const section = document.getElementById(links[i])
        if (section && section.offsetTop <= window.scrollY + 100) {
          setActiveLink(links[i])
          break
        }
      }
    }
    window.addEventListener('scroll', onScroll)
    onScroll()
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <nav
      ref={navRef}
      style={{
        position: 'fixed',
        top: 0,
        zIndex: 5000,
        width: '100%',
        transition: 'background-color 0.3s ease, backdrop-filter 0.3s ease, box-shadow 0.3s ease',
        backgroundColor: isScrolled ? 'rgba(255,255,255,0.95)' : 'transparent',
        backdropFilter: isScrolled ? 'blur(10px)' : 'none',
        boxShadow: isScrolled ? '0 4px 6px -1px rgba(0,0,0,0.1)' : 'none',
      }}
    >
      <div style={{ maxWidth: '80rem', margin: '0 auto', padding: '0 1rem' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', height: '4rem', alignItems: 'center' }}>
          {/* Logo */}
          <h1
            style={{
              fontSize: '1.75rem',
              fontWeight: 'bold',
              color: '#2563eb',
              fontFamily: 'Inter, sans-serif',
              margin: 0,
              cursor: 'pointer',
            }}
            onClick={() => handleLinkClick('Home')}
          >
            ResumeGrr
          </h1>

          {/* Nav links */}
          <div style={{ display: 'flex', gap: '2rem' }}>
            {links.map((link) => (
              <a
                key={link}
                href={`#${link}`}
                onClick={(e) => {
                  e.preventDefault()
                  handleLinkClick(link)
                }}
                style={{
                  color: activeLink === link ? '#2563eb' : '#374151',
                  fontFamily: 'Inter, sans-serif',
                  fontSize: '1.05rem',
                  fontWeight: '500',
                  cursor: 'pointer',
                  position: 'relative',
                  textDecoration: 'none',
                  transition: 'color 0.3s',
                }}
              >
                {link}
                <span
                  style={{
                    position: 'absolute',
                    bottom: '-8px',
                    left: 0,
                    width: activeLink === link ? '100%' : '0%',
                    height: '3px',
                    backgroundColor: '#2563eb',
                    transition: 'width 0.4s',
                  }}
                />
              </a>
            ))}
          </div>

          {/* Login Button */}
          <button
            style={{
              backgroundColor: '#2563eb',
              color: 'white',
              border: 'none',
              padding: '0.5rem 1.5rem',
              borderRadius: '0.5rem',
              fontFamily: 'Inter, sans-serif',
              fontSize: '1.05rem',
              fontWeight: '500',
              cursor: 'pointer',
              transition: 'all 0.3s ease-in-out',
            }}
          >
            Login
          </button>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
