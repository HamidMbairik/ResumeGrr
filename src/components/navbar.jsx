import { useState, useEffect } from 'react'

const Navbar = () => {
  // Track scroll state
  const [isScrolled, setIsScrolled] = useState(false)

  // Track which link is active
  const [activeLink, setActiveLink] = useState('Home')

  // Listen to scroll events
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10) // threshold for scroll effect
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  // Handle link click
  const handleLinkClick = (linkName) => setActiveLink(linkName)

  return (
    <nav
      style={{
        position: 'sticky',
        top: 0,
        zIndex: 50,
        width: '100%',
        transition: 'background-color 0.3s ease, backdrop-filter 0.3s ease, box-shadow 0.3s ease',

        // Transparent at top, semi-solid + blur on scroll
        backgroundColor: isScrolled ? 'rgba(255,255,255,0.95)' : 'transparent',
        backdropFilter: isScrolled ? 'blur(10px)' : 'none',
        boxShadow: isScrolled ? '0 4px 6px -1px rgba(0,0,0,0.1)' : 'none',
      }}
    >
      {/* Container */}
      <div style={{ maxWidth: '80rem', margin: '0 auto', padding: '0 1rem' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', height: '4rem', alignItems: 'center' }}>
          
          {/* Logo */}
          <div style={{ display: 'flex', alignItems: 'center' }}>
            <h1 style={{
              fontSize: '1.75rem',
              fontWeight: 'bold',
              color: '#2563eb',
              fontFamily: 'Inter, sans-serif',
              margin: 0,
              cursor: 'pointer'
            }}>ResumeGrr</h1>
          </div>

          {/* Navigation Links */}
          <div style={{ display: 'flex', gap: '2rem' }}>
            {['Home', 'Features', 'Try it', 'Pricing'].map(link => (
              <a
                key={link}
                href="#"
                onClick={(e) => { e.preventDefault(); handleLinkClick(link) }}
                style={{
                  color: activeLink === link ? '#2563eb' : '#374151', // keep original link color
                  fontFamily: 'Inter, sans-serif',
                  fontSize: '1.05rem',
                  fontWeight: '500',
                  transition: 'color 0.3s',
                  cursor: 'pointer',
                  position: 'relative',
                  textDecoration: 'none',
                }}
                onMouseEnter={(e) => { if (activeLink !== link) e.target.style.color = '#2563eb' }}
                onMouseLeave={(e) => { if (activeLink !== link) e.target.style.color = '#374151' }}
              >
                {link}
                {/* Underline animation */}
                <span style={{
                  position: 'absolute',
                  bottom: '-8px',
                  left: '0',
                  width: activeLink === link ? '100%' : '0%',
                  height: '3px',
                  backgroundColor: '#2563eb',
                  transition: 'width 0.4s',
                  transformOrigin: 'left'
                }}></span>
              </a>
            ))}
          </div>

          {/* Login Button */}
          <div>
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
              onMouseEnter={(e) => e.target.style.backgroundColor = '#1d4ed8'}
              onMouseLeave={(e) => e.target.style.backgroundColor = '#2563eb'}
            >
              Login
            </button>
          </div>

        </div>
      </div>
    </nav>
  )
}

export default Navbar
