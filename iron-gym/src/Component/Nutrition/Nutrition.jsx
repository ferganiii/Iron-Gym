import React from "react";
import background from "../../assets/NutritionBackground.jpeg";
import carb from "../../assets/CarbProduc.jpeg";
import protein from "../../assets/ProtienProduc.jpeg";
import fats from "../../assets/FatsProduc.jpeg";
import milks from "../../assets/MilkProduc.jpeg";
import systemNut from "../../assets/systemNut.jpeg";
import calcClories from "../../assets/cardCalories.webp";
import { Link } from "react-router-dom";
import Supplements from "../Supplements/Supplements";
import { motion } from "framer-motion";
import NutritionProgram from "../NutritionProgram/NutritionProgram";
  


const nutritionData = [
  { id: 1, title: "Main Protein Sources", image: protein, link: "protein" },
  { id: 2, title: "Main Carb Sources", image: carb, link: "carb" },
  { id: 3, title: "Main Healthy Fats Sources", image: fats, link: "fat" },
  { id: 4, title: "Dairy and Egg Products", image: milks, link: "dairyEgg" },
];

export default function Nutrition() {
  return (
    <>
      <section className="relative bg-[rgb(102,102,102,.3)]">
        <div
          className="h-screen bg-cover bg-center relative flex flex-col justify-center items-center text-center"
          style={{ backgroundImage: `url(${background})` }}
        >
          <motion.h1
            className="lg:text-8xl max-md:text-4xl max-sm:text-3xl text-white font-Antic"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
          >
            Nutrition
          </motion.h1>

          <div className="absolute bottom-0 left-0 w-full">
            <svg
              id="wave"
              className="w-full"
              viewBox="0 0 1440 490"
              version="1.1"
              xmlns="http://www.w3.org/2000/svg"
            >
              <defs>
                <linearGradient id="sw-gradient-0" x1="0" x2="0" y1="1" y2="0">
                  <stop stopColor="#1F1F1F" offset="0%" />
                  <stop stopColor="#1F1F1F" offset="100%" />
                </linearGradient>
              </defs>
              <path
                fill="url(#sw-gradient-0)"
                d="M0,0L20,24.5C40,49,80,98,120,147C160,196,200,245,240,220.5C280,196,320,98,360,65.3C400,33,440,65,480,114.3C520,163,560,229,600,285.8C640,343,680,392,720,408.3C760,425,800,408,840,367.5C880,327,920,261,960,245C1000,229,1040,261,1080,236.8C1120,212,1160,131,1200,81.7C1240,33,1280,16,1320,8.2C1360,0,1400,0,1440,24.5C1480,49,1520,98,1560,98C1600,98,1640,49,1680,57.2C1720,65,1760,131,1800,138.8C1840,147,1880,98,1920,89.8C1960,82,2000,114,2040,138.8C2080,163,2120,180,2160,212.3C2200,245,2240,294,2280,318.5C2320,343,2360,343,2400,334.8C2440,327,2480,310,2520,302.2C2560,294,2600,294,2640,261.3C2680,229,2720,163,2760,138.8C2800,114,2840,131,2860,138.8L2880,147L2880,490L0,490Z"
              />
            </svg>

            <motion.h2
              className="absolute bottom-10 left-1/2 transform -translate-x-1/2 -translate-y-10 text-white font-archivo lg:text-5xl max-md:text-4xl max-sm:text-3xl text-center"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 2, ease: "easeOut" }}
            >
              GUIDES AND PROGRAMS
            </motion.h2>
          </div>
        </div>

        <div className="container mx-auto relative">
          <div className="mt-10 py-10">
            <h2 className="text-5xl font-archivo text-left">NUTRITION GUIDE</h2>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 max-sm:grid-cols-1 gap-6">
            {nutritionData.map((item) => (
              <div
                key={item.id}
                className="max-sm:mx-auto bg-black/70 p-0 rounded-[50px] max-w-sm bg-white shadow-sm dark:bg-black dark:border-gray-600"
              >
                <Link to={`/nutrition/${item.link}`}>
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-80 hover:scale-105 transition-all duration-500 border border-gray-400 rounded-lg"
                  />
                </Link>
                <div className="p-5">
                  <Link to={`/nutrition/${item.link}`}>
                    <h5 className="font-alkalami text-center text-3xl mt-4 mb-2 tracking-tight text-gray-900 dark:text-white">
                      {item.title.split(" ").slice(0, 2).join(" ")} <br />
                      {item.title.split(" ").slice(2).join(" ")}
                    </h5>
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Supplements />


{/* سكشن لانظمة الغذاآية */}
      <NutritionProgram/>
    </>
  );
}
