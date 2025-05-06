import aboutBg from "../../assets/about-bg.jpg";
import mission1 from "../../assets/mission1.jpg";
import mission2 from "../../assets/mission2.jpg";
import mission3 from "../../assets/mission3.jpg";
import visionBg from "../../assets/vision-bg.jpg";
import sec4Bg from "../../assets/sec4-bg.jpg";
import { Card } from "flowbite-react";
import { motion } from "framer-motion";


const AboutUs = () => {
  return (
       <>
         <section className="bg-[#1e1e1e]">
            {/* الخلفية الأساسية */}
            <div
      className="relative flex items-center justify-start h-[60vh] bg-cover bg-center"
      style={{ backgroundImage: `url(${aboutBg})` }}
    >
      {/* تأثير تكبير الخلفية */}
      <motion.div
        initial={{ scale: 1.1 }}
        animate={{ scale: 1 }}
        transition={{ duration: 1.5, ease: "easeOut" }}
        className="absolute inset-0 bg-black bg-opacity-50"
      ></motion.div>

      {/* نص "About Us" بتحريك انزلاق + شفافية */}
      <motion.div
        initial={{ opacity: 0, x: -100 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1.2, ease: "easeOut" }}
        className="relative z-10 pl-10 md:pl-28"
      >
        <h1 className="text-white text-4xl md:text-6xl font-bold">
          About Us
        </h1>
      </motion.div>
    </div>
         <div className="container mx-auto">
    
     

      {/* سكشن 2 */}
      <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-28 px-10 md:px-20 py-16 bg-[#1e1e1e] text-white">
  {/* الصور (تأخذ نصف الشاشة) */}
  <div className="grid grid-cols-2 gap-4 items-center md:ml-20">
    <img
      src={mission1}
      alt="Mission 1"
      className="rounded-[40px] w-full h-[500px] object-cover hover:scale-110 hover:-translate-y-2 transition"
    />
    <div className="flex flex-col gap-4">
      <img
        src={mission2}
        alt="Mission 2"
        className="rounded-[40px] w-full h-[360px] object-cover hover:scale-110 hover:-translate-y-2 transition"
      />
      <img
        src={mission3}
        alt="Mission 3"
        className="rounded-[40px] w-full h-[120px] object-cover hover:scale-110 hover:-translate-y-2 transition"
      />
    </div>
  </div>

  {/* الكارد (يأخذ نصف الشاشة) */}
  <Card className="break-words text-center dark:bg-[rgb(102,102,102,.3)] text-white p-6 sm:p-10 h-auto min-h-[500px] shadow-lg rounded-[40px] border-none hover:shadow-2xl hover:scale-105 hover:-translate-y-2 transition">
    <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-6 sm:mb-10 ">
      Mission Statement:
    </h2>
    <p className="text-white-300 text-md sm:text-lg break-words">
      "Our mission is to provide a comprehensive platform that helps individuals improve their fitness by offering personalized training plans, healthy nutrition tips, and the best exercises to achieve their health goals."
    </p>
  </Card>
</div>



      {/* سكشن 3 */}
      <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-10 md:gap-20 px-6 sm:px-10 md:px-20 py-16 pb-6 bg-[#1e1e1e] text-white">
  {/* الكروت الثلاثة على اليسار */}
  <div className="flex flex-col gap-6 w-full">
    <Card className="dark:bg-[rgb(102,102,102,.3)] text-white p-4 sm:p-6 shadow-lg w-full h-auto min-h-[225px] rounded-[40px] border-none hover:shadow-2xl hover:scale-105 hover:-translate-y-2 transition">
      <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-wrap balance">Our Vision:</h2>
      <p className="text-white-300 text-md sm:text-lg leading-relaxed mt-2">
        Our vision is to become the leading source for individuals seeking to enhance their physical and mental health through proper training and balanced nutrition.
      </p>
    </Card>
    <Card className="dark:bg-[rgb(102,102,102,.3)] text-white p-4 sm:p-6 shadow-lg w-full h-auto min-h-[225px] rounded-[40px] border-none hover:shadow-2xl hover:scale-105 hover:-translate-y-2 transition">
      <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-wrap balance">What Makes Us Unique:</h2>
      <p className="text-white-300 text-md sm:text-lg leading-relaxed mt-2">
        We offer comprehensive information on nutrition, workouts, and cardio. With regular updates and future development, we stand out as your go-to fitness hub.
      </p>
    </Card>
    <Card className="dark:bg-[rgb(102,102,102,.3)] text-white p-4 sm:p-6 shadow-lg w-full h-auto min-h-[225px] rounded-[40px] border-none hover:shadow-2xl hover:scale-105 hover:-translate-y-2 transition">
      <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-wrap balance">Call to Action:</h2>
      <p className="text-white-300 text-md sm:text-lg leading-relaxed mt-2">
        Join us now to achieve your fitness goals and gain expert advice!
      </p>
    </Card>
  </div>

  {/* الكارت الكبير على اليمين */}
  <div
    className=" relative w-full h-auto min-h-[500px] md:min-h-[690px] bg-cover  bg-center rounded-lg flex items-center justify-center p-6 sm:p-10 hover:scale-105 hover:-translate-y-2 transition"
    style={{ backgroundImage: `url(${visionBg})` }}
  >
    <div className="absolute inset-0 bg-black bg-opacity-30 backdrop-blur-sm rounded-lg hover:bg-opacity-50 transition"></div>
    <div className="relative  z-10 text-white text-center max-w-[90%] md:max-w-[80%]">
      <h2 className="text-2xl sm:text-4xl md:text-5xl font-bold text-wrap balance leading-tight">
        Transform Your Body, Elevate Your Life.
      </h2>
      <p className="text-white-300 text-md sm:text-lg md:text-xl leading-relaxed mt-8 sm:mt-12">
        Achieve your fitness goals with expert guidance, personalized workout plans, and balanced nutrition.
      </p>
    </div>
  </div>
</div>



      {/* الخلفية  بعد السكشن 3 */}
   
    </div>
    <div
        className="relative h-[500px] bg-cover bg-center"
        style={{
          backgroundImage: `linear-gradient(to bottom, rgba(30,30,30,0.7), rgba(30,30,30,1)), url(${sec4Bg})`,
        }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-30 backdrop-blur-sm "></div>
      </div>
         </section>
       
       </>
  );
};

export default AboutUs;
