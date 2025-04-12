// import React from 'react'
// import { XlviLoader } from "react-awesome-loaders";

// export default function Loading() {
//   return (
//     <div className="flex justify-center items-center min-h-screen">
//   <XlviLoader
//     boxColors={["#EF4444", "#F59E0B", "#6366F1"]}
//     desktopSize={"128px"}
//     mobileSize={"100px"}
//     className="text-center"
//   />


  
// </div>
//   )
// }

// src/Component/Loading/Loading.jsx




import React from "react";

export default function Loading() {
  return (
    <div className="flex justify-center items-center min-h-screen bg-white">
      <div className="w-16 h-16 border-4 border-blue-500 border-dashed rounded-full animate-spin"></div>
    </div>
  );
}