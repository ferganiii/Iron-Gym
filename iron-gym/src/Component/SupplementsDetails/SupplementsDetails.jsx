import React, { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { UserContext } from "../../context/UserContext";

export default function SupplementDetails() {
  const { id } = useParams();
  const [supplementDetails, setSupplementDetails] = useState({});
  const { token } = useContext(UserContext);

  async function getSupplementDetails() {
    try {
      const res = await axios.get(`https://gym-production-8217.up.railway.app/api/supplement/${id}`, {
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "application/json",
        },
      });
console.log("res.data", res.data.docs);

      setSupplementDetails(res.data.docs); // تحديث البيانات
    } catch (error) {
      console.error("Error fetching supplement details:", error);
    }
  }

  useEffect(() => {
    if (id) getSupplementDetails();
  }, [id]); // يتم استدعاء الفنكشن عند تغير `id`

  return (
    <div className="container mx-auto p-4">
      <h2 className="text-4xl font-bold text-center my-6">{supplementDetails.name || "Supplement Details"}</h2>
      <img src={supplementDetails.image || "https://via.placeholder.com/300"} alt={supplementDetails.name} className="w-full max-w-md mx-auto rounded-lg" />
      <p className="text-lg text-gray-700 mt-4">{supplementDetails.Benefits || "No description available."}</p>
    </div>
  );
}
