import React from "react";
import background from "../../assets/NutritionBackground.jpeg";
import carb from "../../assets/CarbProduc.jpeg";
import protein from "../../assets/ProtienProduc.jpeg";
import fats from "../../assets/FatsProduc.jpeg";
import milks from "../../assets/MilkProduc.jpeg";

const nutritionData = [
  { id: 1, title: "Main Protein Sources", image: protein },
  { id: 2, title: "Main Carb Sources", image: carb },
  { id: 3, title: "Main Healthy Fats Sources", image: fats },
  { id: 4, title: "Dairy and Egg Products", image: milks },
];

export default function Nutrition() {
  return (
    <>
<section className="bg-[rgb(102,102,102,.3)]">
  <div  className=" container mx-auto px-4 sm:px-8 ">

   <div className="relative h-screen w-full ">
        {/* الخلفية */}
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${background})` }}
        ></div>

        {/* طبقة شفافة فوق الخلفية */}
        <div className="absolute inset-0 bg-gray-600/30"></div>

        {/* المحتوى فوق الخلفية */}
        <div className="relative z-10 flex flex-col items-center justify-center h-full text-white">
          <h1 className="lg:text-8xl font-Antic sm:text-5xl ">NUTRITION</h1>
        </div>

        {/* الموجة */}
        <div className="absolute bottom-0 left-0 w-full">
        <svg id="wave" style={{transform: 'rotate(0deg)', transition: '0.3s'}} viewBox="0 0 1440 490" version="1.1" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <linearGradient id="sw-gradient-0" x1={0} x2={0} y1={1} y2={0}>
      <stop stopColor="#1F1F1F" offset="0%" />
      <stop stopColor="#1F1F1F" offset="100%" />
    </linearGradient>
  </defs>
  <path style={{transform: 'translate(0, 0px)', opacity: 1}} fill="url(#sw-gradient-0)" d="M0,0L20,24.5C40,49,80,98,120,147C160,196,200,245,240,220.5C280,196,320,98,360,65.3C400,33,440,65,480,114.3C520,163,560,229,600,285.8C640,343,680,392,720,408.3C760,425,800,408,840,367.5C880,327,920,261,960,245C1000,229,1040,261,1080,236.8C1120,212,1160,131,1200,81.7C1240,33,1280,16,1320,8.2C1360,0,1400,0,1440,24.5C1480,49,1520,98,1560,98C1600,98,1640,49,1680,57.2C1720,65,1760,131,1800,138.8C1840,147,1880,98,1920,89.8C1960,82,2000,114,2040,138.8C2080,163,2120,180,2160,212.3C2200,245,2240,294,2280,318.5C2320,343,2360,343,2400,334.8C2440,327,2480,310,2520,302.2C2560,294,2600,294,2640,261.3C2680,229,2720,163,2760,138.8C2800,114,2840,131,2860,138.8L2880,147L2880,490L0,490Z"/>

</svg>
   
<div className="relative">
  <h2 className="font-archivo text-5xl text-left ml-10 absolute top-1/2 transform -translate-y-1/2 sm:-translate-y-32 lg:-translate-y-64">
    GUIDES AND PROGRAMS
  </h2>
</div>


        </div>
        
      </div>

      {/* قسم NUTRITION GUIDE */}
      <div className="bg-[rgb(102,102,102,.3)] text-white py-12 px-6 md:px-16">


        
  {/* العنوان الرئيسي في الزاوية اليسرى */}
  

  {/* عنوان دليل التغذية */}
  <h2 className="text-5xl font-archivo text-left mb-10">NUTRITION GUIDE</h2>

  {/* عرض الكروت في شبكة */}
  <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
    {nutritionData.map((item) => (
      <div
        key={item.id}
        className="bg-black/70 p-6 rounded-[50px] shadow-md flex flex-col items-center"
      >
        <img
          src={item.image}
          alt={item.title}
          className="w-80 h-80 rounded-xl"
        />
        <h2 className="font-alkalami text-center  text-3xl mt-4">
  {item.title.split(" ").slice(0, 2).join(" ")} <br />
  {item.title.split(" ").slice(2).join(" ")}
</h2>


      </div>


    ))}

  </div>

</div>
</div>
</section>


     



    </>
  );
}
