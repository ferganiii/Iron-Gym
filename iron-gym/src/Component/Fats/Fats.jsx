import React, { useState } from "react";
import fatsImage from "../../assets/FatsProduc.jpeg";
import nutritionData from "../../Data/nutritionData.json"; 
import NutritionTable from "../NutritionTable/NutritionTable";

export default function Fats() {

  return (
    <NutritionTable title="Fats" bgImage={fatsImage} apiUrl="https://gym-production-8217.up.railway.app/api/healthy" />
  );
}
