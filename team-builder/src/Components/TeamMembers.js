import React from "react";
import Icon from '../Assets/edit-icon.png';

const TeamMembers = ({teamMembers, editTeamMember}) => {
    // console.log(editTeamMember);

    return (
        <>
            <h2>Meet the Team</h2>
            <div className="team">
                {teamMembers.map(teamMember => (
                    <div className="team-card" key={teamMember.id}>
                        <img className="team-img" src="https://images.unsplash.com/photo-1582733979005-fffe0365874d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80" alt="smiling person" />
                        <div>
                            <h3>{teamMember.name}</h3>
                            <button onClick={() => editTeamMember(teamMember)} className="edit-button"><img className="edit-icon" src={Icon} alt="edit"/></button>
                        </div>
                        <p>{teamMember.role}</p>
                        <a href={"mailto: " + teamMember.email} className="email">Say Hello: {teamMember.email}</a>
                    </div>
                ))}
            </div>
        </>
    )
}

export default TeamMembers;