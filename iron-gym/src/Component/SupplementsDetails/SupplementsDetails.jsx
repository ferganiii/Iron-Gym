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
            src={supplementDetails.image || "https://via.placeholder.com/300"}
            alt={supplementDetails.name}
            className="hover:scale-105 transition-all duration-500 border-2 border-orange-500 w-full max-w-md mx-auto rounded-full"
          />
        </div>

        {/* اسم المكمل */}
        <div className="mb-16">
          <h2 className="text-4xl font-bold text-center my-6 font-[Angkor]">
            {supplementDetails.name}
          </h2>
        </div>

        {/* تعريف المكمل */}
        <div className="border-2 border-orange-500 w-full mx-auto rounded-2xl mb-8 shadow-md p-4">
          <h2 className="text-4xl font-bold text-center my-6 font-[Angkor]">
            {supplementDetails.Definition}
          </h2>
        </div>

        {/* التفاصيل الأخرى */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 p-4 rounded-lg shadow-md">
          {supplementDetails.dailyRequirement && (
            <Card
              title="-What Is The Body's Daily Protein Requirement?"
              content={supplementDetails.dailyRequirement}
            />
          )}
          {supplementDetails.Benefits && (
            <Card
              title="-Benefit of Whey Protein?"
              content={supplementDetails.Benefits}
            />
          )}
          {supplementDetails.bestTime && (
            <Card
              title="-The Best Time To Take Whey Protein?"
              content={supplementDetails.bestTime}
            />
          )}
          {supplementDetails.Types && (
            <Card
              title="-Types Of Whey Proteins"
              content={supplementDetails.Types}
            />
          )}
          {supplementDetails.sideEffects && (
            <Card
              title="-Side Effects Of Whey Protein"
              content={supplementDetails.sideEffects}
            />
          )}
          {supplementDetails.whoAvoid && (
            <Card
            title={
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                <i className="fa-solid fa-triangle-exclamation m-2" style={{ color: "#ff0000" }} />
                <i className="fa-solid fa-triangle-exclamation m-2" style={{ color: "#ff0000" }} />
                <span>Who Should Avoid Whey Proteins</span>
              </div>
            }
            content={supplementDetails.whoAvoid}
          />
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
