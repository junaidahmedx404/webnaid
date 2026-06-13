// src/components/Navbar.jsx
import { useState, useEffect } from 'react';
import "../style/Navbar.css";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // Add subtle shadow when scrolling down past the hero line
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };

  return (
    <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
      <div className="container nav-container">
        
        {/* Webnaid Premium Logo Mark */}
        <a href="#home" className="nav-logo" onClick={closeMenu}>
          Webnaid<span className="logo-dot">.</span>
        </a>

        {/* Mobile Hamburger Layout Controls */}
        <button 
          className={`nav-toggle ${isOpen ? 'open' : ''}`} 
          onClick={toggleMenu} 
          aria-label="Toggle navigation menu"
        >
          <span className="hamburger-bar"></span>
          <span className="hamburger-bar"></span>
          <span className="hamburger-bar"></span>
        </button>

        {/* Navigation Link Stack */}
        <ul className={`nav-links ${isOpen ? 'active' : ''}`}>
          <li><a href="#home" onClick={closeMenu}>Home</a></li>
          <li><a href="#services" onClick={closeMenu}>Services</a></li>
          <li><a href="#portfolio" onClick={closeMenu}>Portfolio</a></li>
          <li><a href="#about" onClick={closeMenu}>About</a></li>
          <li className="nav-cta-li">
            <a href="#contact" className="btn-primary nav-cta" onClick={closeMenu}>
              Get a Website
            </a>
          </li>
        </ul>

      </div>
    </nav>
  );
}

export default Navbar;