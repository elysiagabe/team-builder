import React, { useState } from 'react';
import './App.css';
import team from './team';
import TeamMembers from './Components/TeamMembers';
import TeamForm from './Components/TeamForm';

function App() {

  const [teamMembers, setTeamMembers] = useState(team);
  console.log(teamMembers);
  
  return (
    <div className="App">
      Goodbye
      <TeamMembers />
      <TeamForm />
    </div>
  );
}

export default App;
