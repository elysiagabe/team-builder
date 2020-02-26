import React, { useState } from 'react';
import './App.css';
import team from './team';
import TeamMembers from './Components/TeamMembers';
import TeamForm from './Components/TeamForm';
import Header from './Components/Header';

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
      <Header />
      <div className="team-wrapper">
        <TeamMembers teamMembers={teamMembers} />
        <TeamForm addTeamMember={addTeamMember} />
      </div>
    </div>
  );
}

export default App;
