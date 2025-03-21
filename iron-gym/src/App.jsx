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
import Protein from './Component/protein/protein';
import CarboHidrates from './Component/CarboHidrates/CarboHidrates';
import Fats from './Component/Fats/Fats';
import DairyEgg from './Component/DairyEgg/DairyEgg';
import CalcCaloriesMeal from './Component/CalcCaloriesMeal/CalcCaloriesMeal';
import NutritionProgram from './Component/NutritionProgram/NutritionProgram';

function App() {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <Layout />, 
      children: [
        { index: true, element: <Home /> },
        { path: 'nutrition', element: <Nutrition /> },
        { path: 'nutrition/protein', element: <Protein /> }, // ✅ أصبحت صفحة مستقلة
        { path: 'nutrition/carb', element: <CarboHidrates /> },
        { path: 'nutrition/fat', element: <Fats /> },
        { path: 'nutrition/dairyEgg', element: <DairyEgg /> },
        { path: 'nutrition/CalcCaloriesMeal', element: <CalcCaloriesMeal /> },
        { path: 'exercise', element: <Exercise /> },
        { path: 'aboutus', element: <AboutUs /> },
        { path: '*', element: <NotFound /> },
      ],
    },
    {
      path: '/auth',
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
