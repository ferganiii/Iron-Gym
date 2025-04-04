import React, { useContext, useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import axios from "axios";
import { UserContext } from "../../context/UserContext";
import Loading from "../Loading/Loading";
import Slider from "react-slick";
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import styles from "./Supplements.module.css";
export default function Supplements() {
  const [supplement, setSupplement] = useState(null); // مصفوفة فارغة
  const { token } = useContext(UserContext);

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToScroll: 3,
    arrows:false,
    slidesToShow: 5,
    
    responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 4
          }
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 3
          }
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1
          }
        }
      ]
  };

  async function getSupplement() {
    try {
      const res = await axios.get("https://gym-production-8217.up.railway.app/api/supplement", {
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "application/json",
        },
      });

      setSupplement(res.data.docs); // تحديث البيانات
    } catch (error) {
      console.error("Error fetching supplements:", error);
    }
  }

  useEffect(() => {
    getSupplement();
  }, []);

  return (
    <section className="bg-[rgb(102,102,102,.3)] py-28 flex justify-center items-center">
      {supplement == null? (
        <Loading/>
      ) :(
        <div className="container mx-auto p-4 bg-[rgb(102,102,102,.3)] rounded-lg">
        <h2 className="text-5xl font-archivo text-left mt-10 pb-14">Supplement GUIDE</h2>
        <div className="overflow-x-auto scrollbar-thin scrollbar-thumb-orange-500 scrollbar-track-gray-800 p-2">
     <div>
   <Slider {...settings}>
        {supplement.map((sup) => (
              <Link key={sup._id} to={`/SupplementDetails/${sup._id}`}>
             
             <div className="m-4">
                
             <img  src={sup.image || "https://via.placeholder.com/150"}
                  alt={sup.name || "Supplement"}
                  className=" w-56 h-56 object-cover rounded-full hover:scale-110 transition-transform duration-300"/>
              </div>  
              </Link>
            ))}
    </Slider>

     </div>
        </div>
      </div>
      )}


    </section>
  );
}
