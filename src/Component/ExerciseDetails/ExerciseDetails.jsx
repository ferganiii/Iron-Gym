import React, { useEffect, useState, useContext } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import Loading from '../Loading/Loading';
import { UserContext } from '../../Context/UserContext';

export default function ExerciseDetails() {
  const { id } = useParams();
  const { token } = useContext(UserContext);
  const [exercise, setExercise] = useState(null);
  const [loading, setLoading] = useState(true);

  async function fetchExercise() {
    try {
      const res = await axios.get(`https://gym-production-4dd6.up.railway.app/api/exercise/${id}`, {
        headers: { Authorization: `Bearer ${token}` },
      });

      if (res.data.docs) {
        setExercise(res.data.docs);
      } else {
        setExercise(res.data);
      }
    } catch (err) {
      console.error('Error fetching exercise details:', err);
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    fetchExercise();
  }, [id]);

  if (loading) return <Loading />;
  if (!exercise) return <p>Exercise not found</p>;

  return (
    <>
      <section className='bg-[rgb(102,102,102,.3)]'>
        <h1 className='text-center text-3xl lg:text-5xl m-6 font-alkalami py-7'>HOW TO DO : <span className='text-orange-400'>{exercise.name}</span> </h1>
        <div className='container mx-auto'>
          <div className='grid grid-cols-1  md:grid-cols-3 gap-4 pb-11'>

            <div>
              <video src={exercise.video} controls className='w-full h-full object-cover rounded mb-4' ></video>

            </div>

            <div className=''>

              <div className='bg-[rgb(102,102,102,.4)] p-6 rounded-3xl'>
                <h2 className='text-2xl md:text-4xl font-alkalami '>Target Muscle:</h2>
                <h3 className='font-alkalami text-2xl text-green-400'>
                  <span className='text-orange-400'>
                    {Array.isArray(exercise.primaryMuscle) ? exercise.primaryMuscle.join(', ') : exercise.primaryMuscle}
                    ,
                  </span>
                  {' '}
                  {Array.isArray(exercise.secondaryMuscle) ? exercise.secondaryMuscle.join(', ') : exercise.secondaryMuscle}
                </h3>


              </div>
              <div className='bg-[rgb(102,102,102,.4)] p-6 rounded-3xl mt-5'>

                <h2 className='text-3xl  font-alkalami border-b'>Instructions For Proper Form:</h2>

                <p className='text-xl'>  {exercise.instructions} </p>
              </div>
            </div>


            <div className=''>
              <div className='bg-[rgb(102,102,102,.4)] p-6 rounded-3xl'>
                <p className='text-xl m-3'>
                  <span className=''><i className="fa-solid fa-circle" style={{ color: '#e68519' }} /></span>  primaryMuscle
                </p>
                <p className='text-xl m-3'>
                  <span className=''><i className="fa-solid fa-circle" style={{ color: '#32cd68' }} /></span> SecondMuscle
                </p>
              </div>

              <div className='bg-[rgb(102,102,102,.4)] p-6 rounded-3xl mt-5'>
                <h2 className='text-3xl  font-alkalami border-b'>Common Form Mistakes</h2>
                <p className='text-xl '>{exercise.mistakes}</p>
              </div>

            </div>

          </div>
        </div>
      </section>


    </>

  );
}

