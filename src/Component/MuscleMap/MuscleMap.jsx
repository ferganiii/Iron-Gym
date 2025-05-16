import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Slider from 'react-slick';
import chest from '../../assets/chest.jpeg';
import aps from '../../assets/aps.png';
import adductors from '../../assets/adductors.jpeg';
import Bicps from '../../assets/Bicps.png';
import calves from '../../assets/calves.jpeg';
import glats from '../../assets/glats.png';
import leg from '../../assets/leg.jpeg';
import lawerBack from '../../assets/lawerBack.jpeg';
import back from '../../assets/back.png';
import qads from '../../assets/qads.png';
import sholder from '../../assets/sholder.png';
import trapizes from '../../assets/trapizes.png';
import tricps from '../../assets/tricps.png';
import forearms from '../../assets/forearms.jpeg';
import bg from '../../assets/bg1111.jpg';
import Top10exercise from '../Top10exercise/Top10exercise';
export default function MuscleMap() {
  const muscleImages = [
    { name: 'Triceps', image: tricps },
    { name: 'Chest', image: chest },
    { name: 'Biceps', image: Bicps },
    { name: 'Hamstrings', image: leg },
    { name: 'Back', image: back },
    { name: 'Quads', image: qads },
    { name: 'Trapezius', image: trapizes },
    { name: 'Shoulders', image: sholder },
    { name: 'Glutes', image: glats },
    { name: 'Abs', image: aps },
    { name: 'Forearms', image: forearms },
    { name: 'Adductors', image: adductors },
    { name: 'Calves', image: calves },
    { name: 'Lower Back', image: lawerBack },

  ];

  const navigate = useNavigate();

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    arrows: false,
    slidesToScroll: 2,
    slidesToShow: 6,

    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          centerMode: true,
          centerPadding: '0px',
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          centerMode: true,
          centerPadding: '0px',
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 1,
          centerMode: true,
          centerPadding: '0px',
        }
      }
    ]
  };

  const handleMuscleClick = (muscleName) => {
    navigate(`/exercise/${muscleName}`);
  };

  return (




    <section className='bg-[rgb(102,102,102,.3)]'>
      <div className="relative w-full h-screen overflow-hidden mb-12">
        <img
          src={bg}
          alt="background"
          className="absolute top-0 left-0 w-full h-full object-cover object-left"
        />
        <div className="absolute bottom-0 left-0 w-full">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
            <path
              fill="#273036"
              fillOpacity="0.7"
              d="M0,128L18.5,128C36.9,128,74,128,111,112C147.7,96,185,64,222,74.7C258.5,85,295,139,332,176C369.2,213,406,235,443,229.3C480,224,517,192,554,192C590.8,192,628,224,665,229.3C701.5,235,738,213,775,213.3C812.3,213,849,235,886,234.7C923.1,235,960,213,997,176C1033.8,139,1071,85,1108,64C1144.6,43,1182,53,1218,74.7C1255.4,96,1292,128,1329,117.3C1366.2,107,1403,53,1422,26.7L1440,0L1440,320L1421.5,320C1403.1,320,1366,320,1329,320C1292.3,320,1255,320,1218,320C1181.5,320,1145,320,1108,320C1070.8,320,1034,320,997,320C960,320,923,320,886,320C849.2,320,812,320,775,320C738.5,320,702,320,665,320C627.7,320,591,320,554,320C516.9,320,480,320,443,320C406.2,320,369,320,332,320C295.4,320,258,320,222,320C184.6,320,148,320,111,320C73.8,320,37,320,18,320L0,320Z"
            ></path>
          </svg>
        </div>
        <div className="absolute inset-0 bg-black/15 flex flex-col justify-center items-start px-8 sm:px-16 md:px-24">
          <h1 className="lg:text-4xl text-3xl font-semibold text-white mb-4">
            Exercise&nbsp;&nbsp;Guides And Videos
          </h1>
          <p className="text-xl sm:text-2xl text-white mb-6">
            Explore by muscle groups
          </p>
          <h2 className="lg:text-5xl text-3xl font-extrabold text-white leading-tight tracking-wider">
            BREATH,<br />
            TRAIN,<br />
            ACHIEVE.
          </h2>
        </div>
      </div>
      <div className='container mx-auto '>
        <div className="flex justify-center w-full">
          <div className="w-full sm:w-11/12 px-2">
            <Slider {...settings}>
              {muscleImages.map((muscle, index) => (
                <div key={index} className="flex justify-center">
                  <Link to="" onClick={() => handleMuscleClick(muscle.name)}>
                    <img
                      src={muscle.image}
                      alt=""
                      className="lg:w-44 lg:h-44 w-20 pb-3
               object-cover rounded-full hover:scale-110 transition-transform duration-300"
                    />
                  </Link>
                </div>
              ))}
            </Slider>
          </div>
        </div>

        <Top10exercise />
      </div>
    </section>

  );
}
