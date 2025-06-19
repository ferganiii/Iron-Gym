import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Layout from './Component/LayOut/LayOut';
import LayOut2 from './Component/LayOut2/LayOut2';
import Home from './Component/Home/Home';
import Nutrition from './Component/Nutrition/Nutrition';
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
import ProtectedRoute from './Component/ProtectedRoute/ProtectedRoute';
import UserContextProvider from './Context/UserContext';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import SupplementDetails from './Component/SupplementsDetails/SupplementsDetails';
import Calculators from './Component/Calculators/Calculators';
import ExerciseGuide from './Component/ExerciseGuide/ExerciseGuide';
import MuscleMap from './Component/MuscleMap/MuscleMap';
import { MuscleProvider } from './Context/MuscleContext';
import ExerciseDetails from './Component/ExerciseDetails/ExerciseDetails';
import CalorieResultPage from "./Component/CalorieResultPage/CalorieResultPage"; 
import { ReactQueryDevtools } from '@tanstack/react-query-devtools'
import Cardio from './Component/Cardio/Cardio';  
import ExercisePPL from './Component/ExercisePPL/ExercisePPL';
import CreateSystemModal from './Component/CreateSystemModal/CreateSystemModal';
import Questions from './Component/Questions/Questions';
import Challenges from './Component/Challenges/Challenges';
import Proteins from './Component/protein/Protein';
import ScrollToTop from './Component/ScrollToTop/ScrollToTop';
import { Toaster } from 'react-hot-toast';


function App() {
  const myClinet=new QueryClient();
  const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      { index: true, element: <ProtectedRoute><Home /></ProtectedRoute> },
      { path: "nutrition", element: <ProtectedRoute><Nutrition /></ProtectedRoute> },
      { path: "nutrition/protein", element: <ProtectedRoute><Proteins /></ProtectedRoute> },
      { path: "nutrition/carb", element: <ProtectedRoute><CarboHidrates /></ProtectedRoute> },
      { path: "nutrition/fat", element: <ProtectedRoute><Fats /></ProtectedRoute> },
      { path: "nutrition/dairyEgg", element: <ProtectedRoute><DairyEgg /></ProtectedRoute> },
      { path: "nutrition/CalcCaloriesMeal", element: <ProtectedRoute><CalcCaloriesMeal /></ProtectedRoute> },
      { path: "nutrition/MealPlan", element: <ProtectedRoute><MealPlan /></ProtectedRoute> },

      { path: "exercise", element: <ProtectedRoute><Exercise /></ProtectedRoute> },
      { path: "exercise/:muscleName", element: <ProtectedRoute><ExerciseGuide /></ProtectedRoute> },
      { path: "exercise/details/:id", element: <ProtectedRoute><ExerciseDetails /></ProtectedRoute> },

      { path: "ExercisePPL", element: <ProtectedRoute><ExercisePPL /></ProtectedRoute> },
      { path: "CreateSystemModal", element: <ProtectedRoute><CreateSystemModal /></ProtectedRoute> },
      { path: "MuscleMap", element: <ProtectedRoute><MuscleMap /></ProtectedRoute> },
      { path: "SupplementDetails/:id", element: <ProtectedRoute><SupplementDetails /></ProtectedRoute> },
      { path: "aboutus", element: <ProtectedRoute><AboutUs /></ProtectedRoute> },
      { path: "ContactUs", element: <ProtectedRoute><ContactUs /></ProtectedRoute> },
      { path: "Calculators", element: <ProtectedRoute><Calculators /></ProtectedRoute> },
      { path: "result", element: <ProtectedRoute><CalorieResultPage /></ProtectedRoute> },
      { path: "cardio", element: <ProtectedRoute><Cardio /></ProtectedRoute> },
      { path: "Questions", element: <ProtectedRoute><Questions /></ProtectedRoute> },
      { path: "Challenges", element: <ProtectedRoute><Challenges /></ProtectedRoute> },

      { path: "login", element: <Login /> },
      { path: "signup", element: <Signup /> },
      { path: "*", element: <NotFound /> },
    ],
  },
]);

  
  

  return(
    <QueryClientProvider client={myClinet}>
    <UserContextProvider>
      <MuscleProvider>
                <Toaster position="top-center" reverseOrder={false} />

        <RouterProvider router={router}>
        </RouterProvider>
      </MuscleProvider>
    </UserContextProvider>

    <ReactQueryDevtools />
  </QueryClientProvider>
   
  )
  
    
   
}

export default App;
