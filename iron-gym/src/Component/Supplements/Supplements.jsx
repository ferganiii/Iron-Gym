import React from "react";
import { motion } from "framer-motion";
import sup1 from "../../assets/sup1.jpeg";

export default function Supplements() {
  return (
    <section className="bg-[rgb(102,102,102,.3)] py-28 flex justify-center items-center ">
      <div className="container mx-auto p-4 bg-[rgb(102,102,102,.3)] rounded-lg">
         <h2  className="text-5xl font-archivo text-left mt-10 pb-14">
                       Supplement GUIDE
                     </h2>
        <div className=" overflow-x-auto scrollbar-thin scrollbar-thumb-orange-500 scrollbar-track-gray-800 p-2">
          <motion.div
            className="px-20 flex space-x-6 p-5 cursor-grab"
            drag="x"
            dragConstraints={{ left: -500, right: 0 }}
          >
            <motion.img src={sup1} alt="Supplement 1" className="w-56 h-56 object-cover rounded-full" />
            <motion.img src={sup1} alt="Supplement 2" className="w-56 h-56 object-cover rounded-full" />
            <motion.img src={sup1} alt="Supplement 3" className="w-56 h-56 object-cover rounded-full" />
            <motion.img src={sup1} alt="Supplement 4" className="w-56 h-56 object-cover rounded-full" />
            <motion.img src={sup1} alt="Supplement 5" className="w-56 h-56 object-cover rounded-full" />
            <motion.img src={sup1} alt="Supplement 6" className="w-56 h-56 object-cover rounded-full" />
            <motion.img src={sup1} alt="Supplement 7" className="w-56 h-56 object-cover rounded-full" />
            <motion.img src={sup1} alt="Supplement 8" className="w-56 h-56 object-cover rounded-full" />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
