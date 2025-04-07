import React, { useEffect, useState, useContext } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import { UserContext } from '../../Context/UserContext';

export default function ExerciseDetails() {
  const { id } = useParams();
  const { token } = useContext(UserContext);
  const [exercise, setExercise] = useState(null);
  const [loading, setLoading] = useState(true);

  async function fetchExercise() {
    try {
      const res = await axios.get(`https://gym-production-8217.up.railway.app/api/exercise/${id}`, {
        headers: { Authorization: `Bearer ${token}` },
      });
      setExercise(res.data.docs);
    } catch (err) {
      console.error('Error fetching exercise details:', err);
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    fetchExercise();
  }, [id]);

  if (loading) return <p>Loading...</p>;
  if (!exercise) return <p>Exercise not found</p>;

  return (
    <div className="p-4">
      <h2 className="text-3xl font-bold mb-4">{exercise.name}</h2>
      <img 
        src={exercise.image} 
        alt={exercise.name} 
        className="w-full h-64 object-cover rounded mb-4"
      />
      <p><strong>Muscle Group:</strong> {exercise.muscleGroup?.name}</p>
      <p><strong>mistakes:</strong> {exercise.mistakes?.join(', ')}</p>
      <p><strong>Secondary Muscles:</strong> {exercise.secondaryMuscle?.join(', ')}</p>
      <p><strong>Target Muscles:</strong> {exercise.targetMuscle?.join(', ')}</p>
      <p><strong>Description:</strong> {exercise.description}</p>
      <video src={exercise.video}></video>
    </div>
  );
}
