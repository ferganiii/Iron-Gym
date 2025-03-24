import React, { useState } from "react";
import logo from "../../assets/logo.jpeg";
import { Link, NavLink } from "react-router-dom";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <>
   <div className="fixed top-0 left-0 right-0 z-50 flex justify-center bg-black">
  <nav className="w-full max-w-7xl px-4 sm:px-6 lg:px-8">
    <div className="relative flex h-20 items-center justify-between">
      {/* اللوجو */}
      <div className="flex items-center">
        <div className="flex flex-col items-center mr-4">
          <img className="h-16 w-auto" src={logo} alt="Iron Gym Logo" />
          <span className="text-xs font-bold text-orange-500 mt-0.5">
            IRON GYM
          </span>
        </div>
      </div>

      {/* روابط القائمة - سطح المكتب */}
      <div className="hidden sm:flex space-x-11">
        <NavLink
          to="/"
          className={({ isActive }) =>
            isActive
              ? "text-orange-500 text-xl font-bold border-b-2 border-orange-500 transition duration-200"
              : "text-white text-xl hover:text-orange-500 transition duration-200"
          }
        >
          HOME
        </NavLink>
        <NavLink
          to="/exercise"
          className={({ isActive }) =>
            isActive
              ? "text-orange-500 text-xl font-bold border-b-2 border-orange-500 transition duration-200"
              : "text-white text-xl hover:text-orange-500 transition duration-200"
          }
        >
          EXERCISES
        </NavLink>
        <NavLink
          to="/nutrition"
          className={({ isActive }) =>
            isActive
              ? "text-orange-500 text-xl font-bold border-b-2 border-orange-500 transition duration-200"
              : "text-white text-xl hover:text-orange-500 transition duration-200"
          }
        >
          NUTRITION
        </NavLink>
        <NavLink
          to="/aboutus"
          className={({ isActive }) =>
            isActive
              ? "text-orange-500 text-xl font-bold border-b-2 border-orange-500 transition duration-200"
              : "text-white text-xl hover:text-orange-500 transition duration-200"
          }
        >
          ABOUT US
        </NavLink>
        <NavLink
          to="/contactus"
          className={({ isActive }) =>
            isActive
              ? "text-orange-500 text-xl font-bold border-b-2 border-orange-500 transition duration-200"
              : "text-white text-xl hover:text-orange-500 transition duration-200"
          }
        >
          CONTACT US
        </NavLink>
      </div>

      {/* زر تسجيل الخروج - سطح المكتب */}
      <div className="hidden sm:block">
        <NavLink
          to="/auth"
          className={({ isActive }) =>
            isActive
              ? "text-white font-bold"
              : "text-orange-500 hover:text-white transition duration-200"
          }
        >
          LOG OUT
        </NavLink>
      </div>

      {/* زر القائمة الجانبية - الموبايل */}
      <div className="sm:hidden flex items-center absolute right-4 top-1/2 transform -translate-y-1/2">
        <button onClick={toggleMenu} className="text-orange-500 focus:outline-none">
          {/* أيقونة الهامبرجر */}
          <div className="w-7 flex flex-col space-y-1">
            <span
              className={`block h-0.5 w-7 bg-orange-500 transition-transform duration-300 ${
                isMenuOpen ? "rotate-45 translate-y-2" : ""
              }`}
            ></span>
            <span
              className={`block h-0.5 w-7 bg-orange-500 transition-opacity duration-300 ${
                isMenuOpen ? "opacity-0" : "opacity-100"
              }`}
            ></span>
            <span
              className={`block h-0.5 w-7 bg-orange-500 transition-transform duration-300 ${
                isMenuOpen ? "-rotate-45 -translate-y-2" : ""
              }`}
            ></span>
          </div>
        </button>
      </div>
    </div>

    {/* القائمة الجانبية - الموبايل */}
    {isMenuOpen && (
      <div className="sm:hidden bg-black border-t border-gray-800 py-2">
        <div className="flex flex-col space-y-3 px-4 pt-2 pb-4">
          <NavLink
            to="/"
            className={({ isActive }) =>
              isActive ? "text-orange-500 font-bold" : "text-white hover:text-orange-500 block py-1"
            }
          >
            HOME
          </NavLink>


          
          <NavLink
            to="/exercises"
            className={({ isActive }) =>
              isActive ? "text-orange-500 font-bold" : "text-white hover:text-orange-500 block py-1"
            }
          >
            EXERCISES
          </NavLink>
          <NavLink
            to="/nutrition"
            className={({ isActive }) =>
              isActive ? "text-orange-500 font-bold" : "text-white hover:text-orange-500 block py-1"
            }
          >
            NUTRITION
          </NavLink>
          <NavLink
            to="/about"
            className={({ isActive }) =>
              isActive ? "text-orange-500 font-bold" : "text-white hover:text-orange-500 block py-1"
            }
          >
            ABOUT US
          </NavLink>
          <NavLink
            to="/contact"
            className={({ isActive }) =>
              isActive ? "text-orange-500 font-bold" : "text-white hover:text-orange-500 block py-1"
            }
          >
            CONTACT US
          </NavLink>
          <div className="pt-2 border-t border-gray-800 mt-2">
            <NavLink
              to="/logout"
              className={({ isActive }) =>
                isActive ? "text-white font-bold" : "text-orange-500 hover:text-white block py-1"
              }
            >
              LOG OUT
            </NavLink>
          </div>
          <div className="pt-2 border-t border-gray-800 mt-2">
            
          </div>
        </div>
      </div>
    )}
  </nav>
</div>
    </>
  );
}
