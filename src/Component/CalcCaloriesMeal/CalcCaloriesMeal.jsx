

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
          axios.get("https://gym-production-4dd6.up.railway.app/api/healthy", {
            headers: { Authorization: `Bearer ${token}` },
          }),
          axios.get("https://gym-production-4dd6.up.railway.app/api/protiens", {
            headers: { Authorization: `Bearer ${token}` },
          }),
          axios.get("https://gym-production-4dd6.up.railway.app/api/diary", {
            headers: { Authorization: `Bearer ${token}` },
          }),
          axios.get("https://gym-production-4dd6.up.railway.app/api/carb", {
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
    <div className="lg:w-[50%] mx-auto">
      <div className="p-6">
        <h1 className="lg:text-4xl text-2xl font-archivo text-center mt-16">Daily Meal Planner 🍽</h1>
  
        <div className="space-y-6 mt-4 mb-16">
          {meals.map((meal, mealIndex) => (
            <div key={mealIndex} className="border-gray-100 p-4 rounded-lg shadow-md bg-[rgb(102,102,102,.3)]">
              <h2 className="lg:text-xl font-semibold text-orange-600">
                Meal {mealIndex + 1}
              </h2>
              <button
                onClick={() => toggleSearch(mealIndex)}
                className="text-green-600 font-bold mt-2"
              >
                {meal.showSearch ? "Cancel" : "+ Add Food"}
              </button>
  
              {meal.showSearch && (
                <div className="mt-4 relative">
                  <input
                    type="text"
                    className="lg:w-1/4 p-2 rounded text-black bg-gray-400"
                    placeholder="Search for food"
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                  />
  
                  {searchTerm.length > 0 && (
                    <ul className="absolute bg-gray-500 text-black lg:w-1/4 mt-1 max-h-40 overflow-y-auto rounded shadow z-50">
                      {foodData
                        .filter((item) =>
                          item.name.toLowerCase().includes(searchTerm.toLowerCase())
                        )
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
                <div className="overflow-x-auto mt-4">
                  <table className="w-full min-w-[600px] border-gray-100 text-sm sm:text-base">
                    <thead>
                      <tr className="text-white bg-gray-700">
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
                          <td className="p-2">{food.name}</td>
                          <td className="p-2">
                            <input
                              type="number"
                              className="text-center w-full p-1 bg-[rgb(102,102,102,.3)]"
                              value={quantities[`${mealIndex}-${foodIndex}`] || 100}
                              onChange={(e) =>
                                handleQuantityChange(mealIndex, foodIndex, e.target.value)
                              }
                            />
                          </td>
                          <td className="p-2">
                            {calculateNutrition(quantities[`${mealIndex}-${foodIndex}`], food.sthermal || food.calories)}
                          </td>
                          <td className="p-2">
                            {calculateNutrition(quantities[`${mealIndex}-${foodIndex}`], food.protein)}
                          </td>
                          <td className="p-2">
                            {calculateNutrition(quantities[`${mealIndex}-${foodIndex}`], food.carb || food.carbs)}
                          </td>
                          <td className="p-2">
                            {calculateNutrition(quantities[`${mealIndex}-${foodIndex}`], food.fat)}
                          </td>
                          <td className="p-2">
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
                </div>
              )}
            </div>
          ))}
        </div>
  
        <div className="bg-orange-500 border-gray-100 p-4 rounded-lg shadow-md mt-6">
          <h2 className="text-xl font-bold text-center text-black">Total Nutritional Values</h2>
          <div className="overflow-x-auto">
            <table className="w-full border-gray-100 mt-2 text-sm sm:text-base">
              <tbody>
                <tr className="text-center bg-[rgb(102,102,102,.3)] font-bold text-black">
                  <td className="p-2">Calories: {totals.calories.toFixed(1)}</td>
                  <td className="p-2">Protein: {totals.protein.toFixed(1)}g</td>
                  <td className="p-2">Carbs: {totals.carbs.toFixed(1)}g</td>
                  <td className="p-2">Fats: {totals.fat.toFixed(1)}g</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  </section>
  
  );
}