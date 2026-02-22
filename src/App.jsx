import React from 'react';
import './App.css';

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
    return (
        <div className="app-container">
            <Hero />
            <About />
            <Activities />
            <EventsTimeline />
            <CompletedEvents />
            <CommunityBanner />
            <Gallery />
            <Team />
            <Footer />
        </div>
    );
}

export default App;
