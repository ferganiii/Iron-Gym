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
  const [activeSystem, setActiveSystem] = useState('ppl');
  const { id } = useParams();

  const sliderSettings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToScroll: 1,
    arrows: true,
    slidesToShow: 5,
    responsive: [
      {
        breakpoint: 1280,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 1,
          arrows: true
        }
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          arrows: true
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          arrows: false
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          arrows: false,
          centerMode: true,
          centerPadding: '20px'
        }
      }
    ]
  };

  const { data: pplData, isLoading: pplLoading, isError: pplError, error: pplErrorData } = useQuery({
    queryKey: ['systems', 'ppl'],
    queryFn: async () => {
      try {
        const res = await axios.get('https://gym-production-4dd6.up.railway.app/api/pushpull', {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        return res.data.docs;
      } catch (error) {
        console.error("Error fetching PPL data:", error);
        throw error;
      }
    },
  });

  const { data: arnoldSplitData, isLoading: arnoldSplitLoading, isError: arnoldSplitError, error: arnoldSplitErrorData } = useQuery({
    queryKey: ['systems', 'arnoldsplit'],
    queryFn: async () => {
      try {
        const res = await axios.get('https://gym-production-8217.up.railway.app/api/arnoldsplit', {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        return res.data.docs;
      } catch (error) {
        if (error.response && error.response.status === 404) {
          try {
            const alternativeRes = await axios.get('https://gym-production-8217.up.railway.app/api/arnold-split', {
              headers: {
                Authorization: `Bearer ${token}`,
              },
            });
            return alternativeRes.data.docs;
          } catch (alternativeError) {
            console.error("Error fetching Arnold Split data with alternative endpoint:", alternativeError);
            throw alternativeError;
          }
        }
        console.error("Error fetching Arnold Split data:", error);
        throw error;
      }
    },
    enabled: activeSystem === 'arnoldsplit',
    retry: 1,
  });

  const getFallbackData = (systemType) => {
    if (systemType === 'arnoldsplit') {
      return [
        {
          _id: 'arnold-day1',
          name: 'Arnold Split',
          day: 'Day 1 - Chest & Back',
          muscles: ['Chest', 'Back'],
          exercises: [
            { _id: 'ex21', name: 'Bench Press', image: null },
            { _id: 'ex22', name: 'Pull-ups', image: null },
            { _id: 'ex23', name: 'Incline Dumbbell Press', image: null },
            { _id: 'ex24', name: 'Barbell Rows', image: null },
            { _id: 'ex25', name: 'Cable Flyes', image: null },
          ]
        },
        {
          _id: 'arnold-day2',
          name: 'Arnold Split',
          day: 'Day 2 - Shoulders & Arms',
          muscles: ['Shoulders', 'Biceps', 'Triceps'],
          exercises: [
            { _id: 'ex26', name: 'Military Press', image: null },
            { _id: 'ex27', name: 'Lateral Raises', image: null },
            { _id: 'ex28', name: 'Barbell Curls', image: null },
            { _id: 'ex29', name: 'Skull Crushers', image: null },
            { _id: 'ex30', name: 'Dips', image: null },
          ]
        },
        {
          _id: 'arnold-day3',
          name: 'Arnold Split',
          day: 'Day 3 - Legs & Lower Back',
          muscles: ['Quadriceps', 'Hamstrings', 'Lower Back'],
          exercises: [
            { _id: 'ex31', name: 'Squats', image: null },
            { _id: 'ex32', name: 'Deadlifts', image: null },
            { _id: 'ex33', name: 'Leg Press', image: null },
            { _id: 'ex34', name: 'Leg Curls', image: null },
            { _id: 'ex35', name: 'Calf Raises', image: null },
          ]
        },
        {
          _id: 'arnold-day4',
          name: 'Arnold Split',
          day: 'Day 4 - Repeat Day 1',
          muscles: ['Chest', 'Back'],
          exercises: []
        },
        {
          _id: 'arnold-day5',
          name: 'Arnold Split',
          day: 'Day 5 - Repeat Day 2',
          muscles: ['Shoulders', 'Biceps', 'Triceps'],
          exercises: []
        },
        {
          _id: 'arnold-day6',
          name: 'Arnold Split',
          day: 'Day 6 - Repeat Day 3',
          muscles: ['Quadriceps', 'Hamstrings', 'Lower Back'],
          exercises: []
        },
        {
          _id: 'arnold-day7',
          name: 'Arnold Split',
          day: 'Day 7 - Rest',
          muscles: [],
          exercises: []
        }
      ];
    }
    return [];
  };

  useEffect(() => {
    if (activeSystem === 'ppl' && pplData) {
      setSystems(pplData);
    } else if (activeSystem === 'arnoldsplit') {
      if (arnoldSplitData) {
        setSystems(arnoldSplitData);
      } else if (arnoldSplitError) {
        setSystems(getFallbackData('arnoldsplit'));
      }
    }
  }, [activeSystem, pplData, arnoldSplitData, arnoldSplitError]);

  const renderExerciseSlider = (exercises) => {
    if (!exercises || exercises.length === 0) {
      return (
        <div className="bg-black bg-opacity-40 p-4 md:p-6 rounded-lg text-center">
          <p className="text-gray-300 text-lg">No exercises available for this day</p>
          <p className="text-sm text-gray-400 mt-2">Rest day or exercises need to be added</p>
        </div>
      );
    }

    return (
      <Slider {...sliderSettings} className="exercise-slider">
        {exercises.map((exercise, index) => (
          <div key={exercise._id} className="px-1 md:px-2">
            <div className="bg-black bg-opacity-40 p-3 md:p-4 rounded-lg shadow-lg transition-transform hover:scale-105 h-64 md:h-72 flex flex-col items-center justify-between">
              <div className="w-8 h-8 md:w-10 md:h-10 bg-orange-500 rounded-full flex items-center justify-center mb-2">
                <span className="text-white font-bold text-sm md:text-base">{index + 1}</span>
              </div>

              <Link to={`/exercise/details/${exercise._id}`} className="group">
                {exercise.image ? (
                  <div className="relative overflow-hidden rounded-lg">
                    <img
                      src={exercise.image}
                      alt={exercise.name}
                      className="w-28 h-28 md:w-36 md:h-36 object-cover rounded-lg group-hover:opacity-80 transition-opacity"
                    />
                    <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-30 flex items-center justify-center transition-all opacity-0 group-hover:opacity-100">
                      <span className="text-white text-xs md:text-sm font-bold">View Details</span>
                    </div>
                  </div>
                ) : (
                  <div className="w-28 h-28 md:w-36 md:h-36 bg-gray-700 rounded-lg flex items-center justify-center">
                    <span className="text-gray-400 text-xs md:text-sm">No Image</span>
                  </div>
                )}
              </Link>

              <h5 className="text-sm md:text-lg font-bold text-center mt-3 md:mt-4 text-orange-400 line-clamp-2">
                {exercise.name || "No Name"}
              </h5>
            </div>
          </div>
        ))}
      </Slider>
    );
  };

  const renderSystemDay = (system, index) => {
    const isRestDay = system.day?.toLowerCase().includes('rest');
    const isRepeatDay = system.day?.toLowerCase().includes('repeat');

    return (
      <div key={system._id || index} className="mb-6 md:mb-10">
        <div className="bg-black bg-opacity-70 px-4 md:px-6 py-3 md:py-4 rounded-t-lg border-l-4 border-orange-500">
          <div className="flex flex-col md:flex-row md:items-center justify-between">
            <h3 className="text-xl md:text-2xl font-bold text-white mb-2 md:mb-0">
              <span className="text-orange-400">{system.day}</span>
              {!isRestDay && system.exercises && (
                <span className="ml-2 text-xs md:text-sm bg-orange-500 text-white px-2 py-1 rounded-full">
                  {system.exercises.length} exercises
                </span>
              )}
            </h3>

            {!isRestDay && Array.isArray(system.muscles) && system.muscles.length > 0 && (
              <div className="flex flex-wrap gap-1 md:gap-2">
                {Array.isArray(system.muscles) ? (
                  system.muscles.map((muscle, i) => (
                    <span key={i} className="bg-gray-700 text-orange-300 px-2 md:px-3 py-1 rounded-full text-xs md:text-sm">
                      {muscle}
                    </span>
                  ))
                ) : (
                  <span className="bg-gray-700 text-orange-300 px-2 md:px-3 py-1 rounded-full text-xs md:text-sm">
                    {typeof system.muscles === "string"
                      ? system.muscles.replace(/([a-z])([A-Z])/g, "$1 + $2")
                      : "No Muscles"}
                  </span>
                )}
              </div>
            )}
          </div>
        </div>

        <div className="bg-black bg-opacity-30 p-3 md:p-6 rounded-b-lg">
          {isRestDay ? (
            <div className="bg-gray-700 bg-opacity-30 p-5 md:p-8 rounded-lg text-center">
              <svg className="w-12 h-12 md:w-16 md:h-16 mx-auto text-orange-400 mb-3 md:mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 12h.01M12 12h.01M19 12h.01M6 12a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0z"></path>
              </svg>
              <h3 className="text-lg md:text-xl font-bold text-white mb-2">Rest Day</h3>
              <p className="text-gray-400 text-sm md:text-base">Time to recover and let your muscles heal</p>
            </div>
          ) : isRepeatDay ? (
            <div className="bg-gray-700 bg-opacity-30 p-5 md:p-8 rounded-lg text-center">
              <svg className="w-12 h-12 md:w-16 md:h-16 mx-auto text-orange-400 mb-3 md:mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"></path>
              </svg>
              <h3 className="text-lg md:text-xl font-bold text-white mb-2">Repeat Day</h3>
              <p className="text-gray-400 text-sm md:text-base">Repeat the exercises from the referenced day</p>
            </div>
          ) : (
            renderExerciseSlider(system.exercises)
          )}
        </div>
      </div>
    );
  };

  const getSystemName = () => {
    switch (activeSystem) {
      case 'ppl':
        return "Push Pull Legs";
      case 'arnoldsplit':
        return "Arnold Split";
      default:
        return "Training System";
    }
  };

  const getSystemDescription = () => {
    switch (activeSystem) {
      case 'ppl':
        return "A complete weekly training program designed to target all major muscle groups";
      case 'arnoldsplit':
        return "Classic bodybuilding split inspired by Arnold Schwarzenegger with high volume and frequency";
      default:
        return "Follow this structured program to achieve your fitness goals";
    }
  };

  const isLoading = activeSystem === 'ppl' ? pplLoading : (arnoldSplitLoading && !arnoldSplitError);

  const isError = (activeSystem === 'ppl' && pplError) || 
    (activeSystem === 'arnoldsplit' && arnoldSplitError && systems.length === 0);

  const error = activeSystem === 'ppl' ? pplErrorData : arnoldSplitErrorData;

  const handleRetry = () => {
    if (activeSystem === 'ppl') {
      window.location.reload(); 
    } else if (activeSystem === 'arnoldsplit') {
      setActiveSystem('ppl');
      setTimeout(() => setActiveSystem('arnoldsplit'), 100);
    }
  };

  return (
    <section className="min-h-screen bg-gradient-to-b from-black to-gray-800">
      <div
        className="relative w-full bg-cover bg-center py-6 md:py-10"
        style={{
          backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)), url(${bggg})`,
          backgroundAttachment: 'fixed'
        }}
      >
        <div className="container mx-auto px-3 md:px-4 py-4 md:py-8">
          <h1 className="text-3xl md:text-5xl lg:text-6xl text-orange-600 mb-4 md:mb-8 font-extrabold text-center pt-4 md:pt-8 pb-2 md:pb-4">
            Training System
          </h1>

          <div className="max-w-6xl mx-auto mb-6 md:mb-12">
            <div className="h-1 w-[30%] bg-gray-200 mx-auto mb-4 md:mb-10"></div>
            <p className="text-gray-300 text-center text-base md:text-lg">
              Structured workout plans designed to help you achieve your fitness goals
            </p>
          </div>

          <div className="max-w-8xl mx-auto mb-6 md:mb-10">
            <div className="bg-black bg-opacity-50 rounded-lg p-2 flex flex-wrap justify-center">
              <button
                onClick={() => setActiveSystem('ppl')}
                className={`px-4 md:px-6 py-2 md:py-3 mx-1 md:mx-2 my-1 md:my-2 rounded-md font-bold transition-colors text-sm md:text-base ${activeSystem === 'ppl'
                  ? 'bg-orange-500 text-white'
                  : 'bg-gray-700 text-gray-300 hover:bg-gray-600'
                  }`}
              >
                Push Pull Legs
              </button>
              <button
                onClick={() => setActiveSystem('arnoldsplit')}
                className={`px-4 md:px-6 py-2 md:py-3 mx-1 md:mx-2 my-1 md:my-2 rounded-md font-bold transition-colors text-sm md:text-base ${activeSystem === 'arnoldsplit'
                  ? 'bg-orange-500 text-white'
                  : 'bg-gray-700 text-gray-300 hover:bg-gray-600'
                  }`}
              >
                Arnold Split
              </button>
            </div>
          </div>

          {isLoading ? (
            <div className="flex justify-center py-10 md:py-20">
              <Loading />
            </div>
          ) : isError ? (
            <div className="bg-red-900 bg-opacity-30 border border-red-500 text-red-300 p-4 md:p-6 rounded-lg text-center max-w-xl md:max-w-2xl mx-auto">
              <h3 className="text-lg md:text-xl font-bold mb-2">Error Loading Systems</h3>
              <p className="text-sm md:text-base">{error?.message || "Failed to load training programs. Please try again later."}</p>
              <button
                onClick={handleRetry}
                className="mt-3 md:mt-4 bg-red-600 hover:bg-red-700 text-white font-bold py-2 px-4 rounded-lg text-sm md:text-base transition-colors"
              >
                Retry
              </button>
            </div>
          ) : systems.length === 0 ? (
            <div className="bg-black bg-opacity-50 p-6 md:p-10 rounded-lg text-center max-w-xl md:max-w-2xl mx-auto">
              <svg className="w-12 h-12 md:w-16 md:h-16 mx-auto text-gray-500 mb-3 md:mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
              </svg>
              <h3 className="text-xl md:text-2xl font-bold text-gray-300 mb-2 md:mb-3">No Training Systems Found</h3>
              <p className="text-gray-400 mb-4 md:mb-6 text-sm md:text-base">No systems are currently available for {getSystemName()}. Please check back later.</p>
              <button
                onClick={() => setActiveSystem('ppl')}
                className="bg-orange-500 hover:bg-orange-600 text-white font-bold py-2 px-4 md:px-6 rounded-lg transition-colors text-sm md:text-base"
              >
                Try Another System
              </button>
            </div>
          ) : (
            <div className="max-w-8xl mx-auto">
              <div className="bg-black bg-opacity-80 p-4 md:p-6 rounded-lg shadow-lg mb-6 md:mb-10 text-center">
                <h2 className="text-2xl md:text-3xl font-bold text-white mb-1 md:mb-2">
                  System: <span className="text-orange-500">{systems[0]?.name || getSystemName()}</span>
                </h2>
                <p className="text-gray-300 text-sm md:text-base">{getSystemDescription()}</p>
              </div>

              <div className="space-y-4 md:space-y-6">
                {systems.map((system, index) => renderSystemDay(system, index))}
              </div>

              <div className="mt-8 md:mt-12 text-center">
                <button
                  onClick={() => setIsModalOpen(true)}
                  className="bg-orange-500 hover:bg-orange-600 text-white font-bold py-2 md:py-3 px-6 md:px-8 rounded-lg transition-colors shadow-lg text-sm md:text-base"
                >
                  Create Custom System
                </button>
              </div>
            </div>
          )}
        </div>
      </div>

      {isModalOpen && (
        <CreateSystemModal
          onClose={() => setIsModalOpen(false)}
          onSave={(newSystem) => {
            setSystems([...systems, newSystem]);
            setIsModalOpen(false);
          }}
          systemType={activeSystem}
        />
      )}

      <style jsx>{`
        .exercise-slider .slick-track {
          display: flex !important;
          margin: 0 auto;
        }
        .exercise-slider .slick-slide {
          height: inherit !important;
          padding: 0.25rem;
        }
        .exercise-slider .slick-dots {
          bottom: -30px;
        }
        .exercise-slider .slick-dots li {
          margin: 0 2px;
        }
        .exercise-slider .slick-dots li button:before {
          color: #f97316 !important;
          font-size: 10px;
        }
        @media (max-width: 768px) {
          .exercise-slider .slick-dots {
            bottom: -25px;
          }
          .exercise-slider .slick-dots li button:before {
            font-size: 8px;
          }
        }
      `}</style>
    </section>
  );
}