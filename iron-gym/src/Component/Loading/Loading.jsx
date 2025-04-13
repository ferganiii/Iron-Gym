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

// Loading.jsx
import React from "react";
import { CirclesWithBar } from "react-loader-spinner";

export default function Loading() {
  return (
    <div className="fixed top-0 left-0 w-full h-full flex justify-center items-center bg-[rgb(102,102,102,.3)] bg-opacity-70 z-50">
      <CirclesWithBar
        height="100"
        width="100"
        color="#f97316"
        outerCircleColor="#f97316"
        innerCircleColor="#f97316"
        barColor="#f97316"
        ariaLabel="circles-with-bar-loading"
        wrapperStyle={{}}
        wrapperClass=""
        visible={true}
      />
    </div>
  );
}
