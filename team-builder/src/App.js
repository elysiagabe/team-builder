import React, { useState } from 'react';
import './App.css';
import team from './team';
import TeamMembers from './Components/TeamMembers';
import TeamForm from './Components/TeamForm';
import Header from './Components/Header';

function App() {

  const [teamMembers, setTeamMembers] = useState(team);
  // console.log(teamMembers);

  const [memberToEdit, setMemberToEdit] = useState({
    name: "",
    email: "",
    role: ""
});

  const addTeamMember = teamMember => {
    const newTeamMember = {
      id: Date.now(),
      name: teamMember.name,
      email: teamMember.email,
      role: teamMember.role
    };
    setTeamMembers([...teamMembers, newTeamMember]);
  }

  const editTeamMember = teamMember => {
    setMemberToEdit(teamMember);
    //console.log(memberToEdit);
  }
  
  return (
    <div className="App">
      <Header />
      <TeamMembers teamMembers={teamMembers} editTeamMember={editTeamMember}/>
      <TeamForm addTeamMember={addTeamMember} memberToEdit={memberToEdit} setMemberToEdit={setMemberToEdit} teamMembers={teamMembers} />
    </div>
  );
}

export default App;
