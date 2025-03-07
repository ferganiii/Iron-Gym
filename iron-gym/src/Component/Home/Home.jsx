import React from 'react'
import Navebar from '../Navebar/Navebar'
import bacKGROUND from '../../assets/bacKGROUND.jpeg'
import imgeHome from '../../assets/imgeHome.jpeg'
import style from './Home.module.css'  


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
        <div className="absolute inset-0 m-4 sm:m-8 md:m-16 overflow-hidden rounded-xl">
          <img
            src={bacKGROUND}
            alt="Fitness Hero"
            className="w-full h-full object-cover object-center opacity-70"
          />
        </div>
        
        {/* كل المحتوى في الأسفل */}
        <div className="absolute inset-x-0 bottom-10 sm:bottom-24 flex flex-col items-center text-center text-white px-4 pb-10 sm:pb-28 z-20">
          <h1 className="text-5xl sm:text-6xl md:text-8xl font-sans">GET FIT</h1>
          <p className="text-xl sm:text-2xl md:text-3xl mt-4 sm:mt-10">TRANSFORM YOUR BODY</p>
          <button className="mt-6 sm:mt-10 bg-orange-500 hover:bg-orange-600 text-white px-8 sm:px-12 py-3 sm:py-4 rounded-lg text-xl sm:text-2xl md:text-3xl font-semibold transition-colors duration-300 transform hover:scale-105">
            Register
          </button>
        </div>
      </div>


      {/* القسم الأول - خلفية رمادية */}
      <div className="bg-[rgb(102,102,102,.3)] py-0 sm:py-0 pb-32 relative overflow-hidden">
      <div className={`absolute bg-[rgb(102,102,102,.4)] rounded-full ${style.circle}`}></div>

        <div className="container mx-auto px-4 sm:px-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-8 md:gap-16">
            {/* النص */}
            <div className="md:w-1/2 space-y-6 md:space-y-8 order-1 md:order-1 ">
            <h2 className="text-2xl md:text-4xl font-bold">
                BUILD YOUR BODY & <br />
                <span className="text-white">SHAPE YOURSELF !</span>
              </h2>
              <p className="text-gray-600 text-lg  text-center">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
                malesuada lorem maximus mauris scelerisque.
              </p>
              <button className="border text-xl md:text-2xl border-orange-600 px-6 md:px-8 py-2 rounded-2xl hover:bg-orange-500 transition-colors duration-300">
                EXPLORE EXERCISES
              </button>
            </div>
            {/* الصورة */}
            
            <div className="md:w-1/2 flex justify-center order-2 md:order-2 mt-10 md:mt-0 relative pl-24">
            <div className={`absolute bg-[rgb(102,102,102,.4)] rounded-full z-0 ${style.circle1Imge1}`}></div>
            <div className={`absolute bg-[rgb(182,180,179,0.96)]  rounded-full z-0 ${style.circle2Imge1}`}>
            <div className=  {` ${style.doted}`}></div>

            </div>
            <div className={`absolute bg-[rgb(136,180,143,0.84)]  rounded-full z-0 ${style.circle3Imge1}`}></div>
            <div className={`absolute bg-[rgb(200,93,1,0.69)]  rounded-full z-0 ${style.circle4Imge1}`}></div>

              <img
                src={imgeHome}
                alt="Workout"
                className={`z-10 rounded-[50%]  w-full max-w-md h-64 sm:h-96 object-cover shadow-lg ${style.egg}` }
                />
            </div>
          </div>
        </div>
      </div>





      {/* القسم الثاني - خلفية رمادية */}
      <div className="bg-[rgb(102,102,102,.3)] py-16 sm:py-32">
        <div className="container mx-auto px-4 sm:px-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-8 md:gap-16">
            {/* الصورة */}
            <div className="md:w-1/2 flex justify-center order-2 md:order-1 mt-10 md:mt-0">
              <img
                src="https://plus.unsplash.com/premium_photo-1661265933107-85a5dbd815af?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8Z3ltfGVufDB8fDB8fHww"
                alt="Calorie Calculator"
                className="rounded-lg w-full max-w-md h-64 sm:h-96 object-cover shadow-lg"
              />
            </div>
            {/* النص */}
            <div className="md:w-1/2 space-y-6 md:space-y-8 order-1 md:order-2">
              <h2 className="text-2xl md:text-3xl font-semibold">
                Calculate Your Daily <br />
                Calorie & Water Needs
              </h2>
              <p className="text-gray-600 text-lg text-center">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
                malesuada lorem maximus mauris scelerisque.
              </p>
              <button className="border text-xl md:text-2xl border-orange-600 px-6 md:px-8 py-2 rounded-2xl hover:bg-orange-500 transition-colors duration-300">
                CALCULATORS
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* القسم الثالث - خلفية رمادية */}
      <div className="bg-[rgb(102,102,102,.3)] py-16 sm:py-32">
        <div className="container mx-auto px-4 sm:px-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-8 md:gap-16">
            {/* النص */}
            <div className="md:w-1/2 space-y-6 md:space-y-8 order-1 md:order-1">
              <h2 className="text-2xl md:text-3xl font-semibold">
                STEP UP YOUR <br />
                FITNESS CHALLENGE
              </h2>
              <p className="text-gray-600 text-lg text-center">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
                malesuada lorem maximus mauris scelerisque.
              </p>
              <button className="border text-xl md:text-2xl border-orange-600 px-6 md:px-8 py-2 rounded-2xl hover:bg-orange-500 transition-colors duration-300">
                NUTRITIONS
              </button>
            </div>
            {/* الصورة */}
            <div className="md:w-1/2 flex justify-center order-2 md:order-2 mt-10 md:mt-0">
              <img
                src="https://plus.unsplash.com/premium_photo-1661265933107-85a5dbd815af?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8Z3ltfGVufDB8fDB8fHww"
                alt="Fitness Challenge"
                className="rounded-lg w-full max-w-md h-64 sm:h-96 object-cover shadow-lg"
              />
            </div>
          </div>
        </div>
      </div>

      {/* مساحة إضافية في النهاية */}
      <div className="h-16 sm:h-32"></div>
    </div>
  </>
  )
}


