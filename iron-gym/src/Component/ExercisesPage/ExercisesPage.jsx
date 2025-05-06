import React from 'react';
import ExerciseGuide from '../ExerciseGuide/ExerciseGuide';
import MuscleMap from '../MuscleMap/MuscleMap';
import { useMuscleContext } from '../../Context/MuscleContext';

export default function ExercisesPage() {
  const { selectedMuscle } = useMuscleContext(); 

  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold mb-6">Choose a Muscle Group</h1>
      
      <MuscleMap /> 

      {selectedMuscle && (
        <>
          <h2 className="text-2xl font-semibold mt-6">Exercises for {selectedMuscle}</h2>
          <ExerciseGuide selectedMuscle={selectedMuscle} />
        </>
      )}
    </div>
  );
}
