import aboutBg from "../../assets/about-bg.jpg";
import mission1 from "../../assets/mission1.jpg";
import mission2 from "../../assets/mission2.jpg";
import mission3 from "../../assets/mission3.jpg";
import visionBg from "../../assets/vision-bg.jpg";
import sec4Bg from "../../assets/sec4-bg.jpg"; // استدعاء الخلفية الجديدة
import { Card } from "flowbite-react";

const AboutUs = () => {
  return (
    <div>
      {/* الخلفية الأساسية */}
      <div
        className="relative flex items-center justify-start h-screen bg-cover bg-center"
        style={{ backgroundImage: `url(${aboutBg})` }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-50"></div>
        <div className="relative z-10 pl-28">
          <h1 className="text-white text-4xl font-bold">About Us</h1>
        </div>
      </div>

      {/* سكشن 2 */}
      <div className="flex flex-col md:flex-row items-center justify-between gap-10 px-20 py-16 bg-[#1e1e1e] text-white">
        <div className="grid grid-cols-2 gap-4 items-center ml-44">
          <img src={mission1} alt="Mission 1" className="rounded-[40px] w-[250px] h-[500px] object-cover" />
          <div className="flex flex-col gap-4">
            <img src={mission2} alt="Mission 2" className="rounded-[40px] w-[200px] h-[360px] object-cover" />
            <img src={mission3} alt="Mission 3" className="rounded-[40px] w-[200px] h-[120px] object-cover" />
          </div>
        </div>
        <Card className="bg-[#292929] text-white p-10 w-full md:w-[30%] h-[500px] shadow-lg ml-10 mr-44 rounded-[40px] border-none">
          <h2 className="text-4xl font-bold mb-10">Mission Statement:</h2>
          <p className="text-white-300 text-lg">
            "Our mission is to provide a comprehensive platform that helps individuals improve their fitness by offering personalized training plans, healthy nutrition tips, and the best exercises to achieve their health goals."
          </p>
        </Card>
      </div>

      {/* سكشن 3 */}
      <div className="flex flex-col md:flex-row items-center justify-between gap-10 px-20 py-16 bg-[#1e1e1e] text-white">
        <div className="flex flex-col gap-6 w-full md:w-[30%] ml-44">
          <Card className="bg-[#292929] text-white p-6 shadow-lg w-[480px] h-[225px] rounded-[40px] border-none">
            <h2 className="text-3xl font-bold">Our Vision:</h2>
            <p className="text-white-300 text-lg mt-2">
              Our vision is to become the leading source for individuals seeking to enhance their physical and mental health through proper training and balanced nutrition.
            </p>
          </Card>
          <Card className="bg-[#3a3327] text-white p-6 shadow-lg w-[480px] h-[225px] rounded-[40px] border-none">
            <h2 className="text-3xl font-bold">What Makes Us Unique:</h2>
            <p className="text-white-300 text-lg mt-2">
              We offer comprehensive information on nutrition, workouts, and cardio. With regular updates and future development, we stand out as your go-to fitness hub.
            </p>
          </Card>
          <Card className="bg-[#292929] text-white p-6 shadow-lg w-[480px] h-[225px] rounded-[40px] border-none">
            <h2 className="text-3xl font-bold">Call to Action:</h2>
            <p className="text-white-300 text-lg mt-2">
              Join us now to achieve your fitness goals and gain expert advice!
            </p>
          </Card>
        </div>

        {/* الكارت الكبير على اليمين */}
        <div
          className="relative w-full md:w-[600px] h-[690px] bg-cover bg-center rounded-lg flex items-center p-10 mr-44 "
          style={{ backgroundImage: `url(${visionBg})` }}
        >
          <div className="absolute inset-0 bg-black bg-opacity-30 backdrop-blur-sm rounded-lg "></div>
          <div className="relative z-10 text-white">
            <h2 className="text-5xl font-bold">Transform Your Body, Elevate Your Life.</h2>
            <p className="text-white-300 text-xl mt-20 mb-24">
              Achieve your fitness goals with expert guidance, personalized workout plans, and balanced nutrition.
            </p>
          </div>
        </div>
      </div>

      {/* الخلفية الجديدة بعد السكشن 3 */}
      <div
        className="relative h-[500px] bg-cover bg-center"
        style={{ backgroundImage: `linear-gradient(to bottom, rgba(30,30,30,0.7), rgba(30,30,30,1)), url(${sec4Bg})` }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-30 backdrop-blur-sm"></div>
      </div>
    </div>
  );
};

export default AboutUs;



























// 1 تعديل //////////////////////////////////////////////////////////////////

// import aboutBg from "../../assets/about-bg.jpg";

// const AboutUs = () => {
//   return (
//     <div
//       className="relative flex items-center justify-start h-screen bg-cover bg-center"
//       style={{ backgroundImage: `url(${aboutBg})` }}
//     >
//       <div className="absolute inset-0 bg-black bg-opacity-50"></div>

//       <div className="relative z-10 pl-28">
//         <h1 className="text-white text-4xl font-bold">About Us</h1>
//       </div>
//     </div>
//   );
// };

// export default AboutUs;

// 2 تعديل //////////////////////////////////////////////////////////////////
// import aboutBg from "../../assets/about-bg.jpg";
// import mission1 from "../../assets/mission1.jpg";
// import mission2 from "../../assets/mission2.jpg";
// import mission3 from "../../assets/mission3.jpg";
// import { Card } from "flowbite-react";

// const AboutUs = () => {
//   return (
//     <div
//       className="relative flex items-center justify-start h-screen bg-cover bg-center"
//       style={{ backgroundImage: `url(${aboutBg})` }}
//     >
//       <div className="absolute inset-0 bg-black bg-opacity-50"></div>

//       <div className="relative z-10 pl-28 text-white">
//         <h1 className="text-4xl font-bold">About Us</h1>
//         <p className="mt-4 text-lg max-w-lg">
//           We are committed to helping individuals achieve their fitness goals through personalized training and nutrition plans.
//         </p>

//         {/* Cards Section */}
//         <div className="mt-8 flex gap-6">
//           <Card className="w-64 bg-gray-800 text-white">
//             <img src={mission1} alt="Mission 1" className="w-full h-40 object-cover rounded-t-lg" />
//             <div className="p-4">
//               <h5 className="text-xl font-bold">Our Mission</h5>
//               <p>We aim to provide top-notch fitness guidance and training programs.</p>
//             </div>
//           </Card>

//           <Card className="w-64 bg-gray-800 text-white">
//             <img src={mission2} alt="Mission 2" className="w-full h-40 object-cover rounded-t-lg" />
//             <div className="p-4">
//               <h5 className="text-xl font-bold">Our Vision</h5>
//               <p>Helping everyone build a healthier lifestyle through the best fitness strategies.</p>
//             </div>
//           </Card>

//           <Card className="w-64 bg-gray-800 text-white">
//             <img src={mission3} alt="Mission 3" className="w-full h-40 object-cover rounded-t-lg" />
//             <div className="p-4">
//               <h5 className="text-xl font-bold">Our Values</h5>
//               <p>Commitment, excellence, and continuous improvement in fitness.</p>
//             </div>
//           </Card>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default AboutUs;

