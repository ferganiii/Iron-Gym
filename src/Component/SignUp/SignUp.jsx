import { useContext, useState } from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";
import bacKGROUND from "../../assets/bacKGROUND.jpeg";
import { useFormik } from "formik";
import * as Yup from "yup";
import axios from "axios";
import { FaSpinner } from "react-icons/fa6";
import { UserContext } from "../../Context/UserContext";

export default function Signup() {
  const [errorMSG, seterrorMSG] = useState('');
  const [isloading, setIsloading] = useState(false);
  const { setToken, token } = useContext(UserContext);
  const navigate = useNavigate();

  const Schema = Yup.object().shape({
    name: Yup.string().required().min(3).max(18),
    email: Yup.string().required().email("email is not valid"),
    password: Yup.string()
      .required("Password is required")
      .min(6, "Password must be at least 6 characters")
      .max(10, "Password must be at most 10 characters"),
    passwordConfirm: Yup.string()
      .required("rePassword is required")
      .oneOf([Yup.ref("password")], "password must be match rePassword"),
    phone: Yup.string()
      .required("phone is required")
      .matches(/^01[0125][0-9]{8}$/, "phone must be valid egyptian num"),
  });

  const formik = useFormik({
    initialValues: {
      name: '',
      email: "",
      password: "",
      passwordConfirm: "",
      phone: "",
    },
    onSubmit: handleSubmit,
    validationSchema: Schema,
  });

  async function handleSubmit(values) {
    setIsloading(true);
    try {
      const res = await axios.post("https://gym-production-4dd6.up.railway.app/api/auth/signup", values);
      if (res.data.message === "sign up successfully") {
        navigate("/login");
        setToken(res.data.token);
      } else {
        seterrorMSG("An unknown error occurred.");
      }
    } catch (error) {
      if (error.response && error.response.data.message.includes("email")) {
        seterrorMSG("EMAIL IS ALREADY EXIST");
      } else {
        seterrorMSG("An unknown error occurred.");
      }
    } finally {
      setIsloading(false);
    }
  }

  return (
    !token && (
      <div className="relative w-full h-screen bg-black overflow-hidden">
        <img
          src={bacKGROUND}
          alt="Background"
          className="absolute inset-0 w-full h-full object-cover object-center blur-md transition-all duration-500"
        />

        <div className="absolute inset-0 bg-black opacity-70 transition-all duration-500"></div>

        <div className="absolute inset-x-0 bottom-10 sm:bottom-24 flex flex-col items-center text-center text-white px-4 pb-10 sm:pb-28 z-20">
          <h1 className="text-5xl sm:text-6xl md:text-8xl font-sans">GET FIT</h1>
          <p className="text-xl sm:text-2xl md:text-3xl mt-4 sm:mt-10">
            TRANSFORM YOUR BODY
          </p>
        </div>

        <div className="absolute inset-0 flex justify-center items-center z-30">
          <div className="w-[400px] sm:w-[450px] bg-opacity-30 backdrop-blur-lg p-8 rounded-xl border border-blue-400 shadow-lg text-white relative">
            <div className="flex justify-center gap-7 mb-6 border-b border-gray-500 pb-2">
              <div className="pt-2 border-t border-gray-800 mt-2">
                <NavLink
                  to="/login"
                  className={({ isActive }) =>
                    isActive
                      ? "text-orange-600 font-bold border-b-2 border-orange-600 pb-1 transition duration-300"
                      : "text-white hover:text-orange-400 block py-1 transition duration-300"
                  }
                >
                  Login
                </NavLink>
              </div>

              <div className="pt-2 border-t border-gray-800 mt-2">
                <NavLink
                  to="/signup"
                  className={({ isActive }) =>
                    isActive
                      ? "text-orange-600 font-bold border-b-2 border-orange-600 pb-1 transition duration-300"
                      : "text-white hover:text-orange-400 block py-1 transition duration-300"
                  }
                >
                  Signup
                </NavLink>
              </div>
            </div>

            <form onSubmit={formik.handleSubmit}>
              <div className="space-y-4">
                {errorMSG && (
                  <div className="p-4 mb-4 text-sm text-red-600 rounded-lg bg-red-600 dark:bg-red-400 dark:text-white" role="alert">
                    <span className="font-medium">EMAIL IS ALREADY EXIST</span>
                  </div>
                )}

                <div>
                  <label className="text-white" htmlFor="name">Name *</label>
                  <input
                    {...formik.getFieldProps("name")}
                    id="name"
                    type="text"
                    placeholder="Enter your name"
                    className="w-full mt-3 p-2 bg-transparent border border-red-500 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500 placeholder-gray-400"
                  />
                  {formik.errors.name && formik.touched.name && (
                    <div className="p-2 mt-1 text-sm text-orange-800 bg-red-500 rounded">
                      {formik.errors.name}
                    </div>
                  )}
                </div>

                <div>
                  <label className="text-white" htmlFor="email">E-MAIL *</label>
                  <input
                    {...formik.getFieldProps("email")}
                    id="email"
                    type="email"
                    placeholder="Enter your E-mail"
                    className="w-full mt-3 p-2 bg-transparent border border-red-500 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500 placeholder-gray-400"
                  />
                  {formik.errors.email && formik.touched.email && (
                    <div className="p-2 mt-1 text-sm text-orange-800 bg-red-500 rounded">
                      {formik.errors.email}
                    </div>
                  )}
                </div>

                <div>
                  <label className="text-white" htmlFor="phone">Phone *</label>
                  <input
                    {...formik.getFieldProps("phone")}
                    id="phone"
                    type="tel"
                    placeholder="Enter phone number"
                    className="w-full mt-3 p-2 bg-transparent border border-red-500 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500 placeholder-gray-400"
                  />
                  {formik.errors.phone && formik.touched.phone && (
                    <div className="p-2 mt-1 text-sm text-orange-800 bg-red-500 rounded">
                      {formik.errors.phone}
                    </div>
                  )}
                </div>

                <div>
                  <label className="text-white" htmlFor="password">Password *</label>
                  <input
                    {...formik.getFieldProps("password")}
                    id="password"
                    type="password"
                    placeholder="Enter password"
                    className="w-full mt-3 p-2 bg-transparent border border-red-500 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500 placeholder-gray-400"
                  />
                  {formik.errors.password && formik.touched.password && (
                    <div className="p-2 mt-1 text-sm text-orange-800 bg-red-500 rounded">
                      {formik.errors.password}
                    </div>
                  )}
                </div>

                <div>
                  <label className="text-white" htmlFor="passwordConfirm">Confirm Password *</label>
                  <input
                    {...formik.getFieldProps("passwordConfirm")}
                    id="passwordConfirm"
                    type="password"
                    placeholder="Re-enter password"
                    className="w-full mt-3 p-2 bg-transparent border border-red-500 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500 placeholder-gray-400"
                  />
                  {formik.errors.passwordConfirm && formik.touched.passwordConfirm && (
                    <div className="p-2 mt-1 text-sm text-orange-800 bg-red-500 rounded">
                      {formik.errors.passwordConfirm}
                    </div>
                  )}
                </div>
              </div>

              <button
                disabled={isloading}
                type="submit"
                className="disabled:bg-gray-500 disabled:text-white w-full mt-4 p-2 border border-white text-white rounded-md hover:bg-orange-500 hover:text-black transition"
              >
                {isloading ? <FaSpinner className="animate-spin mx-auto" /> : "SIGN UP NOW"}
              </button>
            </form>

            <p className="text-center text-sm mt-4 text-gray-400">
              Already have an account?{" "}
              <Link to="/login" className="text-red-400 hover:underline">
                Log in
              </Link>
            </p>
          </div>
        </div>
      </div>
    )
  );
}
