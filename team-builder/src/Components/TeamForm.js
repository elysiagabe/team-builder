import React, { useState } from 'react';

const TeamForm = ({addTeamMember}) => {
    // console.log(addTeamMember)

    const [teamMember, setTeamMember] = useState({
        name: "",
        email: "",
        role: ""
    });

    const handleChange = e => {
        setTeamMember({...teamMember, [e.target.name]: e.target.value});
        //console.log(teamMember);
    }

    const submitTeamForm = e => {
        e.preventDefault();
        addTeamMember(teamMember);
        setTeamMember({name: "", email: "", role: ""})
    }

    return (
        <div>
            <h2>Add a New Team Member</h2>
            <form onSubmit={submitTeamForm}>
                <label htmlFor="name">Name</label>
                <input type="text" id="name" name="name" value={teamMember.name} onChange={handleChange}/>
                <label htmlFor="email">Email</label>
                <input type="email" id="email" name="email" value={teamMember.email} onChange={handleChange} />
                <label htmlFor="role">Role</label>
                <input type="text" id="role" name="role" value={teamMember.role} onChange={handleChange} />
                <button type="submit">Add to Team ></button>
            </form>
        </div>
    );
}

export default TeamForm;