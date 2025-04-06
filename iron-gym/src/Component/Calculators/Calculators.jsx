
// اخر تعديييييييييييييل 🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥

import React, { useState } from "react";
import calcImage from "../../assets/calc.jpg"; 
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
      <h1 className="text-4xl sm:text-5xl font-bold mb-6">
        Fitness Calculators
      </h1>
      <p className="text-lg text-gray-300 text-center max-w-2xl">
        Use our calculators to estimate your daily calorie intake, BMI, and
        water needs!
      </p>
      {/*  أزرار التبويبات  */}
      <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 justify-center">
        {[
          "calorie",
          "bmi",
          "water",
          "macros",
          "bmr",
          "bodyFat",
          "exercise",
          "activity",
        ].map((tab) => (
          <button
            key={tab}
            className={`py-3 px-6 rounded-lg text-lg transition-all ${
              activeTab === tab
                ? "bg-orange-600"
                : "bg-gray-700 hover:bg-gray-600"
            }`}
            onClick={() => setActiveTab(tab)}
          >
            {tab.charAt(0).toUpperCase() +
              tab.slice(1).replace(/([A-Z])/g, " $1")}{" "}
            Calculator
          </button>
        ))}
      </div>

      {/*  عرض الحاسبة المختارة  */}
      <div className="mt-6 w-full max-w-3xl bg-gray-800 p-6 rounded-lg shadow-lg mx-auto">
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

// حاسبة السعرات
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

      <div className="bg-gradient-to-r from-slate-800 via-neutral-700 to-orange-700 text-white p-6 rounded-lg shadow-lg w-full maxo mt-6">
        <h2 className="text-3xl font-bold mb-4 text-zinc-950">
          Calorie Calculator
        </h2>
        <p className="text-lg mb-4">
          The Calorie Calculator helps estimate your daily calorie intake based
          on your weight. It's used to determine how many calories you need to
          maintain your weight, or to lose/gain weight depending on your goals.
        </p>
        <h3 className="text-2xl font-bold mb-2 text-zinc-950">Usage:</h3>
        <p className="text-lg mb-4">
          Enter your weight in kilograms, and the calculator will estimate the
          calories you need per day.
        </p>
        <h3 className="text-2xl font-bold mb-2 text-zinc-950">Tip:</h3>
        <p className="text-lg">
          If the result is high, you may want to focus on a weight management
          plan, considering a calorie deficit for weight loss or a surplus for
          muscle gain. <br />
          If the result is low, it might be a good idea to consult a
          nutritionist to create a balanced diet plan that fits your goals.
        </p>
      </div>

      <button
        onClick={calculateCalories}
        className="bg-blue-700 px-4 mt-8 py-2 rounded "
      >
        Calculate
      </button>
      {calories && (
        <div className="mt-4 p-6 bg-orange-500 text-black font-bold rounded-lg shadow-md">
          <p className="text-2xl">Estimated Calories: {calories} kcal/day</p>
        
        </div>
      )}
    </div>
  );
}

//  حاسبة BMI
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

      <div className="bg-gradient-to-r from-slate-800 via-neutral-700 to-orange-700 text-white p-6 rounded-lg shadow-lg w-full maxo mt-6">
        <h2 className="text-3xl font-bold mb-8 text-zinc-950">
          BMI Calculator
        </h2>
        <p className="text-lg mb-4">
          The BMI (Body Mass Index) Calculator helps assess whether you have a
          healthy body weight for a given height. It's a general indicator of
          whether you're underweight, normal weight, overweight, or obese.
        </p>
        <h3 className="text-2xl  font-bold mb-2 text-zinc-950">Usage:</h3>
        <p className="text-lg mb-4">
          Enter your weight in kilograms and your height in centimeters. The
          calculator will give you your BMI.
        </p>
        <h3 className="text-2xl  font-bold mb-2 text-zinc-950">Tip:</h3>
        <p className="text-lg">
          Underweight: It may be important to focus on gaining muscle mass and
          improving overall health. Normal weight: Maintain a balanced diet and
          regular exercise to keep a healthy lifestyle. Overweight: Consider a
          balanced diet and exercise plan to reduce body fat. Obese: It’s
          recommended to consult a healthcare professional to develop a safe
          weight-loss strategy.
        </p>
      </div>
      <button onClick={calculateBMI} className="bg-blue-500 px-4 py-2 rounded mt-6">
        Calculate
      </button>
      {bmi && (
        <div className="mt-4 p-6 bg-orange-500 text-black font-bold rounded-lg shadow-md">
          <p className="text-2xl">Your BMI: {bmi}</p>
        
        </div>
      )}
    </div>
  );
}

//  حاسبة شرب المياه
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

      <div className="bg-gradient-to-r from-slate-800 via-neutral-700 to-orange-700 text-white p-6 rounded-lg shadow-lg w-full maxo mt-6">
        <h2 className="text-3xl font-bold mb-4 text-zinc-950">
          Water Intake Calculator
        </h2>
        <p className="text-lg mb-4">
          The Water Intake Calculator helps you determine how much water you
          should drink daily based on your weight. Staying hydrated is crucial
          for maintaining energy and overall health.
        </p>
        <h3 className="text-2xl font-bold mb-2 text-zinc-950">Usage:</h3>
        <p className="text-lg mb-4">
          Enter your weight in kilograms, and the calculator will estimate the
          amount of water you should drink daily in liters.
        </p>
        <h3 className="text-2xl font-bold mb-2 text-zinc-950">Tip:</h3>
        <p className="text-lg">
          If you need a higher water intake, make sure to drink water regularly
          throughout the day to stay hydrated. If your intake is low, increase
          your water consumption gradually to support your metabolism and body
          function.
        </p>
      </div>
      <button
        onClick={calculateWaterIntake}
        className="bg-blue-500 px-4 py-2 rounded mt-6"
      >
        Calculate
      </button>
      {waterIntake && (
        <div className="mt-4 p-6 bg-orange-500 text-black font-bold rounded-lg shadow-md">
          <p className="text-2xl">
        
            Recommended Water Intake: {waterIntake} liters/day
          </p>
        </div>
      )}
    </div>
  );
}

//  حاسبة الماكروز
function MacrosCalculator() {
  const [weight, setWeight] = useState("");
  const [protein, setProtein] = useState(null);
  const [carbs, setCarbs] = useState(null);
  const [fats, setFats] = useState(null);

  const calculateMacros = () => {
    if (!weight) return;
    setProtein((weight * 2).toFixed(1)); 
    setCarbs((weight * 3).toFixed(1)); 
    setFats((weight * 0.9).toFixed(1)); 
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

      <div className="bg-gradient-to-r from-slate-800 via-neutral-700 to-orange-700 text-white p-6 rounded-lg shadow-lg w-full maxo mt-6">
        <h2 className="text-3xl font-bold mb-4 text-zinc-950">
          Macros Calculator
        </h2>
        <p className="text-lg mb-4">
          The Macros Calculator helps estimate how much protein, carbs, and fats
          you should consume daily based on your weight. This is important for
          balancing your diet and achieving fitness goals.
        </p>
        <h3 className="text-2xl font-bold mb-2 text-zinc-950">Usage:</h3>
        <p className="text-lg mb-4">
          Enter your weight in kilograms, and the calculator will estimate the
          amount of protein, carbs, and fats you need.
        </p>
        <h3 className="text-2xl font-bold mb-2 text-zinc-950">Tip:</h3>
        <p className="text-lg">
          If the result suggests high protein, carbs, or fat intake, make sure
          to adjust according to your specific goals (e.g., cutting, bulking, or
          maintaining). Monitor your intake and ensure your diet matches your
          workout routine.
        </p>
      </div>
      <button
        onClick={calculateMacros}
        className="bg-blue-500 px-4 py-2 rounded mt-6"
      >
        Calculate
      </button>
      {protein && carbs && fats && (
        <div className="mt-4 p-6 bg-orange-500 text-black font-bold rounded-lg shadow-md">
          <p className="text-2xl">Protein: {protein} g</p>
        
          <p className="text-2xl">Carbs: {carbs} g</p>
          <p className="text-2xl">Fats: {fats} g</p>
        </div>
      )}
    </div>
  );
}

//  حاسبة BMR
function BMRCalculator() {
  const [weight, setWeight] = useState("");
  const [height, setHeight] = useState("");
  const [age, setAge] = useState("");
  const [gender, setGender] = useState("male");
  const [bmr, setBmr] = useState(null);

  const calculateBMR = () => {
    if (!weight || !height || !age) return;
    if (gender === "male") {
      setBmr(88.362 + 13.397 * weight + 4.799 * height - 5.677 * age);
    } else {
      setBmr(447.593 + 9.247 * weight + 3.098 * height - 4.33 * age);
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
      <div className="bg-gradient-to-r from-slate-800 via-neutral-700 to-orange-700 text-white p-6 rounded-lg shadow-lg w-full maxo mt-6">
        <h2 className="text-3xl font-bold mb-4 text-zinc-950">
          BMR Calculator
        </h2>
        <p className="text-lg mb-4">
          The BMR (Basal Metabolic Rate) Calculator estimates the number of
          calories your body needs at rest to maintain basic functions like
          breathing and digestion.
        </p>
        <h3 className="text-2xl font-bold mb-2 text-zinc-950">Usage:</h3>
        <p className="text-lg mb-4">
          Enter your weight, height, age, and gender. The calculator will
          estimate your daily BMR.
        </p>
        <h3 className="text-2xl font-bold mb-2 text-zinc-950">Tip:</h3>
        <p className="text-lg">
          A higher BMR means your body burns more calories at rest. To lose
          weight, you should consume fewer calories than your BMR. A lower BMR
          means you need to consume fewer calories to maintain or lose weight.
        </p>
      </div>
      <button onClick={calculateBMR} className="bg-blue-500 px-4 py-2 rounded mt-6">
        Calculate
      </button>
      {bmr && (
        <div className="mt-4 p-6 bg-orange-500 text-black font-bold rounded-lg shadow-md">
          <p className="text-2xl">Your BMR: {bmr.toFixed(2)} kcal/day</p>
        
        </div>
      )}
    </div>
  );
}

//  حاسبة نسبة الدهون في الجسم
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
      <h2 className="text-2xl font-bold mb-4">
        Body Fat Percentage Calculator
      </h2>
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

      <div className="bg-gradient-to-r from-slate-800 via-neutral-700 to-orange-700 text-white p-6 rounded-lg shadow-lg w-full maxo mt-6">
        <h2 className="text-3xl font-bold mb-4 text-zinc-950">
          Body Fat Percentage Calculator
        </h2>
        <p className="text-lg mb-4">
          The Body Fat Percentage Calculator helps estimate the percentage of
          fat in your body based on measurements of your waist, neck, and hip.
        </p>
        <h3 className="text-2xl font-bold mb-2 text-zinc-950">Usage:</h3>
        <p className="text-lg mb-4">
          Enter measurements of your waist, neck, and hips, and the calculator
          will estimate your body fat percentage.
        </p>
        <h3 className="text-2xl font-bold mb-2 text-zinc-950">Tip:</h3>
        <p className="text-lg">
          Higher body fat percentage: Aim for a combination of strength training
          and cardiovascular exercise to reduce body fat. Lower body fat
          percentage: Ensure you're maintaining a healthy and sustainable level
          of body fat for overall health.
        </p>
      </div>
      <button
        onClick={calculateBodyFat}
        className="bg-blue-500 px-4 py-2 rounded mt-6"
      >
        Calculate
      </button>
      {bodyFat && (
        <div className="mt-4 p-6 bg-orange-500 text-black font-bold rounded-lg shadow-md">
          <p className="text-2xl">Your Body Fat Percentage: {bodyFat}%</p>
        
        </div>
      )}
    </div>
  );
}

//  حاسبة السعرات للتمارين 
function ExerciseCalorieCalculator() {
  const [exerciseTime, setExerciseTime] = useState("");
  const [caloriesBurned, setCaloriesBurned] = useState(null);

  const calculateCaloriesBurned = () => {
    if (!exerciseTime) return;
    setCaloriesBurned(exerciseTime * 8); 
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
      <div className="bg-gradient-to-r from-slate-800 via-neutral-700 to-orange-700 text-white p-6 rounded-lg shadow-lg w-full maxo mt-6">
        <h2 className="text-3xl font-bold mb-4 text-zinc-950">
          Exercise Calorie Calculator
        </h2>
        <p className="text-lg mb-4">
          The Exercise Calorie Calculator estimates how many calories you burn
          during exercise based on the time you spend working out.
        </p>
        <h3 className="text-2xl font-bold mb-2 text-zinc-950">Usage:</h3>
        <p className="text-lg mb-4">
          Enter the duration of your exercise in minutes, and the calculator
          will estimate the calories burned.
        </p>
        <h3 className="text-2xl font-bold mb-2 text-zinc-950">Tip:</h3>
        <p className="text-lg">
          If you burn a lot of calories through exercise, you may need to
          increase your food intake to fuel your workouts or recover afterward.
          If you burn fewer calories, you might want to intensify your workouts
          to achieve your fitness goals.
        </p>
      </div>
      <button
        onClick={calculateCaloriesBurned}
        className="bg-blue-500 px-4 py-2 rounded mt-6"
      >
        Calculate
      </button>
      {caloriesBurned && (
        <div className="mt-4 p-6 bg-orange-500 text-black font-bold rounded-lg shadow-md">
          <p className="text-2xl">Calories Burned: {caloriesBurned} kcal</p>
        
        </div>
      )}
    </div>
  );
}

//  حاسبة السعرات حسب مستوى النشاط 
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
    setCalories(activityMultiplier[activityLevel] * 2000); 
  };

  return (
    <div className="text-center">
      <h2 className="text-2xl font-bold mb-4">
        Activity Level Calorie Calculator
      </h2>
      <select
        value={activityLevel}
        onChange={(e) => setActivityLevel(e.target.value)}
        className="p-2 bg-gray-700 text-white rounded mb-4 w-full"
      >
        <option value="sedentary">Sedentary (Little to no exercise)</option>
        <option value="light">
          Lightly active (Light exercise/sports 1-3 days/week)
        </option>
        <option value="moderate">
          Moderately active (Moderate exercise/sports 3-5 days/week)
        </option>
        <option value="intense">
          Very active (Hard exercise/sports 6-7 days/week)
        </option>
        <option value="veryIntense">
          Extremely active (Very hard exercise & physical job)
        </option>
      </select>

      <div className="bg-gradient-to-r from-slate-800 via-neutral-700 to-orange-700 text-white p-6 rounded-lg shadow-lg w-full maxo mt-6">
        <h2 className="text-3xl font-bold mb-4 text-zinc-950">
          Activity Level Calorie Calculator
        </h2>
        <p className="text-lg mb-4">
          The Activity Level Calorie Calculator estimates your total daily
          calorie needs based on your activity level, ranging from sedentary to
          very intense activity.
        </p>
        <h3 className="text-2xl font-bold mb-2 text-zinc-950">Usage:</h3>
        <p className="text-lg mb-4">
          Select your activity level, and the calculator will estimate how many
          calories you need to maintain your weight.
        </p>
        <h3 className="text-2xl font-bold mb-2 text-zinc-950">Tip:</h3>
        <p className="text-lg">
          If you're sedentary, aim to add more physical activity to your routine
          to stay healthy. If you're very active, ensure you're consuming enough
          calories to support your activity level and avoid fatigue or injury.
        </p>
      </div>
      <button
        onClick={calculateCalories}
        className="bg-blue-500 px-4 py-2 rounded mt-6"
      >
        Calculate
      </button>
      {calories && (
        <div className="mt-4 p-6 bg-orange-500 text-black font-bold rounded-lg shadow-md">
          <p className="text-2xl">
        
            Calories based on your activity level: {calories} kcal/day
          </p>
        </div>
      )}
    </div>
  );
}







































































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





