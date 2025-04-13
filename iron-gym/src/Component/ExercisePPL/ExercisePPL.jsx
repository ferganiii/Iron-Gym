import React, { useContext, useState, useEffect } from 'react';
import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import { UserContext } from '../../Context/UserContext';
import Loading from '../Loading/Loading';

export default function ExercisePPL() {
  const { token } = useContext(UserContext);
  const [systems, setSystems] = useState([]);

  // جلب الأنظمة من الـ backend
  const { data, isLoading, isError, error } = useQuery({
    queryKey: ['systems'],
    queryFn: async () => {
      const res = await axios.get('https://gym-production-8217.up.railway.app/api/brosplit', {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      return res.data.docs;
    },
  });

  useEffect(() => {
    if (data) {
      setSystems(data); // تخزين الأنظمة بعد الجلب
    }
  }, [data]);

  return (
    <section className="bg-[rgb(102,102,102,.3)]">
      <div className="container mx-auto py-10">
        <h2 className="text-3xl lg:text-4xl text-orange-500 font-[Anta] mb-4">
          Exercise Systems
        </h2>

        {isLoading ? (
          <Loading />
        ) : isError ? (
          <p className="text-red-500 text-center">Error: {error.message}</p>
        ) : systems.length === 0 ? (
          <p>No systems found. Try again later.</p>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mt-8">
            {systems.map((system) => (
              <div key={system._id} className="max-w-sm rounded-lg shadow-sm">
                <h3 className="text-xl font-bold text-center">{system.day}</h3>
                <h3 className="text-xl font-bold text-center">{system.muscles}</h3>
                <div className="grid grid-cols-1 gap-4">
                  {system.exercises && system.exercises.length > 0 ? (
                    system.exercises.map((exercise) => (
                      <div key={exercise._id} className="p-4">
                        <h5 className="text-xl font-semibold text-center mb-2">
                          {exercise.name || "No Name"}
                        </h5>
                        <div className="text-center">
                          <p className="text-sm">
                            Target Muscle: {exercise.muscleGroup?.name || "No Muscle"}
                          </p>
                          {exercise.muscleGroup?.image ? (
                            <img
                              className="w-20 h-20 rounded-full mx-auto mt-2"
                              src={exercise.muscleGroup.image}
                              alt={exercise.muscleGroup.name}
                            />
                          ) : (
                            <p>No Image</p>
                          )}
                        </div>
                      </div>
                    ))
                  ) : (
                    <p className="text-center">No exercises available for this system</p>
                  )}
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
