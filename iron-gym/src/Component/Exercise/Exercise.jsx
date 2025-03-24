import React, { useEffect, useState } from "react";
import axios from "axios";

export default function Exercise() {
  const [exercises, setExercises] = useState([]) // اسم أوضح

  async function getExercises() {

    const res = await axios.get("https://gym-production-8217.up.railway.app/api/carb");

console.log(res.data);
    setExercises(res.data);

  }
    

  useEffect(() => {
    getExercises();
  }, []);

  return (
  <>
  
  
  
  
  
  </>
  );
}
