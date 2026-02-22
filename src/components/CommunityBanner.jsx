import React from 'react';
import './CommunityBanner.css';

const CommunityBanner = () => {
    return (
        <section className="community-banner-section">
            <div className="join-heading">
                <a href="https://chat.whatsapp.com/KEUoSJnRl3jJ8TuEV0hl7h?mode=ac_t" target='_blank'><h2>Join Our Community</h2></a>
            </div>
            <div className="scrolling-banner">
                <div className="scrolling-text">
                    <span>FOSS Club CEV is a community of open source enthusiasts advancing the spirit of collaborative software development</span>
                    <span>FOSS Club CEV is a community of open source enthusiasts advancing the spirit of collaborative software development</span>
                    <span>FOSS Club CEV is a community of open source enthusiasts advancing the spirit of collaborative software development</span>
                </div>
            </div>
        </section>
    );
};

export default CommunityBanner;
