import React, { useState, useEffect } from 'react';

const Contact = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        service: '',
        message: ''
    });
    
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [submitStatus, setSubmitStatus] = useState('');

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsSubmitting(true);
        setSubmitStatus('Sending...');

        // Simulate API call
        setTimeout(() => {
            setSubmitStatus('Message Sent! ✓');
            setFormData({
                name: '',
                email: '',
                phone: '',
                service: '',
                message: ''
            });

            // Reset status after 3 seconds
            setTimeout(() => {
                setSubmitStatus('');
                setIsSubmitting(false);
            }, 3000);
        }, 1500);
    };

    const handleInputFocus = (e) => {
        e.target.parentElement.classList.add('focused');
    };

    const handleInputBlur = (e) => {
        e.target.parentElement.classList.remove('focused');
    };

    useEffect(() => {
        // Animate elements on mount
        const observerOptions = {
            threshold: 0.1,
            rootMargin: '0px 0px -50px 0px'
        };

        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('animate-in');
                }
            });
        }, observerOptions);

        // Observe contact cards
        document.querySelectorAll('.info-item').forEach((item, index) => {
            item.style.opacity = '0';
            item.style.transform = 'translateY(20px)';
            item.style.transition = `all 0.6s ease ${index * 0.1}s`;
            observer.observe(item);
        });

        return () => observer.disconnect();
    }, []);

    return (
        <main className="contact-content">
            {/* Header */}
            <div className="contact-header">
                <h1 className="contact-title">Get In Touch</h1>
                <p className="contact-subtitle">// Ready to start your fitness journey?</p>
            </div>

            {/* Main Contact Section */}
            <div className="contact-main">
                {/* Contact Form */}
                <div className="code-window form-window">
                    <div className="window-header">
                        <div className="window-button btn-red"></div>
                        <div className="window-button btn-yellow"></div>
                        <div className="window-button btn-green"></div>
                        <div className="window-title">contact.form</div>
                    </div>
                    <form className="contact-form" onSubmit={handleSubmit}>
                        <div className="form-group">
                            <label htmlFor="name" className="form-label">Your Name</label>
                            <input 
                                type="text" 
                                id="name" 
                                name="name" 
                                className="form-input" 
                                value={formData.name}
                                onChange={handleInputChange}
                                onFocus={handleInputFocus}
                                onBlur={handleInputBlur}
                                required 
                            />
                        </div>
                        
                        <div className="form-group">
                            <label htmlFor="email" className="form-label">Email Address</label>
                            <input 
                                type="email" 
                                id="email" 
                                name="email" 
                                className="form-input" 
                                value={formData.email}
                                onChange={handleInputChange}
                                onFocus={handleInputFocus}
                                onBlur={handleInputBlur}
                                required 
                            />
                        </div>
                        
                        <div className="form-group">
                            <label htmlFor="phone" className="form-label">Phone Number</label>
                            <input 
                                type="tel" 
                                id="phone" 
                                name="phone" 
                                className="form-input" 
                                value={formData.phone}
                                onChange={handleInputChange}
                                onFocus={handleInputFocus}
                                onBlur={handleInputBlur}
                                required 
                            />
                        </div>
                        
                        <div className="form-group">
                            <label htmlFor="service" className="form-label">Service Interest</label>
                            <select 
                                id="service" 
                                name="service" 
                                className="form-input"
                                value={formData.service}
                                onChange={handleInputChange}
                                onFocus={handleInputFocus}
                                onBlur={handleInputBlur}
                            >
                                <option value="">Select a service...</option>
                                <option value="personal-training">Personal Training</option>
                                <option value="group-classes">Group Classes</option>
                                <option value="nutrition-coaching">Nutrition Coaching</option>
                                <option value="online-programs">Online Programs</option>
                                <option value="corporate-wellness">Corporate Wellness</option>
                            </select>
                        </div>
                        
                        <div className="form-group">
                            <label htmlFor="message" className="form-label">Message</label>
                            <textarea 
                                id="message" 
                                name="message" 
                                className="form-textarea" 
                                placeholder="Tell us about your fitness goals..."
                                value={formData.message}
                                onChange={handleInputChange}
                                onFocus={handleInputFocus}
                                onBlur={handleInputBlur}
                            ></textarea>
                        </div>
                        
                        <button 
                            type="submit" 
                            className="form-button"
                            disabled={isSubmitting}
                            style={submitStatus === 'Message Sent! ✓' ? {
                                background: 'linear-gradient(135deg, #27ca3f, #00ff88)'
                            } : {}}
                        >
                            {submitStatus || 'Send Message'}
                        </button>
                    </form>
                </div>

                {/* Contact Information */}
                <div className="code-window">
                    <div className="window-header">
                        <div className="window-button btn-red"></div>
                        <div className="window-button btn-yellow"></div>
                        <div className="window-button btn-green"></div>
                        <div className="window-title">contact.info</div>
                    </div>
                    <div className="code-content contact-info">
                        <h3>Let's Connect</h3>
                        
                        <div className="info-item">
                            <div className="info-icon">📍</div>
                            <div className="info-text">
                                <strong>Location</strong>
                                123 Fitness Avenue<br />
                                Gym City, GC 12345
                            </div>
                        </div>
                        
                        <div className="info-item">
                            <div className="info-icon">📱</div>
                            <div className="info-text">
                                <strong>Phone</strong>
                                +1 (555) 123-4567
                            </div>
                        </div>

                        <div className="info-item">
                            <div className="info-icon">📧</div>
                            <div className="info-text">
                                <strong>Email</strong>
                                info@fitcore.com
                            </div>
                        </div>
                        
                        <div className="info-item">
                            <div className="info-icon">⏰</div>
                            <div className="info-text">
                                <strong>Hours</strong>
                                Mon-Sun: 5:00 AM - 11:00 PM
                            </div>
                        </div>
                        
                        <div className="info-item">
                            <div className="info-icon">🌐</div>
                            <div className="info-text">
                                <strong>Social Media</strong>
                                Follow us for daily motivation
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Map Section */}
            <div className="map-section">
                <div className="code-window map-window">
                    <div className="window-header">
                        <div className="window-button btn-red"></div>
                        <div className="window-button btn-yellow"></div>
                        <div className="window-button btn-green"></div>
                        <div className="window-title">location.map</div>
                    </div>
                    <div className="map-placeholder">
                        <div className="map-icon">🗺️</div>
                        <div className="map-text">
                            <strong>Find Us Here</strong><br />
                            Interactive map would be integrated here<br />
                            <em>123 Fitness Avenue, Gym City</em>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    );
};

export default Contact;