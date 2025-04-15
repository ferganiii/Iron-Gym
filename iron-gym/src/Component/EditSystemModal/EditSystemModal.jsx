import React, { useState, useEffect } from 'react';
import axios from 'axios';

const EditSystemModal = ({ systemId, onClose }) => {
  const [name, setName] = useState('');
  const [day, setDay] = useState('');
  const [muscles, setMuscles] = useState('');
  const [exercises, setExercises] = useState('');

  useEffect(() => {
    const fetchSystem = async () => {
      const res = await axios.get(`https://your-api-url.com/api/systems/${systemId}`);
      const system = res.data;
      setName(system.name);
      setDay(system.day);
      setMuscles(system.muscles.join(', '));
      setExercises(system.exercises.join(', '));
    };
    
    fetchSystem();
  }, [systemId]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.put(`https://your-api-url.com/api/systems/${systemId}`, {
        name,
        day,
        muscles: muscles.split(','),
        exercises: exercises.split(','),
      });
      console.log('System updated:', res.data);
      onClose(); // Close the modal after updating
    } catch (error) {
      console.error('Error updating system:', error);
    }
  };

  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <h2>Edit System</h2>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="System Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
          <input
            type="text"
            placeholder="Day"
            value={day}
            onChange={(e) => setDay(e.target.value)}
            required
          />
          <input
            type="text"
            placeholder="Muscles (comma separated)"
            value={muscles}
            onChange={(e) => setMuscles(e.target.value)}
            required
          />
          <input
            type="text"
            placeholder="Exercises (comma separated)"
            value={exercises}
            onChange={(e) => setExercises(e.target.value)}
            required
          />
          <button type="submit">Update</button>
          <button type="button" onClick={onClose}>Close</button>
        </form>
      </div>
    </div>
  );
};

export default EditSystemModal;
