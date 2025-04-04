import React from 'react'
import systemNut from "../../assets/systemNut.jpeg";
import { Link } from 'react-router-dom';
import calcClories from "../../assets/cardCalories.webp";


export default function NutritionProgram() {


  
  return (
    <>
         <section className="bg-[rgb(102,102,102,.3)] py-7">
              <div className="container mx-auto relative py-10 bg-white shadow-sm dark:bg-[rgb(102,102,102,.3)] dark:border-gray-600">
              <div className="flex justify-center gap-28 w-full flex-wrap">
      
      
        <div className="bg-white border border-gray-200 rounded-3xl shadow-sm dark:bg-black/55 dark:border-gray-700 w-[350px] ">
          <Link to="MealPlan">
            <img
              className="rounded-t-3xl w-full h-[300px] object-cover hover:scale-105 transition-all "
              src={systemNut}
              alt=""
            />
          </Link>
          <div className="p-5">
            <Link to="MealPlan">
              <p className="text-center mb-3 font-normal text-gray-700 dark:text-white text-5xl font-archivo">
              Nutritional programmes     </p>
            </Link>
          </div>
        </div>
      
        <div className="bg-white border border-gray-200 rounded-3xl shadow-sm dark:bg-black/55 dark:border-gray-700 w-[350px] ">
          <Link to="CalcCaloriesMeal">
            <img
              className="rounded-t-3xl w-full h-[300px] object-cover hover:scale-105 transition-all "
              src={calcClories}
              alt=""
            />
          </Link>
          <div className="p-5">
            <Link to="CalcCaloriesMeal">
              <p className="text-center mb-3 font-normal text-gray-700 dark:text-white text-5xl font-archivo">
              Calculate your meal Calaroies        </p>
            </Link>
          </div>
        </div>
      </div>
      
              </div>
            </section>
        </>
  )
}
