import React from 'react';
import { useNavigate } from 'react-router-dom';

export default function MuscleMap() {
  const navigate = useNavigate();

  const handleMuscleClick = (muscleName) => {
    navigate(`/exercise/${muscleName}`); // التنقل إلى صفحة التمارين للعضلة
  };

  return (
    <div>
      <button onClick={() => handleMuscleClick('Biceps')} className='bg-orange-400 p-4'>Biceps</button>
      <button onClick={() => handleMuscleClick('Chest')} className='bg-orange-400 p-4'>Chest</button>
      <button onClick={() => handleMuscleClick('Back')} className='bg-orange-400 p-4'>Back</button>
      <button onClick={() => handleMuscleClick('Abs')} className='bg-orange-400 p-4'>Abs</button>
      {/* أضف المزيد من الأزرار حسب الحاجة */}
    </div>
  );
}
