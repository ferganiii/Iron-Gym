import React from 'react'
import Navebar from '../Navebar/Navebar'
import bacKGROUND from '../../assets/bacKGROUND.jpeg'

export default function Home() {
  return (
  <>
     <Navebar/>
    <div className="bg-black text-white min-h-screen">
      {/* الصورة الرئيسية */}
      <div className="relative w-full h-screen bg-black overflow-hidden">
        {/* طبقة سوداء إضافية لتظليم الصورة */}
        <div className="absolute inset-0 bg-black opacity-60 z-10"></div>
        
        {/* الصورة مع تصغير وتوسيط */}
        <div className="absolute inset-0 m-8 md:m-16 overflow-hidden rounded-xl">
          <img
            src={bacKGROUND}
            alt="Fitness Hero"
            className="w-full h-full object-cover opacity-70"
          />
        </div>
        
        {/* كل المحتوى في الأسفل */}
        <div className="absolute inset-x-0 bottom-24 flex flex-col items-center text-center text-white px-4 pb-28 z-20">
          <h1 className="text-8xl font-sans">GET FIT</h1>
          <p className="text-3xl mt-10">TRANSFORM YOUR BODY</p>
          <button className="mt-10 bg-orange-500 hover:bg-orange-600 text-white px-12 py-4 rounded-lg text-3xl font-semibold transition-colors duration-300 transform hover:scale-105">
            Register
          </button>
        </div>
      </div>

      {/* القسم الأول */}
      <div className="container mx-auto my-32 px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-16">
          {/* النص */}
          <div className="md:w-1/2 space-y-8 order-1 md:order-1">
            <h2 className="text-2xl md:text-4xl font-bold">
              BUILD YOUR BODY & <br />
              <span className="text-white">SHAPE YOURSELF !</span>
            </h2>
            <p className="text-gray-400 text-lg">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
              malesuada lorem maximus mauris scelerisque.
            </p>
            <button className="border border-orange-500 px-8 py-3 rounded-md hover:bg-orange-500 transition-colors duration-300">
              EXPLORE EXERCISES
            </button>
          </div>
          {/* الصورة */}
          <div className="md:w-1/2 flex justify-center order-2 md:order-2 mt-10 md:mt-0">
            <img
              src="https://plus.unsplash.com/premium_photo-1661265933107-85a5dbd815af?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8Z3ltfGVufDB8fDB8fHww"
              alt="Workout"
              className="rounded-lg w-full max-w-md h-96 object-cover shadow-lg"
            />
          </div>
        </div>
      </div>

      {/* القسم الثاني */}
      <div className="container mx-auto my-32 px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-16">
          {/* الصورة */}
          <div className="md:w-1/2 flex justify-center order-2 md:order-1 mt-10 md:mt-0">
            <img
              src="https://plus.unsplash.com/premium_photo-1661265933107-85a5dbd815af?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8Z3ltfGVufDB8fDB8fHww"
              alt="Calorie Calculator"
              className="rounded-lg w-full max-w-md h-96 object-cover shadow-lg"
            />
          </div>
          {/* النص */}
          <div className="md:w-1/2 space-y-8 order-1 md:order-2">
            <h2 className="text-2xl md:text-3xl font-semibold">
              Calculate Your Daily <br />
              Calorie & Water Needs
            </h2>
            <p className="text-gray-400 text-lg">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
              malesuada lorem maximus mauris scelerisque.
            </p>
            <button className="border border-orange-500 px-8 py-3 rounded-md hover:bg-orange-500 transition-colors duration-300">
              CALCULATORS
            </button>
          </div>
        </div>
      </div>

      {/* القسم الثالث */}
      <div className="container mx-auto my-32 px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-16">
          {/* النص */}
          <div className="md:w-1/2 space-y-8 order-1 md:order-1">
            <h2 className="text-2xl md:text-3xl font-semibold">
              STEP UP YOUR <br />
              FITNESS CHALLENGE
            </h2>
            <p className="text-gray-400 text-lg">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
              malesuada lorem maximus mauris scelerisque.
            </p>
            <button className="border border-orange-500 px-8 py-3 rounded-md hover:bg-orange-500 transition-colors duration-300">
              NUTRITIONS
            </button>
          </div>
          {/* الصورة */}
          <div className="md:w-1/2 flex justify-center order-2 md:order-2 mt-10 md:mt-0">
            <img
              src="https://plus.unsplash.com/premium_photo-1661265933107-85a5dbd815af?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8Z3ltfGVufDB8fDB8fHww"
              alt="Fitness Challenge"
              className="rounded-lg w-full max-w-md h-96 object-cover shadow-lg"
            />
          </div>
        </div>
      </div>

      {/* مساحة إضافية في النهاية */}
      <div className="h-32"></div>
    </div>
  </>
  )
}
