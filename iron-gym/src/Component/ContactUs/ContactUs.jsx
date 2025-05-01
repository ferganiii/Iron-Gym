

import { FaTwitter } from 'react-icons/fa';
import { FaWhatsapp } from 'react-icons/fa';
import { Mail, Phone, MapPin } from "lucide-react";
import { FaFacebook } from "react-icons/fa";
import { useState } from "react";
import { motion } from "framer-motion";
import cnt from "../../assets/cnt.jpg";
import Questions from '../Questions/Questions.jsx';
import Challenges from '../Challenges/Challenges.jsx';
import { Link } from "react-router-dom";

export default function ContactUs() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [showFAQ, setShowFAQ] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const sendToEmail = (e) => {
    e.preventDefault();
    const { name, email, subject, message } = formData;
    const recipientEmail = "memoasker2003@gmail.com";
    const emailBody = `Hello,\n\nName: ${name}\nEmail: ${email}\nSubject: ${subject}\nMessage:\n${message}`;
    const mailtoLink = `mailto:${recipientEmail}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(emailBody)}`;

    window.location.href = mailtoLink;

    setFormData({
      name: "",
      email: "",
      subject: "",
      message: "",
    });
  };

  return (
    <div
      className="flex flex-col items-center justify-center min-h-screen p-6 bg-cover bg-center"
      style={{ backgroundImage: `url(${cnt})` }}
    >
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="w-full max-w-7xl shadow-lg p-20 mb-10 bg-black border-4 border-gray-700 rounded-lg"
      >
        {/* Contact Form and Contact Information */}
        <h2 className="text-5xl font-extrabold text-center mb-6 text-orange-600">Contact Us</h2>
        <motion.p
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-center text-gray-100 font-bold mb-20"
        >
          "Feel free to reach out to us for any inquiries or support. We are here to provide full assistance and answer all your questions at any time. Whether you need help choosing services or have any other questions, we are always ready to assist you."
        </motion.p>

        <div className="flex flex-col md:flex-row gap-8">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
            className="w-full md:w-1/2"
          >
            <form className="space-y-4" onSubmit={sendToEmail}>
              <input
                type="text"
                name="name"
                placeholder="Your Name"
                value={formData.name}
                onChange={handleChange}
                className="w-full p-2 border-none rounded-md bg-black text-white focus:ring-2 focus:ring-orange-600"
                required
              />
              <input
                type="email"
                name="email"
                placeholder="Your Email"
                value={formData.email}
                onChange={handleChange}
                className="w-full p-2 border-none rounded-md bg-black text-white focus:ring-2 focus:ring-orange-600"
                required
              />
              <input
                type="text"
                name="subject"
                placeholder="Subject"
                value={formData.subject}
                onChange={handleChange}
                className="w-full p-2 border-none rounded-md bg-black text-white focus:ring-2 focus:ring-orange-600"
                required
              />
              <textarea
                name="message"
                placeholder="Your Message"
                value={formData.message}
                onChange={handleChange}
                className="w-full p-2 border-none rounded-md bg-black text-white focus:ring-2 focus:ring-orange-600"
                rows={4}
                required
              />
              <button
                type="submit"
                className="w-full bg-orange-600 hover:bg-orange-700 text-black font-bold py-2 rounded-md transition-all duration-300 transform hover:scale-105 shadow-md hover:shadow-lg"
              >
                Send Message
              </button>
              <div className='m'>
                             
              <Link to="/Questions" className=' text-xl '> common questions about our services >></Link>                
              </div>
                             

            </form>
          </motion.div>

          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
            className="w-full md:w-1/2"
          >
            <div className="flex flex-col space-y-10">
              <div className="flex items-center gap-2 text-white">
                <Mail className="text-orange-600" />
                <span>contact@irongym.com</span>
              </div>
              <div className="flex items-center gap-2 text-white">
                <Phone className="text-orange-600" />
                <span>+01044724761</span>
              </div>
              <div className="flex items-center gap-2 text-white">
                <MapPin className="text-orange-600" />
                <span>123 Iron Street, Damanhour, Egypt</span>
              </div>
              <div className="flex items-center gap-4 text-white">
                <FaFacebook className="text-orange-600" />
                <span>IRON-GYM Official Community</span>
              </div>

              <br />
              <br />
              <div className="grid grid-cols-5 place-items-start">
                <Link
                  to="https://www.facebook.com/share/g/12BzL5xEDqV/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaFacebook className="text-blue-600 hover:text-blue-700 w-10 h-10" />
                </Link>
                <Link
                  to="https://wa.me/201044724761"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaWhatsapp className="text-green-500 hover:text-green-600 w-10 h-10" />
                </Link>
                <Link
                  to="https://x.com/mohamed72217275?t=KlM3cQeCp5lDSBGLInbfIQ&s=09"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaTwitter className="text-blue-400 hover:text-blue-500 w-10 h-10" />
                </Link>

              </div>
            </div>
          </motion.div>
        </div>
        
      </motion.div>

      
     

       


      {/* Newsletter */}
      <motion.div
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="w-full max-w-7xl shadow-lg p-6 mb-10 bg-black border-4 border-gray-700 rounded-lg"
      >
        <h3 className="text-4xl font-extrabold text-center mb-6 text-orange-600">Stay Updated</h3>
        <p className="text-center font-semibold text-gray-200 mb-6">Subscribe to our newsletter for the latest fitness tips, promotions, and updates!</p>
        <form className="flex justify-center gap-10">
          <input
            type="email"
            placeholder="Your email"
            className="p-4 pl-12 w-full border border-gray-700 rounded-md bg-black text-white focus:ring-2 focus:ring-orange-600 focus:outline-none hover:border-orange-600 transition duration-300 ease-in-out shadow-md placeholder:text-gray-500"
            onFocus={(e) => e.target.placeholder = "Enter your email..."}
            onBlur={(e) => e.target.placeholder = "Your email"}
          />
          <svg className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 10l7 7 7-7"></path></svg>
          <button className="bg-orange-600 hover:bg-orange-700 text-black font-bold py-2 px-6 rounded-md transition-all duration-300 transform hover:scale-105 shadow-md">
            Subscribe 
          </button>
       
          
        </form>
      </motion.div>


      
   

      {/* Blog Section */}
      <motion.div
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="w-full max-w-7xl shadow-lg p-6 mb-10 bg-black border-4 border-gray-700 rounded-lg"
      >
        <h3 className="text-4xl font-extrabold text-center mb-6 text-orange-600">Fitness Blog</h3>
        <p className="text-center font-semibold text-gray-200 mb-6">
          Stay informed with the latest tips and articles on nutrition, workouts, health advice, and updates in the fitness world!
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-[rgb(102,102,102,.3)] p-4 rounded-lg shadow-md hover:bg-[rgb(102,102,102,.6)] hover:scale-105 transition-all duration-300">
            <h4 className="text-2xl font-bold text-white mb-4">Nutrition Tips for Building Muscle</h4>
            <p className="text-gray-200 font-semibold">
              Learn about the best nutrition strategies to fuel muscle growth, including protein intake and meal timing.
            </p>
            <Link to="/pdf/Nutrition Tips.pdf" open>
              <button className="mt-4 bg-orange-600 hover:bg-orange-700 text-black font-bold py-2 px-4 rounded-md transition-all duration-300 transform hover:scale-105">
                Read Article
              </button>
            </Link>
          </div>
          <div className="bg-[rgb(102,102,102,.3)] p-4 rounded-lg shadow-md hover:bg-[rgb(102,102,102,.6)] hover:scale-105 transition-all duration-300">
            <h4 className="text-2xl font-bold text-white mb-4">5 Essential Cardio Exercises</h4>
            <p className="text-gray-200 font-semibold">
              Discover the top cardio exercises for fat loss and improving cardiovascular health, with tips on how to incorporate them into your routine.
            </p>
            <a to="/pdf/Cardio Exercises.pdf" download>
              <button className="mt-4 bg-orange-600 hover:bg-orange-700 text-black font-bold py-2 px-4 rounded-md transition-all duration-300 transform hover:scale-105">
                Read Article
              </button>
            </a>
          </div>
        </div>
      </motion.div>


    </div>
  );
}

