import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";


const Home = () => {
  useEffect(() => {
    // Observe elements for animation
    const observerOptions = {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.style.opacity = '1';
          entry.target.style.transform = 'translateY(0)';
        }
      });
    }, observerOptions);

    // Observe hero buttons for animation
    document.querySelectorAll('.hero-btn').forEach(btn => {
      btn.style.opacity = '0';
      btn.style.transform = 'translateY(20px)';
      btn.style.transition = 'all 0.6s ease';
      observer.observe(btn);
    });

    // Cleanup observer on unmount
    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <div className="home">
      {/* Main Content */}
      <main className="main-content">
        <div className="code-window">
          <div className="window-header">
            <div className="window-button btn-red"></div>
            <div className="window-button btn-yellow"></div>
            <div className="window-button btn-green"></div>
            <div className="window-title">fitness.program</div>
          </div>
          <div className="code-content">
            <div className="code-line">
              <span className="keyword">function</span>{' '}
              <span className="function">transformBody</span>() {'{'}
            </div>
            <div className="code-line">
              {' '}
              <span className="keyword">return</span>{' '}
              <span className="string">"Stronger Every Day"</span>;
            </div>
            <div className="code-line">{'}'}</div>
            <div className="code-line"></div>
            <div className="code-line">
              <span className="comment">// Your fitness journey starts here</span>
            </div>
          </div>
        </div>

        <div className="hero-buttons">
          <Link to="/workouts" className="hero-btn primary">
            Start Training
          </Link>
          <Link to="/programs" className="hero-btn">
            View Programs
          </Link>
          <Link to="/contact" className="hero-btn">
            Book Session
          </Link>
        </div>
      </main>
    </div>
  );
};

export default Home;