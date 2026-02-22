import React, { useEffect } from 'react';
import './App.css';
import AOS from 'aos';
import 'aos/dist/aos.css';

import Hero from './components/Hero';
import About from './components/About';
import Activities from './components/Activities';
import EventsTimeline from './components/EventsTimeline';
import CompletedEvents from './components/CompletedEvents';
import CommunityBanner from './components/CommunityBanner';
import Gallery from './components/Gallery';
import Team from './components/Team';
import Footer from './components/Footer';

function App() {
    useEffect(() => {
        AOS.init({
            duration: 800,
            once: true,
            offset: 100,
        });
    }, []);

    return (
        <div className="app-container">
            <div data-aos="fade-up"><Hero /></div>
            <div data-aos="fade-up"><About /></div>
            <div data-aos="fade-up"><Activities /></div>
            <div data-aos="fade-up"><EventsTimeline /></div>
            <div data-aos="fade-up"><CompletedEvents /></div>
            <div data-aos="fade-up"><CommunityBanner /></div>
            <div data-aos="fade-up"><Gallery /></div>
            <div data-aos="fade-up"><Team /></div>
            <div data-aos="fade-up"><Footer /></div>
        </div>
    );
}

export default App;
