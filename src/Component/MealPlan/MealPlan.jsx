// import React, { useContext } from 'react';
// import FatsProduc from "../../assets/FatsProduc.jpeg";
// import { Link } from 'react-router-dom';
// import { Accordion } from 'flowbite-react';
// import mealPlans from '../../Data/nutritionPlans.json';
// import { UserContext } from '../../Context/UserContext';

// export default function MealPlan() {
//   const { token } = useContext(UserContext);

//   const calculateTotalCalories = (meal) =>
//     meal.items.reduce((acc, food) => acc + (parseFloat(food.kcal) || 0), 0);

//   const calculateTotalMealPlanCalories = (plan) =>
//     plan.meals.reduce((acc, meal) => acc + calculateTotalCalories(meal), 0);

//   return (
//     <section className="bg-[rgb(102,102,102,.3)] min-h-screen py-10">
//       <div className="container mx-auto">
//             <Accordion alwaysOpen={false}>
//           {mealPlans?.length > 0 ? (
//             mealPlans.map((plan, idx) => (
//               <Accordion.Panel key={plan.id}>
//                 <Accordion.Title >
//               <div className='text-orange-400 lg:text-2xl '>
//                   <i className="fa-solid fa-utensils text-3xl me-4" style={{ color: '#f28202' }}></i>
//                    {plan.name} – Total: {calculateTotalMealPlanCalories(plan)} kcal
//               </div>
//                 </Accordion.Title>
//                 <Accordion.Content>
//                   {plan.meals.map((meal, mIdx) => (
//                     <div key={mIdx} className="mb-4">
//                       <h3 className="text-xl font-bold text-orange-400 mb-2">{meal.name}</h3>
//                       <table className="w-full text-sm bg-black text-white mb-4">
//                         <thead className="text-xs uppercase bg-gray-900 text-orange-400">
//                           <tr>
//                             <th>Product</th><th>Amount</th><th>Calories</th><th>Protein</th><th>Carbohydrates</th><th>Fats</th>
//                           </tr>
//                         </thead>
//                         <tbody>
//                           {meal.items.map((item, i) => (
//                             <tr key={i} className="text-center border-b border-gray-700">
//                               <td>{item.name}</td>
//                               <td>{item.amount}</td>
//                               <td>{item.kcal}</td>
//                               <td>{item.protein}</td>
//                               <td>{item.carb}</td>
//                               <td>{item.fat}</td>
//                             </tr>
//                           ))}
//                         </tbody>
//                       </table>
//                       {meal.method && <p><strong>Preparation method: </strong>{meal.method}</p>}
//                     </div>
//                   ))}
//                 </Accordion.Content>
//               </Accordion.Panel>
//             ))
//           ) : (
//             <p className="text-white">No meal plans available.</p>
//           )}
//         </Accordion>


//       </div>
//     </section>
//   );
// }



import React, { useState } from 'react';
const mealPlans = [
  {
    id: 1,
    name: "Low Calorie Diet Plan",
    meals: [
      {
        name: "Light Breakfast",
        items: [
          { name: "Greek Yogurt", amount: "150g", kcal: "100", protein: "15", carb: "6", fat: "0.5" },
          { name: "Berries", amount: "100g", kcal: "40", protein: "1", carb: "10", fat: "0.3" },
          { name: "Cucumber Slices", amount: "100g", kcal: "16", protein: "0.7", carb: "3.6", fat: "0.1" }
        ],
        method: "Mix Greek yogurt with fresh berries and serve with cucumber slices on the side"
      },
      {
        name: "Healthy Lunch",
        items: [
          { name: "Grilled Chicken Breast", amount: "100g", kcal: "165", protein: "31", carb: "0", fat: "3.6" },
          { name: "Steamed Broccoli", amount: "150g", kcal: "35", protein: "3", carb: "7", fat: "0.4" },
          { name: "Mixed Green Salad", amount: "100g", kcal: "20", protein: "2", carb: "4", fat: "0.2" }
        ],
        method: "Grill chicken breast with herbs, steam broccoli until tender, and prepare fresh salad"
      }
    ]
  },
  {
    id: 2,
    name: "Medium Calorie Diet Plan",
    meals: [
      {
        name: "Balanced Breakfast",
        items: [
          { name: "Oatmeal", amount: "80g", kcal: "296", protein: "10.4", carb: "51.2", fat: "5.6" },
          { name: "Banana", amount: "1 medium", kcal: "105", protein: "1.3", carb: "27", fat: "0.4" },
          { name: "Almonds", amount: "20g", kcal: "116", protein: "4.3", carb: "2.2", fat: "10" }
        ],
        method: "Cook oatmeal with water or milk, add sliced banana and chopped almonds"
      },
      {
        name: "Nutritious Lunch",
        items: [
          { name: "Brown Rice", amount: "100g", kcal: "112", protein: "2.6", carb: "23", fat: "0.9" },
          { name: "Grilled Salmon", amount: "150g", kcal: "231", protein: "31.5", carb: "0", fat: "10.5" },
          { name: "Roasted Vegetables", amount: "150g", kcal: "80", protein: "3", carb: "16", fat: "1" }
        ],
        method: "Cook brown rice, grill salmon with lemon and herbs, roast mixed vegetables with olive oil"
      }
    ]
  },
  {
    id: 3,
    name: "High Calorie Diet Plan",
    meals: [
      {
        name: "Power Breakfast",
        items: [
          { name: "Whole Grain Toast", amount: "2 slices", kcal: "160", protein: "6", carb: "30", fat: "2" },
          { name: "Avocado", amount: "1 whole", kcal: "234", protein: "3", carb: "12", fat: "21" },
          { name: "Scrambled Eggs", amount: "2 eggs", kcal: "140", protein: "12", carb: "1", fat: "10" },
          { name: "Peanut Butter", amount: "30g", kcal: "188", protein: "8", carb: "8", fat: "16" }
        ],
        method: "Toast bread, mash avocado, scramble eggs, and spread peanut butter on toast"
      },
      {
        name: "Hearty Lunch",
        items: [
          { name: "Quinoa", amount: "100g", kcal: "368", protein: "14.1", carb: "64.2", fat: "6.1" },
          { name: "Grilled Steak", amount: "200g", kcal: "544", protein: "50", carb: "0", fat: "36" },
          { name: "Sweet Potato", amount: "200g", kcal: "180", protein: "4", carb: "41", fat: "0.3" }
        ],
        method: "Cook quinoa, grill steak to desired doneness, and roast sweet potato until tender"
      }
    ]
  },
  {
    id: 4,
    name: "Athlete's High Performance Plan",
    meals: [
      {
        name: "Champion Breakfast",
        items: [
          { name: "Protein Pancakes", amount: "3 large", kcal: "450", protein: "30", carb: "45", fat: "15" },
          { name: "Maple Syrup", amount: "30ml", kcal: "104", protein: "0", carb: "27", fat: "0" },
          { name: "Mixed Nuts", amount: "40g", kcal: "240", protein: "8", carb: "8", fat: "20" }
        ],
        method: "Make protein pancakes with protein powder, top with maple syrup and mixed nuts"
      },
      {
        name: "Performance Lunch",
        items: [
          { name: "Pasta", amount: "150g", kcal: "540", protein: "18", carb: "108", fat: "3" },
          { name: "Chicken Thigh", amount: "200g", kcal: "396", protein: "36", carb: "0", fat: "28" },
          { name: "Olive Oil", amount: "20ml", kcal: "180", protein: "0", carb: "0", fat: "20" },
          { name: "Parmesan Cheese", amount: "30g", kcal: "132", protein: "12", carb: "1", fat: "9" }
        ],
        method: "Cook pasta al dente, sear chicken thigh with herbs, toss with olive oil and parmesan"
      }
    ]
  }
];

export default function MealPlan() {
  const [selectedFilter, setSelectedFilter] = useState('all');

  const calculateTotalCalories = (meal) =>
    meal.items.reduce((acc, food) => acc + (parseFloat(food.kcal) || 0), 0);

  const calculateTotalMealPlanCalories = (plan) =>
    plan.meals.reduce((acc, meal) => acc + calculateTotalCalories(meal), 0);

  const calculateTotalNutrients = (meal) => {
    return meal.items.reduce((acc, food) => ({
      protein: acc.protein + (parseFloat(food.protein) || 0),
      carb: acc.carb + (parseFloat(food.carb) || 0),
      fat: acc.fat + (parseFloat(food.fat) || 0)
    }), { protein: 0, carb: 0, fat: 0 });
  };

  const getMealIcon = (mealName) => {
    const name = mealName.toLowerCase();
    if (name.includes('breakfast')) return '🌅';
    if (name.includes('lunch')) return '☀️';
    if (name.includes('dinner')) return '🌙';
    if (name.includes('snack')) return '🍎';
    return '🍽️';
  };

  const getCalorieRange = (calories) => {
    if (calories < 1500) return 'low';
    if (calories < 2000) return 'medium';
    return 'high';
  };

  const filteredMealPlans = mealPlans?.filter(plan => {
    if (selectedFilter === 'all') return true;
    const totalCals = calculateTotalMealPlanCalories(plan);
    return getCalorieRange(totalCals) === selectedFilter;
  });

  return (
    <section className="bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 min-h-screen py-10">
      <div className="container mx-auto px-4">
        {/* Header Section */}
        <div className="text-center mb-12">
          <div className="relative inline-block">
            <h1 className="text-4xl lg:text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-yellow-500 mb-4">
              Meal Plans & Nutrition
            </h1>
          </div>
          <p className="text-gray-300 text-lg max-w-2xl mx-auto leading-relaxed">
            Discover a variety of meal plans specially designed to meet your nutritional needs and health goals
          </p>
        </div>

        {/* Filter Section */}
        <div className="mb-8 flex justify-center">
          <div className="bg-black/30 backdrop-blur-sm rounded-2xl p-2 border border-orange-400/20">
            <div className="flex space-x-2">
              {[
                { key: 'all', label: 'All Plans', icon: '🍽️' },
                { key: 'low', label: 'Low Calorie', icon: '🥗' },
                { key: 'medium', label: 'Medium Calorie', icon: '🍲' },
                { key: 'high', label: 'High Calorie', icon: '🥩' }
              ].map(filter => (
                <button
                  key={filter.key}
                  onClick={() => setSelectedFilter(filter.key)}
                  className={`px-4 py-2 rounded-xl transition-all duration-300 flex items-center space-x-2 ${selectedFilter === filter.key
                      ? 'bg-gradient-to-r from-orange-500 to-yellow-500 text-white shadow-lg transform scale-105'
                      : 'text-gray-300 hover:text-orange-400 hover:bg-white/5'
                    }`}
                >
                  <span>{filter.icon}</span>
                  <span className="text-sm font-medium">{filter.label}</span>
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Stats Overview */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
          <div className="bg-gradient-to-br from-orange-500/20 to-yellow-500/20 backdrop-blur-sm rounded-2xl p-6 border border-orange-400/30">
            <div className="flex items-center justify-between">
              <div>
                <h3 className="text-orange-400 font-semibold">Total Plans</h3>
                <p className="text-3xl font-bold text-white">{mealPlans?.length || 0}</p>
              </div>
              <div className="text-4xl">📊</div>
            </div>
          </div>

          <div className="bg-gradient-to-br from-green-500/20 to-emerald-500/20 backdrop-blur-sm rounded-2xl p-6 border border-green-400/30">
            <div className="flex items-center justify-between">
              <div>
                <h3 className="text-green-400 font-semibold">Average Calories</h3>
                <p className="text-3xl font-bold text-white">
                  {mealPlans?.length ? Math.round(mealPlans.reduce((acc, plan) => acc + calculateTotalMealPlanCalories(plan), 0) / mealPlans.length) : 0}
                </p>
              </div>
              <div className="text-4xl">⚡</div>
            </div>
          </div>

          <div className="bg-gradient-to-br from-purple-500/20 to-pink-500/20 backdrop-blur-sm rounded-2xl p-6 border border-purple-400/30">
            <div className="flex items-center justify-between">
              <div>
                <h3 className="text-purple-400 font-semibold">Available Meals</h3>
                <p className="text-3xl font-bold text-white">
                  {mealPlans?.reduce((acc, plan) => acc + plan.meals.length, 0) || 0}
                </p>
              </div>
              <div className="text-4xl">🍽️</div>
            </div>
          </div>
        </div>

        {/* Meal Plans Accordion */}
        <div className="space-y-6">
          {filteredMealPlans?.length > 0 ? (
            filteredMealPlans.map((plan, idx) => {
              const totalCalories = calculateTotalMealPlanCalories(plan);
              const calorieRange = getCalorieRange(totalCalories);

              return (
                <details key={plan.id} className="bg-black/40 backdrop-blur-sm rounded-2xl border border-orange-400/20 overflow-hidden hover:border-orange-400/40 transition-all duration-300 hover:shadow-2xl hover:shadow-orange-500/10 group">
                  <summary className="cursor-pointer p-6 hover:bg-gradient-to-r hover:from-orange-500/10 hover:to-yellow-500/10 transition-all duration-300 list-none">
                    <div className='flex items-center justify-between w-full'>
                      <div className='flex items-center text-orange-400 lg:text-2xl'>
                        <span className="text-3xl me-4">🍽️</span>
                        <span className="font-bold">{plan.name}</span>
                      </div>
                      <div className="flex items-center space-x-4">
                        <div className={`px-3 py-1 rounded-full text-xs font-bold ${calorieRange === 'low' ? 'bg-green-500/20 text-green-400 border border-green-400/30' :
                            calorieRange === 'medium' ? 'bg-yellow-500/20 text-yellow-400 border border-yellow-400/30' :
                              'bg-red-500/20 text-red-400 border border-red-400/30'
                          }`}>
                          {totalCalories} kcal
                        </div>
                        <div className="text-2xl group-open:rotate-180 transition-transform duration-300">🔽</div>
                      </div>
                    </div>
                  </summary>
                  <div className="bg-gradient-to-br from-gray-900/50 to-gray-800/50 p-6">
                    <div className="space-y-6">
                      {plan.meals.map((meal, mIdx) => {
                        const mealNutrients = calculateTotalNutrients(meal);
                        const mealCalories = calculateTotalCalories(meal);

                        return (
                          <div key={mIdx} className="bg-black/30 rounded-xl p-6 border border-gray-700/50 hover:border-orange-400/30 transition-all duration-300">
                            <div className="flex items-center justify-between mb-4">
                              <h3 className="text-xl font-bold text-orange-400 flex items-center">
                                <span className="text-2xl me-3">{getMealIcon(meal.name)}</span>
                                {meal.name}
                              </h3>
                              <div className="bg-gradient-to-r from-orange-500/20 to-yellow-500/20 px-4 py-2 rounded-full border border-orange-400/30">
                                <span className="text-orange-400 font-bold">{mealCalories} kcal</span>
                              </div>
                            </div>

                            {/* Nutritional Summary */}
                            <div className="grid grid-cols-3 gap-4 mb-4">
                              <div className="text-center bg-blue-500/10 rounded-lg p-3 border border-blue-400/20">
                                <div className="text-blue-400 font-bold text-lg">{mealNutrients.protein.toFixed(1)}g</div>
                                <div className="text-gray-400 text-sm">Protein</div>
                              </div>
                              <div className="text-center bg-green-500/10 rounded-lg p-3 border border-green-400/20">
                                <div className="text-green-400 font-bold text-lg">{mealNutrients.carb.toFixed(1)}g</div>
                                <div className="text-gray-400 text-sm">Carbs</div>
                              </div>
                              <div className="text-center bg-yellow-500/10 rounded-lg p-3 border border-yellow-400/20">
                                <div className="text-yellow-400 font-bold text-lg">{mealNutrients.fat.toFixed(1)}g</div>
                                <div className="text-gray-400 text-sm">Fat</div>
                              </div>
                            </div>

                            {/* Food Items Table */}
                            <div className="overflow-x-auto rounded-xl border border-gray-700/50">
                              <table className="w-full text-sm bg-gradient-to-br from-gray-900/80 to-black/80 text-white">
                                <thead className="text-xs uppercase bg-gradient-to-r from-orange-500/20 to-yellow-500/20 text-orange-400 border-b border-orange-400/30">
                                  <tr>
                                    <th className="px-4 py-3 text-left">Food Item</th>
                                    <th className="px-4 py-3 text-center">Amount</th>
                                    <th className="px-4 py-3 text-center">Calories</th>
                                    <th className="px-4 py-3 text-center">Protein</th>
                                    <th className="px-4 py-3 text-center">Carbs</th>
                                    <th className="px-4 py-3 text-center">Fat</th>
                                  </tr>
                                </thead>
                                <tbody>
                                  {meal.items.map((item, i) => (
                                    <tr key={i} className="text-center border-b border-gray-700/30 hover:bg-orange-400/5 transition-colors duration-200">
                                      <td className="px-4 py-3 text-left font-medium text-gray-200">{item.name}</td>
                                      <td className="px-4 py-3 text-orange-400 font-semibold">{item.amount}</td>
                                      <td className="px-4 py-3 text-yellow-400 font-bold">{item.kcal}</td>
                                      <td className="px-4 py-3 text-blue-400">{item.protein}g</td>
                                      <td className="px-4 py-3 text-green-400">{item.carb}g</td>
                                      <td className="px-4 py-3 text-yellow-400">{item.fat}g</td>
                                    </tr>
                                  ))}
                                </tbody>
                              </table>
                            </div>

                            {/* Preparation Method */}
                            {meal.method && (
                              <div className="mt-4 bg-gradient-to-br from-purple-500/10 to-pink-500/10 rounded-lg p-4 border border-purple-400/20">
                                <div className="flex items-start">
                                  <span className="text-2xl me-3">👨‍🍳</span>
                                  <div>
                                    <h4 className="text-purple-400 font-bold mb-2">Preparation Method:</h4>
                                    <p className="text-gray-300 leading-relaxed">{meal.method}</p>
                                  </div>
                                </div>
                              </div>
                            )}
                          </div>
                        );
                      })}
                    </div>
                  </div>
                </details>
              );
            })
          ) : (
            <div className="text-center py-20">
              <div className="text-6xl mb-4">🍽️</div>
              <p className="text-gray-400 text-xl">No meal plans available at the moment</p>
              <p className="text-gray-500 mt-2">Try changing the filter or check back later</p>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}