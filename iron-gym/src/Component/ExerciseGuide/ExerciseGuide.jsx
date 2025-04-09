import React, { useContext } from 'react';
import { Link, useParams } from 'react-router-dom';
import axios from 'axios';
import { UserContext } from '../../Context/UserContext';
import Loading from '../Loading/Loading';
import bg from '../../assets/bg.jpg';
import bg_dmbl from '../../assets/bg_dmbl.jpg';
import { useQuery } from '@tanstack/react-query';

export default function ExerciseGuide() {
  const { muscleName } = useParams();
  const { token } = useContext(UserContext);

  const {
    data: exercisesData,
    isLoading,
    isError,
    error,
  } = useQuery({
    queryKey: ['exercise', muscleName],
    queryFn: async () => {
      const res = await axios.get('https://gym-production-8217.up.railway.app/api/exercise', {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      const muscleLower = muscleName.toLowerCase();
      const filteredExercises = res.data.docs.filter(ex =>
        ex.muscleGroup?.name?.toLowerCase() === muscleLower ||
        ex.primaryMuscle?.some(m => m?.toLowerCase() === muscleLower) ||
        ex.targetMuscle?.some(m => m?.toLowerCase() === muscleLower) ||
        ex.secondaryMuscle?.some(m => m?.toLowerCase() === muscleLower)
      );

      return filteredExercises;
    },
    enabled: !!muscleName,
  });

  return (
    <section className='bg-[rgb(102,102,102,.3)]'>
      <div
        className="h-[70vh] bg-cover bg-center relative"
        style={{ backgroundImage: `url(${bg_dmbl})` }}
      >
        <div className="absolute bottom-0 left-0 w-full">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
            <path
              fill="#273036"
              fillOpacity="0.7"
              d="M0,128L18.5,128C36.9,128,74,128,111,112C147.7,96,185,64,222,74.7C258.5,85,295,139,332,176C369.2,213,406,235,443,229.3C480,224,517,192,554,192C590.8,192,628,224,665,229.3C701.5,235,738,213,775,213.3C812.3,213,849,235,886,234.7C923.1,235,960,213,997,176C1033.8,139,1071,85,1108,64C1144.6,43,1182,53,1218,74.7C1255.4,96,1292,128,1329,117.3C1366.2,107,1403,53,1422,26.7L1440,0L1440,320L1421.5,320C1403.1,320,1366,320,1329,320C1292.3,320,1255,320,1218,320C1181.5,320,1145,320,1108,320C1070.8,320,1034,320,997,320C960,320,923,320,886,320C849.2,320,812,320,775,320C738.5,320,702,320,665,320C627.7,320,591,320,554,320C516.9,320,480,320,443,320C406.2,320,369,320,332,320C295.4,320,258,320,222,320C184.6,320,148,320,111,320C73.8,320,37,320,18,320L0,320Z"
            ></path>
          </svg>
        </div>
      </div>

      <div
        className="relative w-full bg-repeat bg-top py-10"
        style={{ backgroundImage: `url(${bg})` }}
      >
        <div className='container mx-auto'>
          <h2 className="text-3xl lg:text-4xl text-orange-500 font-[Anta] mb-4">
            Exercises {muscleName}
          </h2>

          {isLoading ? (
            <Loading />
          ) : isError ? (
            <p className="text-red-500 text-center">Error: {error.message}</p>
          ) : exercisesData.length === 0 ? (
            <p>No exercises found for {muscleName}. Try another muscle group.</p>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mt-8">
              {exercisesData.map((exercise) => (
                <div key={exercise._id} className="max-w-sm rounded-lg shadow-sm">
                  <div className='p-4'>
                    <Link to={`/exercise/details/${exercise._id}`}>
                      <img
                        className="m-auto bg-black p-3 rounded-3xl w-64 h-60 object-cover"
                        src={exercise.image}
                        alt={exercise.name}
                      />
                    </Link>
                  </div>

                  <div className="p-2">
                    <h5 className="mb-2 font-serif text-xl lg:text-2xl text-center font-bold tracking-tight text-orange-500 dark:text-orange-400 leading-snug">
                      {(() => {
                        const words = exercise.name.split(" ");
                        const firstLine = words.slice(0, 2).join(" ");
                        const rest = words.slice(2).join(" ");
                        return (
                          <>
                            <span className="block">{firstLine}</span>
                            {rest && <span className="block">{rest}</span>}
                          </>
                        );
                      })()}
                    </h5>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
