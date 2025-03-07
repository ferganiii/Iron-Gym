import React, { useState } from 'react'
import logo from '../../assets/logo.jpeg'   

export default function Navebar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <>
      {/* إضافة div فارغ بنفس ارتفاع الناف بار لمنع القفز عند التثبيت */}
      <div className="h-16"></div>
      
      <div className="fixed top-0 left-0 right-0 z-50 flex justify-center">
        <nav className="shadow-md w-full max-w-7xl bg-black bg-opacity-5">
          <div className="px-4 sm:px-6 lg:px-8">
            <div className="relative flex h-16 items-center justify-between">
              {/* Logo with Text */}
              <div className="flex items-center">
                <div className="flex flex-col items-center mr-4">
                  <img
                    className="h-16 w-auto"
                    src={logo}
                    alt="Iron Gym Logo"
                  />
                  <span className="text-xs font-bold text-orange-500 mt-0.5">IRON GYM</span>
                </div>
              </div>

              {/* Navigation Links - Desktop */}
              <div className="hidden sm:block">
                <div className="flex space-x-11">
                  <a
                    href="#"
                    className="text-xl text-white hover:text-orange-500 hover:underline decoration-orange-500 underline-offset-4 transition-all duration-200"
                  >
                    HOME
                  </a>
                  <a
                    href="#"
                    className="text-xl text-white hover:text-orange-500 hover:underline decoration-orange-500 underline-offset-4 transition-all duration-200"
                  >
                    EXERCISES
                  </a>
                  <a
                    href="#"
                    className="text-xl text-white hover:text-orange-500 hover:underline decoration-orange-500 underline-offset-4 transition-all duration-200"
                  >
                    NUTRITION
                  </a>
                  <a
                    href="#"
                    className="text-xl text-white hover:text-orange-500 hover:underline decoration-orange-500 underline-offset-4 transition-all duration-200"
                  >
                    ABOUT US
                  </a>
                </div>
              </div>

              {/* Logout Button - Desktop */}
              <div className="hidden sm:block">
                <a
                  href="#"
                  className="text-orange-500 hover:text-white hover:underline decoration-orange-400 underline-offset-4 transition-all duration-200"
                >
                  LOG OUT
                </a>
              </div>

              {/* Hamburger Menu Button - Mobile */}
              <div className="sm:hidden flex items-center">
                <button 
                  onClick={toggleMenu}
                  className="text-white focus:outline-none"
                >
                  {/* Hamburger Icon - Three Lines */}
                  <div className="w-6 flex flex-col space-y-1">
                    <span className={`block h-0.5 w-6 bg-orange-500 transform transition duration-300 ease-in-out ${isMenuOpen ? 'rotate-45 translate-y-1.5' : ''}`}></span>
                    <span className={`block h-0.5 w-6 bg-orange-500 transition duration-300 ease-in-out ${isMenuOpen ? 'opacity-0' : 'opacity-100'}`}></span>
                    <span className={`block h-0.5 w-6 bg-orange-500 transform transition duration-300 ease-in-out ${isMenuOpen ? '-rotate-45 -translate-y-1.5' : ''}`}></span>
                  </div>
                </button>
              </div>
            </div>
          </div>

          {/* Mobile Menu */}
          {isMenuOpen && (
            <div className="sm:hidden bg-black border-t border-gray-800 py-2">
              <div className="flex flex-col space-y-3 px-4 pt-2 pb-4">
                <a
                  href="#"
                  className="text-lg text-white hover:text-orange-500 block py-1"
                >
                  HOME
                </a>
                <a
                  href="#"
                  className="text-lg text-white hover:text-orange-500 block py-1"
                >
                  EXERCISES
                </a>
                <a
                  href="#"
                  className="text-lg text-white hover:text-orange-500 block py-1"
                >
                  NUTRITION
                </a>
                <a
                  href="#"
                  className="text-lg text-white hover:text-orange-500 block py-1"
                >
                  ABOUT US
                </a>
                <div className="pt-2 border-t border-gray-800 mt-2">
                  <a
                    href="#"
                    className="text-lg text-orange-500 hover:text-white block py-1"
                  >
                    LOG OUT
                  </a>
                </div>
              </div>
            </div>
          )}
        </nav>
      </div>
    </>
  )
}
