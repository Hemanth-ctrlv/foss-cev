import React from 'react';
import './About.css';

const About = () => {
    return (
        <section className="about">
            <div className="about-header">
                <h2>About FOSS Club CEV</h2>
                <p>A community of open-source enthusiasts advancing the spirit of collaborative software development.</p>
            </div>

            <div className="about-grid">
                <div className="about-item">
                    <h3>Mission Statement</h3>
                    <p>To cultivate a culture of open-source contribution and peer-to-peer learning.</p>
                </div>
                <div className="about-item">
                    <h3>Collaborative Learning</h3>
                    <p>We work on real-world projects, share knowledge, and build together.</p>
                </div>
                <div className="about-item">
                    <h3>Open-Source Advocacy</h3>
                    <p>Championing the use and development of free and open-source software.</p>
                </div>
            </div>
        </section>
    );
};

export default About;
