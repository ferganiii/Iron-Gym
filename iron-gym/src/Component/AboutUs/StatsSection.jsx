import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import CountUp from "react-countup";
import { FaUsers, FaClipboardList, FaDumbbell, FaMedal } from "react-icons/fa";

const StatsSection = () => {
  const [stats, setStats] = useState([
    {
      icon: <FaUsers className="text-4xl md:text-5xl text-orange-600" />,
      count: 0,
      title: "Active Members",
      description: "Joined our fitness community",
    },
    {
      icon: <FaClipboardList className="text-4xl md:text-5xl text-orange-600" />,
      count: 0,
      title: "Workout Plans",
      description: "Personalized training programs",
    },
    {
      icon: <FaDumbbell className="text-4xl md:text-5xl text-orange-600" />,
      count: 0,
      title: "Exercise Guides",
      description: "Detailed exercise instructions",
    },
    {
      icon: <FaMedal className="text-4xl md:text-5xl text-orange-600" />,
      count: 0,
      title: "Success Rate",
      suffix: "%",
      description: "Members achieving their goals",
    },
  ]);

  useEffect(() => {
    const generateRandomStats = () => {
      setStats((prevStats) =>
        prevStats.map((stat) => ({
          ...stat,
          count: Math.floor(Math.random() * 10000) + 500,
        }))
      );
    };

    generateRandomStats(); 
  }, []); 

  const fadeInUp = {
    hidden: { opacity: 0, y: 40 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: "easeOut" },
    },
  };

  return (
    <section id="stats-section" className="py-16 md:py-24 bg-[#1e1e1e] text-white">
      <div className="container mx-auto px-4 sm:px-10 md:px-16 lg:px-20">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1 }}
          className="text-center mb-12 md:mb-16"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-orange-600 mb-10">
            Our Impact in Numbers
          </h2>
          <motion.div
            initial={{ width: "0%" }}
            whileInView={{ width: "29%" }}
            transition={{ duration: 1, delay: 0.5 }}
            className="h-1 bg-white mx-auto rounded-full mb-6"
          />
          <p className="text-lg text-gray-300 max-w-2xl mx-auto">
            We're proud of what we've accomplished together with our community of fitness enthusiasts
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-6">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              variants={fadeInUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              transition={{ delay: index * 0.2 }}
              whileHover={{
                scale: 1.05,
                boxShadow: "0 10px 25px -5px rgba(234, 88, 12, 0.3)",
                transition: { duration: 0.3 },
              }}
              className="bg-[rgb(102,102,102,.3)] rounded-2xl p-6 md:p-8 text-center flex flex-col items-center justify-center shadow-lg border border-gray-800 hover:border-orange-600/30 transition-all duration-300"
            >
              <div className="mb-4">{stat.icon}</div>
              <h3 className="text-3xl md:text-4xl font-bold mb-2 text-white">
                <CountUp
                  end={stat.count}
                  duration={2.5}
                  suffix={stat.suffix || ""}
                  separator=","
                />
              </h3>
              <h4 className="text-xl font-semibold text-orange-500 mb-2">{stat.title}</h4>
              <p className="text-gray-400">{stat.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StatsSection;
