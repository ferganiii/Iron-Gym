import React, { useContext } from 'react';
import axios from 'axios';
import Loading from '../Loading/Loading';
import { useQuery } from '@tanstack/react-query';
import { Link } from 'react-router-dom';
import { UserContext } from '../../Context/UserContext';
export default function Top10exercise() {
  const { token } = useContext(UserContext);

  const {
    data: Top10exercise,
    isLoading,
    isError,
    error,
  } = useQuery({
    queryKey: ['top-exercises'],
    queryFn: async () => {
      const res = await axios.get('https://gym-production-8217.up.railway.app/api/exercise', {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      return res.data.docs.filter(ex => ex.top10 === true);
    },
  });

  return (
    <section className=" min-h-screen  py-64">
      <div className='ms-10 mb-10'>
      <h2 className="lg:text-4xl text-2xl border-b-2 border-orange-500 dark:text-white mb-7 font-mono inline-block">
  The Top 10 Most Popular Exercises
</h2>
         <p className='text-xl '><span className='text-3xl mx-2'><i className="fa-solid fa-ranking-star" style={{color: '#e7700d'}} />

         </span>Ranked based on how effective each exercise is in building muscle strength</p>
      </div>
      {isLoading ? (
        <Loading />
      ) : isError ? (
        <p className="text-red-500 text-center">Error: {error.message}</p>
      ) : Top10exercise.length === 0 ? (
        <p className="text-center">No Top 10 Exercises found.</p>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {Top10exercise.map((exercise, index) => (
  <div key={exercise._id} className="max-w-sm rounded-lg shadow-sm relative">
  

    <div className='p-4 bg-black rounded-xl'>
      <Link to={`/exercise/details/${exercise._id}`}>
      <h1>  {index + 1}. {exercise.name}</h1>
        <img
          className="m-auto p-3 rounded-3xl w-72 h-52 object-cover hover:scale-105 transition-transform duration-300"
          src={exercise.image}
          alt={exercise.name}
        />
       <h3>Muscle : <span className='text-orange-400'>{exercise.primaryMuscle}</span> </h3>
        <p className="line-clamp-5">{exercise.instructions}</p>
      </Link>
    </div>
  </div>
))}

        </div>
      )}
    </section>
  );
}
