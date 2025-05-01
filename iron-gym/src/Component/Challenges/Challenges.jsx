import React from 'react'
import { motion } from "framer-motion";

export default function Challenges() {
    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
      };
  return (
    <>
      
  <section>

    <div className='container mx-auto'>
    <motion.div
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="w-full max-w-7xl shadow-lg p-6 mb-10 bg-black border-4 border-gray-700 rounded-lg"
      >
        <h3 className="text-4xl font-extrabold text-center mb-6 text-orange-600">Join Our Fitness Challenges</h3>
        <p className="text-center font-semibold text-gray-200 mb-6">
          Take part in our fitness challenges like the "30-day fitness challenge" or "Fat loss challenge". Track your progress and push your limits!
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

          <div className="bg-[rgb(102,102,102,.3)] p-4 rounded-lg shadow-md hover:bg-[rgb(102,102,102,.6)] hover:scale-105 transition-all duration-300">
            <h4 className="text-2xl font-bold text-white mb-4">30-Day Fitness Challenge</h4>
            <p className="text-gray-200 font-semibold">
              A 30-day challenge designed to improve strength and stamina. Get access to daily exercises and track your progress.
            </p>
            <a
              href="/pdf/30 DAY.pdf"
              download
            >
              <button className="mt-4 bg-orange-600 hover:bg-orange-700 text-black font-bold py-2 px-4 rounded-md transition-all duration-300 transform hover:scale-105">
              Download Challenge
              </button>
            </a>
          </div>

          <div className="bg-[rgb(102,102,102,.3)] p-4 rounded-lg shadow-md hover:bg-[rgb(102,102,102,.6)] hover:scale-105 transition-all duration-300">
            <h4 className="text-2xl font-bold text-white mb-4">Fat Loss Challenge</h4>
            <p className="text-gray-200 font-semibold">
              Join our fat loss challenge and get personalized workout plans and nutritional advice to help you burn fat effectively.
            </p>
            <a
              href="/pdf/Fat Loss Challenge.pdf"
              download
            >
              <button className="mt-4 bg-orange-600 hover:bg-orange-700 text-black font-bold py-2 px-4 rounded-md transition-all duration-300 transform hover:scale-105">
                Download Challenge
              </button>
            </a>
          </div>
        </div>
      </motion.div>
    </div>
  </section>

    </>
  )
}
