import React, { useContext, useState, useEffect } from 'react';
import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import { UserContext } from '../../Context/UserContext';
import Loading from '../Loading/Loading';
import Slider from "react-slick";
import { Link, useParams } from 'react-router-dom';
import bggg from '../../assets/bggg.jpg';
import CreateSystemModal from '../CreateSystemModal/CreateSystemModal';

export default function ExercisePPL() {
  const { token } = useContext(UserContext);
  const [systems, setSystems] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false); 
  const { id } = useParams();

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToScroll: 3,
    arrows:false,
    slidesToShow: 5,
    responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 4
          }
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 3
          }
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 2
          }
        }
      ]
  };

  const { data, isLoading, isError, error } = useQuery({
    queryKey: ['systems'],
    queryFn: async () => {
      const res = await axios.get('https://gym-production-4dd6.up.railway.app/api/brosplit', {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      return res.data.docs;
    },
  });

  useEffect(() => {
    if (data) {
      setSystems(data);
      console.log(data);
    }
  }, [data]);


  return (
    <section className="bg-[rgb(102,102,102,.3)]">
      <div
        className="relative w-full bg-top py-10"
        style={{ backgroundImage: `url(${bggg})` }}
      >
        <h1 className='text-3xl lg:text-5xl text-orange-400 font-[Angkor] text-center pt-8 pb-16'>Training Programmes</h1>
        <div className="container mx-auto py-10">
          <h2 className="text-3xl lg:text-4xl text-orange-500 font-[Anta] mb-4">
            Exercise Systems
          </h2>




          {!isLoading && !isError && systems.length > 0 && (
            <h3 className="text-4xl font-extrabold text-center text-white mb-8">
             System Name : <span className='text-orange-500'>{systems[0].name}</span>
            </h3>
          )}

          {isLoading ? (
            <Loading />
          ) : isError ? (
            <p className="text-red-500 text-center">Error: {error.message}</p>
          ) : systems.length === 0 ? (
            <p>No systems found. Try again later.</p>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-1 gap-4 mt-8">
              {systems.map((system, index) => (
                <div
                  key={system._id}
                  className="bg-[rgb(102,102,102,.2)] rounded-lg shadow-md p-4 mb-10 py-16"
                >
                  <h3 className="text-xl font-bold text-orange-500 dark:text-white">
                    <span className="text-orange-500">{system.day} : </span>({system.exercises?.length } )
                  </h3>

                  <h4 className="text-xl font-semibold text-orange-500 mb-4">
                    {Array.isArray(system.muscles)
                      ? system.muscles.join(" + ")
                      : typeof system.muscles === "string"
                      ? system.muscles.replace(/([a-z])([A-Z])/g, "$1 + $2")
                      : "No Muscles"}
                  </h4>

                  {system.exercises && system.exercises.length > 0 ? (
                    <Slider {...settings}>
                      {system.exercises.map((exercise, index) => (
                        <div key={exercise._id} className="p-4">
                          <div className="bg-[rgb(102,102,102,.1)] p-4 rounded-lg shadow w-full h-96 flex flex-col items-center justify-between">
                            <h2 className="text-orange-600 text-xl font-bold ">
                              {index + 1}
                            </h2>
                            <Link to={`/exercise/details/${exercise._id}`}>
                              {exercise.image ? (
                                <img
                                  src={exercise.image}
                                  alt={exercise.name}
                                  className="w-48 h-48 mx-auto rounded-full object-cover"
                                />
                              ) : (
                                <p className="text-center">No Image</p>
                              )}
                            </Link>
                            <h5 className="text-lg font-bold text-center mt-2 text-orange-500">
                              {exercise.name || "No Name"}
                            </h5>
                          </div>
                        </div>
                      ))}
                    </Slider>
                    
                  ) : (
                    <p className="text-center text-gray-500">
                      No exercises available for this system
                    </p>
                  )}
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
      
    </section>
  );
}
