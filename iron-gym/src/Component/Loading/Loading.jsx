import React from "react";
import { RingLoader } from "react-spinners";

export default function Loading() {
  return (
    <div className="fixed top-0 left-0 w-full h-full flex justify-center items-center bg-[rgb(102,102,102,.3)] bg-opacity-70 z-50">
      <RingLoader color="#f97316" size={100} />
    </div>
  );
}
