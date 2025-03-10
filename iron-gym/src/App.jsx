import { Routes, Route, Navigate } from "react-router-dom";
import { useEffect, useState } from "react";
import Navbar from "./Component/Navbar/Navbar";
import Home from "./Component/Home/Home";
import Nutrition from "./Component/Nutrition/Nutrition";
import Exercise from "./Component/Exercise/Exercise";
import About from "./Component/AboutUs/AboutUs";
import Contact from "./Component/ContactUs/ContactUs";
import Signup from "./Component/Signup/Signup";
import Login from "./Component/Login/Login";
import Calculators from "./Component/Calculators/Calculators";

function ProtectedRoute({ children }) {
  const isAuthenticated = localStorage.getItem("isAuthenticated");

  return isAuthenticated ? children : <Navigate to="/signup" replace />;
}

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(
    localStorage.getItem("isAuthenticated")
  );

  useEffect(() => {
    const checkAuth = localStorage.getItem("isAuthenticated");
    setIsAuthenticated(checkAuth);
  }, []);

  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />
        
        {/* 👇 الصفحات دي محمية، لازم تسجيل الدخول عشان توصلها */}
        <Route path="/exercise" element={<ProtectedRoute><Exercise /></ProtectedRoute>} />
        <Route path="/nutrition" element={<ProtectedRoute><Nutrition /></ProtectedRoute>} />
        <Route path="/about" element={<ProtectedRoute><About /></ProtectedRoute>} />
        <Route path="/contact" element={<ProtectedRoute><Contact /></ProtectedRoute>} />
        <Route path="/calculators" element={<ProtectedRoute><Calculators /></ProtectedRoute>} />
      </Routes>
    </>
  );
}

export default App;
