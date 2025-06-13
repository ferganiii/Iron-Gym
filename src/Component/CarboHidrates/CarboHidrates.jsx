import React, { useState } from "react";
import carbImage from "../../assets/CarbProduc.jpeg"; 
import NutritionTable from "../NutritionTable/NutritionTable";

export default function Carbohydrates() {


  return (
    <NutritionTable title="Carbohydrates" bgImage={carbImage} apiUrl="https://gym-production-4dd6.up.railway.app/api/carb" />
  );
}