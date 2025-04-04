import React from 'react'
import background from '../../assets/bg_exercise.png'
import shape5 from '../../assets/shape-5.png'
import sup1 from '../../assets/sup1.jpeg'
import style from "./Exercise.module.css"
export default function Exercise() {
  return (
    <>
    <section className='bg-[rgb(102,102,102,.3)] relative'>
  <div
    className="h-screen bg-cover bg-center relative flex flex-col justify-center items-start text-center"
    style={{ backgroundImage: `url(${background})` }}
  >
    <h2 className='ms-60 text-5xl font-[Montserrat] mb-5'>BE FIT , </h2>
    <h2
      className='ms-60 text-5xl font-[Montserrat] text-orange-500 font-bold'
      style={{ textShadow: '6px 5px 1px rgba(249,115,22,0.5)' }}
    >
      BE STRONG 💪💪
    </h2>
  </div>

  <div className='container mx-auto mt-20 bg-gray-900 relative  overflow-hidden'> 
 
  <div className="flex gap-6 p-4">
  {/* العنصر الأول */}
  <div className="relative w-[320px] h-[280px]">
    {/* الشكل */}
    <div className="w-full h-full bg-[#666666] clip-custom-1"></div>

    {/* الكتابة فوق الشكل */}
    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-white text-2xl font-bold text-center px-4">
      يييييييييييييييييييييييييييييييييييييينص فوق الشكل 💬
    </div>
  </div>

  {/* العنصر الثاني */}
  <div className="relative w-[200px] h-[200px]">
    <div className="w-full h-full bg-[#999999] clip-custom-2"></div>

    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-white text-lg font-semibold text-center px-4">
      كلام فوق الشكل التاني 🔥
    </div>
  </div>
</div>




<div
    style={{
      clipPath: 'polygon(0 0, 55% 0, 83% 52%, 55% 100%, 0 100%, 0 46%)',
      backgroundColor: '#666666', 
      width: '320px',
      height: '280px',
    }}
  >
    <img src={sup1} alt="" className='object-cover w-full h-full' />

  </div>





  </div>
  
</section>


    </>
  )
}

