import React, { useContext, useState } from "react";
import logo from "../../assets/logo.jpeg";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { UserContext } from "../../Context/UserContext";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const { token, setToken } = useContext(UserContext);
  const navigate = useNavigate();

  function logout() {
    setToken(null);
    navigate("/login");
  }

 

  return (
    <>
      {/* Navbar */}
      <nav className="bg-white border-gray-200 dark:bg-black fixed top-0 left-0 w-full z-50 shadow-md">
        <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
          {/* Logo */}
          <img src={logo} className="h-14 w-20" alt="Logo" />

          {/* زر القائمة للموبايل */}
          <button
            type="button"
            onClick={() => setIsOpen(!isOpen)}
            className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden 
            hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 
            dark:focus:ring-gray-600"
            aria-controls="navbar-default"
            aria-expanded={isOpen}
          >
            <span className="sr-only">Open main menu</span>
            <svg
              className="w-6 h-6"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16m-7 6h7"
              />
            </svg>
          </button>

          {/* القائمة */}
          <div
            className={`${
              isOpen ? "block" : "hidden"
            } w-full md:flex md:items-center md:justify-center md:w-auto`}
            id="navbar-default"
          >
            {token && (
              <ul className="font-medium flex flex-col md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0">
                <li>
                  <NavLink
                    to="/"
                    className={({ isActive }) =>
                      isActive
                        ? "text-orange-500 text-xl font-bold border-b-2 border-orange-500 transition duration-200"
                        : "text-white text-xl hover:text-orange-500 transition duration-200"
                    }
                  >
                    Home
                  </NavLink>
                </li>
                <li>
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
                </li>
                <li>
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
                </li>
                <li>
                  <NavLink
                    to="/aboutus"
                    className={({ isActive }) =>
                      isActive
                        ? "text-orange-500 text-xl font-bold border-b-2 border-orange-500 transition duration-200"
                        : "text-white text-xl hover:text-orange-500 transition duration-200"
                    }
                  >
                    ABOUT
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to="/ContactUs"
                    className={({ isActive }) =>
                      isActive
                        ? "text-orange-500 text-xl font-bold border-b-2 border-orange-500 transition duration-200"
                        : "text-white text-xl hover:text-orange-500 transition duration-200"
                    }
                  >
                    CONTACT US
                  </NavLink>
                </li>

                <li>
                  <NavLink
                    to="/Calculators"
                    className={({ isActive }) =>
                      isActive
                        ? "text-orange-500 text-xl font-bold border-b-2 border-orange-500 transition duration-200"
                        : "text-white text-xl hover:text-orange-500 transition duration-200"
                    }
                  >
                    CALCULATORS
                  </NavLink>
                </li>


                {/* زر تسجيل الخروج - يظهر داخل القائمة في الموبايل */}
                <li className="md:hidden mt-4">
                  <button
                    onClick={logout}
                    className="w-full bg-orange-500 hover:bg-orange-600 text-white font-bold py-2 px-4 rounded-md text-center"
                  >
                    LOG OUT
                  </button>
                </li>
              </ul>
            )}
          </div>

          {/* زر تسجيل الخروج - يظهر فقط في الشاشات الكبيرة */}
          {token && (
            <div className="hidden md:block">
              <button
                onClick={logout}
                className="bg-orange-500 hover:bg-orange-600 text-white font-bold py-2 px-4 rounded-md"
              >
                LOG OUT
              </button>
            </div>
          )}
        </div>
      </nav>

      {/* تعويض ارتفاع الـ Navbar حتى لا يغطي المحتوى */}
      <div className="pt-20"></div>
    </>
  
  );
}
