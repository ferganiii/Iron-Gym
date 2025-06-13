import React from 'react';
import { motion } from "framer-motion";

export default function Challenges() {
  return (
    <>
      <section>
        <div className="mx-4 md:mx-8 lg:mx-16 xl:mx-32">
          <motion.div
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="w-full max-w-7xl shadow-lg p-6 mb-10 bg-black border-4 border-gray-700 rounded-lg mx-auto"
          >
            <h3 className="text-4xl md:text-5xl mt-10 font-extrabold text-center mb-12 text-orange-600">Join Our Fitness Challenges</h3>
            <p className="text-center font-semibold text-gray-200 mb-16">
              Join our powerful fitness challenges like the 30-Day Body Transformation or the Fat Loss Bootcamp.  Track your progress daily, stay motivated, and compete with others or yourself!
              Whether you're aiming to lose weight, build strength, or boost your stamina our challenges are designed to keep you focused, accountable, and driven.!
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <div className="bg-[rgb(102,102,102,.3)] p-4 rounded-lg shadow-md hover:bg-[rgb(102,102,102,.6)] hover:scale-105 transition-all duration-300">
                <h4 className="text-2xl font-bold text-white mb-4">30-Day Fitness Challenge</h4>
                <p className="text-gray-200 font-semibold mb-4">
                  A 30-day challenge designed to improve strength and stamina. Get access to daily exercises and track your progress.
                </p>
                <div className="space-y-2 mb-4">
                  <p className="text-orange-500 font-medium">Challenge Includes:</p>
                  <ul className="list-disc pl-5 text-gray-300">
                    <li>Daily 20-minute workouts</li>
                    <li>Progressive difficulty levels</li>
                    <li>Weekly fitness tests</li>
                    <li>No equipment needed</li>
                  </ul>
                </div>
                <a href="/pdf/30 DAY.pdf" download>
                  <button className="mt-4 bg-orange-600 hover:bg-orange-700 text-black font-bold py-2 px-4 rounded-md transition-all duration-300 transform hover:scale-105">
                    Download Challenge
                  </button>
                </a>
              </div>

              <div className="bg-[rgb(102,102,102,.3)] p-4 rounded-lg shadow-md hover:bg-[rgb(102,102,102,.6)] hover:scale-105 transition-all duration-300">
                <h4 className="text-2xl font-bold text-white mb-4">Fat Loss Challenge</h4>
                <p className="text-gray-200 font-semibold mb-4">
                  Join our fat loss challenge and get personalized workout plans and nutritional advice to help you burn fat effectively.
                </p>
                <div className="space-y-2 mb-4">
                  <p className="text-orange-500 font-medium">Challenge Includes:</p>
                  <ul className="list-disc pl-5 text-gray-300">
                    <li>45-day structured program</li>
                    <li>HIIT cardio routines</li>
                    <li>Metabolic strength training</li>
                    <li>Nutrition guidelines</li>
                  </ul>
                </div>
                <a href="/pdf/Fat Loss Challenge.pdf" download>
                  <button className="mt-4 bg-orange-600 hover:bg-orange-700 text-black font-bold py-2 px-4 rounded-md transition-all duration-300 transform hover:scale-105">
                    Download Challenge
                  </button>
                </a>
              </div>

              <div className="bg-[rgb(102,102,102,.3)] p-4 rounded-lg shadow-md hover:bg-[rgb(102,102,102,.6)] hover:scale-105 transition-all duration-300">
                <h4 className="text-2xl font-bold text-white mb-4">Ramadan Fitness Challenge</h4>
                <p className="text-gray-200 font-semibold mb-4">
                  A special training program for the month of Ramadan to help you stay fit with exercises suitable for fasting times.
                </p>
                <div className="space-y-2 mb-4">
                  <p className="text-orange-500 font-medium">Challenge Includes:</p>
                  <ul className="list-disc pl-5 text-gray-300">
                    <li>Pre-dawn and post-iftar workouts</li>
                    <li>Energy-efficient exercises</li>
                    <li>Hydration & nutrition tips</li>
                    <li>Balanced rest periods</li>
                  </ul>
                </div>
                <a href="/pdf/Ramadan Fitness Challenge.pdf" download>
                  <button className="mt-4 bg-orange-600 hover:bg-orange-700 text-black font-bold py-2 px-4 rounded-md transition-all duration-300 transform hover:scale-105">
                    Download Challenge
                  </button>
                </a>
              </div>

              <div className="bg-[rgb(102,102,102,.3)] p-4 rounded-lg shadow-md hover:bg-[rgb(102,102,102,.6)] hover:scale-105 transition-all duration-300">
                <h4 className="text-2xl font-bold text-white mb-4">Group Fitness Challenge</h4>
                <p className="text-gray-200 font-semibold mb-4">
                  A 60-day group challenge with professional trainers. Varied workouts and weekly follow-ups to achieve the best results.
                </p>
                <div className="space-y-2 mb-4">
                  <p className="text-orange-500 font-medium">Challenge Includes:</p>
                  <ul className="list-disc pl-5 text-gray-300">
                    <li>Partner-based workouts</li>
                    <li>Team competitions</li>
                    <li>Weekly accountability check-ins</li>
                    <li>Achievement badges</li>
                  </ul>
                </div>
                <a href="/pdf/Group Fitness Challenge.pdf" download>
                  <button className="mt-4 bg-orange-600 hover:bg-orange-700 text-black font-bold py-2 px-4 rounded-md transition-all duration-300 transform hover:scale-105">
                    Download Challenge
                  </button>
                </a>
              </div>

              <div className="bg-[rgb(102,102,102,.3)] p-4 rounded-lg shadow-md hover:bg-[rgb(102,102,102,.6)] hover:scale-105 transition-all duration-300">
                <h4 className="text-2xl font-bold text-white mb-4">Target Muscle Challenge</h4>
                <p className="text-gray-200 font-semibold mb-4">
                  An intensive program to strengthen and build specific muscles each week. Includes abs, back, chest, and legs exercises.
                </p>
                <div className="space-y-2 mb-4">
                  <p className="text-orange-500 font-medium">Challenge Includes:</p>
                  <ul className="list-disc pl-5 text-gray-300">
                    <li>Weekly muscle focus rotation</li>
                    <li>Progressive resistance training</li>
                    <li>Recovery techniques</li>
                    <li>Before/after measurement tracking</li>
                  </ul>
                </div>
                <a href="/pdf/Target Muscle Challenge.pdf" download>
                  <button className="mt-4 bg-orange-600 hover:bg-orange-700 text-black font-bold py-2 px-4 rounded-md transition-all duration-300 transform hover:scale-105">
                    Download Challenge
                  </button>
                </a>
              </div>

              <div className="bg-[rgb(102,102,102,.3)] p-4 rounded-lg shadow-md hover:bg-[rgb(102,102,102,.6)] hover:scale-105 transition-all duration-300">
                <h4 className="text-2xl font-bold text-white mb-4">Beginner Challenge</h4>
                <p className="text-gray-200 font-semibold mb-4">
                  A program designed for beginners starting with simple exercises and gradually increasing in difficulty. Learn the basics and build strength safely.
                </p>
                <div className="space-y-2 mb-4">
                  <p className="text-orange-500 font-medium">Challenge Includes:</p>
                  <ul className="list-disc pl-5 text-gray-300">
                    <li>Form and technique basics</li>
                    <li>Gentle progression path</li>
                    <li>Full video tutorials</li>
                    <li>Confidence-building milestones</li>
                  </ul>
                </div>
                <a href="/pdf/Beginner Challenge.pdf" download>
                  <button className="mt-4 bg-orange-600 hover:bg-orange-700 text-black font-bold py-2 px-4 rounded-md transition-all duration-300 transform hover:scale-105">
                    Download Challenge
                  </button>
                </a>
              </div>
            </div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5, duration: 0.8 }}
              className="mt-10 bg-gradient-to-r from-gray-800  to-gray-900 p-6 rounded-lg"
            >
              <h4 className="text-2xl font-bold text-center text-orange-500 mb-4">Featured Challenges</h4>
              <p className="text-gray-200 text-center mb-6">
                Check out our most popular challenges with proven results for our members
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="bg-gray-800 p-5 rounded-lg border-l-4 border-orange-500">
                  <h5 className="text-xl font-bold text-white mb-3">Summer Body Challenge</h5>
                  <p className="text-gray-300 mb-3">Get beach-ready in 8 weeks with this complete transformation program.</p>
                  <div className="flex justify-between items-center">
                    <div className="flex items-center">
                      <span className="text-orange-400 font-bold mr-2">4.9/5</span>
                      <div className="flex">
                        {[1, 2, 3, 4, 5].map((star) => (
                          <svg key={star} className="w-4 h-4 text-yellow-500" fill="currentColor" viewBox="0 0 20 20">
                            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                          </svg>
                        ))}
                      </div>
                    </div>
                    <span className="bg-orange-600 text-xs font-bold px-2 py-1 rounded text-white">TRENDING</span>
                  </div>
                </div>

                <div className="bg-gray-800 p-5 rounded-lg border-l-4 border-green-500">
                  <h5 className="text-xl font-bold text-white mb-3">90-Day Total Body Transformation</h5>
                  <p className="text-gray-300 mb-3">Our most comprehensive program for total body recomposition and fitness improvement.</p>
                  <div className="flex justify-between items-center">
                    <div className="flex items-center">
                      <span className="text-green-400 font-bold mr-2">4.8/5</span>
                      <div className="flex">
                        {[1, 2, 3, 4, 5].map((star) => (
                          <svg key={star} className="w-4 h-4 text-yellow-500" fill="currentColor" viewBox="0 0 20 20">
                            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                          </svg>
                        ))}
                      </div>
                    </div>
                    <span className="bg-green-600 text-xs font-bold px-2 py-1 rounded text-white">POPULAR</span>
                  </div>
                </div>
              </div>
              <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="bg-gray-700 p-4 rounded-lg text-center">
                  <div className="text-orange-500 text-4xl font-bold mb-2">12K+</div>
                  <p className="text-gray-300">Challenge Participants</p>
                </div>
                <div className="bg-gray-700 p-4 rounded-lg text-center">
                  <div className="text-orange-500 text-4xl font-bold mb-2">92%</div>
                  <p className="text-gray-300">Completion Rate</p>
                </div>
                <div className="bg-gray-700 p-4 rounded-lg text-center">
                  <div className="text-orange-500 text-4xl font-bold mb-2">87%</div>
                  <p className="text-gray-300">Achieved Goals</p>
                </div>
              </div>
              <div className="mt-8 text-center">
                <h5 className="text-xl font-bold text-white mb-4">Challenge Calendar</h5>
                <div className="overflow-x-auto">
                  <table className="w-full text-sm text-white">
                    <thead>
                      <tr className="bg-gray-700">
                        <th className="p-3">Challenge</th>
                        <th className="p-3">Start Date</th>
                        <th className="p-3">Duration</th>
                        <th className="p-3">Difficulty</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr className="bg-gray-800">
                        <td className="p-3">Summer Body</td>
                        <td className="p-3">June 1st</td>
                        <td className="p-3">8 Weeks</td>
                        <td className="p-3">Intermediate</td>
                      </tr>
                      <tr className="bg-gray-900">
                        <td className="p-3">Total Body Transformation</td>
                        <td className="p-3">July 15th</td>
                        <td className="p-3">90 Days</td>
                        <td className="p-3">Advanced</td>
                      </tr>
                      <tr className="bg-gray-800">
                        <td className="p-3">Beginner Bootcamp</td>
                        <td className="p-3">Monthly</td>
                        <td className="p-3">4 Weeks</td>
                        <td className="p-3">Beginner</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </>
  );
}