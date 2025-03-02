import React from 'react'
import Navebar from '../Navebar/Navebar'

export default function Home() {
  return (
  <>
     <Navebar/>
    <>
    <div className="bg-black text-white min-h-screen">
      {/* الصورة الرئيسية */}
      <div className="relative w-full h-screen bg-black">
        <img
          src="https://i.pinimg.com/736x/eb/4c/ef/eb4cefe0c24c3e3010394ae4bfd3c9b8.jpg"
          alt="Fitness Hero"
          className="absolute inset-0 w-full h-full object-cover opacity-80"
        />
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center text-white px-4">
          <h1 className="text-6xl font-bold">GET FIT</h1>
          <p className="text-xl mt-2">TRANSFORM YOUR BODY</p>
        </div>
      </div>

      {/* القسم الأول */}
      <div className="flex flex-col md:flex-row items-center justify-between p-10">
        {/* النص */}
        <div className="md:w-1/2 space-y-4 order-1 md:order-1">
          <h2 className="text-2xl md:text-4xl font-bold">
            BUILD YOUR BODY & <br />
            <span className="text-white">SHAPE YOURSELF !</span>
          </h2>
          <p className="text-gray-400">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
            malesuada lorem maximus mauris scelerisque.
          </p>
          <button className="border border-orange-500 px-6 py-2 rounded-md hover:bg-orange-500">
            EXPLORE EXERCISES
          </button>
        </div>
        {/* الصورة */}
        <div className="md:w-1/2 flex justify-center order-2 md:order-2">
          <img
            src="https://plus.unsplash.com/premium_photo-1661265933107-85a5dbd815af?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8Z3ltfGVufDB8fDB8fHww"
            alt="Workout"
            className="rounded-lg w-96 h-64 object-cover"
          />
        </div>
      </div>

      {/* القسم الثاني */}
      <div className="flex flex-col md:flex-row items-center justify-between p-10">
        {/* الصورة */}
        <div className="md:w-1/2 flex justify-center order-2 md:order-1">
          <img
            src="https://plus.unsplash.com/premium_photo-1661265933107-85a5dbd815af?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8Z3ltfGVufDB8fDB8fHww"
            alt="Calorie Calculator"
            className="rounded-lg w-96 h-64 object-cover"
          />
        </div>
        {/* النص */}
        <div className="md:w-1/2 space-y-4 order-1 md:order-2">
          <h2 className="text-2xl md:text-3xl font-semibold">
            Calculate Your Daily <br />
            Calorie & Water Needs
          </h2>
          <p className="text-gray-400">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
            malesuada lorem maximus mauris scelerisque.
          </p>
          <button className="border border-orange-500 px-6 py-2 rounded-md hover:bg-orange-500">
            CALCULATORS
          </button>
        </div>
      </div>

      {/* القسم الثالث */}
      <div className="flex flex-col md:flex-row items-center justify-between p-10">
        {/* النص */}
        <div className="md:w-1/2 space-y-4 order-1 md:order-1">
          <h2 className="text-2xl md:text-3xl font-semibold">
            STEP UP YOUR <br />
            FITNESS CHALLENGE
          </h2>
          <p className="text-gray-400">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
            malesuada lorem maximus mauris scelerisque.
          </p>
          <button className="border border-orange-500 px-6 py-2 rounded-md hover:bg-orange-500">
            NUTRITIONS
          </button>
        </div>
        {/* الصورة */}
        <div className="md:w-1/2 flex justify-center order-2 md:order-2">
          <img
            src="https://plus.unsplash.com/premium_photo-1661265933107-85a5dbd815af?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8Z3ltfGVufDB8fDB8fHww"
            alt="Fitness Challenge"
            className="rounded-lg w-96 h-64 object-cover"
          />
        </div>
      </div>
    </div>
    </>

  </>
  )
}
