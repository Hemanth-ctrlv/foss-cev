import React from 'react';
import './EventsTimeline.css';

const EventsTimeline = () => {
    return (
        <section className="timeline-section">
            <div className="timeline-left">
                <h2>Events Timeline</h2>
                <p>A chronological overview of our key activities and events throughout the academic year.</p>
            </div>

            <div className="timeline-right">
                <div className="timeline-container">
                    <div className="timeline-line"></div>

                    <div className="timeline-node">
                        <div className="node-circle">1</div>
                        <div className="node-content">
                            <h3>Hackathons</h3>
                            <p>Participate in and organize exciting coding competitions and hackathons.</p>
                        </div>
                    </div>

                    <div className="timeline-node">
                        <div className="node-circle">2</div>
                        <div className="node-content">
                            <h3>Workshops</h3>
                            <p>Learn new technologies, tools, and best practices through hands-on sessions.</p>
                        </div>
                    </div>

                    <div className="timeline-node">
                        <div className="node-circle">3</div>
                        <div className="node-content">
                            <h3>Open Source Contributions</h3>
                            <p>Contribute to existing projects or start your own open source initiatives.</p>
                        </div>
                    </div>

                    <div className="timeline-node">
                        <div className="node-circle">4</div>
                        <div className="node-content">
                            <h3>Community Events</h3>
                            <p>Join meetups, tech talks, and networking events for software enthusiasts.</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default EventsTimeline;
