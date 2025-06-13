import React, { useContext } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import axios from "axios";
import Loading from "../Loading/Loading";
import Slider from "react-slick";
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import styles from "./Supplements.module.css";
import { useQuery } from "@tanstack/react-query";
import { UserContext } from "../../Context/UserContext";

export default function Supplements() {
  const { token } = useContext(UserContext);

  const {
    data: supplement,
    isLoading,
    isError,
    error,
  } = useQuery({
    queryKey: ['supplement'],
    queryFn: async () => {
      const res = await axios.get("https://gym-production-4dd6.up.railway.app/api/supplement", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      return res.data.docs;
    },
    staleTime: 1000 * 60 * 5,
  });

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToScroll: 3,
    arrows: false,
    slidesToShow: 5,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 4,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 2,
        },
      },
    ],
  };

  return (
    <section className="bg-[rgb(102,102,102,.3)] py-28 flex justify-center items-center">
      {isLoading ? (
        <Loading />
      ) : isError ? (
        <p className="text-red-500">Error: {error.message}</p>
      ) : (
        <div className="container mx-auto p-4 bg-[rgb(102,102,102,.3)] rounded-lg">
          <h2 className="lg:text-5xl text-3xl font-archivo text-left mt-10 pb-14">Supplement GUIDE</h2>
          <div className="overflow-x-auto scrollbar-thin scrollbar-thumb-orange-500 scrollbar-track-gray-800 p-2">
            <div className="flex justify-center w-full">
              <div className="w-full sm:w-11/12 px-2">
                <Slider {...settings}>
                  {supplement.map((sup) => (
                    <Link key={sup._id} to={`/SupplementDetails/${sup._id}`}>
                      <div className="m-4">
                        <img
                          src={sup.image || "https://via.placeholder.com/150"}
                          alt={sup.name || "Supplement"}
                          className="w-56 h-56 object-cover rounded-full hover:scale-110 transition-transform duration-300"
                        />
                      </div>
                    </Link>
                  ))}
                </Slider>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
