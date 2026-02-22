import React from 'react';
import './Gallery.css';

const Gallery = () => {
    const images = [
        { id: 1, caption: 'HackDay2026' },
        { id: 2, caption: 'Hallows of Hacking' },
        { id: 3, caption: 'AI & Her' },
        { id: 4, caption: 'sit & git' },
        { id: 5, caption: 'FOSS Corner' },
        { id: 6, caption: 'Intro to FOSS' },
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
