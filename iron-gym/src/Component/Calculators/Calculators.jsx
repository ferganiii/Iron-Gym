import React, { useState } from "react";

export default function Calculators() {
  const [activeTab, setActiveTab] = useState("calorie");

  return (
    <div className="bg-gray-900 text-white min-h-screen flex flex-col items-center justify-center p-6">
      <h1 className="text-4xl sm:text-5xl font-bold mb-6">Fitness Calculators</h1>
      <p className="text-lg text-gray-300 text-center max-w-2xl">
        Use our calculators to estimate your daily calorie intake, BMI, and water needs!
      </p>

      {/* 🔥 أزرار التبويبات 🔥 */}
      <div className="mt-10 flex space-x-4">
        <button
          className={`py-2 px-4 rounded-lg text-lg transition-all ${
            activeTab === "calorie" ? "bg-orange-500" : "bg-gray-700"
          }`}
          onClick={() => setActiveTab("calorie")}
        >
          Calorie Calculator
        </button>
        <button
          className={`py-2 px-4 rounded-lg text-lg transition-all ${
            activeTab === "bmi" ? "bg-orange-500" : "bg-gray-700"
          }`}
          onClick={() => setActiveTab("bmi")}
        >
          BMI Calculator
        </button>
        <button
          className={`py-2 px-4 rounded-lg text-lg transition-all ${
            activeTab === "water" ? "bg-orange-500" : "bg-gray-700"
          }`}
          onClick={() => setActiveTab("water")}
        >
          Water Intake Calculator
        </button>
      </div>

      {/* 🔥 عرض الحاسبة المختارة 🔥 */}
      <div className="mt-6 w-full max-w-lg bg-gray-800 p-6 rounded-lg">
        {activeTab === "calorie" && <CalorieCalculator />}
        {activeTab === "bmi" && <BMICalculator />}
        {activeTab === "water" && <WaterIntakeCalculator />}
      </div>
    </div>
  );
}

/* 🔥 مكونات الحاسبات الفرعية 🔥 */

// ✅ حاسبة السعرات
function CalorieCalculator() {
  const [weight, setWeight] = useState("");
  const [calories, setCalories] = useState(null);

  const calculateCalories = () => {
    if (!weight) return;
    setCalories(weight * 30);
  };

  return (
    <div className="text-center">
      <h2 className="text-2xl font-bold mb-4">Calorie Calculator</h2>
      <input
        type="number"
        placeholder="Enter weight (kg)"
        className="p-2 bg-gray-700 text-white rounded mb-4 w-full"
        value={weight}
        onChange={(e) => setWeight(e.target.value)}
      />
      <button onClick={calculateCalories} className="bg-blue-500 px-4 py-2 rounded">
        Calculate
      </button>
      {calories && <p className="mt-2">Estimated Calories: {calories} kcal/day</p>}
    </div>
  );
}

// ✅ حاسبة BMI
function BMICalculator() {
  const [weight, setWeight] = useState("");
  const [height, setHeight] = useState("");
  const [bmi, setBmi] = useState(null);

  const calculateBMI = () => {
    if (!weight || !height) return;
    const heightInMeters = height / 100;
    setBmi((weight / (heightInMeters * heightInMeters)).toFixed(2));
  };

  return (
    <div className="text-center">
      <h2 className="text-2xl font-bold mb-4">BMI Calculator</h2>
      <input
        type="number"
        placeholder="Weight (kg)"
        className="p-2 bg-gray-700 text-white rounded mb-2 w-full"
        value={weight}
        onChange={(e) => setWeight(e.target.value)}
      />
      <input
        type="number"
        placeholder="Height (cm)"
        className="p-2 bg-gray-700 text-white rounded mb-4 w-full"
        value={height}
        onChange={(e) => setHeight(e.target.value)}
      />
      <button onClick={calculateBMI} className="bg-blue-500 px-4 py-2 rounded">
        Calculate
      </button>
      {bmi && <p className="mt-2">Your BMI: {bmi}</p>}
    </div>
  );
}

// ✅ حاسبة شرب المياه
function WaterIntakeCalculator() {
  const [weight, setWeight] = useState("");
  const [waterIntake, setWaterIntake] = useState(null);

  const calculateWaterIntake = () => {
    if (!weight) return;
    setWaterIntake((weight * 0.033).toFixed(2));
  };

  return (
    <div className="text-center">
      <h2 className="text-2xl font-bold mb-4">Water Intake Calculator</h2>
      <input
        type="number"
        placeholder="Enter weight (kg)"
        className="p-2 bg-gray-700 text-white rounded mb-4 w-full"
        value={weight}
        onChange={(e) => setWeight(e.target.value)}
      />
      <button onClick={calculateWaterIntake} className="bg-blue-500 px-4 py-2 rounded">
        Calculate
      </button>
      {waterIntake && <p className="mt-2">Recommended Water Intake: {waterIntake} liters/day</p>}
    </div>
  );
}
