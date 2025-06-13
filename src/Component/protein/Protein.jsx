import React from "react";
import proteinsImage from "../../assets/ProtienProduc.jpeg";
import NutritionTable from "../NutritionTable/NutritionTable";

export default function Proteins() {
  return (
    <NutritionTable title="Proteins" bgImage={proteinsImage} apiUrl="https://gym-production-4dd6.up.railway.app/api/protiens" />
  );
}
