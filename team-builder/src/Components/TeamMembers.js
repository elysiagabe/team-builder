import React from "react";

const TeamMembers = ({teamMembers}) => {
    console.log(teamMembers);
    return (
        <div>
            <h2>Meet the Team</h2>
            {teamMembers.map(teamMember => (
                <div key={teamMember.id}>
                    <h3>{teamMember.name}</h3>
                    <h4><strong>Role:</strong> {teamMember.role}</h4>
                    <p>Say hello: {teamMember.email}</p>
                </div>
            ))}
        </div>
    )
}

export default TeamMembers;