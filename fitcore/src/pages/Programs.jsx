import React, { useState, useEffect, useRef } from 'react';

const Programs = () => {
    const [activeFilter, setActiveFilter] = useState('all');
    const programCardsRef = useRef([]);

    useEffect(() => {
        // Intersection Observer for animations
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

        // Observe program cards for animation
        programCardsRef.current.forEach(card => {
            if (card) observer.observe(card);
        });

        return () => observer.disconnect();
    }, []);

    const handleFilterClick = (filterValue) => {
        setActiveFilter(filterValue);
    };

    const handleCardHover = (e, isEntering) => {
        if (isEntering) {
            e.currentTarget.style.transform = 'translateY(-10px) scale(1.02)';
        } else {
            e.currentTarget.style.transform = 'translateY(0) scale(1)';
        }
    };

    const handleButtonClick = (e) => {
        e.preventDefault();

        // Create ripple effect
        const ripple = document.createElement('span');
        ripple.style.position = 'absolute';
        ripple.style.borderRadius = '50%';
        ripple.style.background = 'rgba(0, 255, 136, 0.6)';
        ripple.style.transform = 'scale(0)';
        ripple.style.animation = 'ripple 0.6s linear';
        ripple.style.left = e.nativeEvent.offsetX + 'px';
        ripple.style.top = e.nativeEvent.offsetY + 'px';
        ripple.style.width = ripple.style.height = '20px';
        ripple.style.marginLeft = ripple.style.marginTop = '-10px';

        const btn = e.currentTarget;
        btn.style.position = 'relative';
        btn.style.overflow = 'hidden';
        btn.appendChild(ripple);

        setTimeout(() => {
            if (ripple.parentNode) {
                ripple.remove();
            }
        }, 600);
    };

    const programsData = [
        {
            id: 1,
            category: "strength advanced",
            fileName: "strength_builder.exe",
            name: "Powerlifter Pro",
            level: "Advanced",
            description: "Master the big three lifts with advanced programming techniques. Designed for experienced lifters ready to compete or hit new PRs.",
            weeks: 16,
            frequency: "4x",
            codeSnippet: (
                <>
                    <div><span className="code-keyword">class</span> <span className="code-function">PowerLifter</span> {'{'}
                    </div>
                    <div> <span className="code-function">squat</span>(); <span className="code-function">bench</span>();
                        <span className="code-function">deadlift</span>();
                    </div>
                    <div> <span className="code-keyword">return</span> <span className="code-string">"NEW_PR"</span>;</div>
                    <div>{'}'}</div>
                </>
            ),
            features: [
                "Periodized training blocks",
                "Competition prep protocols",
                "Advanced accessory work",
                "Peak performance strategies"
            ]
        },
        {
            id: 2,
            category: "cardio beginner",
            fileName: "cardio_crusher.rb",
            name: "Cardio Crusher",
            level: "Beginner-Intermediate",
            description: "Build cardiovascular endurance through varied training methods. Perfect for improving heart health and stamina.",
            weeks: 10,
            frequency: "5x",
            codeSnippet: (
                <>
                    <div><span className="code-keyword">def</span> <span className="code-function">build_endurance</span>
                    </div>
                    <div> heart_rate.<span className="code-function">optimize</span>()</div>
                    <div> stamina.<span className="code-function">increase</span>()</div>
                    <div><span className="code-keyword">end</span></div>
                </>
            ),
            features: [
                "LISS & MISS training",
                "Multiple cardio modalities",
                "Heart rate zone guidance",
                "Endurance progressions"
            ]
        },
        {
            id: 3,
            category: "strength flexibility beginner",
            fileName: "functional_fitness.go",
            name: "Functional Fitness",
            level: "All Levels",
            description: "Train movements that translate to real-life activities. Improve strength, mobility, and coordination for daily tasks.",
            weeks: 14,
            frequency: "4x",
            codeSnippet: (
                <>
                    <div><span className="code-keyword">func</span> <span className="code-function">trainMovement</span>() {'{'}
                    </div>
                    <div> <span className="code-function">squat</span>(); <span className="code-function">push</span>();
                        <span className="code-function">pull</span>(); <span className="code-function">carry</span>();
                    </div>
                    <div> <span className="code-keyword">return</span> <span
                            className="code-string">"real_world_strength"</span></div>
                    <div>{'}'}</div>
                </>
            ),
            features: [
                "Movement pattern focus",
                "Unilateral training",
                "Core stability work",
                "Injury prevention"
            ]
        }
    ];

    const filterButtons = [
        { key: 'all', label: 'All Programs' },
        { key: 'strength', label: 'Strength' },
        { key: 'cardio', label: 'Cardio' },
        { key: 'hiit', label: 'HIIT' },
        { key: 'flexibility', label: 'Flexibility' },
        { key: 'beginner', label: 'Beginner' },
        { key: 'advanced', label: 'Advanced' }
    ];

    const filteredPrograms = activeFilter === 'all' 
        ? programsData 
        : programsData.filter(program => program.category.includes(activeFilter));

    return (
        <main className="main-content" id="main-content">
            {/* Page Header */}
            <section className="page-header" aria-labelledby="programs-title">
                <h1 className="page-title" id="programs-title"> <span style={{color: "var(--text-secondary)"}}>//</span>Programs</h1>
                <p className="page-subtitle">Choose your path to fitness excellence with our scientifically designed training
                    programs</p>
            </section>

            {/* Filter Section */}
            <section className="filter-section" aria-label="Program filters">
                <h2 className="filter-header" id="filter-header">Filter Programs</h2>
                <div className="filter-buttons" role="group" aria-labelledby="filter-header">
                    {filterButtons.map(button => (
                        <button 
                            key={button.key}
                            className={`filter-btn ${activeFilter === button.key ? 'active' : ''}`}
                            onClick={() => handleFilterClick(button.key)}
                            aria-pressed={activeFilter === button.key}
                        >
                            {button.label}
                        </button>
                    ))}
                </div>
            </section>

            {/* Programs Grid */}
            <section className="programs-grid" id="programsGrid" aria-label="Available programs">
                {filteredPrograms.map((program, index) => (
                    <article 
                        key={program.id}
                        className="program-card" 
                        data-category={program.category}
                        ref={el => programCardsRef.current[index] = el}
                        onMouseEnter={(e) => handleCardHover(e, true)}
                        onMouseLeave={(e) => handleCardHover(e, false)}
                        aria-labelledby={`program-${program.id}`}
                    >
                        <div className="card-header">
                            <div className="card-dots">
                                <div className="dot dot-red" aria-hidden="true"></div>
                                <div className="dot dot-yellow" aria-hidden="true"></div>
                                <div className="dot dot-green" aria-hidden="true"></div>
                            </div>
                            <div className="card-title">{program.fileName}</div>
                        </div>
                        <div className="card-content">
                            <h3 className="program-name" id={`program-${program.id}`}>{program.name}</h3>
                            <span className="program-level">{program.level}</span>
                            <p className="program-description">
                                {program.description}
                            </p>

                            <div className="program-stats">
                                <div className="stat">
                                    <div className="stat-value">{program.weeks}</div>
                                    <div className="stat-label">Weeks</div>
                                </div>
                                <div className="stat">
                                    <div className="stat-value">{program.frequency}</div>
                                    <div className="stat-label">Per Week</div>
                                </div>
                            </div>

                            <div className="program-code" aria-label={`Code snippet for ${program.name}`}>
                                {program.codeSnippet}
                            </div>

                            <div className="program-features">
                                <h4 className="features-title">Key Features</h4>
                                <ul className="feature-list" aria-label="Program features">
                                    {program.features.map((feature, featureIndex) => (
                                        <li key={featureIndex} className="feature-item">{feature}</li>
                                    ))}
                                </ul>
                            </div>

                            <div className="card-actions">
                                <a 
                                    href="#" 
                                    className="action-btn primary" 
                                    onClick={handleButtonClick}
                                    aria-label={`Start ${program.name} program`}
                                >
                                    Start Program
                                </a>
                                <a 
                                    href="#" 
                                    className="action-btn" 
                                    onClick={handleButtonClick}
                                    aria-label={`View details for ${program.name}`}
                                >
                                    View Details
                                </a>
                            </div>
                        </div>
                    </article>
                ))}
            </section>
        </main>
    );
};

export default Programs;