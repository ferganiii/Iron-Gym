import { useContext, useState } from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";
import bacKGROUND from "../../assets/bacKGROUND.jpeg";
import { useFormik } from "formik";
import * as Yup from "yup";
import axios from "axios";
import { FaSpinner } from "react-icons/fa6";
import { UserContext } from "../../Context/UserContext";

export default function Login() {
  const [errorMSG, seterrorMSG] = useState("");
  const [isloading, setIsloading] = useState(false);
  const navigate = useNavigate();
  const { setToken, setUser } = useContext(UserContext);

  const Schema = Yup.object().shape({
    email: Yup.string().required("Email is required").email("Email is not valid"),
    password: Yup.string()
      .required("Password is required")
      .min(6, "Password must be at least 6 characters")
      .max(10, "Password must be at most 10 characters"),
  });

  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    onSubmit: handleSubmit,
    validationSchema: Schema,
  });

  async function handleSubmit(values) {
    setIsloading(true);

    try {
      const res = await axios.post("https://gym-production-8217.up.railway.app/api/auth/login", values);


      if (res.data.message === "login success") {



        localStorage.setItem("token", res.data.token);
        localStorage.setItem("user", JSON.stringify(res.data.user));

        setToken(res.data.token);
        setUser(res.data.user);

        navigate("/");
      } else {
        seterrorMSG("Invalid credentials. Please try again.");
      }
    } catch (error) {
      seterrorMSG(error.response?.data?.message || "An unknown error occurred.");
      console.log(error.response?.data?.message);
    } finally {
      setIsloading(false);
    }
  }

  return (
    <div className="relative w-full h-screen bg-black overflow-hidden">
      {/* الخلفية */}
      <img
        src={bacKGROUND}
        alt="Background"
        className="absolute inset-0 w-full h-full object-cover object-center transition-all duration-500 blur-md"
      />

      {/* طبقة التعتيم */}
      <div className="absolute inset-0 bg-black opacity-70 transition-all duration-500"></div>

      {/* النصوص "GET FIT" و "TRANSFORM YOUR BODY" */}
      <div className="absolute inset-x-0 bottom-10 sm:bottom-24 flex flex-col items-center text-center text-white px-4 pb-10 sm:pb-28 z-20">
        <h1 className="text-5xl sm:text-6xl md:text-8xl font-sans">GET FIT</h1>
        <p className="text-xl sm:text-2xl md:text-3xl mt-4 sm:mt-10">TRANSFORM YOUR BODY</p>
      </div>

      {/* نموذج التسجيل */}
      <div className="absolute inset-0 flex justify-center items-center z-30">
        <div className="w-[400px] sm:w-[450px] bg-opacity-30 backdrop-blur-lg p-8 rounded-xl border border-blue-400 shadow-lg text-white relative">
          {/* عنوان التسجيل */}
          <div className="flex justify-center gap-7 mb-6 border-b border-gray-500 pb-2">
            {/* زر تسجيل الدخول */}
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

            {/* زر تسجيل الحساب */}
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

          {/* نموذج الإدخال */}
          <form onSubmit={formik.handleSubmit}>
            <div className="space-y-4">
              {/* Email Input */}
              <div>
                <label className="text-white" htmlFor="email">
                  E-MAIL *
                </label>
                <input
                  {...formik.getFieldProps("email")}
                  name="email"
                  id="email"
                  type="email"
                  placeholder="Enter your E-mail"
                  className="w-full mt-3 p-2 bg-transparent border border-red-500 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500 placeholder-gray-400"
                />
                {formik.errors.email && formik.touched.email && (
                  <div className="p-4 mb-4 text-sm text-orange-800 rounded-lg bg-red-500 dark:bg-gray-800 dark:text-orange-400">
                    <span className="font-medium">{formik.errors.email}</span>
                  </div>
                )}
              </div>

              {/* Password Input */}
              <div>
                <label className="text-white" htmlFor="password">
                  Password *
                </label>
                <input
                  {...formik.getFieldProps("password")}
                  name="password"
                  id="password"
                  type="password"
                  placeholder="Enter password"
                  className="w-full mt-3 p-2 bg-transparent border border-red-500 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500 placeholder-gray-400"
                />
                {formik.errors.password && formik.touched.password && (
                  <div className="p-4 mb-4 text-sm text-orange-800 rounded-lg bg-red-500 dark:bg-gray-800 dark:text-orange-400">
                    <span className="font-medium">{formik.errors.password}</span>
                  </div>
                )}
              </div>
            </div>

            {/* زر تسجيل الدخول */}
            <button
              disabled={isloading}
              type="submit"
              className="disabled:bg-gray-500 disabled:text-white w-full mt-4 p-2 border border-white text-white rounded-md hover:bg-orange-500 hover:text-black transition"
            >
              {isloading ? <FaSpinner className="animate-spin" /> : "SIGN IN NOW"}
            </button>
          </form>

          {/* عرض رسالة الخطأ */}
          {errorMSG && (
            <div className="p-4 mt-4 text-sm text-orange-800 rounded-lg bg-red-500 dark:bg-gray-800 dark:text-orange-400">
              <span className="font-medium">{errorMSG}</span>
            </div>
          )}

          {/* رابط تسجيل الحساب */}
          <p className="text-center text-sm mt-4 text-gray-400">
            If you don't have an account{" "}
            <Link to="/signup" className="text-red-400 hover:underline">
              Sign Up Now
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}
