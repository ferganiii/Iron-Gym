import React, { useContext, useEffect, useState } from 'react'
import FatsProduc from "../../assets/FatsProduc.jpeg"
import { Link } from 'react-router-dom'
import axios from 'axios'
import { UserContext } from '../../Context/UserContext'

export default function MealPlan() {
  const [mealplane, setMealplane] = useState([]);
  const { token } = useContext(UserContext);

  async function getMealPlane() {
    try {
      const { data } = await axios.get("https://gym-production-8217.up.railway.app/api/cutting", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      setMealplane(data.docs);
      console.log(data.docs);
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    getMealPlane();
  }, []);

  // Function to calculate total calories for each meal
  const calculateTotalCalories = (meal) => {
    let totalCalories = 0;

    meal.items.forEach((food) => {
      // Add the 'S THERMAL' value directly if available
      totalCalories += food.sthermal ?? 0; // Default to 0 if 'sthermal' is not available
    });

    return totalCalories;
  };

  // Function to calculate total calories for all meals in the meal plan
  const calculateTotalMealPlanCalories = () => {
    let totalMealPlanCalories = 0;

    mealplane[0]?.meals.forEach((meal) => {
      totalMealPlanCalories += calculateTotalCalories(meal);
    });

    return totalMealPlanCalories;
  };

  return (
    <>
      <section className='bg-[rgb(102,102,102,.3)]'>
        <div className='container mx-auto'>
          <div className='grid grid-cols-2'>
            <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow-sm dark:bg-gray-800 dark:border-gray-700">
              <Link to="/">
                <img src={FatsProduc} alt="" />
              </Link>
              <p className='p-4 text-2xl'>Lorem ipsum dolor sit amet.</p>
            </div>
          </div>
        </div>

        {mealplane[0]?.meals.map((meal, mealIndex) => (
          <div key={mealIndex} className="mb-10 border rounded-lg overflow-hidden shadow-lg">
            {/* Title */}
            <div className="bg-orange-600 py-4 text-center">
              <h2 className="text-white text-2xl italic font-semibold">{meal.name.toUpperCase()}</h2>
            </div>

            {/* Total Calories for the Meal */}
            <div className="p-4 text-center text-xl font-bold">
              <span>Total Calories for this Meal: {calculateTotalCalories(meal)} kcal</span>
            </div>

            {/* Table */}
            <table className="w-full bg-black text-white text-center text-lg">
              <thead className="border-b border-orange-400">
                <tr>
                  <th className="p-3">ITEM</th>
                  <th className="p-3">AMOUNT</th>
                  <th className="p-3">S THERMAL</th>
                  <th className="p-3">PROTEIN</th>
                  <th className="p-3">CARB</th>
                  <th className="p-3">FAT</th>
                </tr>
              </thead>
              <tbody>
                {meal.items.map((food, foodIndex) => (
                  <tr key={foodIndex} className="border-b border-orange-400">
                    <td className="py-3">{food.name}</td>
                    <td className="py-3">{food.amount ?? 'N/A'}</td>
                    <td className="py-3">{food.sthermal ?? 'N/A'}</td>
                    <td className="py-3">{food.protien ?? 'N/A'}</td>
                    <td className="py-3">{food.carb ?? 'N/A'}</td>
                    <td className="py-3">{food.fat ?? 'N/A'}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        ))}

        {/* Total Calories for all meals */}
        <div className="p-4 text-center text-2xl font-bold bg-gray-800 text-white">
          <span>Total Calories for All Meals in this Plan: {calculateTotalMealPlanCalories()} kcal</span>
        </div>
      </section>
    </>
  );
}
