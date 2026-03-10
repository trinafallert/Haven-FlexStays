import { useState, useEffect } from 'react';
import './Navbar.css';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`navbar ${scrolled ? 'navbar--scrolled' : ''}`}>
      <div className="container navbar__inner">
        <a href="#" className="navbar__logo">
          <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect width="32" height="32" rx="10" fill="#2D6A4F"/>
            <path d="M7 18L16 9L25 18V26H20V21H12V26H7V18Z" fill="white"/>
            <circle cx="16" cy="14" r="2" fill="#F4A261"/>
          </svg>
          <span className="navbar__brand">Haven<span className="navbar__brand-flex">FlexStays</span></span>
        </a>

        <ul className={`navbar__links ${menuOpen ? 'navbar__links--open' : ''}`}>
          <li><a href="#how-it-works" onClick={() => setMenuOpen(false)}>How It Works</a></li>
          <li><a href="#listings" onClick={() => setMenuOpen(false)}>Explore</a></li>
          <li><a href="#host" onClick={() => setMenuOpen(false)}>Become a Host</a></li>
          <li><a href="#testimonials" onClick={() => setMenuOpen(false)}>Reviews</a></li>
        </ul>

        <div className="navbar__actions">
          <a href="#" className="navbar__login">Log In</a>
          <a href="#" className="btn-primary navbar__cta">Sign Up Free</a>
        </div>

        <button
          className={`navbar__burger ${menuOpen ? 'navbar__burger--open' : ''}`}
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          <span /><span /><span />
        </button>
      </div>
    </nav>
  );
}
