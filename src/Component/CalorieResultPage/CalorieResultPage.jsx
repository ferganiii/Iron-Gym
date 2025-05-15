import React from 'react';
import { useLocation } from 'react-router-dom';
import bg from '../../assets/bg.jpg'; 

const CalorieResultPage = () => {
  const { state: result } = useLocation();

  if (!result) {
    return <div className="text-center text-white mt-10">No result to display.</div>;
  }

  return (
    <div
      className="min-h-screen text-white p-6 bg-cover bg-center relative"
      style={{ backgroundImage: `url(${bg})` }}
    >
    
      <div className="absolute inset-0 bg-black opacity-60"></div>

      <h3 className="text-4xl font-bold text-orange-600 text-center mb-28 relative mt-32">Your Daily Results</h3>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-5xl mx-auto text-lg relative">
      <div className="bg-[rgb(102,102,102,.3)] p-16 rounded-3xl shadow-lg">
          <div className="font-semi-bold text-2xl mb-6"><strong>Calories:</strong></div>
          <div className="text-3xl font-alkalami text-orange-600">{result.calories} kcal</div>
        </div>
        <div className="bg-[rgb(102,102,102,.3)] p-16 rounded-3xl shadow-lg">
          <div className="font-semi-bold text-2xl mb-6"><strong>Needed Calories:</strong></div>
          <div className="text-3xl font-alkalami text-orange-600">{result.neededCalories} kcal</div>
        </div>
        
        <div className="bg-[rgb(102,102,102,.3)] p-16 rounded-3xl shadow-lg">
          <div className="font-semi-bold text-2xl mb-6"><strong>Needed Water:</strong></div>
          <div className="text-3xl font-alkalami text-orange-600">{result.neededWater} L</div>
        </div>
        <div className="bg-[rgb(102,102,102,.3)] p-16 rounded-3xl shadow-lg">
          <div className="font-semi-bold text-2xl mb-6"><strong>Protein: (grams)</strong></div>
          <div className="text-3xl font-alkalami text-orange-600">{result.protein} g</div>
        </div>
        <div className="bg-[rgb(102,102,102,.3)] p-16 rounded-3xl shadow-lg">
          <div className="font-semi-bold text-2xl mb-6"><strong>Carbohydrates: (grams)</strong></div>
          <div className="text-3xl font-alkalami text-orange-600">{result.carbohydrates} g</div>
        </div>
        <div className="bg-[rgb(102,102,102,.3)] p-16 rounded-3xl shadow-lg">
          <div className="font-semi-bold text-2xl mb-6"><strong>Fats: (grams)</strong></div>
          <div className="text-3xl font-alkalami text-orange-600">{result.fats} g</div>
        </div>
      </div>
    </div>
  );
};

export default CalorieResultPage;

