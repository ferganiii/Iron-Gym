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
import Dashboard from './pages/Dashboard/Dashboard'; // ✅ إضافة الداشبورد
import ProtectedRoute from './Component/ProtectedRoute/ProtectedRoute';
import UserContextProvider from './Context/UserContext';
import ProteinsDash from './pages/Dashboard/ProteinsDash';
import CarbDash from './pages/Dashboard/CarbDash';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import SupplementDetails from './Component/SupplementsDetails/SupplementsDetails';
import Calculators from './Component/Calculators/Calculators';
import ExerciseGuide from './Component/ExerciseGuide/ExerciseGuide';
import MuscleMap from './Component/MuscleMap/MuscleMap';
import { MuscleProvider } from './Context/MuscleContext';
import ExerciseDetails from './Component/ExerciseDetails/ExerciseDetails';
import CalorieResultPage from "./Component/CalorieResultPage/CalorieResultPage"; // تأكد من المسار الصحيح
import { ReactQueryDevtools } from '@tanstack/react-query-devtools'
import Cardio from './Component/Cardio/Cardio';  
import ExercisePPL from './Component/ExercisePPL/ExercisePPL';
import ExerciseSystem from './Component/ExerciseSystem/ExerciseSystem';
import CreateSystemModal from './Component/CreateSystemModal/CreateSystemModal';
import Questions from './Component/Questions/Questions';
import Challenges from './Component/Challenges/Challenges';


function App() {
  const myClinet=new QueryClient();
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      children: [
        { index: true, element: <ProtectedRoute> <Home /> </ProtectedRoute> },
        { path: "nutrition", element: <ProtectedRoute> <Nutrition /> </ProtectedRoute> },
        { path: "nutrition/protein", element: <Protein /> },
        { path: "nutrition/carb", element: <CarboHidrates /> },
        { path: "nutrition/fat", element: <Fats /> },
        { path: "nutrition/dairyEgg", element: <DairyEgg /> },
        { path: "nutrition/CalcCaloriesMeal", element: <CalcCaloriesMeal /> },
        { path: "nutrition/MealPlan", element: <MealPlan /> },
        { path: "exercise", element: <Exercise /> },
        { path: "exercise/:muscleName", element: <ExerciseGuide /> },
        { path: 'exercise/details/:id', element: <ExerciseDetails /> },
        { path: 'ExerciseSystem', element: <ExerciseSystem /> },
        { path: 'ExerciseSystem/ExercisePPL', element: <ExercisePPL /> },
        { path: 'CreateSystemModal', element: <CreateSystemModal /> },
        { path: "MuscleMap", element: <MuscleMap /> },
        { path: "SupplementDetails/:id", element: <SupplementDetails /> },
        { path: "aboutus", element: <AboutUs /> },
        { path: "ContactUs", element: <ContactUs /> },
        { path: "Calculators", element: <Calculators /> },
        { path: "/result", element: <CalorieResultPage /> },
        { path: "login", element: <Login /> },
        { path: "signup", element: <Signup /> },
        { path: "cardio", element: <Cardio /> },
        { path: "Questions", element: <Questions /> },
        { path: "Challenges", element: <Challenges /> },
        { path: "*", element: <NotFound /> },
      ],
    },
  
    // ✅ تنظيم مسارات الداشبورد كـ Nested Routes
    {
      path: "/dashboard",
      element: <ProtectedRoute adminOnly={true}><Dashboard /></ProtectedRoute>,
      children: [
        { index: true, element: < CarbDash/> }, // عنصر افتراضي
        { path: "proteins", element: <ProteinsDash /> },       
      ]
    }
  ]);
  
  

  return(
<QueryClientProvider client={myClinet}>
    <UserContextProvider>
       <MuscleProvider>
         <RouterProvider router={router} />
       </MuscleProvider>
        </UserContextProvider>
       
        <ReactQueryDevtools />
</QueryClientProvider>
      
       
   
  )
  
    
   
}

export default App;
