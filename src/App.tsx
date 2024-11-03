import React, { useState } from 'react';
import MissionList from './components/missionList';
import MissionForm from './components/missionForm';

const App: React.FC = () => {
  const [updateList, setUpdateList] = useState(false);

  const refreshMissions = () => {
    setUpdateList(!updateList);
  };

  return (
    <div>
      <h1>Military Operations Dashboard</h1>
      <MissionForm onAdd={refreshMissions} />
      <MissionList key={updateList ? 1 : 0} />
    </div>
  );
};

export default App;
