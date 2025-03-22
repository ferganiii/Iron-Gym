import { useState } from "react";
import { Link } from "react-router-dom";
import bacKGROUND from "../../assets/bacKGROUND.jpeg";

export default function Signup() {
  const [showForm, setShowForm] = useState(false); // حالة التحكم في إظهار النموذج

  return (
    <div className="relative w-full h-screen bg-black overflow-hidden">
      {/* الخلفية */}
      <img
        src={bacKGROUND}
        alt="Background"
        className={`absolute inset-0 w-full h-full object-cover object-center transition-all duration-500 ${
          showForm ? "blur-md" : "blur-0"
        }`}
      />

      {/* طبقة التعتيم */}
      <div
        className={`absolute inset-0 bg-black transition-all duration-500 ${
          showForm ? "opacity-70" : "opacity-60"
        }`}
      ></div>

      {/* زر Register */}
      {!showForm && (
        <div className="absolute inset-0 flex justify-center items-center z-20">
          <button
            onClick={() => setShowForm(true)}
            className="mt-6 sm:mt-10 bg-orange-500 hover:bg-orange-600 text-white px-8 sm:px-12 py-3 sm:py-4 rounded-lg text-xl sm:text-2xl md:text-3xl font-semibold transition-transform duration-300 transform hover:scale-105"
          >
            Register
          </button>
        </div>
      )}

      {/* النصوص "GET FIT" و "TRANSFORM YOUR BODY" */}
      <div className="absolute inset-x-0 bottom-10 sm:bottom-24 flex flex-col items-center text-center text-white px-4 pb-10 sm:pb-28 z-20">
        <h1 className="text-5xl sm:text-6xl md:text-8xl font-sans">GET FIT</h1>
        <p className="text-xl sm:text-2xl md:text-3xl mt-4 sm:mt-10">
          TRANSFORM YOUR BODY
        </p>
      </div>

      {/* نموذج التسجيل */}
      {showForm && (
        <div className="absolute inset-0 flex justify-center items-center z-30">
          <div className="w-[400px] sm:w-[450px] bg-opacity-30 backdrop-blur-lg p-8 rounded-xl border border-blue-400 shadow-lg text-white relative">
            
            {/* عنوان التسجيل */}
            <div className="flex justify-between mb-6 border-b border-gray-500 pb-2">
              <button className="text-gray-300">LOG IN</button>
              <button className="text-white border-b-2 border-white">
                SIGN UP
              </button>
            </div>

            {/* نموذج الإدخال */}
            <form>
            <div className="space-y-4">
  {/* Name Input */}
  <div>
    <label className="text-white  ">Name *</label>
    <input
      type="text"
      placeholder="Enter your name"
      className="w-full mt-3 p-2 bg-transparent border border-red-500 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500 placeholder-gray-400"
    />
  </div>

  {/* E-MAIL Input */}
  <div>
    <label className="text-white  ">E-MAIL *</label>
    <input
      type="email"
      placeholder="Enter your E-mail"
      className="w-full mt-3 p-2 bg-transparent border border-red-500 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500 placeholder-gray-400"
    />
  </div>

  {/* Phone Input */}
  <div>
    <label className="text-white  ">Phone *</label>
    <input
      type="text"
      placeholder="Enter phone number"
      className="w-full mt-3 p-2 bg-transparent border border-red-500 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500 placeholder-gray-400"
    />
  </div>

  {/* Password Input */}
  <div>
    <label className="text-white  ">Password *</label>
    <input
      type="password"
      placeholder="Enter password"
      className="w-full mt-3 p-2 bg-transparent border border-red-500 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500 placeholder-gray-400"
    />
  </div>

  {/* Confirm Password Input */}
  <div>
    <label className="text-white  ">Confirm password *</label>
    <input
      type="password"
      placeholder="Re-enter password"
      className="w-full mt-3 p-2 bg-transparent border border-red-500 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500 placeholder-gray-400"
    />
  </div>
</div>


              {/* زر التسجيل */}
              <button
                type="submit"
                className="w-full mt-4 p-2 border border-white text-white rounded-md hover:bg-white hover:text-black transition"
              >
                SIGN UP NOW
              </button>
            </form>

            {/* رابط تسجيل الدخول */}
            <p className="text-center text-sm mt-4 text-gray-400">
              Already have an account?{" "}
              <Link to="/login" className="text-red-400 hover:underline">
                Log in
              </Link>
            </p>

            {/* زر الإغلاق */}
            <button
              onClick={() => setShowForm(false)}
              className="absolute top-4 right-4 text-white text-xl hover:text-red-500"
            >
              ✖
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
