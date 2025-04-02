import React, { useContext, useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom"; // استيراد Link للتنقل
import axios from "axios";
import { UserContext } from "../../context/UserContext";

export default function Supplements() {
  const [supplement, setSupplement] = useState([]);
const {token , role}  = useContext(UserContext);

 async function getSupplement(){

    try {
      const res = await axios.get("https://gym-production-8217.up.railway.app/api/supplement",
        {
          headers: {
            Authorization: `Bearer ${token}`,
            "Content-Type": "application/json",
          },
        }
      );
      setSupplement(res.data.docs); // تحديث البيانات بالمكمل المحدد
      console.log(res.data.docs);
      
    } catch (error) {
      console.error("Error fetching supplement details:", error);
    }
  }
     
  useEffect(() => {
    getSupplement();
  }, []); // يتم استدعاء `getSupplement()` مرة واحدة فقط

  return (
    <section className="bg-[rgb(102,102,102,.3)] py-28 flex justify-center items-center">
      <div className="container mx-auto p-4 bg-[rgb(102,102,102,.3)] rounded-lg">
        <h2 className="text-5xl font-archivo text-left mt-10 pb-14">
          Supplement GUIDE
        </h2>
        <div className="overflow-x-auto scrollbar-thin scrollbar-thumb-orange-500 scrollbar-track-gray-800 p-2">
          <motion.div
            className="px-20 flex space-x-6 p-5 cursor-grab"
            drag="x"
            dragConstraints={{ left: -500, right: 0 }}
          >
            {supplement.map((sup) => (
              <Link to='/SupplementDetails'> {/* رابط لكل مكمل */}
                <motion.img
                  src={sup.image || "https://via.placeholder.com/150"} 
                  alt={sup.name || "Supplement"}
                  className="w-56 h-56 object-cover rounded-full hover:scale-110 transition-transform duration-300"
                />
              </Link>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
