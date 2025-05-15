import React from "react";
import logo from "../../assets/logoFooter.png";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

export default function Footer() {
  return (
    <footer className="bg-[rgb(36,37,37,1)] text-white">
      <div className="container pt-6 sm:pt-10 px-4 mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 items-start">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center sm:text-left"
          >
            <h2 className="mb-3 sm:mb-6 font-AlfaSlabOne text-2xl sm:text-3xl lg:text-5xl uppercase text-orange-500 tracking-wider">
              IRON GYM
            </h2>
            <p className="pb-4 sm:pb-10 font-archivo text-gray-200 font-bold text-xs sm:text-sm lg:text-lg">
              "At Iron Gym, we are committed to helping you achieve your fitness goals through expert guidance and continuous motivation. With specialized training programs, personalized nutrition tips, and unlimited support, we work together to achieve noticeable results and elevate your fitness to new heights."
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-center"
          >
            <ul className="text-xs sm:text-sm lg:text-xl flex flex-col font-semibold items-center space-y-1 sm:space-y-2">
              {[
                { to: "/exercise", label: "Exercises" },
                { to: "/nutrition", label: "Nutrition" },
                { to: "/Calculators", label: "Calculators" },
                { to: "/aboutus", label: "About" },
                { to: "/ContactUs", label: "Contact Us" },
              ].map(({ to, label }, index) => (
                <motion.li
                  key={to}
                  className="w-32 sm:w-40"
                  whileHover={{ scale: 1.05, color: "#f97316" }}
                  transition={{ duration: 0.2 }}
                >
                  <Link
                    to={to}
                    className="hover:text-orange-500 uppercase transition-all duration-300 flex items-center"
                  >
                    <span className="font-bold w-4 text-center text-orange-500">•</span> {label}
                  </Link>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="flex justify-center lg:justify-end mt-4 sm:mt-0"
          >
            <motion.img
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
              className="h-16 sm:h-28 lg:h-52 object-contain"
              src={logo}
              alt="Iron Gym Logo"
            />
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="flex flex-col sm:flex-row justify-center sm:justify-between items-center bg-orange-600 text-center p-3 sm:p-6 mt-6 sm:mt-10 text-gray-900 rounded-t-lg"
        >
          <span className="text-xs sm:text-sm lg:text-base font-bold">
            © {new Date().getFullYear()}{" "}
            <Link to="/" className="hover:underline ">
              Iron Gym™
            </Link>
            . All Rights Reserved.
          </span>

          <div className="flex mt-2 sm:mt-0 space-x-6">
            <motion.a
              whileHover={{ scale: 1.2, rotate: 5 }}
              href="tel:+201044724761"
              className="text-gray-900 hover:text-white transition-colors duration-300"
              aria-label="Call"
            >
              <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 512 512">
                <path d="M391.1 351.1c-34.2 0-67.5-5.4-98.5-15.8-10.5-3.5-21.9-.7-29.7 7.1l-43.4 32.6c-50.1-26.3-91.3-67.5-117.6-117.6l32.6-43.4c7.9-7.9 10.6-19.3 7.1-29.7C144.3 188.4 139 155 139 120.9 139 95 118 74 92.1 74H48.9C22.6 74 0 96.6 0 122.9c0 213.6 173.5 387.1 387.1 387.1 26.3 0 48.9-22.6 48.9-48.9v-43.2c0-25.9-21-46.9-46.9-46.9z" />
              </svg>
            </motion.a>

            <motion.a
              whileHover={{ scale: 1.2, rotate: 5 }}
              href="https://www.facebook.com/share/g/12BzL5xEDqV/"
              className="text-gray-900 hover:text-white transition-colors duration-300"
              aria-label="Facebook"
            >
              <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path fillRule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" clipRule="evenodd"></path>
              </svg>
            </motion.a>
          </div>
        </motion.div>
      </div>
    </footer>
  );
}

