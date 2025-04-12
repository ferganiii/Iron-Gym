// import bg from "../../assets/bg.jpg";
// import React, { useState } from "react";
// import { useNavigate } from "react-router-dom";

// const Calculators = () => {
//   const [formData, setFormData] = useState({
//     gender: "",
//     age: "",
//     weight: "",
//     height: "",
//     bodyFat: "",
//     goal: "",
//     proteinQuantity: "",
//     activityLevel: "",
//     steps: "",
//   });

//   const [error, setError] = useState(null);
//   const [loading, setLoading] = useState(false);
//   const navigate = useNavigate();

//   const handleChange = (e) => {
//     setFormData({ ...formData, [e.target.name]: e.target.value });
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     setError(null);
//     setLoading(true);

//     // التحقق من الحقول المطلوبة
//     if (!formData.gender || !formData.age || !formData.weight || !formData.height || !formData.bodyFat || !formData.goal || !formData.proteinQuantity || !formData.activityLevel) {
//       setError("Please fill in all required fields.");
//       setLoading(false);
//       return;
//     }

//     // التحقق من قيمة bodyFat
//     const bodyFatValue = Number(formData.bodyFat);
//     if (bodyFatValue < 5 || bodyFatValue > 50) {
//       setError("Body fat percentage must be between 5% and 50%");
//       setLoading(false);
//       return;
//     }

//     const preparedData = {
//       gender: formData.gender,
//       age: Number(formData.age),
//       weight: Number(formData.weight),
//       height: Number(formData.height),
//       bodyFat: formData.bodyFat ? `${formData.bodyFat}%` : null,
//       goal:
//         formData.goal === "lose"
//           ? "lose weight"
//           : formData.goal === "gain"
//           ? "gain weight"
//           : "maintain weight",
//       proteinQuantity: formData.proteinQuantity,
//       activityLevel: formData.activityLevel,
//       stepsNumber: formData.steps ? Number(formData.steps) : 0,
//     };

//     try {
//       const token = localStorage.getItem("token");

//       const res = await fetch(
//         "https://gym-production-8217.up.railway.app/api/calculate",
//         {
//           method: "POST",
//           headers: {
//             "Content-Type": "application/json",
//             Authorization: `Bearer ${token}`,
//           },
//           body: JSON.stringify(preparedData),
//         }
//       );

//       const data = await res.json();

//       if (!res.ok) {
//         if (res.status === 401) {
//           setError("Unauthorized: Please login first.");
//         } else {
//           setError(data.message || "Something went wrong.");
//         }
//         setLoading(false);
//         return;
//       }

//       navigate("/result", { state: data });
//     } catch (err) {
//       setError("An error occurred. Please try again.");
//       setLoading(false);
//       console.error("Error:", err);
//     }
//   };

//   return (
//     <div
//       className="min-h-screen text-white p-6 bg-cover bg-center relative "
//       style={{ backgroundImage: `url(${bg})` }}
//     >
//       <div className="max-w-5xl ml-[350px] mt-14 mb-10">
//         <h2 className="text-orange-500 text-4xl font-bold mb-6">
//           Calculating Your Daily Calorie Needs
//         </h2>
//         <p className="text-2xl font-bold  text-gray-300 mb-4 ">
//           Discover exactly what your body needs every single day to perform at
//           its best. From how many calories you should consume, to the exact
//           amount of protein, carbs, and fats your body requires.
//         </p>
//         <p className="text-2xl font-bold text-gray-300">
//           To use the calculator, please provide the following information:
//         </p>
//       </div>

//       <form
//         onSubmit={handleSubmit}
//         className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10"
//       >
//         {/* Left Column - Body Composition */}
//         <div>
//           <h3 className="text-4xl font-bold text-orange-500 mb-6">
//             Body Composition
//           </h3>

//           {/* Gender */}
//           <div className="mb-6">
//             <label className="block mb-2 text-lg">Gender *</label>
//             <div className="flex gap-4">
//               <button
//                 type="button"
//                 onClick={() => setFormData({ ...formData, gender: "male" })}
//                 className={`px-20 py-4 rounded-2xl text-base ${
//                   formData.gender === "male" ? "bg-orange-500" : "bg-[rgb(102,102,102,.7)]"
//                 }`}
//               >
//                 Male
//               </button>
//               <button
//                 type="button"
//                 onClick={() => setFormData({ ...formData, gender: "female" })}
//                 className={`px-20 py-4 rounded-2xl text-base ${
//                   formData.gender === "female" ? "bg-orange-500" : "bg-[rgb(102,102,102,.7)]"
//                 }`}
//               >
//                 Female
//               </button>
//             </div>
//           </div>

//           {/* Age */}
//           <div className="mb-6">
//             <label className="block mb-2 text-lg">Age *</label>
//             <input
//               type="number"
//               name="age"
//               onChange={handleChange}
//               className="w-full p-4 text-base bg-[rgb(102,102,102,.3)] border-none rounded-2xl"
//             />
//           </div>

//           {/* Weight */}
//           <div className="mb-6">
//             <label className="block mb-2 text-lg">Weight (kg) *</label>
//             <input
//               type="number"
//               name="weight"
//               onChange={handleChange}
//               className="w-full p-4 text-base bg-[rgb(102,102,102,.3)] border-none rounded-2xl"
//             />
//           </div>

//           {/* Height */}
//           <div className="mb-6">
//             <label className="block mb-2 text-lg">Height (cm) *</label>
//             <input
//               type="number"
//               name="height"
//               onChange={handleChange}
//               className="w-full p-4 text-base bg-[rgb(102,102,102,.3)] border-none rounded-2xl"
//             />
//           </div>

//           {/* Body Fat */}
//           <div className="mb-6">
//             <label className="block mb-2 text-lg">Body Fat (%) *</label>
//             <input
//               type="number"
//               name="bodyFat"
//               onChange={handleChange}
//               className="w-full p-4 text-base  bg-[rgb(102,102,102,.3)] border-none rounded-2xl"
//             />
//               {error && <div className="mt-6 mb-5 text-red-500 text-center">{error}</div>}
//             <p className="text-orange-500 text-xl font-bold">
//               "You can find out your body fat percentage through an InBody analysis test"
//             </p>
//           </div>
//         </div>

//         {/* Right Column - Your Goal */}
//         <div>
//           <h3 className="text-4xl font-bold text-orange-500 mb-6">Your Goal</h3>

//           {/* Main Goal */}
//           <div className="mb-6">
//             <label className="block mb-2 text-lg mt-24">Your Main Goal *</label>
//             <div className="flex flex-wrap gap-4">
//               {["lose", "maintain", "gain"].map((g) => (
//                 <button
//                   key={g}
//                   type="button"
//                   onClick={() => setFormData({ ...formData, goal: g })}
//                   className={`px-12 py-4 rounded-2xl text-base ${
//                     formData.goal === g ? "bg-orange-500" : "bg-[rgb(102,102,102,.7)]"
//                   }`}
//                 >
//                   {g}
//                 </button>
//               ))}
//             </div>
//           </div>

//           {/* Protein Quantity */}
//           <div className="mb-6">
//             <label className="block mb-2 text-lg">Protein Quantity *</label>
//             <div className="flex gap-4">
//               <button
//                 type="button"
//                 onClick={() => setFormData({ ...formData, proteinQuantity: "high" })}
//                 className={`px-20 py-4 rounded-2xl text-base ${
//                   formData.proteinQuantity === "high" ? "bg-orange-500" : "bg-[rgb(102,102,102,.7)]"
//                 }`}
//               >
//                 High
//               </button>
//               <button
//                 type="button"
//                 onClick={() => setFormData({ ...formData, proteinQuantity: "low" })}
//                 className={`px-20 py-4 rounded-2xl text-base ${
//                   formData.proteinQuantity === "low" ? "bg-orange-500" : "bg-[rgb(102,102,102,.7)]"
//                 }`}
//               >
//                 Low
//               </button>
//             </div>
//           </div>

//           {/* Activity Level */}
//           <div className="mb-6">
//             <label className="block mb-2 text-lg">Activity Level *</label>
//             <div className="flex flex-wrap gap-4">
//               {["high", "medium", "low"].map((level) => (
//                 <button
//                   key={level}
//                   type="button"
//                   onClick={() => setFormData({ ...formData, activityLevel: level })}
//                   className={`px-12 py-4 rounded-2xl text-base ${
//                     formData.activityLevel === level ? "bg-orange-500" : "bg-[rgb(102,102,102,.7)]"
//                   }`}
//                 >
//                   {level}
//                 </button>
//               ))}
//             </div>
//           </div>

//           {/* Steps */}
//           <div className="mb-6">
//             <label className="block mb-2 text-lg">Number Of Steps *</label>
//             <input
//               type="number"
//               name="steps"
//               onChange={handleChange}
//               className="w-full p-4 text-base mb-4 bg-[rgb(102,102,102,.3)] border-none rounded-2xl"
//             />
//             <p className="text-orange-500 text-xl font-bold">
//               *You can find out the number of steps from your health app on your phone or from the sports watch to determine your activity level."
//             </p>
//           </div>
//         </div>

//         {/* Submit Button */}
//         <div className="md:col-span-2 text-center mt-10 mb-10">
//           <button
//             type="submit"
//             className="bg-orange-500 px-8 py-4 rounded-3xl text-white text-lg font-bold"
//           >
//             {loading ? (
//               <div className="animate-spin rounded-full h-6 w-6 border-t-4 border-b-4 border-orange-500"></div>
//             ) : (
//               "CALCULATE NOW"
//             )}
//           </button>
//         </div>
//       </form>

//       {/* Error */}

//     </div>
//   );
// };

// export default Calculators;






































import bg from "../../assets/bg.jpg";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useFormik } from "formik";
import * as Yup from "yup";

const Calculators = () => {
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  // تعريف schema للتحقق من الصحة
  const validationSchema = Yup.object().shape({
    gender: Yup.string()
      .required("Gender is required")
      .oneOf(["male", "female"], "Please select a valid gender"),

    age: Yup.number()
      .required("Age is required")
      .min(15, "Age must be at least 15 years")
      .max(100, "Age cannot exceed 100 years")
      .integer("Age must be a whole number"),

    weight: Yup.number()
      .required("Weight is required")
      .min(30, "Weight must be at least 30 kg")
      .max(300, "Weight cannot exceed 300 kg"),

    height: Yup.number()
      .required("Height is required")
      .min(120, "Height must be at least 120 cm")
      .max(250, "Height cannot exceed 250 cm"),

    bodyFat: Yup.number()
      .required("Body fat percentage is required")
      .min(5, "Body fat percentage must be at least 5%")
      .max(50, "Body fat percentage cannot exceed 50%"),

    goal: Yup.string()
      .required("Goal is required")
      .oneOf(["lose", "maintain", "gain"], "Please select a valid goal"),

    proteinQuantity: Yup.string()
      .required("Protein quantity is required")
      .oneOf(["high", "low"], "Please select protein quantity"),

    activityLevel: Yup.string()
      .required("Activity level is required")
      .oneOf(["high", "medium", "low"], "Please select activity level"),

      steps: Yup.number()
      .min(0, "Steps cannot be negative")
      .max(50000, "Steps cannot exceed 50,000")
      .integer("Steps must be a whole number"),
  });

  const formik = useFormik({
    initialValues: {
      gender: "",
      age: "",
      weight: "",
      height: "",
      bodyFat: "",
      goal: "",
      proteinQuantity: "",
      activityLevel: "",
      steps: "",
    },
    validationSchema,
    onSubmit: async (values) => {
      setError(null);
      setLoading(true);

      const preparedData = {
        gender: values.gender,
        age: Number(values.age),
        weight: Number(values.weight),
        height: Number(values.height),
        bodyFat: values.bodyFat ? `${values.bodyFat}%` : null,
        goal:
          values.goal === "lose"
            ? "lose weight"
            : values.goal === "gain"
            ? "gain weight"
            : "maintain weight",
        proteinQuantity: values.proteinQuantity,
        activityLevel: values.activityLevel,
        stepsNumber: values.steps ? Number(values.steps) : 0,
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
    },
  });

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
        onSubmit={formik.handleSubmit}
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
                onClick={() => formik.setFieldValue("gender", "male")}
                className={`px-20 py-4 rounded-2xl text-base ${
                  formik.values.gender === "male"
                    ? "bg-orange-500"
                    : "bg-[rgb(102,102,102,.7)]"
                }`}
              >
                Male
              </button>
              <button
                type="button"
                onClick={() => formik.setFieldValue("gender", "female")}
                className={`px-20 py-4 rounded-2xl text-base ${
                  formik.values.gender === "female"
                    ? "bg-orange-500"
                    : "bg-[rgb(102,102,102,.7)]"
                }`}
              >
                Female
              </button>
            </div>
            {formik.errors.gender && formik.touched.gender && (
              <div className="mt-1 p-2 bg-red-100 text-orange-700 border border-orange-600 rounded-xl text-base font-bold">
                {formik.errors.gender}
              </div>
            )}
          </div>

          {/* Age */}
          <div className="mb-6">
            <label className="block mb-2 text-lg">Age *</label>
            <input
              type="number"
              name="age"
              onChange={formik.handleChange}
              value={formik.values.age}
              className="w-full p-4 text-base bg-[rgb(102,102,102,.3)] border-none rounded-2xl"
            />
            {formik.errors.age && formik.touched.age && (
              <div className="mt-1 p-2 bg-red-100 text-orange-700 border border-orange-600 rounded-xl text-base font-bold">
                {formik.errors.age}
              </div>
            )}
          </div>

          {/* Weight */}
          <div className="mb-6">
            <label className="block mb-2 text-lg">Weight (kg) *</label>
            <input
              type="number"
              name="weight"
              onChange={formik.handleChange}
              value={formik.values.weight}
              className="w-full p-4 text-base bg-[rgb(102,102,102,.3)] border-none rounded-2xl"
            />
            {formik.errors.weight && formik.touched.weight && (
              <div className="mt-1 p-2 bg-red-100 text-orange-700 border border-orange-600 rounded-xl text-base font-bold">
                {formik.errors.weight}
              </div>
            )}
          </div>

          {/* Height */}
          <div className="mb-6">
            <label className="block mb-2 text-lg">Height (cm) *</label>
            <input
              type="number"
              name="height"
              onChange={formik.handleChange}
              value={formik.values.height}
              className="w-full p-4 text-base bg-[rgb(102,102,102,.3)] border-none rounded-2xl"
            />
            {formik.errors.height && formik.touched.height && (
              <div className="mt-1 p-2 bg-red-100 text-orange-700 border border-orange-600 rounded-xl text-base font-bold">
                {formik.errors.height}
              </div>
            )}
          </div>

          {/* Body Fat */}
          <div className="mb-6">
            <label className="block mb-2 text-lg">Body Fat (%) *</label>
            <input
              type="number"
              name="bodyFat"
              onChange={formik.handleChange}
              value={formik.values.bodyFat}
              className="w-full p-4 text-base bg-[rgb(102,102,102,.3)] border-none rounded-2xl"
            />
            {formik.errors.bodyFat && formik.touched.bodyFat && (
              <div className="mt-1 p-2 bg-red-100 text-orange-700 border border-orange-600 rounded-xl text-base font-bold">
                {formik.errors.bodyFat}
              </div>
            )}
            <p className="text-orange-500 text-xl font-bold mt-2">
              "You can find out your body fat percentage through an InBody
              analysis test"
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
                  onClick={() => formik.setFieldValue("goal", g)}
                  className={`px-12 py-4 rounded-2xl text-base ${
                    formik.values.goal === g
                      ? "bg-orange-500"
                      : "bg-[rgb(102,102,102,.7)]"
                  }`}
                >
                  {g}
                </button>
              ))}
            </div>
            {formik.errors.goal && formik.touched.goal && (
              <div className="mt-1 p-2 bg-red-100 text-orange-700 border border-orange-600 rounded-xl text-base font-bold">
                {formik.errors.goal}
              </div>
            )}
          </div>

          {/* Protein Quantity */}
          <div className="mb-6">
            <label className="block mb-2 text-lg">Protein Quantity *</label>
            <div className="flex gap-4">
              <button
                type="button"
                onClick={() => formik.setFieldValue("proteinQuantity", "high")}
                className={`px-12 py-4 rounded-2xl text-base ${
                  formik.values.proteinQuantity === "high"
                    ? "bg-orange-500"
                    : "bg-[rgb(102,102,102,.7)]"
                }`}
              >
                High
              </button>
              <button
                type="button"
                onClick={() => formik.setFieldValue("proteinQuantity", "low")}
                className={`px-12 py-4 rounded-2xl text-base ${
                  formik.values.proteinQuantity === "low"
                    ? "bg-orange-500"
                    : "bg-[rgb(102,102,102,.7)]"
                }`}
              >
                Low
              </button>
            </div>
            {formik.errors.proteinQuantity && formik.touched.proteinQuantity && (
              <div className="mt-1 p-2 bg-red-100 text-orange-700 border border-orange-600 rounded-xl text-base font-bold">
                {formik.errors.proteinQuantity}
              </div>
            )}
          </div>

          {/* Activity Level */}
          <div className="mb-6">
            <label className="block mb-2 text-lg">Activity Level *</label>
            <div className="flex gap-4">
              <button
                type="button"
                onClick={() => formik.setFieldValue("activityLevel", "high")}
                className={`px-12 py-4 rounded-2xl text-base ${
                  formik.values.activityLevel === "high"
                    ? "bg-orange-500"
                    : "bg-[rgb(102,102,102,.7)]"
                }`}
              >
                High
              </button>
              <button
                type="button"
                onClick={() => formik.setFieldValue("activityLevel", "medium")}
                className={`px-12 py-4 rounded-2xl text-base ${
                  formik.values.activityLevel === "medium"
                    ? "bg-orange-500"
                    : "bg-[rgb(102,102,102,.7)]"
                }`}
              >
                Medium
              </button>
              <button
                type="button"
                onClick={() => formik.setFieldValue("activityLevel", "low")}
                className={`px-12 py-4 rounded-2xl text-base ${
                  formik.values.activityLevel === "low"
                    ? "bg-orange-500"
                    : "bg-[rgb(102,102,102,.7)]"
                }`}
              >
                Low
              </button>
            </div>
            {formik.errors.activityLevel && formik.touched.activityLevel && (
              <div className="mt-1 p-2 bg-red-100 text-orange-700 border border-orange-600 rounded-xl text-base font-bold">
                {formik.errors.activityLevel}
              </div>
            )}
          </div>

          {/* Steps */}
          
          <div className="mb-6">
            <label className="block mb-2 text-lg">Steps per Day (Optional)</label>
            <input
              type="number"
              name="steps"
              onChange={formik.handleChange}
              value={formik.values.steps}
              className="w-full p-4 text-base bg-[rgb(102,102,102,.3)] border-none rounded-2xl"
            />
          </div>
        </div>

        {/* Error Message */}
        {error && (
          <div className="mt-6 p-4 bg-red-200 text-red-700 rounded-lg text-xl">
            {error}
          </div>
        )}

        {/* Submit Button */}
        <div className="col-span-2 text-center">
          <button
            type="submit"
            className="bg-orange-500 text-white px-16 py-4 rounded-xl font-bold text-2xl"
            disabled={loading}
          >
            {loading ? "Calculating..." : "Calculate"}
          </button>
        </div>
      </form>
    </div>
  );
};

export default Calculators;
