import aboutBg from "../../assets/about-bg.jpg";
import mission1 from "../../assets/mission1.jpg";
import mission2 from "../../assets/mission2.jpg";
import mission3 from "../../assets/mission3.jpg";
import visionBg from "../../assets/vision-bg.jpg";
import sec4Bg from "../../assets/sec4-bg.jpg";
import { Card } from "flowbite-react";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { Link } from 'react-router-dom';
import StatsSection from "./StatsSection";

const AboutUs = () => {
  const [isMobile, setIsMobile] = useState(false);
  const [isTablet, setIsTablet] = useState(false);

  useEffect(() => {
    const checkScreenSize = () => {
      setIsMobile(window.innerWidth < 768);
      setIsTablet(window.innerWidth >= 768 && window.innerWidth < 1024);
    };

    checkScreenSize();

    window.addEventListener('resize', checkScreenSize);

    return () => {
      window.removeEventListener('resize', checkScreenSize);
    };
  }, []);

  const fadeInUp = {
    hidden: { opacity: 0, y: 40 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: "easeOut" }
    }
  };

  const useScrollAnimation = (direction = "up") => {
    return {
      initial: "hidden",
      whileInView: "visible",
      viewport: { once: true, amount: 0.2 },
      variants: direction === "up" ? fadeInUp : {}
    };
  };

  return (
    <>
      <section className="bg-[#1e1e1e] overflow-hidden">
        <div
          className="relative flex items-center justify-start h-[80vh] sm:h-[50vh] md:h-[90vh] bg-cover bg-center"
          style={{ backgroundImage: `url(${aboutBg})` }}
        >
          <motion.div
            initial={{ scale: 1.1 }}
            animate={{ scale: 1 }}
            transition={{ duration: 1.5, ease: "easeOut" }}
            className="absolute inset-0 bg-black bg-opacity-50"
          ></motion.div>

          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1.2, ease: "easeOut", delay: 0.3 }}
            className="relative z-10 px-6 sm:pl-10 md:pl-28"
          >
            <h1 className="text-white text-3xl sm:text-4xl md:text-6xl font-bold">
              About Us
            </h1>
            <motion.div
              initial={{ width: "0%" }}
              animate={{ width: "100%" }}
              transition={{ duration: 2, delay: 0.8 }}
              className="h-1 bg-orange-600 mt-3 rounded-full"
            />
          </motion.div>
        </div>

        <div className="container mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-12 md:gap-20 lg:gap-28 px-4 sm:px-10 md:px-16 lg:px-20 py-16 bg-[#1e1e1e] text-white">
            <motion.div
              {...useScrollAnimation()}
              className="grid grid-cols-2 gap-3 sm:gap-4 items-center md:ml-0 lg:ml-20 order-2 md:order-1"
            >
              <motion.img
                whileHover={{ scale: 1.05, y: -10, transition: { duration: 0.2 } }}
                src={mission1}
                alt="Iron Gym member performing a workout exercise"
                loading="lazy"
                className="rounded-2xl sm:rounded-[30px] md:rounded-[40px] w-full h-[250px] sm:h-[350px] md:h-[400px] lg:h-[600px] object-cover transition-all duration-300"
              />
              <div className="flex flex-col gap-3 sm:gap-4">
                <motion.img
                  whileHover={{ scale: 1.05, y: -10, transition: { duration: 0.2 } }}
                  src={mission2}
                  alt="Iron Gym fitness equipment and training area"
                  loading="lazy"
                  className="rounded-2xl sm:rounded-[30px] md:rounded-[40px] w-full h-[180px] sm:h-[250px] md:h-[280px] lg:h-[415px] object-cover transition-all duration-300"
                />
                <motion.img
                  whileHover={{ scale: 1.05, y: -10, transition: { duration: 0.2 } }}
                  src={mission3}
                  alt="Iron Gym professional trainers"
                  loading="lazy"
                  className="rounded-2xl sm:rounded-[30px] md:rounded-[40px] w-full h-[60px] sm:h-[90px] md:h-[110px] lg:h-[170px] object-cover transition-all duration-300"
                />
              </div>
            </motion.div>

            <motion.div
              {...useScrollAnimation()}
              className="order-1 md:order-2"
            >
              <Card className="break-words text-center dark:bg-[rgb(102,102,102,.3)] text-white p-4 sm:p-6 md:p-10 h-auto min-h-[300px] sm:min-h-[400px] md:min-h-[600px] shadow-lg rounded-2xl sm:rounded-[30px] md:rounded-[40px] border-none hover:shadow-2xl transition-all duration-500">
                <motion.div
                  whileHover={{ scale: 1.02, transition: { duration: 0.3 } }}
                >
                  <motion.h2
                    className="text-3xl text-orange-600 sm:text-2xl md:text-3xl lg:text-4xl font-extrabold mb-4 sm:mb-6 md:mb-10"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ delay: 0.3, duration: 0.8 }}
                  >
                    Mission Statement :
                  </motion.h2>
                  <motion.p
                    className="text-gray-200 font-semibold text-sm sm:text-md md:text-lg break-words"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ delay: 0.6, duration: 0.8 }}
                  >
                    Our mission is to provide a comprehensive platform that helps individuals improve their fitness by offering personalized training plans, healthy nutrition tips, and the best exercises to achieve their health goals.
                    We aim to empower people of all fitness levels from beginners to advanced athletes by delivering reliable information, motivating content, and easy-to-follow programs tailored to their unique needs and preferences. Through expert guidance, user-friendly tools, continuous updates, and a supportive community, we strive to make the journey toward a healthier lifestyle more accessible, enjoyable, and sustainable for everyone, anytime and anywhere." <br /> <br /> <span className="text-2xl text-orange-500 font-extrabold">"Stronger Together, Healthier"</span>
                  </motion.p>
                </motion.div>
              </Card>
            </motion.div>
          </div>
          <StatsSection />
          <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-10 md:gap-20 px-4 sm:px-10 md:px-16 lg:px-20 py-16 pb-6 bg-[#1e1e1e] text-white">
            <motion.div
              {...useScrollAnimation()}
              className="flex flex-col gap-4 sm:gap-6 w-full"
            >
              <motion.div
                whileHover={{ scale: 1.03, y: -5, transition: { duration: 0.3 } }}
                className="h-full"
              >
                <Card className="dark:bg-[rgb(102,102,102,.3)] p-4 sm:p-6 shadow-lg w-full h-auto min-h-[175px] sm:min-h-[200px] md:min-h-[225px] rounded-2xl sm:rounded-[30px] md:rounded-[40px] border-none transition-all duration-300">
                  <h2 className="text-2xl text-orange-600 font-extrabold sm:text-xl md:text-2xl lg:text-3xl  text-wrap balance">Our Vision :</h2>
                  <p className="text-white-200 text-base font-semibold sm:text-md md:text-lg leading-relaxed mt-2">
                    Our vision is to become the leading source for individuals seeking to enhance their physical and mental health through proper training and balanced nutrition.
                  </p>
                </Card>
              </motion.div>

              <motion.div
                whileHover={{ scale: 1.03, y: -5, transition: { duration: 0.3 } }}
                className="h-full"
              >
                <Card className="dark:bg-[rgb(102,102,102,.3)]  p-4 sm:p-6 shadow-lg w-full h-auto min-h-[175px] sm:min-h-[200px] md:min-h-[225px] rounded-2xl sm:rounded-[30px] md:rounded-[40px] border-none transition-all duration-300">
                  <h2 className="text-2xl text-orange-600 font-extrabold sm:text-xl md:text-2xl lg:text-3xl text-wrap balance">What Makes Us Unique :</h2>
                  <p className="text-white-200 text-base font-semibold sm:text-md md:text-lg leading-relaxed mt-2">
                    We offer comprehensive information on nutrition, workouts, and cardio. With regular updates and future development, we stand out as your go-to fitness hub.
                  </p>
                </Card>
              </motion.div>

              <motion.div
                whileHover={{ scale: 1.03, y: -5, transition: { duration: 0.3 } }}
                className="h-full"
              >
                <Card className="dark:bg-[rgb(102,102,102,.3)]  p-4 sm:p-6 shadow-lg w-full h-auto min-h-[175px] sm:min-h-[200px] md:min-h-[225px] rounded-2xl sm:rounded-[30px] md:rounded-[40px] border-none transition-all duration-300">
                  <h2 className="text-2xl text-orange-600 font-extrabold sm:text-xl md:text-2xl lg:text-3xl text-wrap balance">Call to Action :</h2>
                  <div className="text-white-200 text-base font-semibold sm:text-md md:text-lg leading-relaxed mt-2">
                    <p className="mb-3">Join us now to achieve your fitness goals, gain expert advice, and become the healthiest, strongest version of yourself!</p>
                    <motion.button
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="bg-orange-600 text-[#1e1e1e] px-5 py-2 rounded-full font-semibold mt-2 transition-colors duration-300 hover:bg-white"
                    >
                      <Link to="/ContactUs">Get Started</Link>
                    </motion.button>
                  </div>
                </Card>
              </motion.div>
            </motion.div>

            <motion.div
              {...useScrollAnimation()}
              className="mt-4 md:mt-0"
            >
              <div
                className="relative w-full h-auto min-h-[400px] sm:min-h-[450px] md:min-h-[550px] lg:min-h-[790px] bg-cover bg-center rounded-2xl sm:rounded-[30px] md:rounded-[40px] overflow-hidden"
                style={{ backgroundImage: `url(${visionBg})` }}
              >
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ duration: 1 }}
                  className="absolute inset-0 bg-black bg-opacity-30 backdrop-blur-sm hover:bg-opacity-50 transition-all duration-500"
                ></motion.div>
                <motion.div
                  initial={{ y: 50, opacity: 0 }}
                  whileInView={{ y: 0, opacity: 1 }}
                  transition={{ duration: 0.8, delay: 0.3 }}
                  className="relative z-10 text-white text-center p-6 sm:p-8 md:p-10 flex flex-col justify-center items-center h-full"
                >
                  <h2 className="text-2xl text-orange-600 font-bold sm:text-3xl md:text-4xl lg:text-5xl text-wrap balance leading-tight">
                    Transform Your Body, Elevate Your Life.
                  </h2>
                  <motion.div
                    initial={{ width: "0%" }}
                    whileInView={{ width: "60%" }}
                    transition={{ duration: 1, delay: 0.8 }}
                    className="h-1 bg-white mt-4 mb-6 rounded-full"
                  />
                  <p className="text-white-300 text-sm font-bold sm:text-md md:text-lg lg:text-xl leading-relaxed mt-4 sm:mt-8 md:mt-12 max-w-[95%] sm:max-w-[90%] md:max-w-[80%] mx-auto">
                    Transform Your Body, Elevate Your Life, and Unlock Your True Potential.
                    Embark on a transformative journey towards a healthier and stronger version of yourself. With our expert guidance, personalized workout plans tailored to your unique needs, and balanced nutrition strategies, you'll achieve your fitness goals faster and more effectively. Whether you're aiming to build strength, lose weight, or enhance your overall well-being, we're here to support you every step of the way. Our platform provides all the tools and resources you need to stay motivated, focused, and on track, helping you reach new heights in your fitness journey and beyond.
                  </p>
                  <Link to="/Exercise">
                    <motion.button
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="bg-orange-600 text-[#1e1e1e] px-6 py-3 rounded-full font-semibold mt-8 sm:mt-10 transition-colors duration-300 hover:bg-gray-200"
                    >
                      Learn More
                    </motion.button>
                  </Link>
                </motion.div>
              </div>
            </motion.div>

          </div>
        </div>

        <div
          className="relative h-[300px] sm:h-[400px] md:h-[500px] bg-cover bg-center"
          style={{
            backgroundImage: `linear-gradient(to bottom, rgba(30,30,30,0.7), rgba(30,30,30,1)), url(${sec4Bg})`,
          }}
          aria-label="Background section with gradient overlay"
        >
          <div className="absolute inset-0 bg-black bg-opacity-30 backdrop-blur-sm"></div>
          <div className="relative z-10 h-full flex flex-col justify-center items-center text-white text-center px-4">
            <motion.h2
              {...useScrollAnimation()}
              className="text-3xl font-extrabold text-orange-600 sm:text-3xl md:text-4xl mb-10"
            >
              Join Our Fitness Community
            </motion.h2>

        
            <motion.p
              {...useScrollAnimation()}
              className="text-sm sm:text-md md:text-lg max-w-xl mb-8"
            >
              Connect with like minded individuals and get access to premium content, expert advice, and exclusive offers.
            </motion.p>
            <motion.div
              {...useScrollAnimation()}
              className="flex flex-col sm:flex-row gap-4 sm:gap-6"
            >
              <motion.input
                whileFocus={{ scale: 1.02 }}
                type="email"
                placeholder="Enter your email"
                className="px-6 py-3 rounded-full bg-white bg-opacity-20 backdrop-filter backdrop-blur-md text-white placeholder:text-gray-300 border border-white border-opacity-30 focus:outline-none focus:ring-2 focus:ring-white focus:ring-opacity-50 w-full sm:w-64 md:w-80"
              />
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-orange-600 text-[#1e1e1e] px-6 py-3 rounded-full font-semibold transition-colors duration-300 hover:bg-gray-200"
              >
                Subscribe Now
              </motion.button>
            </motion.div>
          </div>
        </div>
      </section>
    </>
  );
};
export default AboutUs;