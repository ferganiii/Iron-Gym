import React, { useContext, useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import axios from 'axios';
import { UserContext } from '../../Context/UserContext';

export default function ExerciseGuide() {
  const { muscleName } = useParams(); // الحصول على اسم العضلة من الـ URL
  const [exercises, setExercises] = useState([]);
  const [loading, setLoading] = useState(false);
  const { token } = useContext(UserContext);

  async function getExercises() {
    try {
      setLoading(true);

      const res = await axios.get('https://gym-production-8217.up.railway.app/api/exercise', {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      const filteredExercises = res.data.docs.filter(ex => {
        const muscleLower = muscleName.toLowerCase();
        return (
          ex.muscleGroup?.name?.toLowerCase() === muscleLower ||
          ex.primaryMuscle?.some(m => m?.toLowerCase() === muscleLower) ||
          ex.targetMuscle?.some(m => m?.toLowerCase() === muscleLower) ||
          ex.secondaryMuscle?.some(m => m?.toLowerCase() === muscleLower)
        );
      });

      setExercises(filteredExercises);
    } catch (error) {
      console.error('Error:', error.response?.data || error.message);
      setExercises([]); // إفراغ التمارين عند حدوث خطأ
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    if (muscleName) {
      getExercises();
    }
  }, [muscleName]);

  return (
    <div>
      <h2 className="text-3xl font-bold mb-4">Exercises for {muscleName}</h2>

      {loading ? (
        <p>Loading exercises...</p>
      ) : exercises.length === 0 ? (
        <p>No exercises found for {muscleName}. Try another muscle group.</p>
      ) : (
        <ul className="space-y-4">
         {exercises.map((exercise) => (
  <li key={exercise._id} className="p-4 border rounded shadow-sm hover:bg-gray-100 transition">
    <Link to={`/exercise/details/${exercise._id}`}>
      <h3 className="text-xl font-semibold">{exercise.name}</h3>
      <img 
        src={exercise.image} 
        alt={exercise.name}
        className="w-full h-48 object-cover mt-2 rounded"
      />
      <div className="mt-2">
        <h4 className="font-medium">Primary Muscle:</h4>
        <p>{exercise.muscleGroup?.name || exercise.primaryMuscle?.join(', ')}</p>
      </div>
    </Link>
  </li>
))}   
        </ul>
      )}
    </div>
  );
}
