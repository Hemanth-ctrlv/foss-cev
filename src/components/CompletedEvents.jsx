import React from 'react';
import './CompletedEvents.css';

const CompletedEvents = () => {
    return (
        <section className="completed-events">
            <div className="events-header">
                <h2>Events we've Completed</h2>
                <p>A look back at our successful initiatives and workshops.</p>
            </div>

            <div className="events-grid">
                <div className="event-card">
                    <div className="event-info">
                        <h3>Data Analytics Workshop</h3>
                        <p>Learn the fundamentals of data analysis with hands-on exercises and real-world datasets.</p>
                    </div>
                    <div className="event-footer">
                        <span className="badge">Free</span>
                    </div>
                </div>

                <div className="event-card">
                    <div className="event-info">
                        <h3>Hallows Of Hacking</h3>
                        <p>A month-long celebration of open source software. Contribute and earn swags.</p>
                    </div>
                    <div className="event-footer">
                        <span className="badge">Free</span>
                    </div>
                </div>

                <div className="event-card">
                    <div className="event-info">
                        <h3>HackDay2026</h3>
                        <p>Our annual 24-hour hackathon where students build innovative software solutions.</p>
                    </div>
                    <div className="event-footer">
                        <span className="badge">Free</span>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default CompletedEvents;
