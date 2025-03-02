import React from 'react'

export default function Navebar() {
  return (
    <>
  <nav className="bg-black">
  <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
    <div className="relative flex h-16 items-center justify-between">
      {/* Logo */}
      <div className="flex items-center">
        <img
          className="h-8 w-auto"
          src="https://tailwindui.com/plus-assets/img/logos/mark.svg?color=orange&shade=500"
          alt="Iron Gym Logo"
        />
      </div>

      {/* Navigation Links */}
      <div className="hidden sm:block">
        <div className="flex space-x-6">
          <a
            href="#"
            className="text-white hover:text-orange-500 hover:underline decoration-orange-500 underline-offset-4 transition-all duration-200"
          >
            HOME
          </a>
          <a
            href="#"
            className="text-white hover:text-orange-500 hover:underline decoration-orange-500 underline-offset-4 transition-all duration-200"
          >
            EXERCISES
          </a>
          <a
            href="#"
            className="text-white hover:text-orange-500 hover:underline decoration-orange-500 underline-offset-4 transition-all duration-200"
          >
            NUTRITION
          </a>
          <a
            href="#"
            className="text-white hover:text-orange-500 hover:underline decoration-orange-500 underline-offset-4 transition-all duration-200"
          >
            ABOUT US
          </a>
        </div>
      </div>

      {/* Logout Button */}
      <div>
        <a
          href="#"
          className="text-orange-500 hover:text-white hover:underline decoration-orange-400 underline-offset-4 transition-all duration-200"
        >
          LOG OUT
        </a>
      </div>
    </div>
  </div>
</nav>


    
    </>
  )
}
