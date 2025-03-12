import React from 'react';
import Navbar from '../Navbar/Navbar';
import bacKGROUND from '../../assets/bacKGROUND.jpeg';
import imgeHome from '../../assets/imgeHome.jpeg';
import man1Home from '../../assets/man1Home.png';
import style from './Home.module.css';

export default function Home() {
  return (
    <>
      <Navbar />
      <div className="bg-black text-white min-h-screen">
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
              Register
            </button>
          </div>
        </div>

        {/* القسم الأول */}
        <section className="bg-[rgb(102,102,102,.3)]  py-16">
          <div className="container mx-auto px-4 sm:px-8 relative overflow-hidden">
            <div className={`absolute bg-gray-700 bg-opacity-40 rounded-full ${style.circle}`}></div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16 items-center relative">
              {/* النص */}
              <div className="space-y-6 md:space-y-8 z-10 text-center md:text-left">
                <h2 className="md:text-4xl text-4xl font-archivo">
                  BUILD YOUR BODY & <br />
                  <span className="text-white">SHAPE YOURSELF!</span>
                </h2>
                <p className="text-gray-400 text-lg">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec malesuada lorem maximus mauris scelerisque.
                </p>
                <button className="border text-xl md:text-2xl border-orange-600 px-6 md:px-8 py-2 rounded-2xl hover:bg-orange-500 transition-colors duration-300">
                  EXPLORE EXERCISES
                </button>
              </div>

              {/* الصورة */}
              <div className="relative flex justify-center pl-24">
                <div className={`absolute bg-gray-700 bg-opacity-40 rounded-full ${style.circle1Imge1}`}></div>
                <div className={`absolute bg-gray-500 bg-opacity-90 rounded-full ${style.circle2Imge1}`}>
                  <div className={style.doted}></div>
                </div>
                <div className={`absolute bg-[rgb(102,102,102,.4)] rounded-full z-0 ${style.circle1Imge1}`}></div>
<div className={`absolute bg-[rgb(182,180,179,0.96)] rounded-full z-0 ${style.circle2Imge1}`}>
  <div className={`${style.doted}`}></div>
</div>

                <img
                  src={imgeHome}
                  alt="Workout"
                  className={`z-10 rounded-full w-full max-w-md h-64 sm:h-96 object-cover shadow-lg ${style.egg}`}
                />
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
                <h2 className="text-4xl font-archivo">Calculate Your Daily <br /> Calorie & Water Needs</h2>
                <p className="text-gray-400 text-lg text-center">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec malesuada lorem maximus mauris scelerisque.
                </p>
                <button className="border text-xl md:text-2xl border-orange-600 px-6 md:px-8 py-2 rounded-2xl hover:bg-orange-500 transition-colors duration-300">
                  CALCULATORS
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
                <h2 className="text-4xl font-archivo md:text-3xl">
                  STEP UP YOUR <br />
                  FITNESS CHALLENGE
                </h2>
                <p className="text-gray-400 text-lg text-center">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec malesuada lorem maximus mauris scelerisque.
                </p>
                <button className="border text-xl md:text-2xl border-orange-600 px-6 md:px-8 py-2 rounded-2xl hover:bg-orange-500 transition-colors duration-300">
                  NUTRITIONS
                </button>
              </div>
              {/* الصورة */}
              <div className="md:w-1/2 flex justify-center mt-10 md:mt-0">
                <img
                  src="https://plus.unsplash.com/premium_photo-1661265933107-85a5dbd815af?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8Z3ltfGVufDB8fDB8fHww"
                  alt="Fitness Challenge"
                  className="rounded-lg w-full max-w-md h-64 sm:h-96 object-cover shadow-lg"
                />
              </div>
            </div>
          </div>
        </section>

       
      </div>
    </>
  );
}
