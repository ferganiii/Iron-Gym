// src/Context/MuscleContext.js
import React, { createContext, useContext, useState } from 'react';

// إنشاء الـ Context
const MuscleContext = createContext();

// الـ Provider الذي يحتوي على `selectedMuscle` و `handleMuscleSelect`
export const MuscleProvider = ({ children }) => {
  const [selectedMuscle, setSelectedMuscle] = useState(null); // state للعضلة المحددة

  // دالة لتحديد العضلة
  const handleMuscleSelect = (muscle) => {
    setSelectedMuscle(muscle); // تحديث العضلة المحددة
    console.log('Muscle selected:', muscle); // تحقق من العمل
  };

  // سنمرر `selectedMuscle` و `handleMuscleSelect` عبر الـ Provider
  return (
    <MuscleContext.Provider value={{ selectedMuscle, handleMuscleSelect }}>
      {children}
    </MuscleContext.Provider>
  );
};

// دالة لاسترجاع الـ Context في أي مكون
export const useMuscleContext = () => useContext(MuscleContext);
