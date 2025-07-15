import React, { useState, useEffect } from 'react';

const Nutrition = () => {
    const [formData, setFormData] = useState({
        weight: '',
        height: '',
        age: '',
        gender: 'male',
        activity: '1.2',
        goal: 'lose'
    });

    const [results, setResults] = useState({
        calories: 'Run calculation...',
        protein: 'Run calculation...',
        carbs: 'Run calculation...',
        fats: 'Run calculation...',
        bmr: 'Run calculation...'
    });

    const handleInputChange = (e) => {
        const { id, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [id]: value
        }));
    };

    const calculateMacros = () => {
        const weight = parseFloat(formData.weight);
        const height = parseFloat(formData.height);
        const age = parseFloat(formData.age);
        const gender = formData.gender;
        const activity = parseFloat(formData.activity);
        const goal = formData.goal;

        if (!weight || !height || !age) {
            alert('Please fill in all required fields.');
            return;
        }

        // Calculate BMR using Mifflin-St Jeor Equation
        let bmr;
        if (gender === 'male') {
            bmr = 10 * weight + 6.25 * height - 5 * age + 5;
        } else {
            bmr = 10 * weight + 6.25 * height - 5 * age - 161;
        }

        // Calculate TDEE
        let tdee = Math.round(bmr * activity);

        // Adjust calories based on goal
        let calories;
        if (goal === 'lose') {
            calories = tdee - 500; // 500 kcal deficit for weight loss
        } else if (goal === 'gain') {
            calories = tdee + 500; // 500 kcal surplus for muscle gain
        } else {
            calories = tdee; // Maintenance
        }

        // Calculate macronutrients (40% protein, 30% carbs, 30% fats for simplicity)
        const protein = Math.round((calories * 0.4) / 4); // 4 kcal per gram
        const carbs = Math.round((calories * 0.3) / 4); // 4 kcal per gram
        const fats = Math.round((calories * 0.3) / 9); // 9 kcal per gram

        // Update results
        setResults({
            calories: `${calories} kcal`,
            protein: `${protein} g`,
            carbs: `${carbs} g`,
            fats: `${fats} g`,
            bmr: `${Math.round(bmr)} kcal`
        });
    };

    useEffect(() => {
        // Animate elements on scroll
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

        // Observe meal plan cards and tip cards
        document.querySelectorAll('.meal-plan-card, .tip-card').forEach((item, index) => {
            item.style.opacity = '0';
            item.style.transform = 'translateY(20px)';
            item.style.transition = `all 0.6s ease ${index * 0.1}s`;
            observer.observe(item);
        });

        return () => observer.disconnect();
    }, []);

    return (
        <div className="nutrition">
            {/* Main Content */}
            <main className="main-content">
                {/* Page Header */}
                <div className="page-header">
                    <h1 className="page-title">Nutrition Hub</h1>
                    <p className="page-subtitle">Calculate macros, plan meals, fuel your transformation</p>
                </div>

                {/* Nutrition Calculator */}
                <section className="calculator-section">
                    <div className="code-window">
                        <div className="window-header">
                            <div className="window-button btn-red"></div>
                            <div className="window-button btn-yellow"></div>
                            <div className="window-button btn-green"></div>
                            <div className="window-title">macro_calculator.js</div>
                        </div>
                        <div className="calculator-content">
                            <div className="input-section">
                                <div className="input-group">
                                    <label className="input-label">weight =</label>
                                    <input 
                                        type="number" 
                                        className="input-field" 
                                        id="weight" 
                                        placeholder="70" 
                                        min="30" 
                                        max="200"
                                        value={formData.weight}
                                        onChange={handleInputChange}
                                    />
                                </div>
                                <div className="input-group">
                                    <label className="input-label">height =</label>
                                    <input 
                                        type="number" 
                                        className="input-field" 
                                        id="height" 
                                        placeholder="175" 
                                        min="100" 
                                        max="250"
                                        value={formData.height}
                                        onChange={handleInputChange}
                                    />
                                </div>
                                <div className="input-group">
                                    <label className="input-label">age =</label>
                                    <input 
                                        type="number" 
                                        className="input-field" 
                                        id="age" 
                                        placeholder="25" 
                                        min="15" 
                                        max="80"
                                        value={formData.age}
                                        onChange={handleInputChange}
                                    />
                                </div>
                                <div className="input-group">
                                    <label className="input-label">gender =</label>
                                    <select 
                                        className="input-field select-field" 
                                        id="gender"
                                        value={formData.gender}
                                        onChange={handleInputChange}
                                    >
                                        <option value="male">"male"</option>
                                        <option value="female">"female"</option>
                                    </select>
                                </div>
                                <div className="input-group">
                                    <label className="input-label">activity =</label>
                                    <select 
                                        className="input-field select-field" 
                                        id="activity"
                                        value={formData.activity}
                                        onChange={handleInputChange}
                                    >
                                        <option value="1.2">"sedentary"</option>
                                        <option value="1.375">"light"</option>
                                        <option value="1.55">"moderate"</option>
                                        <option value="1.725">"active"</option>
                                        <option value="1.9">"very_active"</option>
                                    </select>
                                </div>
                                <div className="input-group">
                                    <label className="input-label">goal =</label>
                                    <select 
                                        className="input-field select-field" 
                                        id="goal"
                                        value={formData.goal}
                                        onChange={handleInputChange}
                                    >
                                        <option value="lose">"weight_loss"</option>
                                        <option value="maintain">"maintenance"</option>
                                        <option value="gain">"muscle_gain"</option>
                                    </select>
                                </div>
                                <button className="calculate-btn" onClick={calculateMacros}>
                                    Execute Calculate()
                                </button>
                            </div>
                            
                            <div className="results-section">
                                <div className="result-item">
                                    <div className="result-label">// Daily Calories</div>
                                    <div className="result-value">{results.calories}</div>
                                </div>
                                <div className="result-item">
                                    <div className="result-label">// Protein (g)</div>
                                    <div className="result-value">{results.protein}</div>
                                </div>
                                <div className="result-item">
                                    <div className="result-label">// Carbs (g)</div>
                                    <div className="result-value">{results.carbs}</div>
                                </div>
                                <div className="result-item">
                                    <div className="result-label">// Fats (g)</div>
                                    <div className="result-value">{results.fats}</div>
                                </div>
                                <div className="result-item">
                                    <div className="result-label">// BMR</div>
                                    <div className="result-value">{results.bmr}</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Meal Plans */}
                <section className="meal-plans-section">
                    <h2 className="section-title">Optimized Meal Plans</h2>
                    <div className="meal-plans-grid">
                        <div className="meal-plan-card">
                            <div className="card-header">
                                <h3 className="card-title">Muscle Builder</h3>
                                <p className="card-subtitle">High protein for strength gains</p>
                            </div>
                            <div className="card-content">
                                <div className="macro-breakdown">
                                    <div className="macro-item">
                                        <div className="macro-label">Protein</div>
                                        <div className="macro-value">35%</div>
                                    </div>
                                    <div className="macro-item">
                                        <div className="macro-label">Carbs</div>
                                        <div className="macro-value">35%</div>
                                    </div>
                                    <div className="macro-item">
                                        <div className="macro-label">Fats</div>
                                        <div className="macro-value">30%</div>
                                    </div>
                                </div>
                                <ul className="meal-list">
                                    <li className="meal-item">
                                        <span className="meal-time">07:00</span>
                                        <span className="meal-description">Oatmeal with whey protein, banana, almond butter</span>
                                    </li>
                                    <li className="meal-item">
                                        <span className="meal-time">10:00</span>
                                        <span className="meal-description">Greek yogurt with mixed berries, chia seeds</span>
                                    </li>
                                    <li className="meal-item">
                                        <span className="meal-time">13:00</span>
                                        <span className="meal-description">Grilled chicken breast, quinoa, steamed broccoli</span>
                                    </li>
                                    <li className="meal-item">
                                        <span className="meal-time">16:00</span>
                                        <span className="meal-description">Protein shake with almond milk, peanut butter</span>
                                    </li>
                                    <li className="meal-item">
                                        <span className="meal-time">19:00</span>
                                        <span className="meal-description">Salmon, sweet potato, asparagus</span>
                                    </li>
                                    <li className="meal-item">
                                        <span className="meal-time">21:00</span>
                                        <span className="meal-description">Cottage cheese with walnuts, honey</span>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        
                        <div className="meal-plan-card">
                            <div className="card-header">
                                <h3 className="card-title">Fat Loss</h3>
                                <p className="card-subtitle">Calorie-controlled for weight loss</p>
                            </div>
                            <div className="card-content">
                                <div className="macro-breakdown">
                                    <div className="macro-item">
                                        <div className="macro-label">Protein</div>
                                        <div className="macro-value">40%</div>
                                    </div>
                                    <div className="macro-item">
                                        <div className="macro-label">Carbs</div>
                                        <div className="macro-value">30%</div>
                                    </div>
                                    <div className="macro-item">
                                        <div className="macro-label">Fats</div>
                                        <div className="macro-value">30%</div>
                                    </div>
                                </div>
                                <ul className="meal-list">
                                    <li className="meal-item">
                                        <span className="meal-time">07:00</span>
                                        <span className="meal-description">Egg white omelet with spinach, tomatoes</span>
                                    </li>
                                    <li className="meal-item">
                                        <span className="meal-time">10:00</span>
                                        <span className="meal-description">Apple slices with almond butter</span>
                                    </li>
                                    <li className="meal-item">
                                        <span className="meal-time">13:00</span>
                                        <span className="meal-description">Turkey breast, mixed greens salad, olive oil dressing</span>
                                    </li>
                                    <li className="meal-item">
                                        <span className="meal-time">16:00</span>
                                        <span className="meal-description">Protein bar, black coffee</span>
                                    </li>
                                    <li className="meal-item">
                                        <span className="meal-time">19:00</span>
                                        <span className="meal-description">Grilled cod, zucchini noodles, lemon</span>
                                    </li>
                                    <li className="meal-item">
                                        <span className="meal-time">21:00</span>
                                        <span className="meal-description">Casein protein shake with water</span>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        
                        <div className="meal-plan-card">
                            <div className="card-header">
                                <h3 className="card-title">Maintenance</h3>
                                <p className="card-subtitle">Balanced for sustainable health</p>
                            </div>
                            <div className="card-content">
                                <div className="macro-breakdown">
                                    <div className="macro-item">
                                        <div className="macro-label">Protein</div>
                                        <div className="macro-value">30%</div>
                                    </div>
                                    <div className="macro-item">
                                        <div className="macro-label">Carbs</div>
                                        <div className="macro-value">40%</div>
                                    </div>
                                    <div className="macro-item">
                                        <div className="macro-label">Fats</div>
                                        <div className="macro-value">30%</div>
                                    </div>
                                </div>
                                <ul className="meal-list">
                                    <li className="meal-item">
                                        <span className="meal-time">07:00</span>
                                        <span className="meal-description">Whole grain toast, avocado, poached eggs</span>
                                    </li>
                                    <li className="meal-item">
                                        <span className="meal-time">10:00</span>
                                        <span className="meal-description">Handful of almonds, orange</span>
                                    </li>
                                    <li className="meal-item">
                                        <span className="meal-time">13:00</span>
                                        <span className="meal-description">Lean beef patty, brown rice, mixed vegetables</span>
                                    </li>
                                    <li className="meal-item">
                                        <span className="meal-time">16:00</span>
                                        <span className="meal-description">Hummus with carrot and celery sticks</span>
                                    </li>
                                    <li className="meal-item">
                                        <span className="meal-time">19:00</span>
                                        <span className="meal-description">Baked chicken thigh, couscous, green beans</span>
                                    </li>
                                    <li className="meal-item">
                                        <span className="meal-time">21:00</span>
                                        <span className="meal-description">Greek yogurt with granola</span>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Nutrition Tips */}
                <section className="tips-section">
                    <h2 className="section-title">Nutrition Tips</h2>
                    <div className="tips-grid">
                        <div className="tip-card">
                            <div className="tip-icon">🥛</div>
                            <h3 className="tip-title">Stay Hydrated</h3>
                            <p className="tip-description">Drink at least 2-3 liters of water daily to support metabolism, recovery, and overall health.</p>
                        </div>
                        <div className="tip-card">
                            <div className="tip-icon">🍗</div>
                            <h3 className="tip-title">Prioritize Protein</h3>
                            <p className="tip-description">Aim for 1.6-2.2g of protein per kg of body weight to support muscle repair and growth.</p>
                        </div>
                        <div className="tip-card">
                            <div className="tip-icon">🥕</div>
                            <h3 className="tip-title">Eat Whole Foods</h3>
                            <p className="tip-description">Focus on minimally processed foods like vegetables, fruits, lean meats, and whole grains for optimal nutrition.</p>
                        </div>
                    </div>
                </section>
            </main>
        </div>
    );
};

export default Nutrition;