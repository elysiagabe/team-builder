import React, { useState, useEffect } from 'react';

const TeamForm = ({addTeamMember, memberToEdit, setMemberToEdit, teamMembers}) => {
    // console.log(addTeamMember)
    // console.log(memberToEdit)
    //console.log(teamMembers);

    const [teamMember, setTeamMember] = useState({
        name: "",
        email: "",
        role: "",
    });

    const handleChange = e => {
        setTeamMember({...teamMember, [e.target.name]: e.target.value});
        console.log(teamMember);
    }

    useEffect(() => {
        // sync w/ memberToEdit...populate form with member's data to be edited
        console.log("I want to be edited:", memberToEdit.id)
        setTeamMember({...memberToEdit})
    }, [memberToEdit])
    


    const submitTeamForm = e => {
        e.preventDefault();
        if (memberToEdit.id > 0) {
            let newTeam = teamMembers.map(item => {
                return item.id === memberToEdit.id ? 
                    {...item,
                    ...item.name = teamMember.name,
                    ...item.email = teamMember.email,
                    ...item.role = teamMember.role} 
                    : item;
            });
            setMemberToEdit({name: "", email: "", role: ""})
        } else {
            addTeamMember(teamMember);
            setTeamMember({name: "", email: "", role: ""})
        }   
    }

    return (
        <div className="form-wrapper">
            
            <form onSubmit={submitTeamForm}>
                <h2>Become Part of the Team</h2>
                <div>
                    <label htmlFor="name">Name</label>
                    <input type="text" id="name" name="name" value={teamMember.name} onChange={handleChange}/>
                    <label htmlFor="email">Email</label>
                    <input type="email" id="email" name="email" value={teamMember.email} onChange={handleChange} />
                    <label htmlFor="role">Role</label>
                    <input type="text" id="role" name="role" value={teamMember.role} onChange={handleChange} />
                </div>
                <div>
                    <button type="submit">UPDATE TEAM ></button>
                </div>
            </form>
        </div>
    );
}

export default TeamForm;