import React from 'react'
import { Link } from 'react-router-dom'
import crd3 from "../../assets/crd3.png";
export default function ExerciseSystem() {
  return (
    <div className='container mx-auto '>
        

       

          <div className='grid grid-cols-2'>

                   <div class="max-w-sm bg-white border border-gray-200 rounded-lg shadow-sm dark:bg-gray-800 dark:border-gray-700">

    <Link to="/ExerciseSystem/ExercisePPL">
            <img
              className="rounded-t-3xl w-full h-[300px] object-cover hover:scale-105 transition-all "
              src={crd3}
              alt=""
            />
          </Link>
          <h2 className='text-4xl text-orange-500'>program 1</h2>
                    </div>

                

                 </div>
    </div>
  )
}
