import React, { useState, useEffect, useContext } from 'react';
import axios from 'axios';
import { useQuery } from '@tanstack/react-query';
import { UserContext } from '../../Context/UserContext';

const CreateSystemModal = () => {
  const [name, setName] = useState('');
  const [day, setDay] = useState('');
  const [muscles, setMuscles] = useState('');
  const [muscleName, setMuscleName] = useState('');
  const [selectedExercises, setSelectedExercises] = useState([]);

  const { token } = useContext(UserContext);

  const {
    data: allExercises,
    isLoading,
    isError,
  } = useQuery({
    queryKey: ['all-exercises'],
    queryFn: async () => {
      const res = await axios.get('https://gym-production-8217.up.railway.app/api/exercise', {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      return res.data.docs;
    },
  });

  const filteredExercises = allExercises?.filter((ex) => {
    const muscle = muscleName.toLowerCase();
    return (
      ex.muscleGroup?.name?.toLowerCase() === muscle ||
      ex.primaryMuscle?.some((m) => m?.toLowerCase() === muscle) ||
      ex.targetMuscle?.some((m) => m?.toLowerCase() === muscle) ||
      ex.secondaryMuscle?.some((m) => m?.toLowerCase() === muscle)
    );
  });

  const handleCheckboxChange = (exerciseId) => {
    if (selectedExercises.includes(exerciseId)) {
      setSelectedExercises(selectedExercises.filter((id) => id !== exerciseId));
    } else {
      setSelectedExercises([...selectedExercises, exerciseId]);
    }
  };

  async function handleSubmit(e) {
    e.preventDefault();
    try {
    const {data} = await axios.post(
        'https://gym-production-8217.up.railway.app/api/brosplit',
        {
          name,
          day,
          muscles: muscles.split(',').map((m) => m.trim()),
          exercises: selectedExercises,
        },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      console.log(data.docs);
      
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <div className="modal-overlay">
      <form className="max-w-sm mx-auto" onSubmit={handleSubmit}>
        <input
          placeholder="System Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          type="text"
          className="block w-full p-4 mb-3 bg-slate-400"
        />

        <input
          placeholder="Day"
          value={day}
          onChange={(e) => setDay(e.target.value)}
          type="text"
          className="block w-full p-2.5 mb-3 bg-slate-400"
        />

        <input
          placeholder="Muscle(s) (comma separated)"
          value={muscles}
          onChange={(e) => setMuscles(e.target.value)}
          type="text"
          className="block w-full p-2.5 mb-3 bg-slate-400"
        />

        <input
          placeholder="Search Muscle (e.g. Chest)"
          value={muscleName}
          onChange={(e) => setMuscleName(e.target.value)}
          type="text"
          className="block w-full p-2.5 mb-3 bg-slate-400"
        />

        {isLoading ? (
          <p>Loading exercises...</p>
        ) : (
          <div className="mb-5 max-h-64 overflow-y-auto bg-slate-700 p-2 rounded">
            {filteredExercises?.length ? (
              filteredExercises.map((ex) => (
                <label key={ex._id} className="block text-orange-400">
                  <input
                    type="checkbox"
                    value={ex._id}
                    checked={selectedExercises.includes(ex._id)}
                    onChange={() => handleCheckboxChange(ex._id)}
                    className="accent-orange-500 w-5 h-5 mr-2"
                  />
                  <span className="ml-2">{ex.name}</span>
                </label>
              ))
            ) : (
              <p className="text-gray-400">No exercises found for this muscle</p>
            )}
          </div>
        )}

        <button type="submit" className="bg-orange-400 p-4 mt-3 rounded text-white w-full">
          Create
        </button>
      </form>
    </div>
  );
};

export default CreateSystemModal;
