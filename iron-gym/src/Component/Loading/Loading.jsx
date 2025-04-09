import React from 'react'
import { XlviLoader } from "react-awesome-loaders";

export default function Loading() {
  return (
    <div className="flex justify-center items-center min-h-screen">
  <XlviLoader
    boxColors={["#EF4444", "#F59E0B", "#6366F1"]}
    desktopSize={"128px"}
    mobileSize={"100px"}
    className="text-center"
  />


  
</div>
  )
}
