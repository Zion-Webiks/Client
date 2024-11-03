import React, { useEffect, useState } from 'react';
import { getMissions, deleteMission, progressMission } from '../services/missionService';

interface Mission {
  _id: string;
  name: string;
  status: string;
  priority: string;
  description: string;
}

const MissionList: React.FC = () => {
  const [missions, setMissions] = useState<Mission[]>([]);

  useEffect(() => {
    const fetchMissions = async () => {
      const missions = await getMissions();
      setMissions(missions);
    };
    fetchMissions();
  }, []);

  const handleDelete = async (id: string) => {
    await deleteMission(id);
    setMissions(missions.filter(mission => mission._id !== id));
  };
  const handleProgress = async(id:string)=>{
    await progressMission(id);
    setMissions(await getMissions());
  }

  return (
    <div>
      <h2 style={{color:'red'}}>Missions</h2>
      <ul>
        {missions.map(mission => (
          <li key={mission._id} className={`${mission.status == "Pending" && "red-background" || mission.status =="In Progress" && "yellow-background"|| mission.status =="Completed" && "green-background"}`}>
           <div><h2>Name: {mission.name}</h2> <h4>Status: {mission.status}</h4><h4>Priority: ({mission.priority})</h4><h4>Description: {mission.description}</h4></div> 
            <div className='buttons-mission-div'>
              <button onClick={() => handleDelete(mission._id)}>Delete</button>
              {mission.status != "Completed" && <button onClick={() => handleProgress(mission._id)} className='progress-button'>Progress</button>}
         
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default MissionList;
