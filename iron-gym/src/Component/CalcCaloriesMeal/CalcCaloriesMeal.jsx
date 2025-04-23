// import { useState, useEffect } from "react";

// export default function CalcCaloriesMeal() {
//   const [meals, setMeals] = useState(Array(6).fill([]));
//   const [foodData, setFoodData] = useState([]);
//   const [suggestions, setSuggestions] = useState({});
//   const [totals, setTotals] = useState({ calories: 0, protein: 0, carbs: 0, fat: 0 });

//   useEffect(() => {
//     fetch("/Data/food_database_large.json")
//       .then((res) => res.json())
//       .then((data) => setFoodData(data))
//       .catch((err) => console.error("❌ خطأ في تحميل البيانات:", err));
//   }, []);

//   const addFood = (mealIndex) => {
//     const updatedMeals = [...meals];
//     updatedMeals[mealIndex] = [...updatedMeals[mealIndex], { name: "", quantity: 100, calories: 0, protein: 0, carbs: 0, fat: 0 }];
//     setMeals(updatedMeals);
//   };

//   const removeFood = (mealIndex, foodIndex) => {
//     const updatedMeals = [...meals];
//     updatedMeals[mealIndex] = updatedMeals[mealIndex].filter((_, i) => i !== foodIndex);
//     setMeals(updatedMeals);
//   };

//   const updateFood = (mealIndex, foodIndex, field, value) => {
//     const updatedMeals = [...meals];
//     updatedMeals[mealIndex][foodIndex][field] = value;

//     if (field === "name") {
//       const filtered = foodData
//         .filter((food) => food.name_en.toLowerCase().includes(value.toLowerCase()) || food.name_ar.includes(value))
//         .slice(0, 5);

//       setSuggestions({ ...suggestions, [`${mealIndex}-${foodIndex}`]: filtered });
//     }

//     setMeals(updatedMeals);
//   };

//   const selectFood = (mealIndex, foodIndex, food) => {
//     const updatedMeals = [...meals];
//     updatedMeals[mealIndex][foodIndex] = {
//       name: `${food.name_ar} / ${food.name_en}`,
//       quantity: 100,
//       calories: food.calories || 0,
//       protein: food.protein || 0,
//       carbs: food.carbs || 0,
//       fat: food.fat || 0,
//     };

//     setMeals(updatedMeals);
//     setSuggestions({ ...suggestions, [`${mealIndex}-${foodIndex}`]: [] });
//   };

//   useEffect(() => {
//     let totalCalories = 0, totalProtein = 0, totalCarbs = 0, totalFat = 0;

//     meals.forEach((meal) =>
//       meal.forEach((food) => {
//         totalCalories += (food.calories * food.quantity) / 100;
//         totalProtein += (food.protein * food.quantity) / 100;
//         totalCarbs += (food.carbs * food.quantity) / 100;
//         totalFat += (food.fat * food.quantity) / 100;
//       })
//     );

//     setTotals({
//       calories: totalCalories.toFixed(2),
//       protein: totalProtein.toFixed(2),
//       carbs: totalCarbs.toFixed(2),
//       fat: totalFat.toFixed(2),
//     });
//   }, [meals]);

//   return (
// <>
//    <section className="bg-[rgb(102,102,102,.3)]">
//     <div className="w-[50%]  mx-auto">


//     <div className="p-6  ">
//     <h1 className="text-4xl font-archivo text-center mt-16">Daily Meal Planner 🍽</h1>
//     <div className="space-y-6 mt-4 mb-16">
//       {meals.map((meal, mealIndex) => (
//         <div key={mealIndex} className="border-gray-100 p-4 rounded-lg shadow-md bg-[rgb(102,102,102,.3)]">
//           <h2 className="text-xl font-semibold text-orange-600">Meal {mealIndex + 1}</h2>
//           <button onClick={() => addFood(mealIndex)} className="text-green-600 font-bold mt-2">
//             + Add Food
//           </button>
  
//           {meal.length > 0 && (
//             <table className="w-full mt-4 border-gray-100">
//               <thead>
//                 <tr className="text-white">
//                   <th className="p-2">Food</th>
//                   <th className="p-2">Quantity (g)</th>
//                   <th className="p-2">Calories</th>
//                   <th className="p-2">Protein</th>
//                   <th className="p-2">Carbs</th>
//                   <th className="p-2">Fats</th>
//                   <th className="p-2">❌</th>
//                 </tr>
//               </thead>
//               <tbody>
//                 {meal.map((food, foodIndex) => (
//                   <tr key={foodIndex} className="text-center bg-black text-white">
//                     <td className="relative">
//                       <input
//                         type="text"
//                         className="text-center w-full p-1 dark:text-white bg-[rgb(102,102,102,.3)]"
//                         value={food.name}
//                         onChange={(e) => updateFood(mealIndex, foodIndex, "name", e.target.value)}
//                       />
//                       {suggestions[`${mealIndex}-${foodIndex}`]?.length > 0 && (
//                         <ul className="absolute bg-white border-gray-100 mt-1 w-full max-h-40 overflow-y-auto text-black">
//                           {suggestions[`${mealIndex}-${foodIndex}`].map((sugFood, i) => (
//                             <li key={i} className="p-2 cursor-pointer hover:bg-gray-200" onClick={() => selectFood(mealIndex, foodIndex, sugFood)}>
//                               {sugFood.name_en} / {sugFood.name_ar}
//                             </li>
//                           ))}
//                         </ul>
//                       )}
//                     </td>
//                     <td>
//                       <input type="number" className="text-center w-full p-1 bg-[rgb(102,102,102,.3)]" value={food.quantity} onChange={(e) => updateFood(mealIndex, foodIndex, "quantity", Number(e.target.value))} />
//                     </td>
//                     <td>{(food.calories * food.quantity) / 100}</td>
//                     <td>{(food.protein * food.quantity) / 100}</td>
//                     <td>{(food.carbs * food.quantity) / 100}</td>
//                     <td>{(food.fat * food.quantity) / 100}</td>
//                     <td>
//                       <button onClick={() => removeFood(mealIndex, foodIndex)} className="text-red-500 font-bold">
//                         ❌
//                       </button>
//                     </td>
//                   </tr>
//                 ))}
//               </tbody>
//             </table>
//           )}
//         </div>
//       ))}
  
//       <div className=" bg-orange-500 border-gray-100 p-4 rounded-lg shadow-md mt-6">
//         <h2 className="text-xl font-bold text-center text-black">Total Nutritional Values</h2>
//         <table className="w-full border-gray-100 mt-2">
//           <tbody>
//             <tr className="text-center bg-[rgb(102,102,102,.3)] font-bold text-black">
//               <td>Calories: {totals.calories}</td>
//               <td>Protein: {totals.protein}</td>
//               <td>Carbs: {totals.carbs}</td>
//               <td>Fats: {totals.fat}</td>
//             </tr>
//           </tbody>
//         </table>
//       </div>
//     </div>
//   </div>

//     </div>
//    </section>
   
//    </>
  
//   );
// }

import React, { useContext, useEffect, useState } from "react";
import axios from "axios";
import { UserContext } from "../../Context/UserContext";

export default function DailyMealPlanner() {
  const { token } = useContext(UserContext);
  const [meals, setMeals] = useState(
    Array(5).fill().map(() => ({ foods: [], showSearch: false }))
  );
  const [searchTerm, setSearchTerm] = useState("");
  const [foodData, setFoodData] = useState([]);
  const [quantities, setQuantities] = useState({});

  useEffect(() => {
    async function getFoodData() {
      try {
        const [healthyRes, proteinsRes, dairyRes, carbRes] = await Promise.all([
          axios.get("https://gym-production-8217.up.railway.app/api/healthy", {
            headers: { Authorization: `Bearer ${token}` },
          }),
          axios.get("https://gym-production-8217.up.railway.app/api/protiens", {
            headers: { Authorization: `Bearer ${token}` },
          }),
          axios.get("https://gym-production-8217.up.railway.app/api/diary", {
            headers: { Authorization: `Bearer ${token}` },
          }),
          axios.get("https://gym-production-8217.up.railway.app/api/carb", {
            headers: { Authorization: `Bearer ${token}` },
          }),
        ]);
        setFoodData([
          ...healthyRes.data.docs,
          ...proteinsRes.data.docs,
          ...dairyRes.data.docs,
          ...carbRes.data.docs,
        ]);
      } catch (error) {
        console.error("Error fetching food data", error);
      }
    }

    getFoodData();
  }, [token]);

  const toggleSearch = (mealIndex) => {
    const updatedMeals = [...meals];
    updatedMeals[mealIndex].showSearch = !updatedMeals[mealIndex].showSearch;
    setMeals(updatedMeals);
    setSearchTerm("");
  };

  const handleQuantityChange = (mealIndex, foodIndex, value) => {
    setQuantities(prev => ({
      ...prev,
      [`${mealIndex}-${foodIndex}`]: value
    }));
  };

  const calculateNutrition = (value, nutritionPer100g) => {
    const quantity = value || 100;
    return ((nutritionPer100g || 0) * quantity / 100).toFixed(1);
  };

  const addFood = (mealIndex, food) => {
    const updatedMeals = [...meals];
    updatedMeals[mealIndex].foods.push(food);
    updatedMeals[mealIndex].showSearch = false;
    setMeals(updatedMeals);
    setSearchTerm("");
  };

  const removeFood = (mealIndex, foodIndex) => {
    const updatedMeals = [...meals];
    updatedMeals[mealIndex].foods.splice(foodIndex, 1);
    setMeals(updatedMeals);
  };

  // Calculate totals
  const totals = meals.reduce((acc, meal, mealIndex) => {
    meal.foods.forEach((food, foodIndex) => {
      const quantity = quantities[`${mealIndex}-${foodIndex}`] || 100;
      acc.calories += ((food.sthermal || food.calories || 0) * quantity / 100);
      acc.protein += ((food.protein || 0) * quantity / 100);
      acc.carbs += ((food.carb || food.carbs || 0) * quantity / 100);
      acc.fat += ((food.fat || 0) * quantity / 100);
    });
    return acc;
  }, { calories: 0, protein: 0, carbs: 0, fat: 0 });

  return (
    <section className="bg-[rgb(102,102,102,.3)]">
      <div className="w-[50%] mx-auto">
        <div className="p-6">
          <h1 className="text-4xl font-archivo text-center mt-16">Daily Meal Planner 🍽</h1>
          
          <div className="space-y-6 mt-4 mb-16">
            {meals.map((meal, mealIndex) => (
              <div key={mealIndex} className="border-gray-100 p-4 rounded-lg shadow-md bg-[rgb(102,102,102,.3)]">
               <h2 className="text-xl font-semibold text-orange-600">
  Meal {mealIndex + 1}
</h2>
                <button 
                  onClick={() => toggleSearch(mealIndex)}
                  className="text-green-600 font-bold mt-2"
                >
                  {meal.showSearch ? "Cancel" : "+ Add Food"}
                </button>

                {/* Search Input */}
                {meal.showSearch && (
                  <div className="mt-4 relative">
                    <input
                      type="text"
                      className="w-1/4 p-2 rounded text-black bg-gray-400 "
                      placeholder="Search for food"
                      value={searchTerm}
                      onChange={(e) => setSearchTerm(e.target.value)}
                    />

                    {searchTerm.length > 0 && (
                      <ul className="absolute bg-gray-500 text-black w-1/4 mt-1 max-h-40 overflow-y-auto rounded shadow z-50">
                        {foodData
                          .filter((item) =>
                            item.name.toLowerCase().includes(searchTerm.toLowerCase())
                          )
                          .slice(0, )
                          .map((item, index) => (
                            <li
                              key={index}
                              onClick={() => addFood(mealIndex, item)}
                              className="px-4 py-2 hover:bg-blue-200 cursor-pointer"
                            >
                              {item.name}
                            </li>
                          ))}
                      </ul>
                    )}
                  </div>
                )}

                {meal.foods.length > 0 && (
                  <table className="w-full mt-4 border-gray-100">
                    <thead>
                      <tr className="text-white">
                        <th className="p-2">Food</th>
                        <th className="p-2">Quantity (g)</th>
                        <th className="p-2">Calories</th>
                        <th className="p-2">Protein</th>
                        <th className="p-2">Carbs</th>
                        <th className="p-2">Fats</th>
                        <th className="p-2">❌</th>
                      </tr>
                    </thead>
                    <tbody>
                      {meal.foods.map((food, foodIndex) => (
                        <tr key={foodIndex} className="text-center bg-black text-white">
                          <td>{food.name}</td>
                          <td>
                            <input
                              type="number"
                              className="text-center w-full p-1 bg-[rgb(102,102,102,.3)]"
                              value={quantities[`${mealIndex}-${foodIndex}`] || 100}
                              onChange={(e) => handleQuantityChange(mealIndex, foodIndex, e.target.value)}
                            />
                          </td>
                          <td>{calculateNutrition(quantities[`${mealIndex}-${foodIndex}`], food.sthermal || food.calories)}</td>
                          <td>{calculateNutrition(quantities[`${mealIndex}-${foodIndex}`], food.protein)}</td>
                          <td>{calculateNutrition(quantities[`${mealIndex}-${foodIndex}`], food.carb || food.carbs)}</td>
                          <td>{calculateNutrition(quantities[`${mealIndex}-${foodIndex}`], food.fat)}</td>
                          <td>
                            <button 
                              onClick={() => removeFood(mealIndex, foodIndex)} 
                              className="text-red-500 font-bold"
                            >
                              ❌
                            </button>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                )}
              </div>
            ))}
          </div>

          {/* Totals */}
          <div className="bg-orange-500 border-gray-100 p-4 rounded-lg shadow-md mt-6">
            <h2 className="text-xl font-bold text-center text-black">Total Nutritional Values</h2>
            <table className="w-full border-gray-100 mt-2">
              <tbody>
                <tr className="text-center bg-[rgb(102,102,102,.3)] font-bold text-black">
                  <td>Calories: {totals.calories.toFixed(1)}</td>
                  <td>Protein: {totals.protein.toFixed(1)}g</td>
                  <td>Carbs: {totals.carbs.toFixed(1)}g</td>
                  <td>Fats: {totals.fat.toFixed(1)}g</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </section>
  );
}