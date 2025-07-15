import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    let lastScrollTop = 0;
    const navbar = document.getElementById('navbar');

    const handleScroll = () => {
      const scrollTop = window.pageYOffset || document.documentElement.scrollTop;

      if (scrollTop > 100) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }

      // Hide/show navbar on scroll
      if (scrollTop > lastScrollTop && scrollTop > 200) {
        if (navbar) navbar.style.transform = 'translateY(-100%)';
      } else {
        if (navbar) navbar.style.transform = 'translateY(0)';
      }

      lastScrollTop = scrollTop;
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
    document.body.style.overflow = !isMenuOpen ? 'hidden' : 'auto';
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
    document.body.style.overflow = 'auto';
  };

  const isActive = (path) => location.pathname === path;

  return (
    <nav className={`navbar ${isScrolled ? 'scrolled' : ''}`} id="navbar">
      <div className="nav-container">
        <Link to="/" className="logo" onClick={closeMenu}>
          FitCore
        </Link>

        <ul className={`nav-menu ${isMenuOpen ? 'active' : ''}`} id="navMenu">
          <li className="nav-item">
            <Link 
              to="/" 
              className={`nav-link ${isActive('/') ? 'active' : ''}`}
              onClick={closeMenu}
            >
              Home
            </Link>
          </li>
          <li className="nav-item">
            <Link 
              to="/workouts" 
              className={`nav-link ${isActive('/workouts') ? 'active' : ''}`}
              onClick={closeMenu}
            >
              Workouts
            </Link>
          </li>
          <li className="nav-item">
            <Link 
              to="/nutrition" 
              className={`nav-link ${isActive('/nutrition') ? 'active' : ''}`}
              onClick={closeMenu}
            >
              Nutrition
            </Link>
          </li>
          <li className="nav-item">
            <Link 
              to="/programs" 
              className={`nav-link ${isActive('/programs') ? 'active' : ''}`}
              onClick={closeMenu}
            >
              Programs
            </Link>
          </li>
          <li className="nav-item">
            <Link 
              to="/contact" 
              className={`nav-link ${isActive('/contact') ? 'active' : ''}`}
              onClick={closeMenu}
            >
              Contact
            </Link>
          </li>
          {/* <li className="nav-item">
            <button className="nav-link cta-btn" onClick={closeMenu}>
              Join Now
            </button>
          </li> */}
        </ul>

        <div 
          className={`hamburger ${isMenuOpen ? 'active' : ''}`} 
          id="hamburger"
          onClick={toggleMenu}
        >
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;