import React from "react";

const TeamMembers = ({teamMembers}) => {
    console.log(teamMembers);
    return (
        <div>
            {teamMembers.map(teamMember => (
                <div key={teamMember.id}>
                    <h2>{teamMember.name}</h2>
                    <h3><strong>Role:</strong> {teamMember.role}</h3>
                    <p>Say hello: {teamMember.email}</p>
                </div>
            ))}
        </div>
    )
}

export default TeamMembers;