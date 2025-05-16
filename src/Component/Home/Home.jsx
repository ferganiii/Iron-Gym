import React, { useContext, useEffect, useState } from 'react';
import Navbar from '../Navbar/Navbar';
import bacKGROUND from '../../assets/bacKGROUND.jpeg';
import imgeHome from '../../assets/imgeHome.jpeg';
import man1Home from '../../assets/man1Home.png';
import FatsProduc from '../../assets/FatsProduc.jpeg';
import style from './Home.module.css';
import { Link, NavLink } from 'react-router-dom';
import axios from 'axios';
import calcClories from "../../assets/cardCalories.webp";
import bg from '../../assets/bg1111.jpg';
import { UserContext } from '../../Context/UserContext';
import test2 from '../../assets/test2.jpeg';
import testimg from '../../assets/testimg.jpeg';
export default function Home() {

  const { user } = useContext(UserContext);

  return (
    <>
      <div className="bg-black text-white min-h-screen  ">
        <div className="relative w-full h-screen bg-black overflow-hidden">
          <div className="absolute inset-0 bg-black opacity-60 z-10"></div>

          <div className="absolute inset-0 m-4 sm:m-8 md:m-16 overflow-hidden rounded-xl">
            <img
              src={bacKGROUND}
              alt="Fitness Hero"
              className="w-full h-[60vh] object-cover object-center opacity-70"
            />
          </div>

          <div className="absolute inset-x-0 lg:bottom-24 bottom-1/2 flex flex-col items-center text-center text-white px-4 pb-10 sm:pb-28 z-20">
            <h1 className="text-5xl sm:text-6xl md:text-8xl font-sans">GET FIT</h1>
            <p className="text-xl sm:text-2xl md:text-3xl mt-4 sm:mt-10">TRANSFORM YOUR BODY</p>

            {user && user.role === "admin" &&
              <>
                <button className="mt-6 sm:mt-10 bg-orange-500 hover:bg-orange-600 text-white px-8 sm:px-12 py-3 sm:py-4 rounded-lg text-xl sm:text-2xl md:text-3xl font-semibold transition-transform duration-300 transform hover:scale-105">
                  <Link to="/dashboard"> DASHBOARD</Link>
                </button>
              </>
            }
          </div>
        </div>

        <section className=" bg-[rgb(102,102,102,.3)]  pt-16">
          <div className="container mx-auto px-4 sm:px-8 relative overflow-hidden">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-28 md:gap-16 items-center relative">

              {/* <div className={`absolute  transform  z-0 ${style.circle}`}>
                 <img
                  src={imgeHome}
                alt="background"
                 className=" w-60 h-60 absolute top-0 -right-3  object-cover rounded-full lg:hidden"
                   />
                <svg xmlns="http://www.w3.org/2000/svg" width="300" height="300" viewBox="0 0 150 150" className='hidden lg:block'>
                  <circle cx="75" cy="75" r="75" fill="#666666" />
                </svg>
              </div> */}

              <div className="space-y-6 md:space-y-8 z-10 text-center md:text-left relative">
                <h2 className="lg:text-4xl text-xl font-archivo font-bold">
                  BUILD YOUR BODY & <br />
                  <span className="text-orange-500">SHAPE YOURSELF!</span>
                </h2>
                <p className="text-gray-200 text-sm font-bold">
                  "Achieve your fitness goals with powerful workouts and expert guidance. Start your transformation today!"
                </p>
                <button className="border font-bold text-xl md:text-2xl bg-orange-400 border-orange-400 px-6 md:px-8 py-2 rounded-2xl hover:bg-orange-600 transition-colors duration-300">
                  <Link to="/exercise">EXPLORE EXERCISES</Link>
                </button>
              </div>

              <div className="relative flex justify-center pl-24 me-11 mt-16">
                <Link to="/exercise">
                  <img
                    src={testimg}
                    alt="Workout"
                    className={`hidden lg:block hover:scale-105 transition-all duration-500 z-10 rounded-ful lg:w-80 max-w-md lg:h-80  w-60 h-60 object-cover shadow-lg `}
                  />
                </Link>
              </div>
            </div>
          </div>
        </section>

        <section className="pb-16 sm:py-32 overflow-hidden bg-[rgb(102,102,102,.3)]">
          <div className="container mx-auto px-4 sm:px-8">
            <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-8 md:gap-16">
              <div className="hidden lg:block relative flex justify-center pt-36 overflow-hidden">
                <img
                  src={man1Home}
                  alt="Calorie Calculator"
                  className=" z-10 rounded-lg w-full max-w-md h-64 sm:h-96 object-cover shadow-lg"
                />
                <div className={`absolute bg-gray-700 bg-opacity-40 rounded-full ${style.manCircle}`}></div>
                <div className={`absolute bg-orange-400 bg-opacity-30 rounded-full ${style.manCircleOrange}`}></div>
                <div className={style.dotedOrange}></div>
              </div>

              <div className="space-y-6 md:space-y-8 relative z-10 sm:mb-16">
                <div className='lg:ms-10 p-3 z-10'>
                  <h2 className="lg:text-4xl text-xl lg:text-gray-200 text-orange-500 font-alkalami">
                  Calculate Your Daily <br /> Calorie & Water Needs
                </h2>

                <p className="text-gray-200 lg:text-lg font-bold">
                  "Stay on track! Calculate your daily calorie <br />
                  intake and hydration needs with <br />
                  our smart tools."
                </p>

                <button className="mt-5 border font-bold text-xl md:text-2xl bg-orange-400 border-orange-400 px-6 md:px-8 py-2 rounded-2xl hover:bg-orange-600 transition-colors duration-300">
                  <Link to="/Calculators">CALCULATORS</Link>
                </button>
              </div>
                    <div className={`-z-10 ${style.BgCircle}  `}>
                       <Link to="/calculators" className="inline-block">
                   <img
                      src={calcClories}
                     alt="Fitness Challenge"
                     className="hidden lg:block lg:ms-0 ms-32 lg:w-96 lg:h-96 w-60 h-60 object-cover rounded-ful shadow-lg
                       transition-transform duration-500 hover:scale-105"
                   />
                        </Link>
                        </div>

              

              </div>

            </div>
          </div>
        </section>


        <section className="py-16 sm:py-32 overflow-hidden bg-[rgb(102,102,102,.3)]">
          <div className="container mx-auto px-4 sm:px-8">
            <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-8 md:gap-16">
                    <div className="space-y-6 md:space-y-8 relative z-10 sm:mb-16">
                <div className='lg:ms-10 p-3 z-10'>
                  <div className="md:w-1/2 space-y-6 md:space-y-8">
                <h2 className="lg:text-4xl text-xl font-bold font-archivo md:text-3xl">
                  STEP UP YOUR <br />
                  FITNESS CHALLENGE
                </h2>
                <p className="text-gray-200 text-lg font-bold">
                  "Fuel your body with the right nutrition and unlock your full potential!"
                </p>
                <button className="border font-bold text-xl md:text-2xl bg-orange-400 border-orange-400 px-6 md:px-8 py-2 rounded-2xl hover:bg-orange-600 transition-colors duration-300">
                  <Link to="/nutrition">NUTRITIONS</Link>
                </button>
                
              </div>
                 {/* <div className={`lg:hidden ${style.BgCircle}  `}>
                       <Link to="/nutrition" className="inline-block">
                   <img
                      src={FatsProduc}
                     alt="Fitness Challenge"
                     className="lg:ms-0 ms-32 lg:w-96 lg:h-96 w-60 h-60 object-cover rounded-full shadow-lg
                       transition-transform duration-500 hover:scale-105"
                   />
                        </Link>
                        </div> */}
              </div>
                   

              </div>
              <div className="hidden lg:block ms-auto  relative flex justify-center pt-36 overflow-hidden">
                <Link to="/nutrition">
                  <img
                    src={test2}
                    alt="Fitness Challenge"
                    className="z-10 hover:scale-105 transition-all duration-500 lg:w-96 rounded-ful lg:h-96 w-60 h-60 object-cover shadow-lg"
                  />
                </Link>
                <div className={`absolute bg-gray-700 bg-opacity-40 rounded-full `}></div>
                <div className={`absolute bg-orange-400 bg-opacity-30 rounded-full `}></div>
              </div>

            

            </div>
          </div>
        </section>

     

        {/* <section className="py-16 sm:py-32 bg-[rgb(102,102,102,.3)]">
          <div className="container mx-auto px-4 sm:px-8">
            <div className="flex flex-col md:flex-row items-center justify-between gap-8 md:gap-16">
               
              <div className="md:w-1/2 space-y-6 md:space-y-8">
                <h2 className="lg:text-4xl text-2xl font-bold font-archivo md:text-3xl">
                  STEP UP YOUR <br />
                  FITNESS CHALLENGE
                </h2>
                <p className="text-gray-200 text-lg font-bold">
                  "Fuel your body with the right nutrition and unlock your full potential!"
                </p>
                <button className="border font-bold text-xl md:text-2xl bg-orange-400 border-orange-400 px-6 md:px-8 py-2 rounded-2xl hover:bg-orange-600 transition-colors duration-300">
                  <Link to="/nutrition">NUTRITIONS</Link>
                </button>
                
              </div>
                    
              <div className="md:w-1/2 flex justify-center mt-10 md:mt-0">
                <Link to="/nutrition">
                  <img
                    src={FatsProduc}
                    alt="Fitness Challenge"
                    className="hidden lg:block hover:scale-105 transition-all duration-500 lg:w-96 rounded-full lg:h-96 w-60 h-60 object-cover shadow-lg"
                  />
                </Link>
              </div>
            </div>
          </div>
        </section> */}





    
      </div>
    </>
  );
}
