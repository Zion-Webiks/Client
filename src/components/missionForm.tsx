import React, { useState } from 'react';
import { addMission } from '../services/missionService';

const MissionForm: React.FC<{ onAdd: () => void }> = ({ onAdd }) => {
  const [name, setName] = useState('');
  const [status, setStatus] = useState('Pending');
  const [priority, setPriority] = useState('Low');
  const [description, setDescription] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    await addMission({ name, status, priority, description });
    onAdd();
  };

  return (
    <form onSubmit={handleSubmit}>
      <input value={name} onChange={(e) => setName(e.target.value)} placeholder="Name" required />
      <select value={status} onChange={(e) => setStatus(e.target.value)}>
        <option>Pending</option>
        <option>In Progress</option>
        <option>Completed</option>
      </select>
      <select value={priority} onChange={(e) => setPriority(e.target.value)}>
        <option>Low</option>
        <option>Medium</option>
        <option>High</option>
      </select>
      <textarea value={description} onChange={(e) => setDescription(e.target.value)} placeholder="Description" required />
      <button type="submit">Add Mission</button>
    </form>
  );
};

export default MissionForm;
