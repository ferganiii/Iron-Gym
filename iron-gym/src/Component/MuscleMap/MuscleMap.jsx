import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Slider from 'react-slick';
import chest from '../../assets/chest.jpeg';
import aps from '../../assets/aps.png';
import adductors from '../../assets/adductors.jpeg';
import adductors2 from '../../assets/adductors2.jpeg';
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
import background_hexagon from '../../assets/background_hexagon.avif';
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
            slidesToShow: 1
          }
        }
      ]
  };
  const handleMuscleClick = (muscleName) => {
    navigate(`/exercise/${muscleName}`); // التنقل إلى صفحة التمارين للعضلة
  };

  return (

    <>
   
      
      <section>
      
<div
          className="h-screen bg-cover bg-center relative flex flex-col justify-center items-start text-center"
          style={{ backgroundImage: `url(${background_hexagon})` }}
        >
          
        </div>





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
      </section>


    </>
    
  );
}
