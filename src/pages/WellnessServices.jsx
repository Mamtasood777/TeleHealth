import React from "react";
import "../styles/WellnessServices.css";

const WellnessServices = () => {
    return (
        <div className="wellness-container">
            <h1 className="wellness-title">Wellness Services & Resources</h1>
            <p className="wellness-subtitle">
                Explore tips, videos, and professional guidance to improve your health.
            </p>

            <div className="content-grid">
                {/* Exercise Tips */}
                <div className="wellness-card">
                    <h2>🏃‍♂️ Exercise Tips</h2>
                    <ul>
                        <li>Do at least 30 minutes of moderate exercise daily.</li>
                        <li>Include a mix of cardio, strength training, and flexibility exercises.</li>
                        <li>Warm up for 5-10 minutes before workouts and cool down afterwards.</li>
                        <li>Stay consistent—small daily efforts compound over time.</li>
                    </ul>
                </div>

                {/* Diet Tips */}
                <div className="wellness-card">
                    <h2>🥗 Healthy Diet Tips</h2>
                    <ul>
                        <li>Eat a variety of fruits and vegetables every day.</li>
                        <li>Drink at least 8 glasses of water to stay hydrated.</li>
                        <li>Limit intake of processed foods, sugary drinks, and excessive oil.</li>
                        <li>Prioritize whole grains and lean proteins in your meals.</li>
                    </ul>
                </div>
            </div>

            {/* Video Section */}
            <div className="wellness-section">
                <h2>Featured Wellness Videos</h2>
                <div className="video-grid">
                    <div className="video-card">
                        <div className="video-wrapper">
                            <iframe
                                src="https://www.youtube.com/embed/9o0UPuDBM8M"
                                title="Wellness Video 1"
                                frameBorder="0"
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                allowFullScreen>
                            </iframe>
                        </div>
                        <h3>Daily Wellness Routine</h3>
                        <p>Simple habits to improve your physical and mental well-being every day.</p>
                    </div>

                    <div className="video-card">
                        <div className="video-wrapper">
                            <iframe
                                src="https://www.youtube.com/embed/2N0cRpuWz5U"
                                title="Wellness Video 2"
                                frameBorder="0"
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                allowFullScreen>
                            </iframe>
                        </div>
                        <h3>Nutrition Basics</h3>
                        <p>Understanding the fundamentals of a balanced diet for a healthier life.</p>
                    </div>
                </div>
            </div>

            {/* Coach & Dietitian Form */}
            <div className="wellness-card form-card">
                <h2> Contact Coach / Dietitian</h2>
                <p>Need personalized advice? Reach out to our experts.</p>

                <form className="wellness-form">
                    <div className="form-group">
                        <input type="text" placeholder="Your Name" required />
                    </div>
                    <div className="form-group">
                        <input type="email" placeholder="Your Email" required />
                    </div>

                    <div className="form-group">
                        <select required>
                            <option value="">Select Expert</option>
                            <option value="coach">Fitness Coach</option>
                            <option value="dietitian">Dietitian</option>
                        </select>
                    </div>

                    <div className="form-group">
                        <textarea placeholder="How can we help you?" rows="5" required></textarea>
                    </div>

                    <button type="submit">Send Message</button>
                </form>
            </div>
        </div>
    );
};

export default WellnessServices;
