import React from 'react';
import './Team.css';

const Team = () => {
    const teamMembers = [
        { id: 1, name: 'Rishnu lal' }, { id: 2, name: 'Hussain huzefa' }, { id: 3, name: 'Devapriya' }, { id: 4, name: 'Diya' },
        { id: 5, name: 'Vikram' }, { id: 6, name: 'Neha' }, { id: 7, name: 'Arjun' }, { id: 8, name: 'Kiara' },
        { id: 9, name: 'Kabir' }, { id: 10, name: 'Isha' }, { id: 11, name: 'Shaurya' }, { id: 12, name: 'Myra' }
    ];

    return (
        <section className="team">
            <div className="team-header">
                <h2>Meet our team</h2>
            </div>

            <div className="team-grid">
                {teamMembers.map((member) => (
                    <div key={member.id} className="team-member">
                        <div className="member-img-placeholder">Image</div>
                        <p className="member-name">{member.name}</p>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Team;
