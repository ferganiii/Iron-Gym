import React, { useState } from 'react';

const mealPlans = [
  {
    "id": 1,
    "name": "Cutting Plan",
    "meals": [
      {
        "name": "First Meal: Breakfast",
        "items": [
          { "name": "Whey Protein", "amount": "1 scoop", "protein": 24, "carb": 3, "fat": 1, "kcal": 120 },
          { "name": "Oats", "amount": "125g", "protein": 15, "carb": 73.75, "fat": 8.63, "kcal": 433.75 },
          { "name": "Walnut", "amount": "30g", "protein": 4.56, "carb": 4.08, "fat": 19, "kcal": 196 }
        ],
        "method": "Mix the oats with nuts and protein, then add water and stir."
      },
      {
        "name": "Second Meal: Snack",
        "items": [
          { "name": "Banana", "amount": "100g", "protein": 1.1, "carb": 23, "fat": 0, "kcal": 89 },
          { "name": "Walnut", "amount": "30g", "protein": 4.56, "carb": 4.08, "fat": 19, "kcal": 196.8 },
          { "name": "Boiled Egg", "amount": "2 eggs", "protein": 12, "carb": 2, "fat": 10, "kcal": 140 },
          { "name": "Multivitamin", "amount": "1 tablet", "protein": 0, "carb": 0, "fat": 0, "kcal": 0 }
        ]
      },
      {
        "name": "Third Meal: Lunch",
        "items": [
          { "name": "Chicken Breast", "amount": "200g", "protein": 48, "carb": 0, "fat": 3.6, "kcal": 242 },
          { "name": "Basmati Rice", "amount": "35g", "protein": 2.52, "carb": 26.95, "fat": 0.28, "kcal": 121 },
          { "name": "Boiled Egg", "amount": "1 egg", "protein": 6, "carb": 1, "fat": 5, "kcal": 77 },
          { "name": "Salad", "amount": "Medium bowl", "protein": 0, "carb": 5, "fat": 3, "kcal": 50 }
        ]
      },
      {
        "name": "Fourth Meal: Pre-workout Snack",
        "items": [
          { "name": "Coffee (no sugar)", "amount": "1 cup", "protein": 0, "carb": 0, "fat": 0, "kcal": 2 },
          { "name": "Banana", "amount": "100g", "protein": 1.1, "carb": 23, "fat": 0, "kcal": 89 }
        ]
      },
      {
        "name": "Fifth Meal: Post-workout",
        "items": [
          { "name": "Chicken Breast", "amount": "200g", "protein": 48, "carb": 0, "fat": 3.6, "kcal": 242 },
          { "name": "Basmati Rice", "amount": "35g", "protein": 2.52, "carb": 26.95, "fat": 0.28, "kcal": 121 },
          { "name": "Salad", "amount": "Medium bowl", "protein": 0, "carb": 5, "fat": 3, "kcal": 50 }
        ]
      }
    ]
  },
  {
    "id": 2,
    "name": "Bulking Plan",
    "meals": [
      {
        "name": "First Meal: Breakfast",
        "items": [
          { "name": "Oats", "amount": "150g", "protein": 18, "carb": 88, "fat": 10, "kcal": 520 },
          { "name": "Peanut Butter", "amount": "2 tbsp", "protein": 8, "carb": 6, "fat": 16, "kcal": 188 },
          { "name": "Banana", "amount": "100g", "protein": 1.1, "carb": 23, "fat": 0, "kcal": 89 }
        ]
      },
      {
        "name": "Second Meal: Snack",
        "items": [
          { "name": "Greek Yogurt", "amount": "200g", "protein": 20, "carb": 8, "fat": 6, "kcal": 146 },
          { "name": "Honey", "amount": "1 tbsp", "protein": 0, "carb": 17, "fat": 0, "kcal": 64 },
          { "name": "Walnuts", "amount": "30g", "protein": 4.56, "carb": 4, "fat": 19, "kcal": 196 }
        ]
      },
      {
        "name": "Third Meal: Lunch",
        "items": [
          { "name": "Beef Steak", "amount": "200g", "protein": 50, "carb": 0, "fat": 12, "kcal": 350 },
          { "name": "Brown Rice", "amount": "50g", "protein": 4, "carb": 38, "fat": 1.5, "kcal": 180 },
          { "name": "Avocado", "amount": "50g", "protein": 1, "carb": 4, "fat": 8, "kcal": 80 }
        ]
      },
      {
        "name": "Fourth Meal: Pre-workout",
        "items": [
          { "name": "Banana", "amount": "100g", "protein": 1.1, "carb": 23, "fat": 0, "kcal": 89 },
          { "name": "Dates", "amount": "3 pieces", "protein": 1.5, "carb": 20, "fat": 0, "kcal": 90 }
        ]
      },
      {
        "name": "Fifth Meal: Post-workout",
        "items": [
          { "name": "Whey Protein", "amount": "1 scoop", "protein": 24, "carb": 3, "fat": 1, "kcal": 120 },
          { "name": "Sweet Potato", "amount": "100g", "protein": 2, "carb": 20, "fat": 0, "kcal": 90 }
        ]
      }
    ]
  },
  {
    "id": 3,
    "name": "Cutting Plan 2",
    "meals": [
      {
        "name": "First Meal: Breakfast",
        "items": [
          { "name": "Scrambled Eggs", "amount": "3 eggs", "protein": 18, "carb": 1, "fat": 15, "kcal": 210 },
          { "name": "Spinach", "amount": "100g", "protein": 2.9, "carb": 3.6, "fat": 0.5, "kcal": 23 },
          { "name": "Avocado", "amount": "50g", "protein": 1, "carb": 4, "fat": 8, "kcal": 80 }
        ]
      },
      {
        "name": "Second Meal: Snack",
        "items": [
          { "name": "Greek Yogurt", "amount": "150g", "protein": 15, "carb": 6, "fat": 5, "kcal": 130 },
          { "name": "Almonds", "amount": "20g", "protein": 4, "carb": 3, "fat": 10, "kcal": 120 }
        ]
      },
      {
        "name": "Third Meal: Lunch",
        "items": [
          { "name": "Salmon", "amount": "200g", "protein": 40, "carb": 0, "fat": 22, "kcal": 280 },
          { "name": "Quinoa", "amount": "50g", "protein": 8, "carb": 30, "fat": 2, "kcal": 222 },
          { "name": "Salad", "amount": "Medium bowl", "protein": 2, "carb": 5, "fat": 5, "kcal": 50 }
        ]
      },
      {
        "name": "Fourth Meal: Pre-workout",
        "items": [
          { "name": "Banana", "amount": "100g", "protein": 1.1, "carb": 23, "fat": 0, "kcal": 89 }
        ]
      },
      {
        "name": "Fifth Meal: Post-workout",
        "items": [
          { "name": "Whey Protein", "amount": "1 scoop", "protein": 24, "carb": 3, "fat": 1, "kcal": 120 },
          { "name": "Sweet Potato", "amount": "100g", "protein": 2, "carb": 20, "fat": 0, "kcal": 90 }
        ]
      }
    ]
  },
  {
    "id": 4,
    "name": "Bulking Plan 2",
    "meals": [
      {
        "name": "First Meal: Breakfast",
        "items": [
          { "name": "Oats", "amount": "200g", "protein": 20, "carb": 90, "fat": 10, "kcal": 600 },
          { "name": "Peanut Butter", "amount": "2 tbsp", "protein": 8, "carb": 6, "fat": 16, "kcal": 188 },
          { "name": "Banana", "amount": "100g", "protein": 1.1, "carb": 23, "fat": 0, "kcal": 89 }
        ]
      },
      {
        "name": "Second Meal: Snack",
        "items": [
          { "name": "Greek Yogurt", "amount": "200g", "protein": 20, "carb": 8, "fat": 6, "kcal": 146 },
          { "name": "Honey", "amount": "1 tbsp", "protein": 0, "carb": 17, "fat": 0, "kcal": 64 },
          { "name": "Walnuts", "amount": "30g", "protein": 4.56, "carb": 4, "fat": 19, "kcal": 196 }
        ]
      },
      {
        "name": "Third Meal: Lunch",
        "items": [
          { "name": "Beef Steak", "amount": "250g", "protein": 62.5, "carb": 0, "fat": 15, "kcal": 450 },
          { "name": "Brown Rice", "amount": "70g", "protein": 5.6, "carb": 50, "fat": 2, "kcal": 225 },
          { "name": "Avocado", "amount": "60g", "protein": 1.2, "carb": 5, "fat": 12, "kcal": 108 }
        ]
      },
      {
        "name": "Fourth Meal: Pre-workout",
        "items": [
          { "name": "Banana", "amount": "100g", "protein": 1.1, "carb": 23, "fat": 0, "kcal": 89 },
          { "name": "Dates", "amount": "4 pieces", "protein": 2, "carb": 28, "fat": 0, "kcal": 120 }
        ]
      },
      {
        "name": "Fifth Meal: Post-workout",
        "items": [
          { "name": "Whey Protein", "amount": "2 scoops", "protein": 48, "carb": 6, "fat": 2, "kcal": 240 },
          { "name": "Sweet Potato", "amount": "150g", "protein": 3, "carb": 30, "fat": 0, "kcal": 135 }
        ]
      }
    ]
  },
  {
    "id": 5,
    "name": "Cutting Plan 3",
    "meals": [
      {
        "name": "First Meal: Breakfast",
        "items": [
          { "name": "Egg Whites", "amount": "5 egg whites", "protein": 20, "carb": 0, "fat": 0, "kcal": 100 },
          { "name": "Oats", "amount": "100g", "protein": 10, "carb": 60, "fat": 6, "kcal": 400 },
          { "name": "Strawberries", "amount": "100g", "protein": 1, "carb": 7, "fat": 0.5, "kcal": 35 }
        ]
      },
      {
        "name": "Second Meal: Snack",
        "items": [
          { "name": "Greek Yogurt", "amount": "200g", "protein": 15, "carb": 5, "fat": 3, "kcal": 110 },
          { "name": "Chia Seeds", "amount": "10g", "protein": 1.2, "carb": 1.5, "fat": 3.3, "kcal": 60 }
        ]
      },
      {
        "name": "Third Meal: Lunch",
        "items": [
          { "name": "Chicken Breast", "amount": "200g", "protein": 48, "carb": 0, "fat": 3, "kcal": 242 },
          { "name": "Sweet Potato", "amount": "100g", "protein": 2, "carb": 20, "fat": 0, "kcal": 90 },
          { "name": "Broccoli", "amount": "100g", "protein": 3.7, "carb": 7, "fat": 0.4, "kcal": 34 }
        ]
      },
      {
        "name": "Fourth Meal: Pre-workout",
        "items": [
          { "name": "Apple", "amount": "1 medium", "protein": 0.5, "carb": 25, "fat": 0, "kcal": 95 }
        ]
      },
      {
        "name": "Fifth Meal: Post-workout",
        "items": [
          { "name": "Whey Protein", "amount": "1 scoop", "protein": 24, "carb": 3, "fat": 1, "kcal": 120 },
          { "name": "Brown Rice", "amount": "50g", "protein": 4, "carb": 38, "fat": 1.5, "kcal": 180 }
        ]
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
    if (name.includes('pre-workout')) return '💪';
    if (name.includes('post-workout')) return '⚡';
    return '🍽️';
  };

  const getCalorieRange = (calories) => {
    if (calories < 2000) return 'low';
    if (calories < 2800) return 'medium';
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
              🍽️ Meal Plans & Nutrition 💪
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
                { key: 'low', label: 'Cutting Plans', icon: '🥗' },
                { key: 'medium', label: 'Medium Plans', icon: '🍲' }
                
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
                        <span className="text-3xl me-4">
                          {plan.name.includes('Cutting') ? '📉' : '💪'}
                        </span>
                        <span className="font-bold">{plan.name}</span>
                      </div>
                      <div className="flex items-center space-x-4">
                        <div className={`px-3 py-1 rounded-full text-xs font-bold ${calorieRange === 'low' ? 'bg-green-500/20 text-green-400 border border-green-400/30' :
                            calorieRange === 'medium' ? 'bg-yellow-500/20 text-yellow-400 border border-yellow-400/30' :
                              'bg-red-500/20 text-red-400 border border-red-400/30'
                          }`}>
                          {Math.round(totalCalories)} kcal
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
                                <span className="text-orange-400 font-bold">{Math.round(mealCalories)} kcal</span>
                              </div>
                            </div>

                            {/* Nutritional Summary */}
                            <div className="grid grid-cols-3 gap-4 mb-4">
                              <div className="text-center bg-blue-500/10 rounded-lg p-3 border border-blue-400/20">
                                <div className="text-blue-400 font-bold text-lg">{mealNutrients.protein.toFixed(1)}g</div>
                                <div className="text-gray-400 text-sm">Protein 💪</div>
                              </div>
                              <div className="text-center bg-green-500/10 rounded-lg p-3 border border-green-400/20">
                                <div className="text-green-400 font-bold text-lg">{mealNutrients.carb.toFixed(1)}g</div>
                                <div className="text-gray-400 text-sm">Carbs 🌾</div>
                              </div>
                              <div className="text-center bg-yellow-500/10 rounded-lg p-3 border border-yellow-400/20">
                                <div className="text-yellow-400 font-bold text-lg">{mealNutrients.fat.toFixed(1)}g</div>
                                <div className="text-gray-400 text-sm">Fat 🥑</div>
                              </div>
                            </div>

                            {/* Food Items Table */}
                            <div className="overflow-x-auto rounded-xl border border-gray-700/50">
                              <table className="w-full text-sm bg-gradient-to-br from-gray-900/80 to-black/80 text-white">
                                <thead className="text-xs uppercase bg-gradient-to-r from-orange-500/20 to-yellow-500/20 text-orange-400 border-b border-orange-400/30">
                                  <tr>
                                    <th className="px-4 py-3 text-left">Food Item 🍽️</th>
                                    <th className="px-4 py-3 text-center">Amount ⚖️</th>
                                    <th className="px-4 py-3 text-center">Calories 🔥</th>
                                    <th className="px-4 py-3 text-center">Protein 💪</th>
                                    <th className="px-4 py-3 text-center">Carbs 🌾</th>
                                    <th className="px-4 py-3 text-center">Fat 🥑</th>
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
              <p className="text-gray-500 mt-2">Try changing the filter or check back later 😊</p>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}