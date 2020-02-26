import React, { useState } from 'react';
import './App.css';
import team from './team';
import TeamMembers from './Components/TeamMembers';
import TeamForm from './Components/TeamForm';

function App() {

  const [teamMembers, setTeamMembers] = useState(team);
  console.log(teamMembers);

  const addTeamMember = teamMember => {
    const newTeamMember = {
      id: Date.now(),
      name: teamMember.name,
      email: teamMember.email,
      role: teamMember.role
    };
    setTeamMembers([...teamMembers, newTeamMember]);
  }
  
  return (
    <div className="App">
      Goodbye
      <TeamMembers teamMembers={teamMembers} />
      <TeamForm addTeamMember={addTeamMember} />
    </div>
  );
}

export default App;
