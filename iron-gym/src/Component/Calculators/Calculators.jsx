// import React, { useState } from "react";

// export default function Calculators() {
//   const [activeTab, setActiveTab] = useState("calorie");

//   return (
//     <div className="bg-gray-900 text-white min-h-screen flex flex-col items-center justify-center p-6">
//       <h1 className="text-4xl sm:text-5xl font-bold mb-6">Fitness Calculators</h1>
//       <p className="text-lg text-gray-300 text-center max-w-2xl">
//         Use our calculators to estimate your daily calorie intake, BMI, and water needs!
//       </p>

//       {/* 🔥 أزرار التبويبات 🔥 */}
//       <div className="mt-10 flex space-x-4">
//         <button
//           className={`py-2 px-4 rounded-lg text-lg transition-all ${
//             activeTab === "calorie" ? "bg-orange-500" : "bg-gray-700"
//           }`}
//           onClick={() => setActiveTab("calorie")}
//         >
//           Calorie Calculator
//         </button>
//         <button
//           className={`py-2 px-4 rounded-lg text-lg transition-all ${
//             activeTab === "bmi" ? "bg-orange-500" : "bg-gray-700"
//           }`}
//           onClick={() => setActiveTab("bmi")}
//         >
//           BMI Calculator
//         </button>
//         <button
//           className={`py-2 px-4 rounded-lg text-lg transition-all ${
//             activeTab === "water" ? "bg-orange-500" : "bg-gray-700"
//           }`}
//           onClick={() => setActiveTab("water")}
//         >
//           Water Intake Calculator
//         </button>
//       </div>

//       {/* 🔥 عرض الحاسبة المختارة 🔥 */}
//       <div className="mt-6 w-full max-w-lg bg-gray-800 p-6 rounded-lg">
//         {activeTab === "calorie" && <CalorieCalculator />}
//         {activeTab === "bmi" && <BMICalculator />}
//         {activeTab === "water" && <WaterIntakeCalculator />}
//       </div>
//     </div>
//   );
// }

// /* 🔥 مكونات الحاسبات الفرعية 🔥 */

// // ✅ حاسبة السعرات
// function CalorieCalculator() {
//   const [weight, setWeight] = useState("");
//   const [calories, setCalories] = useState(null);

//   const calculateCalories = () => {
//     if (!weight) return;
//     setCalories(weight * 30);
//   };

//   return (
//     <div className="text-center">
//       <h2 className="text-2xl font-bold mb-4">Calorie Calculator</h2>
//       <input
//         type="number"
//         placeholder="Enter weight (kg)"
//         className="p-2 bg-gray-700 text-white rounded mb-4 w-full"
//         value={weight}
//         onChange={(e) => setWeight(e.target.value)}
//       />
//       <button onClick={calculateCalories} className="bg-blue-500 px-4 py-2 rounded">
//         Calculate
//       </button>
//       {calories && <p className="mt-2">Estimated Calories: {calories} kcal/day</p>}
//     </div>
//   );
// }

// // ✅ حاسبة BMI
// function BMICalculator() {
//   const [weight, setWeight] = useState("");
//   const [height, setHeight] = useState("");
//   const [bmi, setBmi] = useState(null);

//   const calculateBMI = () => {
//     if (!weight || !height) return;
//     const heightInMeters = height / 100;
//     setBmi((weight / (heightInMeters * heightInMeters)).toFixed(2));
//   };

//   return (
//     <div className="text-center">
//       <h2 className="text-2xl font-bold mb-4">BMI Calculator</h2>
//       <input
//         type="number"
//         placeholder="Weight (kg)"
//         className="p-2 bg-gray-700 text-white rounded mb-2 w-full"
//         value={weight}
//         onChange={(e) => setWeight(e.target.value)}
//       />
//       <input
//         type="number"
//         placeholder="Height (cm)"
//         className="p-2 bg-gray-700 text-white rounded mb-4 w-full"
//         value={height}
//         onChange={(e) => setHeight(e.target.value)}
//       />
//       <button onClick={calculateBMI} className="bg-blue-500 px-4 py-2 rounded">
//         Calculate
//       </button>
//       {bmi && <p className="mt-2">Your BMI: {bmi}</p>}
//     </div>
//   );
// }

// // ✅ حاسبة شرب المياه
// function WaterIntakeCalculator() {
//   const [weight, setWeight] = useState("");
//   const [waterIntake, setWaterIntake] = useState(null);

//   const calculateWaterIntake = () => {
//     if (!weight) return;
//     setWaterIntake((weight * 0.033).toFixed(2));
//   };

//   return (
//     <div className="text-center">
//       <h2 className="text-2xl font-bold mb-4">Water Intake Calculator</h2>
//       <input
//         type="number"
//         placeholder="Enter weight (kg)"
//         className="p-2 bg-gray-700 text-white rounded mb-4 w-full"
//         value={weight}
//         onChange={(e) => setWeight(e.target.value)}
//       />
//       <button onClick={calculateWaterIntake} className="bg-blue-500 px-4 py-2 rounded">
//         Calculate
//       </button>
//       {waterIntake && <p className="mt-2">Recommended Water Intake: {waterIntake} liters/day</p>}
//     </div>
//   );
// }


// import React, { useState } from "react";

// export default function Calculators() {
//   const [activeTab, setActiveTab] = useState("calorie");

//   return (
//     <div className="bg-gray-900 text-white min-h-screen flex flex-col items-center justify-center p-6">
//       <h1 className="text-4xl sm:text-5xl font-bold mb-6">Fitness Calculators</h1>
//       <p className="text-lg text-gray-300 text-center max-w-2xl">
//         Use our calculators to estimate your daily calorie intake, BMI, and water needs!
//       </p>

//       {/* 🔥 أزرار التبويبات 🔥 */}
//       <div className="mt-10 flex space-x-4">
//         <button
//           className={`py-2 px-4 rounded-lg text-lg transition-all ${
//             activeTab === "calorie" ? "bg-orange-500" : "bg-gray-700"
//           }`}
//           onClick={() => setActiveTab("calorie")}
//         >
//           Calorie Calculator
//         </button>
//         <button
//           className={`py-2 px-4 rounded-lg text-lg transition-all ${
//             activeTab === "bmi" ? "bg-orange-500" : "bg-gray-700"
//           }`}
//           onClick={() => setActiveTab("bmi")}
//         >
//           BMI Calculator
//         </button>
//         <button
//           className={`py-2 px-4 rounded-lg text-lg transition-all ${
//             activeTab === "water" ? "bg-orange-500" : "bg-gray-700"
//           }`}
//           onClick={() => setActiveTab("water")}
//         >
//           Water Intake Calculator
//         </button>
//         <button
//           className={`py-2 px-4 rounded-lg text-lg transition-all ${
//             activeTab === "macros" ? "bg-orange-500" : "bg-gray-700"
//           }`}
//           onClick={() => setActiveTab("macros")}
//         >
//           Macros Calculator
//         </button>
//         <button
//           className={`py-2 px-4 rounded-lg text-lg transition-all ${
//             activeTab === "bmr" ? "bg-orange-500" : "bg-gray-700"
//           }`}
//           onClick={() => setActiveTab("bmr")}
//         >
//           BMR Calculator
//         </button>
//         <button
//           className={`py-2 px-4 rounded-lg text-lg transition-all ${
//             activeTab === "bodyFat" ? "bg-orange-500" : "bg-gray-700"
//           }`}
//           onClick={() => setActiveTab("bodyFat")}
//         >
//           Body Fat Percentage Calculator
//         </button>
//       </div>

//       {/* 🔥 عرض الحاسبة المختارة 🔥 */}
//       <div className="mt-6 w-full max-w-lg bg-gray-800 p-6 rounded-lg">
//         {activeTab === "calorie" && <CalorieCalculator />}
//         {activeTab === "bmi" && <BMICalculator />}
//         {activeTab === "water" && <WaterIntakeCalculator />}
//         {activeTab === "macros" && <MacrosCalculator />}
//         {activeTab === "bmr" && <BMRCalculator />}
//         {activeTab === "bodyFat" && <BodyFatCalculator />}
//       </div>
//     </div>
//   );
// }

// /* 🔥 مكونات الحاسبات الفرعية 🔥 */

// // ✅ حاسبة السعرات
// function CalorieCalculator() {
//   const [weight, setWeight] = useState("");
//   const [calories, setCalories] = useState(null);

//   const calculateCalories = () => {
//     if (!weight) return;
//     setCalories(weight * 30);
//   };

//   return (
//     <div className="text-center">
//       <h2 className="text-2xl font-bold mb-4">Calorie Calculator</h2>
//       <input
//         type="number"
//         placeholder="Enter weight (kg)"
//         className="p-2 bg-gray-700 text-white rounded mb-4 w-full"
//         value={weight}
//         onChange={(e) => setWeight(e.target.value)}
//       />
//       <button onClick={calculateCalories} className="bg-blue-500 px-4 py-2 rounded">
//         Calculate
//       </button>
//       {calories && <p className="mt-2">Estimated Calories: {calories} kcal/day</p>}
//     </div>
//   );
// }

// // ✅ حاسبة BMI
// function BMICalculator() {
//   const [weight, setWeight] = useState("");
//   const [height, setHeight] = useState("");
//   const [bmi, setBmi] = useState(null);

//   const calculateBMI = () => {
//     if (!weight || !height) return;
//     const heightInMeters = height / 100;
//     setBmi((weight / (heightInMeters * heightInMeters)).toFixed(2));
//   };

//   return (
//     <div className="text-center">
//       <h2 className="text-2xl font-bold mb-4">BMI Calculator</h2>
//       <input
//         type="number"
//         placeholder="Weight (kg)"
//         className="p-2 bg-gray-700 text-white rounded mb-2 w-full"
//         value={weight}
//         onChange={(e) => setWeight(e.target.value)}
//       />
//       <input
//         type="number"
//         placeholder="Height (cm)"
//         className="p-2 bg-gray-700 text-white rounded mb-4 w-full"
//         value={height}
//         onChange={(e) => setHeight(e.target.value)}
//       />
//       <button onClick={calculateBMI} className="bg-blue-500 px-4 py-2 rounded">
//         Calculate
//       </button>
//       {bmi && <p className="mt-2">Your BMI: {bmi}</p>}
//     </div>
//   );
// }

// // ✅ حاسبة شرب المياه
// function WaterIntakeCalculator() {
//   const [weight, setWeight] = useState("");
//   const [waterIntake, setWaterIntake] = useState(null);

//   const calculateWaterIntake = () => {
//     if (!weight) return;
//     setWaterIntake((weight * 0.033).toFixed(2));
//   };

//   return (
//     <div className="text-center">
//       <h2 className="text-2xl font-bold mb-4">Water Intake Calculator</h2>
//       <input
//         type="number"
//         placeholder="Enter weight (kg)"
//         className="p-2 bg-gray-700 text-white rounded mb-4 w-full"
//         value={weight}
//         onChange={(e) => setWeight(e.target.value)}
//       />
//       <button onClick={calculateWaterIntake} className="bg-blue-500 px-4 py-2 rounded">
//         Calculate
//       </button>
//       {waterIntake && <p className="mt-2">Recommended Water Intake: {waterIntake} liters/day</p>}
//     </div>
//   );
// }

// // ✅ حاسبة الماكروز
// function MacrosCalculator() {
//   const [weight, setWeight] = useState("");
//   const [protein, setProtein] = useState(null);
//   const [carbs, setCarbs] = useState(null);
//   const [fats, setFats] = useState(null);

//   const calculateMacros = () => {
//     if (!weight) return;
//     setProtein((weight * 2).toFixed(1)); // 2g of protein per kg body weight
//     setCarbs((weight * 3).toFixed(1));   // 3g of carbs per kg body weight
//     setFats((weight * 0.9).toFixed(1));   // 0.9g of fat per kg body weight
//   };

//   return (
//     <div className="text-center">
//       <h2 className="text-2xl font-bold mb-4">Macros Calculator</h2>
//       <input
//         type="number"
//         placeholder="Enter weight (kg)"
//         className="p-2 bg-gray-700 text-white rounded mb-4 w-full"
//         value={weight}
//         onChange={(e) => setWeight(e.target.value)}
//       />
//       <button onClick={calculateMacros} className="bg-blue-500 px-4 py-2 rounded">
//         Calculate
//       </button>
//       {protein && carbs && fats && (
//         <div className="mt-2">
//           <p>Protein: {protein} g</p>
//           <p>Carbs: {carbs} g</p>
//           <p>Fats: {fats} g</p>
//         </div>
//       )}
//     </div>
//   );
// }

// // ✅ حاسبة BMR
// function BMRCalculator() {
//   const [weight, setWeight] = useState("");
//   const [height, setHeight] = useState("");
//   const [age, setAge] = useState("");
//   const [gender, setGender] = useState("male");
//   const [bmr, setBmr] = useState(null);

//   const calculateBMR = () => {
//     if (!weight || !height || !age) return;
//     if (gender === "male") {
//       setBmr(
//         88.362 + 13.397 * weight + 4.799 * height - 5.677 * age
//       );
//     } else {
//       setBmr(
//         447.593 + 9.247 * weight + 3.098 * height - 4.330 * age
//       );
//     }
//   };

//   return (
//     <div className="text-center">
//       <h2 className="text-2xl font-bold mb-4">BMR Calculator</h2>
//       <input
//         type="number"
//         placeholder="Weight (kg)"
//         className="p-2 bg-gray-700 text-white rounded mb-2 w-full"
//         value={weight}
//         onChange={(e) => setWeight(e.target.value)}
//       />
//       <input
//         type="number"
//         placeholder="Height (cm)"
//         className="p-2 bg-gray-700 text-white rounded mb-2 w-full"
//         value={height}
//         onChange={(e) => setHeight(e.target.value)}
//       />
//       <input
//         type="number"
//         placeholder="Age (years)"
//         className="p-2 bg-gray-700 text-white rounded mb-2 w-full"
//         value={age}
//         onChange={(e) => setAge(e.target.value)}
//       />
//       <select
//         value={gender}
//         onChange={(e) => setGender(e.target.value)}
//         className="p-2 bg-gray-700 text-white rounded mb-4 w-full"
//       >
//         <option value="male">Male</option>
//         <option value="female">Female</option>
//       </select>
//       <button onClick={calculateBMR} className="bg-blue-500 px-4 py-2 rounded">
//         Calculate
//       </button>
//       {bmr && <p className="mt-2">Your BMR: {bmr.toFixed(2)} kcal/day</p>}
//     </div>
//   );
// }

// // ✅ حاسبة نسبة الدهون في الجسم
// function BodyFatCalculator() {
//   const [waist, setWaist] = useState("");
//   const [neck, setNeck] = useState("");
//   const [hip, setHip] = useState("");
//   const [bodyFat, setBodyFat] = useState(null);

//   const calculateBodyFat = () => {
//     if (!waist || !neck || !hip) return;
//     // يتم استخدام معادلة لحساب نسبة الدهون في الجسم
//     const bodyFatPercentage =
//       (waist - neck) * 0.074 - (hip ? hip * 0.082 : 0) + 25.2;
//     setBodyFat(bodyFatPercentage.toFixed(2));
//   };

//   return (
//     <div className="text-center">
//       <h2 className="text-2xl font-bold mb-4">Body Fat Percentage Calculator</h2>
//       <input
//         type="number"
//         placeholder="Waist (cm)"
//         className="p-2 bg-gray-700 text-white rounded mb-2 w-full"
//         value={waist}
//         onChange={(e) => setWaist(e.target.value)}
//       />
//       <input
//         type="number"
//         placeholder="Neck (cm)"
//         className="p-2 bg-gray-700 text-white rounded mb-2 w-full"
//         value={neck}
//         onChange={(e) => setNeck(e.target.value)}
//       />
//       <input
//         type="number"
//         placeholder="Hip (cm)"
//         className="p-2 bg-gray-700 text-white rounded mb-4 w-full"
//         value={hip}
//         onChange={(e) => setHip(e.target.value)}
//       />
//       <button onClick={calculateBodyFat} className="bg-blue-500 px-4 py-2 rounded">
//         Calculate
//       </button>
//       {bodyFat && <p className="mt-2">Your Body Fat Percentage: {bodyFat}%</p>}
//     </div>
//   );
// }


import React, { useState } from "react";
import calcImage from "../../assets/calc.jpg"; // تعديل المسار حسب مكان الصورة
export default function Calculators() {
  const [activeTab, setActiveTab] = useState("calorie");

  return (
    <div
      className="bg-orange-900 text-white min-h-screen flex flex-col items-center justify-center p-6"
      style={{
        backgroundImage: `url(${calcImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      <h1 className="text-4xl sm:text-5xl font-bold mb-6">Fitness Calculators</h1>
      <p className="text-lg text-gray-300 text-center max-w-2xl">
        Use our calculators to estimate your daily calorie intake, BMI, and water needs!
      </p>
{/* 🔥 أزرار التبويبات 🔥 */}
<div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 justify-center">
  {["calorie", "bmi", "water", "macros", "bmr", "bodyFat", "exercise", "activity"].map((tab) => (
    <button
      key={tab}
      className={`py-3 px-6 rounded-lg text-lg transition-all ${
        activeTab === tab ? "bg-orange-600" : "bg-gray-700 hover:bg-gray-600"
      }`}
      onClick={() => setActiveTab(tab)}
    >
      {tab.charAt(0).toUpperCase() + tab.slice(1).replace(/([A-Z])/g, " $1")} Calculator
    </button>
  ))}
</div>


      {/* 🔥 عرض الحاسبة المختارة 🔥 */}
      <div className="mt-6 w-full max-w-lg bg-gray-800 p-6 rounded-lg shadow-lg">
        {activeTab === "calorie" && <CalorieCalculator />}
        {activeTab === "bmi" && <BMICalculator />}
        {activeTab === "water" && <WaterIntakeCalculator />}
        {activeTab === "macros" && <MacrosCalculator />}
        {activeTab === "bmr" && <BMRCalculator />}
        {activeTab === "bodyFat" && <BodyFatCalculator />}
        {activeTab === "exercise" && <ExerciseCalorieCalculator />}
        {activeTab === "activity" && <ActivityLevelCalorieCalculator />}
      </div>
    </div>
  );
}

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
      {calories && (
        <div className="mt-4 p-6 bg-gray-700 text-white rounded-lg shadow-md">
          <p className="text-2xl">Estimated Calories: {calories} kcal/day</p>
        </div>
      )}
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
      {bmi && (
        <div className="mt-4 p-6 bg-gray-700 text-white rounded-lg shadow-md">
          <p className="text-2xl">Your BMI: {bmi}</p>
        </div>
      )}
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
      {waterIntake && (
        <div className="mt-4 p-6 bg-gray-700 text-white rounded-lg shadow-md">
          <p className="text-2xl">Recommended Water Intake: {waterIntake} liters/day</p>
        </div>
      )}
    </div>
  );
}

// ✅ حاسبة الماكروز
function MacrosCalculator() {
  const [weight, setWeight] = useState("");
  const [protein, setProtein] = useState(null);
  const [carbs, setCarbs] = useState(null);
  const [fats, setFats] = useState(null);

  const calculateMacros = () => {
    if (!weight) return;
    setProtein((weight * 2).toFixed(1)); // 2g of protein per kg body weight
    setCarbs((weight * 3).toFixed(1));   // 3g of carbs per kg body weight
    setFats((weight * 0.9).toFixed(1));   // 0.9g of fat per kg body weight
  };

  return (
    <div className="text-center">
      <h2 className="text-2xl font-bold mb-4">Macros Calculator</h2>
      <input
        type="number"
        placeholder="Enter weight (kg)"
        className="p-2 bg-gray-700 text-white rounded mb-4 w-full"
        value={weight}
        onChange={(e) => setWeight(e.target.value)}
      />
      <button onClick={calculateMacros} className="bg-blue-500 px-4 py-2 rounded">
        Calculate
      </button>
      {protein && carbs && fats && (
        <div className="mt-4 p-6 bg-gray-700 text-white rounded-lg shadow-md">
          <p className="text-2xl">Protein: {protein} g</p>
          <p className="text-2xl">Carbs: {carbs} g</p>
          <p className="text-2xl">Fats: {fats} g</p>
        </div>
      )}
    </div>
  );
}

// ✅ حاسبة BMR
function BMRCalculator() {
  const [weight, setWeight] = useState("");
  const [height, setHeight] = useState("");
  const [age, setAge] = useState("");
  const [gender, setGender] = useState("male");
  const [bmr, setBmr] = useState(null);

  const calculateBMR = () => {
    if (!weight || !height || !age) return;
    if (gender === "male") {
      setBmr(
        88.362 + 13.397 * weight + 4.799 * height - 5.677 * age
      );
    } else {
      setBmr(
        447.593 + 9.247 * weight + 3.098 * height - 4.330 * age
      );
    }
  };

  return (
    <div className="text-center">
      <h2 className="text-2xl font-bold mb-4">BMR Calculator</h2>
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
        className="p-2 bg-gray-700 text-white rounded mb-2 w-full"
        value={height}
        onChange={(e) => setHeight(e.target.value)}
      />
      <input
        type="number"
        placeholder="Age (years)"
        className="p-2 bg-gray-700 text-white rounded mb-2 w-full"
        value={age}
        onChange={(e) => setAge(e.target.value)}
      />
      <select
        value={gender}
        onChange={(e) => setGender(e.target.value)}
        className="p-2 bg-gray-700 text-white rounded mb-4 w-full"
      >
        <option value="male">Male</option>
        <option value="female">Female</option>
      </select>
      <button onClick={calculateBMR} className="bg-blue-500 px-4 py-2 rounded">
        Calculate
      </button>
      {bmr && (
        <div className="mt-4 p-6 bg-gray-700 text-white rounded-lg shadow-md">
          <p className="text-2xl">Your BMR: {bmr.toFixed(2)} kcal/day</p>
        </div>
      )}
    </div>
  );
}

// ✅ حاسبة نسبة الدهون في الجسم
function BodyFatCalculator() {
  const [waist, setWaist] = useState("");
  const [neck, setNeck] = useState("");
  const [hip, setHip] = useState("");
  const [bodyFat, setBodyFat] = useState(null);

  const calculateBodyFat = () => {
    if (!waist || !neck || !hip) return;
    const bodyFatPercentage =
      (waist - neck) * 0.074 - (hip ? hip * 0.082 : 0) + 25.2;
    setBodyFat(bodyFatPercentage.toFixed(2));
  };

  return (
    <div className="text-center">
      <h2 className="text-2xl font-bold mb-4">Body Fat Percentage Calculator</h2>
      <input
        type="number"
        placeholder="Waist (cm)"
        className="p-2 bg-gray-700 text-white rounded mb-2 w-full"
        value={waist}
        onChange={(e) => setWaist(e.target.value)}
      />
      <input
        type="number"
        placeholder="Neck (cm)"
        className="p-2 bg-gray-700 text-white rounded mb-2 w-full"
        value={neck}
        onChange={(e) => setNeck(e.target.value)}
      />
      <input
        type="number"
        placeholder="Hip (cm)"
        className="p-2 bg-gray-700 text-white rounded mb-4 w-full"
        value={hip}
        onChange={(e) => setHip(e.target.value)}
      />
      <button onClick={calculateBodyFat} className="bg-blue-500 px-4 py-2 rounded">
        Calculate
      </button>
      {bodyFat && (
        <div className="mt-4 p-6 bg-gray-700 text-white rounded-lg shadow-md">
          <p className="text-2xl">Your Body Fat Percentage: {bodyFat}%</p>
        </div>
      )}
    </div>
  );
}

// ✅ حاسبة السعرات للتمارين (Exercise Calorie Calculator)
function ExerciseCalorieCalculator() {
  const [exerciseTime, setExerciseTime] = useState("");
  const [caloriesBurned, setCaloriesBurned] = useState(null);

  const calculateCaloriesBurned = () => {
    if (!exerciseTime) return;
    setCaloriesBurned(exerciseTime * 8);  // فرضنا أن كل دقيقة من التمرين تحرق 8 سعرات
  };

  return (
    <div className="text-center">
      <h2 className="text-2xl font-bold mb-4">Exercise Calorie Calculator</h2>
      <input
        type="number"
        placeholder="Enter exercise time (minutes)"
        className="p-2 bg-gray-700 text-white rounded mb-4 w-full"
        value={exerciseTime}
        onChange={(e) => setExerciseTime(e.target.value)}
      />
      <button onClick={calculateCaloriesBurned} className="bg-blue-500 px-4 py-2 rounded">
        Calculate
      </button>
      {caloriesBurned && (
        <div className="mt-4 p-6 bg-gray-700 text-white rounded-lg shadow-md">
          <p className="text-2xl">Calories Burned: {caloriesBurned} kcal</p>
        </div>
      )}
    </div>
  );
}

// ✅ حاسبة السعرات حسب مستوى النشاط (Activity Level Calorie Calculator)
function ActivityLevelCalorieCalculator() {
  const [activityLevel, setActivityLevel] = useState("sedentary");
  const [calories, setCalories] = useState(null);

  const activityMultiplier = {
    sedentary: 1.2,
    light: 1.375,
    moderate: 1.55,
    intense: 1.725,
    veryIntense: 1.9,
  };

  const calculateCalories = () => {
    setCalories(activityMultiplier[activityLevel] * 2000);  // فرضنا 2000 سعر حراري للإنسان في اليوم
  };

  return (
    <div className="text-center">
      <h2 className="text-2xl font-bold mb-4">Activity Level Calorie Calculator</h2>
      <select
        value={activityLevel}
        onChange={(e) => setActivityLevel(e.target.value)}
        className="p-2 bg-gray-700 text-white rounded mb-4 w-full"
      >
        <option value="sedentary">Sedentary (Little to no exercise)</option>
        <option value="light">Lightly active (Light exercise/sports 1-3 days/week)</option>
        <option value="moderate">Moderately active (Moderate exercise/sports 3-5 days/week)</option>
        <option value="intense">Very active (Hard exercise/sports 6-7 days/week)</option>
        <option value="veryIntense">Extremely active (Very hard exercise & physical job)</option>
      </select>
      <button onClick={calculateCalories} className="bg-blue-500 px-4 py-2 rounded">
        Calculate
      </button>
      {calories && (
        <div className="mt-4 p-6 bg-gray-700 text-white rounded-lg shadow-md">
          <p className="text-2xl">Calories based on your activity level: {calories} kcal/day</p>
        </div>
      )}
    </div>
  );
}
