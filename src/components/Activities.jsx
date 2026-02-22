import React from 'react';
import './Activities.css';

const Activities = () => {
    return (
        <section className="activities">
            <div className="activities-header">
                <h2>Activities / What We Do</h2>
                <p>A community of open-source enthusiasts advancing the spirit of collaborative software development.</p>
            </div>

            <div className="activities-grid">
                <div className="activity-item">
                    <h3>Hackathons</h3>
                    <p>Participate in and organize exciting coding competitions and hackathons.</p>
                </div>
                <div className="activity-item">
                    <h3>Workshops</h3>
                    <p>Learn new technologies, tools, and best practices through hands-on sessions.</p>
                </div>
                <div className="activity-item">
                    <h3>Open Source Contributions</h3>
                    <p>Contribute to existing projects or start your own open source initiatives.</p>
                </div>
                <div className="activity-item">
                    <h3>Community Events</h3>
                    <p>Join meetups, tech talks, and networking events for software enthusiasts.</p>
                </div>
            </div>
        </section>
    );
};

export default Activities;
