import { useState } from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";
import bacKGROUND from "../../assets/bacKGROUND.jpeg";
import { useFormik } from "formik";
import * as Yup from "yup";
import axios from "axios";
import { FaSpinner } from "react-icons/fa6";

export default function Signup() {
  const [showForm, setShowForm] = useState(false); 
   const [errorMSG, seterrorMSG] = useState('')
const [isloading, setIsloading] = useState(false)

const navigate =useNavigate()


  const Schema= Yup.object().shape({
    name: Yup.string().required().min(3).max(18),
    email:Yup.string().required().email("email is not valid"),
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
 
 
    })
   
  const formik= useFormik({
    initialValues:{
            name:'',
            email:"",
            password:"",
            passwordConfirm:"",
            phone:"",
        },
        onSubmit:handleSubmit,
       validationSchema:Schema,
       
    })

    async function handleSubmit(values) {
      setIsloading(true);
    
      try {
        const res = await axios.post("https://gym-production-8217.up.railway.app/api/auth/signup", values);
        console.log(res, "tmmm");
    
        if (res.data.message === "sign up successfully") {
          navigate("/auth/login");
        } else {
          seterrorMSG("An unknown error occurred.");
        }
      } catch (error) {
        // تحقق من أن الخطأ بسبب البريد الإلكتروني المكرر
        if (error.response && error.response.data.message.includes("email")) {
          seterrorMSG("EMAIL IS ALREADY EXIST");
        } else {
          seterrorMSG("An unknown error occurred.");
        }
    
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
        className={`absolute inset-0 w-full h-full object-cover object-center transition-all duration-500 ${
          showForm ? "blur-md" : "blur-0"
        }`}
      />

      {/* طبقة التعتيم */}
      <div
        className={`absolute inset-0 bg-black transition-all duration-500 ${
          showForm ? "opacity-70" : "opacity-60"
        }`}
      ></div>

      {/* زر Register */}
      {!showForm && (
        <div className="absolute inset-0 flex justify-center items-center z-20">
          <button
            onClick={() => setShowForm(true)}
            className="mt-6 sm:mt-10 bg-orange-500 hover:bg-orange-600 text-white px-8 sm:px-12 py-3 sm:py-4 rounded-lg text-xl sm:text-2xl md:text-3xl font-semibold transition-transform duration-300 transform hover:scale-105"
          >
            Register
          </button>
        </div>
      )}

      {/* النصوص "GET FIT" و "TRANSFORM YOUR BODY" */}
      <div className="absolute inset-x-0 bottom-10 sm:bottom-24 flex flex-col items-center text-center text-white px-4 pb-10 sm:pb-28 z-20">
        <h1 className="text-5xl sm:text-6xl md:text-8xl font-sans">GET FIT</h1>
        <p className="text-xl sm:text-2xl md:text-3xl mt-4 sm:mt-10">
          TRANSFORM YOUR BODY
        </p>
      </div>

      {/* نموذج التسجيل */}
      {showForm && (
        <div className="absolute inset-0 flex justify-center items-center z-30">
          <div className="w-[400px] sm:w-[450px] bg-opacity-30 backdrop-blur-lg p-8 rounded-xl border border-blue-400 shadow-lg text-white relative">
            
            {/* عنوان التسجيل */}
            <div className="flex justify-center gap-7 mb-6 border-b border-gray-500 pb-2">
  {/* زر تسجيل الدخول */}
  <div className="pt-2 border-t border-gray-800 mt-2">
    <NavLink
      to="/auth/login"
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
      to="/auth/signup"
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
  {/* Name Input */}
  <div>

  {errorMSG ?(
          <div class="p-4 mb-4 text-sm text-red-600 rounded-lg bg-red-600 dark:bg-red-400 dark:text-white" role="alert">
  <span class="font-medium">EMAIL IS ALREADY EXIST </span> 
</div>
        ):null}

    <label className="text-white " htmlFor="name">Name *</label>
    <input
    {...formik.getFieldProps('name')}
    name="name"
    id="name"
      type="text"
      placeholder="Enter your name"
      className="w-full mt-3 p-2 bg-transparent border border-red-500 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500 placeholder-gray-400"
    />
     {formik.errors.name&&formik.touched.name ? <div className="p-4 mb-4 text-sm text-orange-800 rounded-lg bg-red-500 dark:bg-gray-800 dark:text-red-600" role="alert">
  <span className="font-medium">{formik.errors.name}</span> 
</div>
:null}
  </div>

  {/* E-MAIL Input */}
  <div>
    <label className="text-white " htmlFor="email">E-MAIL *</label>
    <input
    {...formik.getFieldProps('email')}
    name="email"
    id="email"
      type="email"
      placeholder="Enter your E-mail"
      className="w-full mt-3 p-2 bg-transparent border border-red-500 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500 placeholder-gray-400"
    />
      {formik.errors.email&&formik.touched.email ? <div className="p-4 mb-4 text-sm text-orange-800 rounded-lg bg-red-500 dark:bg-gray-800 dark:text-orange-400" role="alert">
  <span className="font-medium">{formik.errors.email}</span> 
</div>
:null}
  </div>

  {/* Phone Input */}
  <div>
    <label className="text-white  " htmlFor="phone">Phone *</label>
    <input
    {...formik.getFieldProps('phone')}
    name="phone"
    id="phone"
      type="tell"
      placeholder="Enter phone number"
      className="w-full mt-3 p-2 bg-transparent border border-red-500 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500 placeholder-gray-400"
    />

{formik.errors.phone&&formik.touched.phone ? <div className="p-4 mb-4 text-sm text-orange-800 rounded-lg bg-red-500 dark:bg-gray-800 dark:text-orange-400" role="alert">
  <span className="font-medium">{formik.errors.phone}</span> 
</div>
:null}
  </div>

  {/* Password Input */}
  <div>
    <label className="text-white  " htmlFor="password">Password *</label>
    <input
    {...formik.getFieldProps('password')}
    name="password"
    id="password"
      type="password"
      placeholder="Enter password"
      className="w-full mt-3 p-2 bg-transparent border border-red-500 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500 placeholder-gray-400"
    />
    {formik.errors.password&&formik.touched.password ? <div className="p-4 mb-4 text-sm text-orange-800 rounded-lg bg-red-500 dark:bg-gray-800 dark:text-orange-400" role="alert">
  <span className="font-medium">{formik.errors.password}</span> 
</div>
:null}
  </div>

  {/* Confirm Password Input */}
  <div>
    <label className="text-white  " htmlFor="passwordConfirm">Confirm password *</label>
    <input
    {...formik.getFieldProps('passwordConfirm')}
    name="passwordConfirm"
    id="passwordConfirm"
      type="password"
      placeholder="Re-enter password"
      className="w-full mt-3 p-2 bg-transparent border border-red-500 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500 placeholder-gray-400"
    />
    {formik.errors.passwordConfirm&&formik.touched.passwordConfirm ? <div className="p-4 mb-4 text-sm text-orange-800 rounded-lg bg-red-500 dark:bg-gray-800 dark:text-orange-400" role="alert">
  <span className="font-medium">{formik.errors.passwordConfirm}</span> 
</div>
:null}
  </div>
</div>


              {/* زر التسجيل */}
              <button
              disabled={isloading}
                type="submit"
                className="disabled:bg-gray-500 disabled:text-white w-full mt-4 p-2 border border-white text-white rounded-md hover:bg-orange-500  hover:text-black transition"
              >
                              {isloading ? <FaSpinner className=" animate-spin " /> : "  SIGN UP NOW" }

              </button>
            </form>

            {/* رابط تسجيل الدخول */}
            <p className="text-center text-sm mt-4 text-gray-400">
              Already have an account?{" "}
              <Link to="/auth/login" className="text-red-400 hover:underline">
                Log in
              </Link>
            </p>

            {/* زر الإغلاق */}
            <button
              onClick={() => setShowForm(false)}
              className="absolute top-4 right-4 text-white text-xl hover:text-red-500"
            >
              ✖
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
