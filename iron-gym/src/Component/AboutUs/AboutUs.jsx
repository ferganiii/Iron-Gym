
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




// 3 تعديل //////////////////////////////////////////////////////////////////


// import aboutBg from "../../assets/about-bg.jpg";
// import mission1 from "../../assets/mission1.jpg";
// import mission2 from "../../assets/mission2.jpg";
// import mission3 from "../../assets/mission3.jpg";
// import { Card } from "flowbite-react";

// const AboutUs = () => {
//   return (
//     <div>
//       {/* الخلفية */}
//       <div
//         className="relative flex items-center justify-start h-screen bg-cover bg-center"
//         style={{ backgroundImage: `url(${aboutBg})` }}
//       >
//         <div className="absolute inset-0 bg-black bg-opacity-50"></div>
//         <div className="relative z-10 pl-28">
//           <h1 className="text-white text-4xl font-bold">About Us</h1>
//         </div>
//       </div>

//       {/* سكشن 2 */}
//       <div className="flex flex-col md:flex-row items-center justify-center gap-10 p-10 bg-gray-900 text-white">
//         {/* الصور على اليسار */}
//         <div className="grid grid-cols-2 gap-4">
//           <img src={mission1} alt="Mission 1" className="rounded-lg w-40 h-60 object-cover" />
//           <img src={mission2} alt="Mission 2" className="rounded-lg w-40 h-60 object-cover" />
//           <div className="col-span-2 flex justify-center">
//             <img src={mission3} alt="Mission 3" className="rounded-lg w-40 h-40 object-cover" />
//           </div>
//         </div>

//         {/* النص على اليمين */}
//         <Card className="bg-gray-800 text-white p-6 w-full md:w-1/2 shadow-lg">
//           <h2 className="text-2xl font-bold mb-4">Mission Statement:</h2>
//           <p>
//             "Our mission is to provide a comprehensive platform that helps individuals improve their fitness by offering 
//             personalized training plans, healthy nutrition tips, and the best exercises to achieve their health goals."
//           </p>
//         </Card>
//       </div>
//     </div>
//   );
// };

// export default AboutUs;

import aboutBg from "../../assets/about-bg.jpg";
import mission1 from "../../assets/mission1.jpg";
import mission2 from "../../assets/mission2.jpg";
import mission3 from "../../assets/mission3.jpg";
import { Card } from "flowbite-react";

const AboutUs = () => {
  return (
    <div>
      {/* الخلفية */}
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
        {/* الصور على الشمال */}
        <div className="grid grid-cols-2 gap-4">
          <img src={mission1} alt="Mission 1" className="rounded-lg w-48 h-64 object-cover" />
          <img src={mission2} alt="Mission 2" className="rounded-lg w-48 h-64 object-cover" />
          <div className="col-span-2 flex justify-center">
            <img src={mission3} alt="Mission 3" className="rounded-lg w-64 h-48 object-cover" />
          </div>
        </div>

        {/* النص على اليمين */}
        <Card className="bg-[#292929] text-white p-10 w-full md:w-[35%] h-96 shadow-lg ml-10 mr-44">
          <h2 className="text-3xl font-bold mb-10">Mission Statement:</h2>
          <p className="text-gray-300">
            "Our mission is to provide a comprehensive platform that helps individuals improve their fitness by offering 
            personalized training plans, healthy nutrition tips, and the best exercises to achieve their health goals."
          </p>
        </Card>
      </div>
    </div>
  );
};

export default AboutUs;
