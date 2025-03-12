import { useState } from 'react';
import './App.css';
import Home from './Component/Home/Home';
import Nutrition from './Component/Nutrition/Nutrition';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Layout from './Component/LayOut/LayOut';
import Login from './Component/Login/Login';
import Signup from './Component/SignUp/SignUp';
import Exercise from './Component/Exercise/Exercise';
import AboutUs from './Component/AboutUs/AboutUs';
import LayOut2 from './Component/LayOut2/LayOut2';
import NotFound from './Component/NotFound/NotFound';

function App() {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <Layout />, // ✅ هذا اللayout خاص بالموقع كله (يحتوي على Navbar و Footer)
      children: [
        { index: true, element: <Home /> },
        { path: 'nutrition', element: <Nutrition /> },
        { path: 'exercise', element: <Exercise /> },
        { path: 'aboutus', element: <AboutUs /> },
        { path: '*', element: <NotFound /> },
      ],
    },
    {
      path: '/auth', // ✅ هذا الجزء خاص بصفحات تسجيل الدخول (بدون Navbar و Footer)
      element: <LayOut2 />,
      children: [
        { path: 'login', element: <Login /> },
        { path: 'signup', element: <Signup /> },
      ],
    },
  ]);

  return <RouterProvider router={router} />;
}

export default App;
