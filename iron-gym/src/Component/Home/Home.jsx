import React, { useContext, useEffect, useState } from 'react';
import Navbar from '../Navbar/Navbar';
import bacKGROUND from '../../assets/bacKGROUND.jpeg';
import imgeHome from '../../assets/imgeHome.jpeg';
import man1Home from '../../assets/man1Home.png';
import style from './Home.module.css';
import { Link, NavLink } from 'react-router-dom';
import axios from 'axios';
import { UserContext } from '../../Context/UserContext';
import calcClories from "../../assets/cardCalories.webp";



export default function Home() {

  const {user}= useContext(UserContext);
  
  


  return (
    <>
     
      <div className="bg-black text-white min-h-screen  ">
        {/* الصورة الرئيسية */}
        <div className="relative w-full h-screen bg-black overflow-hidden">
          <div className="absolute inset-0 bg-black opacity-60 z-10"></div>

          <div className="absolute inset-0 m-4 sm:m-8 md:m-16 overflow-hidden rounded-xl">
            <img
              src={bacKGROUND}
              alt="Fitness Hero"
              className="w-full h-full object-cover object-center opacity-70"
            />
          </div>

          <div className="absolute inset-x-0 bottom-10 sm:bottom-24 flex flex-col items-center text-center text-white px-4 pb-10 sm:pb-28 z-20">
            <h1 className="text-5xl sm:text-6xl md:text-8xl font-sans">GET FIT</h1>
            <p className="text-xl sm:text-2xl md:text-3xl mt-4 sm:mt-10">TRANSFORM YOUR BODY</p>
            <button className="mt-6 sm:mt-10 bg-orange-500 hover:bg-orange-600 text-white px-8 sm:px-12 py-3 sm:py-4 rounded-lg text-xl sm:text-2xl md:text-3xl font-semibold transition-transform duration-300 transform hover:scale-105">
             <Link to="/signup"> Register</Link>
            </button>
         {user && user.role === "admin" &&  
            <>
                <button className="mt-6 sm:mt-10 bg-orange-500 hover:bg-orange-600 text-white px-8 sm:px-12 py-3 sm:py-4 rounded-lg text-xl sm:text-2xl md:text-3xl font-semibold transition-transform duration-300 transform hover:scale-105">
             <Link to="/dashboard"> DASHBOARD</Link>
            </button>
            </>
         }
          </div>
        </div>

        {/* القسم الأول */}
        <section className="bg-[rgb(102,102,102,.3)]  py-16">
          <div className="container mx-auto px-4 sm:px-8 relative overflow-hidden">
            {/* <div className={`absolute bg-gray-700 bg-opacity-40 rounded-full ${style.circle}`}></div> */}

            <div className="grid grid-cols-1 md:grid-cols-2 gap-28 md:gap-16 items-center relative">

{/* الدائرة تحت النص */}
<div className={`absolute  transform  z-0 ${style.circle}`}>
<svg xmlns="http://www.w3.org/2000/svg" width="300" height="300" viewBox="0 0 150 150">
    <circle cx="75" cy="75" r="75" fill="#666666" />
</svg>


</div>

{/* النص */}
<div className="space-y-6 md:space-y-8 z-10 text-center md:text-left relative">
  <h2 className="md:text-4xl text-4xl font-archivo font-bold">
    BUILD YOUR BODY & <br />
    <span className="text-white">SHAPE YOURSELF!</span>
  </h2>
  <p className="text-gray-200 text-lg font-bold">
  "Achieve your fitness goals with powerful workouts and expert guidance. Start your transformation today!"
  </p>
  <button className="border font-bold text-xl md:text-2xl border-orange-600 px-6 md:px-8 py-2 rounded-2xl hover:bg-orange-500 transition-colors duration-300">
  <Link to="/exercise">EXPLORE EXERCISES</Link>  
  </button>
</div>

{/* الصورة */}
<div className="relative flex justify-center pl-24 me-11">
 
<Link to="/exercise">


<img
    src={imgeHome}
    alt="Workout"
    className={`hover:scale-105 transition-all duration-500 z-10 rounded-full w-80 max-w-md h-80 sm:h- object-cover shadow-lg `}
  />
</Link>  

 
</div>
</div>

          </div>
        </section>

        {/* القسم الثاني */}
        <section className="py-16 sm:py-32 overflow-hidden bg-[rgb(102,102,102,.3)]">
          <div className="container mx-auto px-4 sm:px-8">
            <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-8 md:gap-16">
              {/* الصورة */}
              <div className="relative flex justify-center pt-36 overflow-hidden">
                
                <img
                  src={man1Home}
                  alt="Calorie Calculator"
                  className="z-10 rounded-lg w-full max-w-md h-64 sm:h-96 object-cover shadow-lg"
                />
                <div className={`absolute bg-gray-700 bg-opacity-40 rounded-full ${style.manCircle}`}></div>
                <div className={`absolute bg-orange-400 bg-opacity-30 rounded-full ${style.manCircleOrange}`}></div>
                <div className={style.dotedOrange}></div>
              </div>

              {/* النص */}
              <div className="space-y-6 md:space-y-8 relative z-10 sm:mb-16">
                <div className={style.BgCircle}></div>
                <h2 className="text-4xl font-archivo font-bold">Calculate Your Daily <br /> Calorie & Water Needs</h2>
                <p className="text-gray-200 text-lg font-bold ">
                "Stay on track! Calculate your daily calorie intake and hydration needs with our smart tools."
                </p>
                <button className="border font-bold text-xl md:text-2xl border-orange-600 px-6 md:px-8 py-2 rounded-2xl hover:bg-orange-500 transition-colors duration-300" >
                 <Link to="/Calculators">CALCULATORS</Link> 
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* القسم الثالث */}
        <section className="py-16 sm:py-32 bg-[rgb(102,102,102,.3)]">
          <div className="container mx-auto px-4 sm:px-8">
            <div className="flex flex-col md:flex-row items-center justify-between gap-8 md:gap-16">
              {/* النص */}
              <div className="md:w-1/2 space-y-6 md:space-y-8">
                <h2 className="text-4xl font-bold font-archivo md:text-3xl">
                  STEP UP YOUR <br />
                  FITNESS CHALLENGE
                </h2>
                <p className="text-gray-200 text-lg font-bold">
                "Fuel your body with the right nutrition and unlock your full potential!"
                </p>
                <button className="border font-bold text-xl md:text-2xl border-orange-600 px-6 md:px-8 py-2 rounded-2xl hover:bg-orange-500 transition-colors duration-300">
                   <Link to="/nutrition">NUTRITIONS</Link> 
                </button>
              </div>
              {/* الصورة */}
              <div className="md:w-1/2 flex justify-center mt-10 md:mt-0">
              <Link to="/nutrition">
              
              <img
                        src={calcClories}   alt="Fitness Challenge"
                  className="hover:scale-105 transition-all duration-500 w-full rounded-full max-w-md h-64 sm:h-96 object-cover shadow-lg"
                />
              </Link> 

              </div>
            </div>
          </div>
        </section>

       
      </div>
    </>
  );
}
