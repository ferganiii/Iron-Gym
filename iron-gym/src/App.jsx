import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Layout from './Component/LayOut/LayOut';
import LayOut2 from './Component/LayOut2/LayOut2';
import Home from './Component/Home/Home';
import Nutrition from './Component/Nutrition/Nutrition';
import Protein from './Component/protein/protein';
import CarboHidrates from './Component/CarboHidrates/CarboHidrates';
import Fats from './Component/Fats/Fats';
import DairyEgg from './Component/DairyEgg/DairyEgg';
import CalcCaloriesMeal from './Component/CalcCaloriesMeal/CalcCaloriesMeal';
import MealPlan from './Component/MealPlan/MealPlan';
import Exercise from './Component/Exercise/Exercise';
import AboutUs from './Component/AboutUs/AboutUs';
import ContactUs from './Component/ContactUs/ContactUs';
import Login from './Component/Login/Login';
import Signup from './Component/SignUp/SignUp';
import NotFound from './Component/NotFound/NotFound';
import Dashboard from './pages/Dashboard'; // ✅ إضافة الداشبورد
import ProtectedRoute from './Component/ProtectedRoute/ProtectedRoute';

function App() {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <Layout />,
      children: [
        { index: true, element: <Home /> },
        { path: 'nutrition', element: <Nutrition /> },
        { path: 'nutrition/protein', element: <Protein /> },
        { path: 'nutrition/carb', element: <CarboHidrates /> },
        { path: 'nutrition/fat', element: <Fats /> },
        { path: 'nutrition/dairyEgg', element: <DairyEgg /> },
        { path: 'nutrition/CalcCaloriesMeal', element: <CalcCaloriesMeal /> },
        { path: 'nutrition/MealPlan', element: <MealPlan /> },
        { path: 'exercise', element: <Exercise /> },
        { path: 'aboutus', element: <AboutUs /> },
        { path: 'ContactUs', element: <ContactUs /> },
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
    {
      path: '/dashboard',
      element: <ProtectedRoute><Dashboard /></ProtectedRoute>, // ✅ حماية صفحة الأدمن
    },
  ]);

  return <RouterProvider router={router} />;
}

export default App;
