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
import background_hexagon from '../../assets/background_hexagon.jpg';
import MuchaTseBle from '../../assets/MuchaTseBle.jpg';
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
    dots: false,
    infinite: true,
    speed: 500,
    slidesToScroll: 3,
    arrows:false,
    slidesToShow: 6,
    
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
            slidesToShow: 1
          }
        }
      ]
  };
  const handleMuscleClick = (muscleName) => {
    navigate(`/exercise/${muscleName}`); // التنقل إلى صفحة التمارين للعضلة
  };

  return (

  
   
      
      <section className='bg-[rgb(102,102,102,.3)]'>
   <div className="relative w-full h-screen overflow-hidden mb-12">
  {/* الصورة */}
  <img
    src={MuchaTseBle}
    alt="background"
    className="absolute top-0 left-0 w-full h-full object-cover object-left"
  />

  {/* الـ Overlay للنص */}
  <div className="absolute inset-0 bg-black/15 flex flex-col justify-center items-start px-8 sm:px-16 md:px-24">
    <h1 className="text-4xl sm:text-5xl font-semibold text-white mb-4">
      Exercise&nbsp;&nbsp;Guides And Videos
    </h1>
    <p className="text-xl sm:text-2xl text-white mb-6">
      Explore by muscle groups
    </p>
    <h2 className="text-5xl sm:text-7xl font-extrabold text-white leading-tight tracking-wider">
      BREATH,<br />
      TRAIN,<br />
      ACHIEVE.
    </h2>
  </div>
</div>






  <div className='container mx-auto '>
  <Slider {...settings}>
{muscleImages.map((muscle, index) =>(

<Link to="" onClick={() => handleMuscleClick(muscle.name)}>
             
             <div className="m-4">
                
             <img  src={muscle.image}
                  alt=''
                  className=" w-56 h-56 object-cover rounded-full hover:scale-110 transition-transform duration-300"/>
              </div>  
              </Link>


))
 }


</Slider> 
  </div>

      
      </section>


    
    
  );
}
