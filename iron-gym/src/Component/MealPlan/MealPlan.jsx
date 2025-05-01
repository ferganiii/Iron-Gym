// MealPlan.jsx
import React, { useContext, useEffect, useState } from 'react';
import FatsProduc from "../../assets/FatsProduc.jpeg";
import { Link } from 'react-router-dom';
import axios from 'axios';
import { UserContext } from '../../Context/UserContext';
import { Accordion } from 'flowbite-react';

export default function MealPlan() {
  const [mealPlans, setMealPlans] = useState([]);
  const [editingPlan, setEditingPlan] = useState(null);
  const [newMealPlan, setNewMealPlan] = useState({
    name: '',
    meals: Array.from({ length: 5 }, (_, i) => ({
      name: `Meal ${i + 1}`,
      items: [{ name: '', amount: '', sthermal: 0, protien: 0, carb: 0, fat: 0 }],
    })),
  });
  const { token } = useContext(UserContext);

  const api = "https://gym-production-8217.up.railway.app/api/bulk";

  // Fetch Meal Plans
  async function getMealPlans() {
    try {
      const { data } = await axios.get(api, {
        headers: { Authorization: `Bearer ${token}` },
      });
      setMealPlans(data.docs || []);
    } catch (error) {
      console.error("Error fetching meal plans:", error);
    }
  }

  useEffect(() => { getMealPlans(); }, []);

  const calculateTotalCalories = (meal) =>
    meal.items.reduce((acc, food) => acc + (parseFloat(food.sthermal) || 0), 0);

  const calculateTotalMealPlanCalories = (plan) =>
    plan.meals.reduce((acc, meal) => acc + calculateTotalCalories(meal), 0);

  // Add Meal Plan
  async function AddMealPlan() {
    try {
      const { data } = await axios.post(api, newMealPlan, {
        headers: { Authorization: `Bearer ${token}` },
      });
      if (data.message === 'success') {
        setMealPlans(prev => [...prev, data.docs]);
        resetNewMealPlan();
      }
    } catch (error) {
      console.error("Error adding meal plan:", error);
    }
  }

  // Delete Meal Plan
  async function DeleteMealPlan(id) {
    try {
      await axios.delete(`${api}/${id}`, {
        headers: { Authorization: `Bearer ${token}` },
      });
      setMealPlans(prev => prev.filter(plan => plan._id !== id));
    } catch (error) {
      console.error("Error deleting meal plan:", error);
    }
  }

  // Update Meal Plan
  async function UpdateMealPlan() {
    try {
      const { data } = await axios.put(`${api}/${editingPlan._id}`, editingPlan, {
        headers: { Authorization: `Bearer ${token}` },
      });
      if (data.message === "success") {
        getMealPlans();
        setEditingPlan(null);
      }
    } catch (error) {
      console.error("Error updating meal plan:", error);
    }
  }

  const resetNewMealPlan = () => {
    setNewMealPlan({
      name: '',
      meals: Array.from({ length: 5 }, (_, i) => ({
        name: `Meal ${i + 1}`,
        items: [{ name: '', amount: '', sthermal: 0, protien: 0, carb: 0, fat: 0 }],
      })),
    });
  };

  const handlePlanChange = (e) => {
    const { name, value } = e.target;
    setNewMealPlan(prev => ({ ...prev, [name]: value }));
  };

  const handleMealItemChange = (planSetter, plan, mealIndex, itemIndex, e) => {
    const { name, value } = e.target;
    const updatedMeals = [...plan.meals];
    updatedMeals[mealIndex].items[itemIndex][name] = value;
    planSetter({ ...plan, meals: updatedMeals });
  };

  const handleAddMealItem = (planSetter, plan, mealIndex) => {
    const updatedMeals = [...plan.meals];
    updatedMeals[mealIndex].items.push({ name: '', amount: '', sthermal: 0, protien: 0, carb: 0, fat: 0 });
    planSetter({ ...plan, meals: updatedMeals });
  };

  return (
    <section className="bg-[rgb(102,102,102,.3)] min-h-screen py-10">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
          <div className="max-w-sm bg-gray-500 border border-gray-200 rounded-lg text-black shadow-sm">
            <Link to="/">
              <img src={FatsProduc} alt="Meal Plan" className="w-full h-auto rounded-t-lg" />
            </Link>
            <p className="p-4 text-2xl">Cutting Meal Plan Example</p>
          </div>
        </div>

        <Accordion alwaysOpen={false}>
          {mealPlans.length > 0 ? (
            mealPlans.map((plan, idx) => (
              <Accordion.Panel key={plan._id}>
                <Accordion.Title>
                  🧾 {plan.name} – Total: {calculateTotalMealPlanCalories(plan)} kcal
                </Accordion.Title>
                <Accordion.Content>
                  {plan.meals.map((meal, mIdx) => (
                    <div key={mIdx} className="mb-4">
                      <h3 className="text-xl font-bold text-orange-400 mb-2">{meal.name}</h3>
                      <table className="w-full text-sm bg-black text-white mb-4">
                        <thead className="text-xs uppercase bg-gray-900 text-orange-400">
                          <tr>
                            <th>Item</th><th>Amount</th><th>Calories</th><th>Protein</th><th>Carb</th><th>Fat</th>
                          </tr>
                        </thead>
                        <tbody>
                          {meal.items.map((item, i) => (
                            <tr key={i} className="text-center border-b border-gray-700">
                              <td>{item.name}</td>
                              <td>{item.amount}</td>
                              <td>{item.sthermal}</td>
                              <td>{item.protien}</td>
                              <td>{item.carb}</td>
                              <td>{item.fat}</td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>
                  ))}
                  <div className="flex gap-4 mt-4">
                    <button onClick={() => setEditingPlan(plan)} className="px-4 py-2 bg-yellow-500 text-white rounded-md">Edit</button>
                    <button onClick={() => DeleteMealPlan(plan._id)} className="px-4 py-2 bg-red-600 text-white rounded-md">Delete</button>
                  </div>
                </Accordion.Content>
              </Accordion.Panel>
            ))
          ) : (
            <p className="text-white">No meal plans found.</p>
          )}
        </Accordion>

        {/* Edit Section */}
        {editingPlan && (
          <div className="mt-10 p-6 bg-yellow-100 rounded-lg shadow-md">
            <h2 className="text-2xl font-bold mb-4">✏️ Edit Meal Plan</h2>
            <input
              type="text"
              name="name"
              value={editingPlan.name}
              onChange={(e) => setEditingPlan(prev => ({ ...prev, name: e.target.value }))}
              className="w-full p-3 mb-4 border rounded"
              placeholder="Meal Plan Name"
            />
            {editingPlan.meals.map((meal, mIdx) => (
              <div key={mIdx} className="mb-4">
                <h3 className="text-lg font-semibold">{meal.name}</h3>
                {meal.items.map((item, iIdx) => (
                  <div key={iIdx} className="flex gap-2 mb-2">
                    {['name', 'amount', 'sthermal', 'protien'].map((key) => (
                      <input
                        key={key}
                        type="text"
                        name={key}
                        value={item[key]}
                        onChange={(e) => handleMealItemChange(setEditingPlan, editingPlan, mIdx, iIdx, e)}
                        placeholder={key}
                        className="p-2 border rounded w-full"
                      />
                    ))}
                  </div>
                ))}
                <button onClick={() => handleAddMealItem(setEditingPlan, editingPlan, mIdx)} className="bg-blue-600 text-white px-3 py-1 rounded">Add Item</button>
              </div>
            ))}
            <button onClick={UpdateMealPlan} className="mt-4 py-2 px-6 bg-green-600 text-white rounded-lg">Save Changes</button>
          </div>
        )}

        {/* Add Section */}
        <div className="mt-10 p-6 bg-gray-500 rounded-lg shadow-md">
  <h2 className="text-2xl font-bold mb-4">➕ Add New Meal Plan</h2>
  <form onSubmit={(e) => { e.preventDefault(); AddMealPlan(); }}>
    <input
      type="text"
      name="name"
      value={newMealPlan.name}
      onChange={handlePlanChange}
      className="w-full p-3 mb-4 border rounded text-black"
      placeholder="Meal Plan Name"
      required
    />
    {newMealPlan.meals.map((meal, mIdx) => (
      <div key={mIdx} className="mb-6">
        <h3 className="text-lg font-semibold mb-2">{meal.name}</h3>
        {meal.items.map((item, iIdx) => (
          <div key={iIdx} className="mb-4 p-4 bg-gray-400 rounded-lg">
            {['name', 'amount', 'sthermal', 'protien'].map((key) => (
              <div key={key} className="mb-3">
                <label className="block text-white font-medium mb-1 capitalize">
                  {key}
                </label>
                <input
                  type="text"
                  name={key}
                  value={item[key]}
                  onChange={(e) => handleMealItemChange(setNewMealPlan, newMealPlan, mIdx, iIdx, e)}
                  placeholder={`Enter ${key}`}
                  className="text-black p-2 border rounded w-full"
                />
              </div>
            ))}
          </div>
        ))}
        <button
          type="button"
          onClick={() => handleAddMealItem(setNewMealPlan, newMealPlan, mIdx)}
          className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
        >
          ➕ Add Item
        </button>
      </div>
    ))}
    <button type="submit" className="mt-6 py-3 px-8 bg-green-600 text-white rounded-lg hover:bg-green-700">
      ✅ Save Meal Plan
    </button>
  </form>
</div>

      </div>
    </section>
  );
}
