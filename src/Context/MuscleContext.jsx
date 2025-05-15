import React, { createContext, useContext, useState } from 'react';
const MuscleContext = createContext();
export const MuscleProvider = ({ children }) => {
  const [selectedMuscle, setSelectedMuscle] = useState(null);
  const handleMuscleSelect = (muscle) => {
    setSelectedMuscle(muscle);
    console.log('Muscle selected:', muscle);
  };

  return (
    <MuscleContext.Provider value={{ selectedMuscle, handleMuscleSelect }}>
      {children}
    </MuscleContext.Provider>
  );
};
export const useMuscleContext = () => useContext(MuscleContext);
