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
import UserContextProvider from './Context/UserContext';

function App() {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <Layout />,
      children: [
        { index: true, element: <ProtectedRoute> <Home /> </ProtectedRoute>},
        { path: 'nutrition', element:<ProtectedRoute> <Nutrition /></ProtectedRoute> },
        { path: 'nutrition/protein', element: <ProtectedRoute><Protein /></ProtectedRoute> },
        { path: 'nutrition/carb', element: <ProtectedRoute><CarboHidrates /> </ProtectedRoute>},
        { path: 'nutrition/fat', element:<ProtectedRoute> <Fats /></ProtectedRoute> },
        { path: 'nutrition/dairyEgg', element: <ProtectedRoute><DairyEgg /></ProtectedRoute> },
        { path: 'nutrition/CalcCaloriesMeal', element: <ProtectedRoute><CalcCaloriesMeal /></ProtectedRoute> },
        { path: 'nutrition/MealPlan', element: <ProtectedRoute><MealPlan /></ProtectedRoute> },
        { path: 'exercise', element: <ProtectedRoute><Exercise /></ProtectedRoute> },
        { path: 'aboutus', element: <ProtectedRoute><AboutUs /></ProtectedRoute> },
        { path: 'ContactUs', element: <ProtectedRoute><ContactUs /></ProtectedRoute> },
        { path: '*', element: <NotFound /> },
        { path: 'login', element: <Login /> },
        { path: 'signup', element: <Signup /> },
      ],
    },
    
    {
      path: '/dashboard',
      element: <ProtectedRoute adminOnly={true}><Dashboard /></ProtectedRoute>, // 🔥 الآن محمي للأدمن فقط
    },
  ]);

  return(
    <UserContextProvider>
    <RouterProvider router={router} />
    </UserContextProvider>
  )
  
    
   
}

export default App;
