import React from "react";
import logo from "../../assets/logoFooter.png";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="bg-[rgb(36,37,37,1)]  text-white">
      <div className="container  pt-10 mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 items-start">
          {/* العمود الأول */}
          <div className="text-center">
            <h2 className="mb-6 font-AlfaSlabOne text-5xl uppercase">IRON GYM</h2>
            <p className="pb-10 font-archivo text-gray-400">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus maxime recusandae reiciendis, in aspernatur exercitationem quasi placeat velit perspiciatis.
            </p>
          </div>

          {/* العمود الثاني - الروابط */}
          <div className="text-center">
            <ul className="text-2xl flex flex-col items-center space-y-2">
              {[
                { to: "/exercise", label: "Exercises" },
                { to: "/nutrition", label: "Nutrition" },
                { to: "/aboutus", label: "About" },
                { to: "/ContactUs", label: "Contact Us" },
              ].map(({ to, label }) => (
                <li key={to} className="w-40">
                  <Link to={to} className="hover:text-orange-500 hover:underline uppercase transition-all duration-300 flex items-center">
                    <span className="font-bold w-4 text-center">•</span> {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* العمود الثالث - الصورة */}
          <div className="flex justify-end">
            <img className="h-52 object-contain" src={logo} alt="Iron Gym Logo" />
          </div>
        </div>

        {/* الحقوق */}
        <div className="flex justify-center sm:justify-between bg-orange-600 p-6 mt-10 text-gray-900">
          <span className="text-base">
            © {new Date().getFullYear()}{" "}
            <Link to="/" className="hover:underline">
              Iron Gym™
            </Link>
            . All Rights Reserved.
          </span>
        </div>
      </div>
    </footer>
  );
}
