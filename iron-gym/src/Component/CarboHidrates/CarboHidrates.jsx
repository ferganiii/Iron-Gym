import React, { useState } from "react";
import carbImage from "../../assets/CarbProduc.jpeg"; 
import nutritionData from "../../Data/nutritionData.json"; 

export default function Carbohydrates() {
  const [data] = useState(nutritionData.carbs || []);

  return (
    <section className="relative bg-[rgb(102,102,102,.3)]">
      {/* الخلفية والموجة */}
      <div
        className="h-screen bg-cover bg-center relative"
        style={{ backgroundImage: `url(${carbImage})` }}
      >
        <div className="absolute bottom-0 left-0 w-full">
          <svg
            id="wave"
            className="w-full"
            style={{ transform: "rotate(0deg)", transition: "0.3s" }}
            viewBox="0 0 1440 490"
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

          {/* العنوان */}
          <h2 className="absolute max-sm:ms-8 bottom-64 max-sm:bottom-28 left-1/4 transform -translate-x-1/2 text-white font-archivo lg:text-5xl max-md:text-4xl max-sm:text-3xl">
            Carbohydrates Sources
          </h2>
        </div>
      </div>

      {/* ✅ باقي المحتوى */}
      <div className="container mx-auto px-4 py-10">
        <div className="pb-10">
          <h2 className="text-4xl font-archivo">
            The richest sources of carbohydrates <br /> and the average values and nutrients per 100g
          </h2>
        </div>

        <div className="relative overflow-x-auto">
          <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
            <thead className="text-3xl max-sm:text-xl text-gray-700 uppercase bg-gray-50 dark:bg-[rgb(102,102,102,.3)] dark:text-orange-500">
              <tr>
                <th scope="col" className="px-6 py-5 text-center">Name</th>
                <th scope="col" className="px-6 py-5">Calories</th>
                <th scope="col" className="px-6 py-5">Protein</th>
                <th scope="col" className="px-6 py-5">Carb</th>
                <th scope="col" className="px-6 py-5">Fat</th>
              </tr>
            </thead>
            <tbody className="text-3xl max-sm:text-xl">
              {data?.length ? (
                data.map((item, index) => (
                  <tr
                    key={index}
                    className="bg-white border-y-[1px] dark:bg-[rgb(102,102,102,.3)] dark:border-orange-600 border-gray-200"
                  >
                    <th scope="row" className="text-4xl font-Andika  text-center px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                      {item?.name_ar || ""} {item?.name_en ? `- ${item.name_en}` : ""}
                    </th>
                    <td className="px-6 py-10 text-4xl font-Andika ">{item?.calories ?? "N/A"} kcal</td>
                    <td className="px-6 py-10 text-4xl font-Andika ">{item?.protein ?? "N/A"} g</td>
                    <td className="px-6 py-10 text-4xl font-Andika ">{item?.carbs ?? "N/A"} g</td>
                    <td className="px-6 py-10 text-4xl font-Andika ">{item?.fat ?? "N/A"} g</td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan="5" className="text-center py-4">No data available</td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
}