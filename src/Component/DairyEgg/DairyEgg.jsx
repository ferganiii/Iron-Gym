import React, { useState } from "react";
import milk from "../../assets/milk.png";
import NutritionTable from "../NutritionTable/NutritionTable";

export default function DairyEgg() {




  return (
    <NutritionTable title='DairyEgg'  bgImage = {milk} apiUrl="https://gym-production-4dd6.up.railway.app/api/diary"/>
  );
}
