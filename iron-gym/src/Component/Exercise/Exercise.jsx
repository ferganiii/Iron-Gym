import React from 'react'
import background from '../../assets/bg_exercise.png'
import shape5 from '../../assets/shape-5.png'
import man1Exercise from '../../assets/man1Exercise.png'
import image3Cardio from '../../assets/image3Cardio.png'
import img2Exercise from '../../assets/img2Exercise.png'
import { motion } from "framer-motion";
import style from "./Exercise.module.css"
import { Link } from 'react-router-dom'

export default function Exercise() {
  return (
    <>
      <section className='bg-[rgb(102,102,102,.3)] relative'>
        {/* Hero Section */}
        <div
  className="h-screen bg-cover bg-center relative flex flex-col justify-center items-start text-center"
  style={{ backgroundImage: `url(${background})` }}
>
  {/* BE FIT Animation */}
  <motion.h2
    className="text-3xl md:text-5xl font-[Montserrat] mb-5 ms-8"
    initial={{ opacity: 0, scale: 0.3, rotate: -90 }}
    animate={{ opacity: 1, scale: 1, rotate: 0 }}
    transition={{
      duration: 1,
      ease: "easeOut",
      delay: 0.3,
      type: "spring",
      stiffness: 300,
      damping: 20,
    }}
  >
    BE FIT ,
  </motion.h2>

  {/* BE STRONG Animation */}
  <motion.h2
    className="text-3xl md:text-5xl font-[Montserrat] text-orange-500 font-bold ms-8"
    style={{ textShadow: "6px 5px 1px rgba(249,115,22,0.5)" }}
    initial={{ x: -500, opacity: 0, skew: 20 }}
    animate={{ x: 0, opacity: 1, skew: 0 }}
    transition={{
      duration: 1.3,
      ease: "easeOut",
      delay: 1,
      type: "spring",
      stiffness: 400,
      damping: 15,
    }}
  >
    BE STRONG
  </motion.h2>
</div>

        <div className='container mx-auto mt-20 relative overflow-hidden'> 
          <div className='grid grid-cols-1 lg:grid-cols-2 gap-4 py-4'>
            {/* القسم الأول */}
            <div>
              <div className="flex">
                <div className="relative">
                  <div className={`w-48 h-48 ${style['clip-custom-1']}`}></div>
                  <div className="text-orange-500 lg:ms-60 ms-20 whitespace-nowrap z-10 absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 lg:text-5xl text-3xl font-bold ">
                    Exercise Guide
                  </div>
                </div>
                <div className="relative w-[200px] h-[200px]">
                  <div className={`w-full h-full absolute top-1/2 -left-9 ${style['clip-custom-2']}`}></div>
                </div>
              </div>

              <div className="flex items-center gap-4 mt-4">
                <div className={`w-48 h-48 bg-[#666666] ${style['clip-custom-1']}`}>
                  <img src={man1Exercise} alt="" className="object-cover w-full h-full" />
                </div>
                <Link to="/MuscleMap">
                <button className="z-10 text-xl bg-orange-500 text-white py-4 px-6 rounded hover:bg-orange-600 transition">
                  Explore Muscles group >>
                </button>
                  </Link>
              </div>
            </div>

            {/* القسم الثاني */}
            <div className="ms-auto w-auto rounded-lg shadow-sm py-8">
              <div className={`relative ${style['clip-msls']}`}>
                <div className={`absolute -top-32 lg:-top-40 left-2/4 ${style.bord}`}>
                  <p className="ms-16 uppercase mb-3 font-Angkor text-center lg:text-4xl text-2xl text-gray-700 dark:text-white">
                    build your body with the perfect Exercise Guide
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* القسمين الإضافيين */}
          
          {/* القسم الثالث */}
          <div className='grid grid-cols-1 lg:grid-cols-2 gap-4 py-4 mt-20'>
            <div>
              <div className="flex">
                <div className="relative">
                  <div className={`w-48 h-48 ${style['clip-custom-1']}`}></div>
                  <div className="text-orange-500 ms-20 lg:ms-60 whitespace-nowrap z-10 absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 lg:text-5xl text-3xl font-bold  ">
                  Exercise System
                  </div>
                </div>
                <div className="relative w-[200px] h-[200px]">
                  <div className={`w-full h-full absolute top-1/2 -left-9 ${style['clip-custom-2']}`}></div>
                </div>
              </div>

              <div className="flex items-center gap-4 mt-4">
                <div className={`w-48 h-48 bg-[#666666] ${style['clip-custom-1']}`}>
                  <img src={img2Exercise} alt="Nutrition" className="object-cover w-full h-full" />
                </div>
                <button className=" z-10 text-xl bg-orange-500 text-white py-4 px-6 rounded hover:bg-orange-600 transition">
                 <Link to="/ExerciseSystem">
                 Explore System >>
                 </Link>   
                </button>
              </div>
            </div>

            <div className="ms-auto w-auto rounded-lg shadow-sm py-8">
              <div className={`relative ${style['clip-msls']}`}>
                <div className={`absolute -top-32 lg:-top-40 left-2/4 ${style.bord}`}>
                  <p className="ms-16 uppercase lg:mt-28 font-Angkor text-center lg:text-4xl text-2xl text-gray-700 dark:text-white">
                    EVERY DAY IS A GYM DAY
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* القسم الرابع */}
          <div className='grid grid-cols-1 lg:grid-cols-2 gap-4 py-4 mt-20'>
            <div>
              <div className="flex">
                <div className="relative">
                  <div className={`w-48 h-48 ${style['clip-custom-1']}`}></div>
                  <div className="text-orange-500 ms-36 whitespace-nowrap z-10 absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 lg:text-5xl text-3xl font-bold  ">
                  Cardio
                  </div>
                </div>
                <div className="relative w-[200px] h-[200px]">
                  <div className={`w-full h-full absolute top-1/2 -left-9 ${style['clip-custom-2']}`}></div>
                </div>
              </div>

              <div className="flex items-center gap-4 mt-4">
                <div className={`w-48 h-48 bg-[#666666] ${style['clip-custom-1']}`}>
                  <img src={image3Cardio} alt="Workout" className="object-cover w-full h-full" />
                </div>
                <Link to="/Cardio">
                <button className="z-10 text-xl bg-orange-500 text-white py-4 px-6 rounded hover:bg-orange-600 transition">
                Explore Cardio >>
                </button>
                </Link>
              </div>
            </div>

            <div className="ms-auto w-auto rounded-lg shadow-sm py-8">
              <div className={`relative ${style['clip-msls']}`}>
                <div className={`absolute -top-20 lg:-top-40 left-2/4 ${style.bord}`}>
                  <p className="ms-16 uppercase mb-3 font-Angkor text-center lg:text-4xl text-2xl text-gray-700 dark:text-white">
                    ELEVANTE YOUR WORKOUT WITH SOME CARDIO
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}