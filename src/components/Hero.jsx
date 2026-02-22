import React from 'react';
import './Hero.css';

const Hero = () => {
    return (
        <section className="hero">
            <div className="hero-content">
                <h1>Empower innovation <br /> with FOSS Club CEV</h1>
                <p>A community of open-source enthusiasts advancing the spirit of collaborative software development.</p>
                <button className="join-btn" onClick={() => window.open("https://chat.whatsapp.com/KEUoSJnRl3jJ8TuEV0hl7h?mode=ac_t", "_blank")}>
                    Join Our Community
                </button>
            </div>
            <div className="hero-logo">
                <div className="logo-placeholder">
                    <img src="https://via.placeholder.com/150/0d8a34/1a1a1a?text=Logo" alt="FOSS Club Logo" className="logo-icon-img" />
                    <h2>FOSS Club</h2>
                    <p>CE VADAKARA</p>
                </div>
            </div>
        </section>
    );
};

export default Hero;
