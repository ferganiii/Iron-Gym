import React, { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { UserContext } from "../../context/UserContext";
import { AlertTriangle } from "lucide-react";
import Loading from "../Loading/Loading";
export default function SupplementDetails() {
  const { id } = useParams();
  const [supplementDetails, setSupplementDetails] = useState(null); // مصفوفة فارغة});
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
   <>
      <section className="bg-[rgb(102,102,102,.3)] ">

{supplementDetails == null ? (
  <Loading />
) : (
  <div className="container mx-auto p-4">

    {/* صورة المكمل */}
    <div className="p-4 flex justify-center items-center">
      <img
        src={supplementDetails.image || "https://via.placeholder.com/300"}
        alt={supplementDetails.name}
        className="border-2 border-orange-500 w-full max-w-md mx-auto rounded-full"
      />
    </div>

    {/* اسم المكمل */}
    <div className="mb-16">
      <h2 className="text-4xl font-bold text-center my-6 font-[Angkor]">{supplementDetails.name}</h2>
    </div>

    {/* تعريف المكمل */}
    <div className="border-2 border-orange-500 w-full mx-auto rounded-2xl mb-8 shadow-md p-4">
      <h2 className="text-4xl font-bold text-center my-6 font-[Angkor]">{supplementDetails.Definition}</h2>
    </div>

    {/* التفاصيل الأخرى */}
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 p-4 rounded-lg shadow-md">

      {supplementDetails.dailyRequirement && (
        <div className="block max-w-sm p-6 rounded-lg shadow-sm">
          <h5 className="mb-8 text-4xl tracking-tight text-orange-500 dark:text-orange-500 border-2 border-orange-500 p-4 rounded-3xl">
            -What Is The Body's Daily Protein Requirement?
          </h5>
          <p className="font-[Anta] text-3xl text-orange-600 dark:text-white">{supplementDetails.dailyRequirement}</p>
        </div>
      )}

      {supplementDetails.Benefits && (
        <div className="block max-w-sm p-6 rounded-lg shadow-sm">
          <h5 className="mb-8 text-4xl tracking-tight text-orange-500 dark:text-orange-500 border-2 border-orange-500 p-4 rounded-3xl">
            -Benefit of Whey Protein?
          </h5>
          <p className="font-[Anta] text-3xl text-orange-600 dark:text-white">{supplementDetails.Benefits}</p>
        </div>
      )}

      {supplementDetails.bestTime && (
        <div className="block max-w-sm p-6 rounded-lg shadow-sm">
          <h5 className="mb-8 text-4xl tracking-tight text-orange-500 dark:text-orange-500 border-2 border-orange-500 p-4 rounded-3xl">
            -The Best Time To Take Whey Protein?
          </h5>
          <p className="font-[Anta] text-3xl text-orange-600 dark:text-white">{supplementDetails.bestTime}</p>
        </div>
      )}

      {supplementDetails.Types && (
        <div className="block max-w-sm p-6 rounded-lg shadow-sm">
          <h5 className="mb-8 text-4xl tracking-tight text-orange-500 dark:text-orange-500 border-2 border-orange-500 p-4 rounded-3xl">
            -Types Of Whey Proteins
          </h5>
          <p className="font-[Anta] text-3xl text-orange-600 dark:text-white">{supplementDetails.Types}</p>
        </div>
      )}

      {supplementDetails.sideEffects && (
        <div className="block max-w-sm p-6 rounded-lg shadow-sm">
          <h5 className="mb-8 text-4xl tracking-tight text-orange-500 dark:text-orange-500 border-2 border-orange-500 p-4 rounded-3xl">
            -Side Effects Of Whey Protein
          </h5>
          <p className="font-[Anta] text-3xl text-orange-600 dark:text-white">{supplementDetails.sideEffects}</p>
        </div>
      )}

      {supplementDetails.whoAvoid && (
        <div className="block max-w-sm p-6 rounded-lg shadow-sm">
          <h5 className="mb-8 text-4xl tracking-tight text-orange-500 dark:text-orange-500 border-2 border-orange-500 p-4 rounded-3xl">
            -Who Should Avoid Whey Proteins
          </h5>
          <p className="font-[Anta] text-3xl text-orange-600 dark:text-white">{supplementDetails.whoAvoid}</p>
        </div>
      )}

    </div>
  </div>
)}
</section>

   
   </>
  );
}
