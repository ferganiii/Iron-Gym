import aboutBg from "../../assets/about-bg.jpg";
import mission1 from "../../assets/mission1.jpg";
import mission2 from "../../assets/mission2.jpg";
import mission3 from "../../assets/mission3.jpg";
import visionBg from "../../assets/vision-bg.jpg";
import sec4Bg from "../../assets/sec4-bg.jpg";
import { Card } from "flowbite-react";

const AboutUs = () => {
  return (
    <div>
      {/* الخلفية الأساسية */}
      <div
        className="relative flex items-center justify-start h-screen bg-cover bg-center"
        style={{ backgroundImage: `url(${aboutBg})` }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-50 "></div>
        <div className="relative z-10 pl-10 md:pl-28">
          <h1 className="text-white text-4xl font-bold">About Us</h1>
        </div>
      </div>

      {/* سكشن 2 */}
      <div className="flex flex-col md:flex-row items-center justify-between gap-10 px-10 md:px-20 py-16 bg-[#1e1e1e] text-white">
        <div className="grid grid-cols-2 gap-4 items-center md:ml-20">
          <img
            src={mission1}
            alt="Mission 1"
            className="rounded-[40px] w-[250px] h-[500px] object-cover hover:scale-110 hover:-translate-y-2 transition"
          />
          <div className="flex flex-col gap-4">
            <img
              src={mission2}
              alt="Mission 2"
              className="rounded-[40px] w-[200px] h-[360px] object-cover hover:scale-110 hover:-translate-y-2 transition"
            />
            <img
              src={mission3}
              alt="Mission 3"
              className="rounded-[40px] w-[200px] h-[120px] object-cover hover:scale-110 hover:-translate-y-2 transition"
            />
          </div>
        </div>

        <Card className="bg-[#292929] text-white p-10 w-full md:w-[30%] h-[500px] shadow-lg ml-0 md:ml-16 rounded-[40px] border-none hover:shadow-2xl hover:scale-105 hover:-translate-y-2 transition mr-32">
          <h2 className="text-4xl font-bold mb-10">Mission Statement:</h2>
          <p className="text-white-300 text-lg">
            "Our mission is to provide a comprehensive platform that helps individuals improve their fitness by offering personalized training plans, healthy nutrition tips, and the best exercises to achieve their health goals."
          </p>
        </Card>
      </div>

      {/* سكشن 3 */}
      <div className="flex flex-col md:flex-row items-center justify-between gap-10 px-10 md:px-20 py-16 bg-[#1e1e1e] text-white">
        <div className="flex flex-col gap-6 w-full md:w-[30%] md:ml-20">
          <Card className="bg-[#292929] text-white p-6 shadow-lg w-full md:w-[480px] h-[225px] rounded-[40px] border-none hover:shadow-2xl hover:scale-105 hover:-translate-y-2 transition">
            <h2 className="text-3xl font-bold">Our Vision:</h2>
            <p className="text-white-300 text-lg mt-2">
              Our vision is to become the leading source for individuals seeking to enhance their physical and mental health through proper training and balanced nutrition.
            </p>
          </Card>
          <Card className="bg-[#3a3327] text-white p-6 shadow-lg w-full md:w-[480px] h-[225px] rounded-[40px] border-none hover:shadow-2xl hover:scale-105 hover:-translate-y-2 transition">
            <h2 className="text-3xl font-bold">What Makes Us Unique:</h2>
            <p className="text-white-300 text-lg mt-2">
              We offer comprehensive information on nutrition, workouts, and cardio. With regular updates and future development, we stand out as your go-to fitness hub.
            </p>
          </Card>
          <Card className="bg-[#292929] text-white p-6 shadow-lg w-full md:w-[480px] h-[225px] rounded-[40px] border-none hover:shadow-2xl hover:scale-105 hover:-translate-y-2 transition">
            <h2 className="text-3xl font-bold">Call to Action:</h2>
            <p className="text-white-300 text-lg mt-2">
              Join us now to achieve your fitness goals and gain expert advice!
            </p>
          </Card>
        </div>

        {/* الكارت الكبير على اليمين */}
        <div
          className="relative w-full md:w-[600px] h-[690px] bg-cover bg-center rounded-lg flex items-center p-10 md:mr-20 hover:scale-105 hover:-translate-y-2 transition"
          style={{ backgroundImage: `url(${visionBg})` }}
        >
          <div className="absolute inset-0 bg-black bg-opacity-30 backdrop-blur-sm rounded-lg hover:bg-opacity-50 transition"></div>
          <div className="relative z-10 text-white">
            <h2 className="text-5xl font-bold">Transform Your Body, Elevate Your Life.</h2>
            <p className="text-white-300 text-xl mt-20 mb-24">
              Achieve your fitness goals with expert guidance, personalized workout plans, and balanced nutrition.
            </p>
          </div>
        </div>
      </div>

      {/* الخلفية  بعد السكشن 3 */}
      <div
        className="relative h-[500px] bg-cover bg-center"
        style={{
          backgroundImage: `linear-gradient(to bottom, rgba(30,30,30,0.7), rgba(30,30,30,1)), url(${sec4Bg})`,
        }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-30 backdrop-blur-sm "></div>
      </div>
    </div>
  );
};

export default AboutUs;
