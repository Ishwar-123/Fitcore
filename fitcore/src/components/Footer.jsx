import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-content">
          <div className="footer-section">
            <h3>About FitCore</h3>
            <p>Transform your body and mind with our cutting-edge fitness programs and expert guidance.</p>
            <div className="social-links">
              <a href="#" className="social-link">IG</a>
              <a href="#" className="social-link">YT</a>
              <a href="#" className="social-link">FB</a>
              <a href="#" className="social-link">TT</a>
            </div>
          </div>

          <div className="footer-section">
            <h3>Quick Links</h3>
            <Link to="/">Home</Link>
            <Link to="/workouts">Workouts</Link>
            <Link to="/nutrition">Nutrition Plans</Link>
            <Link to="/programs">Training Programs</Link>
            <Link to="/contact">Contact Us</Link>
          </div>

          <div className="footer-section">
            <h3>Training Types</h3>
            <a href="#">Strength Training</a>
            <a href="#">Cardio Workouts</a>
            <a href="#">HIIT Sessions</a>
            <a href="#">Yoga & Flexibility</a>
            <a href="#">Personal Training</a>
          </div>

          <div className="footer-section">
            <h3>Get In Touch</h3>
            <p>📧 info@fitcore.com</p>
            <p>📱 +1 (555) 123-4567</p>
            <p>📍 123 Fitness Ave, Gym City</p>
            <p>⏰ Mon-Sun: 5AM - 11PM</p>
          </div>
        </div>

        <div className="footer-bottom">
          <p>© 2025 FitCore. Built with <span className="heart">💪</span> for fitness enthusiasts.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;