
import bg from "../../assets/bg.jpg"; 
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Calculators = () => {
  const [formData, setFormData] = useState({
    gender: "",
    age: "",
    weight: "",
    height: "",
    bodyFat: "",
    goal: "",
    proteinQuantity: "",
    activityLevel: "",
    steps: "",
  });

  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(null);
    setLoading(true); 

    const preparedData = {
      gender: formData.gender,
      age: Number(formData.age),
      weight: Number(formData.weight),
      height: Number(formData.height),
      bodyFat: formData.bodyFat ? `${formData.bodyFat}%` : null,
      goal:
        formData.goal === "lose"
          ? "lose weight"
          : formData.goal === "gain"
          ? "gain weight"
          : "maintain weight",
      proteinQuantity: formData.proteinQuantity,
      activityLevel: formData.activityLevel,
      stepsNumber: formData.steps ? Number(formData.steps) : 0,
    };

    try {
      const token = localStorage.getItem("token");

      const res = await fetch(
        "https://gym-production-8217.up.railway.app/api/calculate",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
          body: JSON.stringify(preparedData),
        }
      );

      const data = await res.json();

      if (!res.ok) {
        if (res.status === 401) {
          setError("Unauthorized: Please login first.");
        } else {
          setError(data.message || "Something went wrong.");
        }
        setLoading(false); 
        return;
      }

      navigate("/result", { state: data });
    } catch (err) {
      setError("An error occurred. Please try again.");
      setLoading(false); 
      console.error("Error:", err);
    }
  };

  return (
    <div
      className="min-h-screen text-white p-6 bg-cover bg-center relative "
      style={{ backgroundImage: `url(${bg})` }}
    >
      <div className="max-w-5xl ml-[350px] mt-14 mb-10">
        <h2 className="text-orange-500 text-4xl font-bold mb-6">
          Calculating Your Daily Calorie Needs
        </h2>
        <p className="text-2xl font-bold  text-gray-300 mb-4 ">
          Discover exactly what your body needs every single day to perform at
          its best. From how many calories you should consume, to the exact
          amount of protein, carbs, and fats your body requires.
        </p>
        <p className="text-2xl font-bold text-gray-300">
          To use the calculator, please provide the following information:
        </p>
      </div>

      <form
        onSubmit={handleSubmit}
        className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10"
      >
        {/* Left Column - Body Composition */}
        <div>
          <h3 className="text-4xl font-bold text-orange-500 mb-6">
            Body Composition
          </h3>

          {/* Gender */}
          <div className="mb-6">
            <label className="block mb-2 text-lg">Gender *</label>
            <div className="flex gap-4">
              <button
                type="button"
                onClick={() => setFormData({ ...formData, gender: "male" })}
                className={`px-20 py-4 rounded-2xl text-base ${
                  formData.gender === "male" ? "bg-orange-500" : "bg-gray-700"
                }`}
              >
                Male
              </button>
              <button
                type="button"
                onClick={() => setFormData({ ...formData, gender: "female" })}
                className={`px-20 py-4 rounded-2xl text-base ${
                  formData.gender === "female"
                    ? "bg-orange-500"
                    : "bg-gray-700"
                }`}
              >
                Female
              </button>
            </div>
          </div>

          {/* Age */}
          <div className="mb-6">
            <label className="block mb-2 text-lg">Age *</label>
            <input
              type="number"
              name="age"
              onChange={handleChange}
              className="w-full p-4 text-base bg-gray-800 rounded-2xl"
            />
          </div>

          {/* Weight */}
          <div className="mb-6">
            <label className="block mb-2 text-lg">Weight (kg) *</label>
            <input
              type="number"
              name="weight"
              onChange={handleChange}
              className="w-full p-4 text-base bg-gray-800 rounded-2xl"
            />
          </div>

          {/* Height */}
          <div className="mb-6">
            <label className="block mb-2 text-lg">Height (cm) *</label>
            <input
              type="number"
              name="height"
              onChange={handleChange}
              className="w-full p-4 text-base bg-gray-800 rounded-2xl"
            />
          </div>

          {/* Body Fat */}
          <div className="mb-6">
            <label className="block mb-2 text-lg">Body Fat (%) *</label>
            <input
              type="number"
              name="bodyFat"
              onChange={handleChange}
              className="w-full p-4 text-base mb-5 bg-gray-800 rounded-2xl"
            />
            <p className="text-orange-500 text-xl font-bold">
              "You can find out your body fat percentage through an InBody analysis test"
            </p>
          </div>
        </div>

        {/* Right Column - Your Goal */}
        <div>
          <h3 className="text-4xl font-bold text-orange-500 mb-6">Your Goal</h3>

          {/* Main Goal */}
          <div className="mb-6">
            <label className="block mb-2 text-lg mt-24">Your Main Goal *</label>
            <div className="flex flex-wrap gap-4">
              {["lose", "maintain", "gain"].map((g) => (
                <button
                  key={g}
                  type="button"
                  onClick={() => setFormData({ ...formData, goal: g })}
                  className={`px-12 py-4 rounded-2xl text-base ${
                    formData.goal === g ? "bg-orange-500" : "bg-gray-700"
                  }`}
                >
                  {g}
                </button>
              ))}
            </div>
          </div>

          {/* Protein Quantity */}
          <div className="mb-6">
            <label className="block mb-2 text-lg">Protein Quantity *</label>
            <div className="flex gap-4">
              <button
                type="button"
                onClick={() => setFormData({ ...formData, proteinQuantity: "high" })}
                className={`px-20 py-4 rounded-2xl text-base ${
                  formData.proteinQuantity === "high" ? "bg-orange-500" : "bg-gray-700"
                }`}
              >
                High
              </button>
              <button
                type="button"
                onClick={() => setFormData({ ...formData, proteinQuantity: "low" })}
                className={`px-20 py-4 rounded-2xl text-base ${
                  formData.proteinQuantity === "low" ? "bg-orange-500" : "bg-gray-700"
                }`}
              >
                Low
              </button>
            </div>
          </div>

          {/* Activity Level */}
          <div className="mb-6">
            <label className="block mb-2 text-lg">Activity Level *</label>
            <div className="flex flex-wrap gap-4">
              {["high", "medium", "low"].map((level) => (
                <button
                  key={level}
                  type="button"
                  onClick={() => setFormData({ ...formData, activityLevel: level })}
                  className={`px-12 py-4 rounded-2xl text-base ${
                    formData.activityLevel === level ? "bg-orange-500" : "bg-gray-700"
                  }`}
                >
                  {level}
                </button>
              ))}
            </div>
          </div>

          {/* Steps */}
          <div className="mb-6">
            <label className="block mb-2 text-lg">Number Of Steps *</label>
            <input
              type="number"
              name="steps"
              onChange={handleChange}
              className="w-full p-4 text-base mb-4 bg-gray-800 rounded-2xl"
            />
            <p className="text-orange-500 text-xl font-bold">
              *You can find out the number of steps from your health app on your phone or from the sports watch to determine your activity level."
            </p>
          </div>
        </div>

        {/* Submit Button */}
        <div className="md:col-span-2 text-center mt-10 mb-10">
          <button
            type="submit"
            className="bg-orange-500 px-8 py-4 rounded text-white text-lg font-bold"
          >
            {loading ? (
              <div className="animate-spin rounded-full h-6 w-6 border-t-4 border-b-4 border-orange-500"></div>
            ) : (
              "CALCULATE NOW"
            )}
          </button>
        </div>
      </form>

      {/* Error */}
      {error && <div className="mt-6 text-red-500 text-center">{error}</div>}
    </div>
  );
};

export default Calculators;