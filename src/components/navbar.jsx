// src/components/Navbar.jsx
import { useState, useEffect, useRef } from 'react'

const Navbar = () => {
  const navRef = useRef(null)
  const [isScrolled, setIsScrolled] = useState(false)
  const [activeLink, setActiveLink] = useState('Home')
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isMobile, setIsMobile] = useState(false)

  const links = ['Home', 'Features', 'Try it', 'Pricing']

  const handleLinkClick = (linkName) => {
    setActiveLink(linkName)
    if (isMobile) {
      setIsMenuOpen(false)
    }
    const target = document.getElementById(linkName)
    if (target) {
      target.scrollIntoView({ behavior: 'smooth', block: 'start' })
    }
  }

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

  useEffect(() => {
    const handleResize = () => {
      const mobile = window.innerWidth < 768
      setIsMobile(mobile)
      if (!mobile) {
        setIsMenuOpen(false)
      }
    }
    handleResize()
    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
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
              flexShrink: 0,
            }}
            onClick={() => handleLinkClick('Home')}
          >
            ResumeGrr
          </h1>

          {/* Desktop Center Links */}
          {!isMobile && (
            <div style={{ display: 'flex', flex: 1, justifyContent: 'center', gap: '2rem', }}>
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
          )}

          {/* Right Side */}
          {!isMobile ? (
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
                marginLeft: 'auto',
              }}
            >
              Login
            </button>
          ) : (
            <button
              aria-label="Toggle menu"
              onClick={() => setIsMenuOpen((open) => !open)}
              style={{
                backgroundColor: 'transparent',
                border: 'none',
                padding: '0.5rem',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                gap: '5px',
                cursor: 'pointer',
              }}
            >
              <span
                style={{
                  width: '26px',
                  height: '3px',
                  backgroundColor: '#111827',
                  transition: 'transform 0.3s, opacity 0.3s',
                  transform: isMenuOpen ? 'translateY(8px) rotate(45deg)' : 'none',
                }}
              />
              <span
                style={{
                  width: '26px',
                  height: '3px',
                  backgroundColor: '#111827',
                  transition: 'opacity 0.3s',
                  opacity: isMenuOpen ? 0 : 1,
                }}
              />
              <span
                style={{
                  width: '26px',
                  height: '3px',
                  backgroundColor: '#111827',
                  transition: 'transform 0.3s, opacity 0.3s',
                  transform: isMenuOpen ? 'translateY(-8px) rotate(-45deg)' : 'none',
                }}
              />
            </button>
          )}
        </div>

        {/* Mobile Dropdown */}
        {isMobile && isMenuOpen && (
          <div
            style={{
              position: 'absolute',
              top: '4rem',
              left: 0,
              width: '100%',
              backgroundColor: 'rgba(255,255,255,0.98)',
              backdropFilter: 'blur(8px)',
              boxShadow: '0 10px 15px -3px rgba(0,0,0,0.1)',
              borderBottom: '1px solid rgba(0,0,0,0.05)',
              zIndex: 5001,
            }}
          >
            <div style={{ maxWidth: '80rem', margin: '0 auto', padding: '0.75rem 1rem 1rem' }}>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
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
                      fontSize: '1.1rem',
                      fontWeight: '500',
                      cursor: 'pointer',
                      textDecoration: 'none',
                      padding: '0.25rem 0',
                    }}
                  >
                    {link}
                  </a>
                ))}
                <button
                  style={{
                    backgroundColor: '#2563eb',
                    color: 'white',
                    border: 'none',
                    padding: '0.6rem 1.25rem',
                    borderRadius: '0.5rem',
                    fontFamily: 'Inter, sans-serif',
                    fontSize: '1.05rem',
                    fontWeight: '500',
                    cursor: 'pointer',
                    marginTop: '0.5rem',
                  }}
                  onClick={() => setIsMenuOpen(false)}
                >
                  Login
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}

export default Navbar
