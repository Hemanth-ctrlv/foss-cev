import React from 'react';
import './Gallery.css';

const Gallery = () => {
    const images = [
        { id: 1, caption: 'HackDay 2023' },
        { id: 2, caption: 'UI/UX' },
        { id: 3, caption: 'FOSSMeet NIT Calicut' },
        { id: 4, caption: 'GIT WORKSHOP' },
        { id: 5, caption: 'FOSS DAY 2022' },
        { id: 6, caption: 'Alumni Interaction' },
    ];

    return (
        <section className="gallery">
            <div className="gallery-header">
                <h2>FOSS Club CEV Event <br /> Gallery</h2>
            </div>

            <div className="gallery-grid">
                {images.map((img) => (
                    <div key={img.id} className="gallery-item">
                        <div className="gallery-img-placeholder">Image</div>
                        <p className="caption">{img.caption}</p>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Gallery;
