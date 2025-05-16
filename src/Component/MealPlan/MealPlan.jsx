import React, { useContext } from 'react';
import FatsProduc from "../../assets/FatsProduc.jpeg";
import { Link } from 'react-router-dom';
import { Accordion } from 'flowbite-react';
import mealPlans from '../../Data/nutritionPlans.json';
import { UserContext } from '../../Context/UserContext';

export default function MealPlan() {
  const { token } = useContext(UserContext);

  const calculateTotalCalories = (meal) =>
    meal.items.reduce((acc, food) => acc + (parseFloat(food.kcal) || 0), 0);

  const calculateTotalMealPlanCalories = (plan) =>
    plan.meals.reduce((acc, meal) => acc + calculateTotalCalories(meal), 0);

  return (
    <section className="bg-[rgb(102,102,102,.3)] min-h-screen py-10">
      <div className="container mx-auto">
            <Accordion alwaysOpen={false}>
          {mealPlans?.length > 0 ? (
            mealPlans.map((plan, idx) => (
              <Accordion.Panel key={plan.id}>
                <Accordion.Title >
              <div className='text-orange-400 lg:text-2xl '>
                  <i className="fa-solid fa-utensils text-3xl me-4" style={{ color: '#f28202' }}></i>
                   {plan.name} – المجموع: {calculateTotalMealPlanCalories(plan)} كيلو كالوري
              </div>
                </Accordion.Title>
                <Accordion.Content>
                  {plan.meals.map((meal, mIdx) => (
                    <div key={mIdx} className="mb-4">
                      <h3 className="text-xl font-bold text-orange-400 mb-2">{meal.name}</h3>
                      <table className="w-full text-sm bg-black text-white mb-4">
                        <thead className="text-xs uppercase bg-gray-900 text-orange-400">
                          <tr>
                            <th>المنتج</th><th>الكمية</th><th>السعرات الحرارية</th><th>البروتين</th><th>الكربوهيدرات</th><th>الدهون</th>
                          </tr>
                        </thead>
                        <tbody>
                          {meal.items.map((item, i) => (
                            <tr key={i} className="text-center border-b border-gray-700">
                              <td>{item.name}</td>
                              <td>{item.amount}</td>
                              <td>{item.kcal}</td>
                              <td>{item.protein}</td>
                              <td>{item.carb}</td>
                              <td>{item.fat}</td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                      {meal.method && <p><strong>طريقة التحضير: </strong>{meal.method}</p>}
                    </div>
                  ))}
                </Accordion.Content>
              </Accordion.Panel>
            ))
          ) : (
            <p className="text-white">لا توجد خطط وجبات حالياً.</p>
          )}
        </Accordion>

       
      </div>
    </section>
  );
}
