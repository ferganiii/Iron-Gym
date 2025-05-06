import React, { useContext } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { UserContext } from "../../context/UserContext";
import { useQuery } from "@tanstack/react-query";
import Loading from "../Loading/Loading";

export default function SupplementDetails() {
  const { id } = useParams();
  const { token } = useContext(UserContext);

  const { data: supplementDetails, isLoading, isError, error } = useQuery({
    queryKey: ["supplementDetails", id],
    queryFn: async () => {
      const res = await axios.get(
        `https://gym-production-8217.up.railway.app/api/supplement/${id}`,
        {
          headers: {
            Authorization: `Bearer ${token}`,
            "Content-Type": "application/json",
          },
        }
      );
      return res.data.docs;
    },
    staleTime: 1000 * 60 * 5,
    enabled: !!id && !!token, // عشان ميتنفذش قبل ما التوكن يوصل
  });

  if (isLoading) return <Loading />;
  if (isError) return <p className="text-red-500">Error: {error.message}</p>;

  return (
    <section className="bg-[rgb(102,102,102,.3)]">
      <div className="container mx-auto p-4">
        {/* صورة المكمل */}
        <div className="p-4 flex justify-center items-center">
          <img
            src={supplementDetails.image }
            alt={supplementDetails.name}
            className=" hover:scale-105 transition-all duration-500 border-2 border-orange-500 w-44 lg:w-full max-w-md mx-auto rounded-full"
          />
        </div>

        {/* اسم المكمل */}
        <div className="mb-16">
          <h2 className="text-xl lg:text-4xl font-bold text-center my-6 font-[Angkor]">
            {supplementDetails.name}
          </h2>
        </div>

        {/* تعريف المكمل */}
        <div className="border-2 border-orange-500 w-full mx-auto rounded-2xl mb-8 shadow-md p-4">
          <h2 className="text-xl lg:text-4xl font-bold text-center my-6 font-[Angkor]">
            {supplementDetails.Definition}
          </h2>
        </div>

        {/* التفاصيل الأخرى */}
      <div className="text-xl grid grid-cols-1 md:grid-cols-2 gap-4 p-4 rounded-lg shadow-md">
  {supplementDetails.dailyRequirement && (
    <div className="text-lg lg:text-4xl">
<h2 className="text-orange-500 border-2 border-orange-500 rounded-xl px-4 p-3 inline-block">
  -What Is The Body's Daily Protein Requirement?
</h2>
      <p className="m-4 text-orange-400">{supplementDetails.dailyRequirement}</p>
    </div>
  )}
  {supplementDetails.Benefits && (
    <div className="text-xl lg:text-4xl">
      <h2 className="text-orange-500 border-2 border-orange-500 rounded-xl px-4 p-3 inline-block  m-4">-Benefit of Whey Protein?</h2>
      <p className="m-4 text-orange-400">{supplementDetails.Benefits}</p>
    </div>
  )}
  {supplementDetails.bestTime && (
    <div className="text-xl lg:text-4xl">
      <h2 className="text-orange-500 border-2 border-orange-500 rounded-xl px-4 p-3 inline-block  m-4">-The Best Time To Take Whey Protein?</h2>
      <p className="m-4 text-orange-400">{supplementDetails.bestTime}</p>
    </div>
  )}
  {supplementDetails.Types && (
    <div className="text-xl lg:text-4xl">
      <h2 className="text-orange-500 border-2 border-orange-500 rounded-xl px-4 p-3 inline-block  m-4">-Types Of Whey Proteins</h2>
      <p className="m-4 text-orange-400">{supplementDetails.Types}</p>
    </div>
  )}
  {supplementDetails.sideEffects && (
    <div className="text-xl lg:text-4xl">
      <h2 className="text-orange-500 border-2 border-orange-500 rounded-xl px-4 p-3 inline-block  m-4">-Side Effects Of Whey Protein</h2>
      <p className="m-4 text-orange-400">{supplementDetails.sideEffects}</p>
    </div>
  )}
  {supplementDetails.whoAvoid && (
    <div className="text-xl lg:text-4xl">
      <h2  className="text-orange-500 border-2 border-orange-500 rounded-xl px-4 p-3 inline-block  m-4" style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
        <i className="fa-solid fa-triangle-exclamation m-2" style={{ color: "#ff0000" }} />
        <i className="fa-solid fa-triangle-exclamation m-2" style={{ color: "#ff0000" }} />
        <span>Who Should Avoid Whey Proteins</span>
      </h2>
      <p className="m-4 text-orange-400">{supplementDetails.whoAvoid}</p>
    </div>
  )}
</div>

      </div>
    </section>
  );
}

function Card({ title, content }) {
  return (
    <div className="block max-w-sm p-6 rounded-lg shadow-sm">
      <h5 className="mb-8 text-4xl tracking-tight text-orange-500 border-2 border-orange-500 p-4 rounded-3xl">
        {title}
      </h5>
      <p className="font-[Anta] text-3xl text-orange-600">{content}</p>
    </div>
  );
}
