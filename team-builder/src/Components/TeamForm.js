import React from "react";

const TeamForm = () => {
    return (
        <div>
            <h2>Add a New Team Member</h2>
            <form>
                <label htmlFor="name">Name</label>
                <input type="text" id="name" name="name" value="firstname lastname" />
                <label htmlFor="email">Email</label>
                <input type="email" id="email" name="email" value="email@gmail.com" />
                <label htmlFor="role">Role</label>
                <input type="text" id="role" name="role" value="job title" />
                <button type="submit">Add to Team ></button>
            </form>
        </div>
    );
}

export default TeamForm;