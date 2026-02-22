import React from 'react';
import './Team.css';

const Team = () => {
    const teamMembers = [
        { id: 1, name: 'Rishnu lal' }, { id: 2, name: 'Hussain huzefa' }, { id: 3, name: 'Devapriya' }, { id: 4, name: 'Rida Waseem' },
        { id: 5, name: 'Adhi prajeesh' }, { id: 6, name: 'Lakshmi reji suresh' }, { id: 7, name: 'Aswandha RJ' }, { id: 8, name: 'sayanth p' },
        { id: 9, name: 'Muhammed Aswlah' }, { id: 10, name: 'Ananthanarayanan m' }, { id: 11, name: 'muhammed shabaz' }, { id: 12, name: 'Fathima P' },
        { id: 13, name: 'Hemanth Sudhan' }, { id: 14, name: 'Srevan s' }, { id: 15, name: 'sadra sunil' }, { id: 16, name: 'Anvar sadth' },
        { id: 17, name: 'Roshith krishna' }, { id: 18, name: 'Karthik C' }, { id: 19, name: 'MUhammed Sinan AP' },
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
