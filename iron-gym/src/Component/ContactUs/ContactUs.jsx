import { FaTwitter, FaWhatsapp, FaFacebook } from 'react-icons/fa';
import { Mail, Phone, MapPin } from "lucide-react";
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
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);
  const [newsletterEmail, setNewsletterEmail] = useState("");

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const validateEmail = (email) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

  const sendToEmail = async (e) => {
    e.preventDefault();
    
    if (!validateEmail(formData.email)) {
      setSubmitStatus({ type: 'error', message: 'Please enter a valid email address' });
      return;
    }

    setIsSubmitting(true);
    setSubmitStatus(null);

    try {
      const { name, email, subject, message } = formData;
      const recipientEmail = "memoasker2003@gmail.com";
      const emailBody = `Hello,\n\nName: ${name}\nEmail: ${email}\nSubject: ${subject}\nMessage:\n${message}`;
      const mailtoLink = `mailto:${recipientEmail}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(emailBody)}`;
      window.location.href = mailtoLink;

      setFormData({ name: "", email: "", subject: "", message: "" });
      setSubmitStatus({ type: 'success', message: 'Message sent successfully!' });
    } catch (error) {
      setSubmitStatus({ type: 'error', message: 'Failed to send message. Please try again.' });
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleNewsletterSubmit = (e) => {
    e.preventDefault();
    if (validateEmail(newsletterEmail)) {
      setNewsletterEmail("");
      alert("Thank you for subscribing to our newsletter!");
    } else {
      alert("Please enter a valid email address");
    }
  };

  return (
    <div
      className="flex flex-col items-center justify-center min-h-screen p-6 bg-cover bg-center bg-fixed"
      style={{ backgroundImage: `url(${cnt})` }}
    >
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="w-full max-w-7xl shadow-lg p-20 mb-10 bg-black/90 border-4 border-gray-700 rounded-lg backdrop-blur-sm"
      >
        <h2 className="text-5xl font-extrabold text-center mb-6 text-orange-600">Contact Us</h2>
        <motion.p
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-center text-gray-100 font-bold mb-20"
        >
          "Feel free to reach out to us for any inquiries or support..."
        </motion.p>

        <div className="flex flex-col md:flex-row gap-8">
          {/* Form Section */}
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
                className="w-full p-3 border border-gray-700 rounded-md bg-black/50 text-white focus:ring-2 focus:ring-orange-600 transition-all duration-300"
                required
              />
              <input
                type="email"
                name="email"
                placeholder="Your Email"
                value={formData.email}
                onChange={handleChange}
                className="w-full p-3 border border-gray-700 rounded-md bg-black/50 text-white focus:ring-2 focus:ring-orange-600 transition-all duration-300"
                required
              />
              <input
                type="text"
                name="subject"
                placeholder="Subject"
                value={formData.subject}
                onChange={handleChange}
                className="w-full p-3 border border-gray-700 rounded-md bg-black/50 text-white focus:ring-2 focus:ring-orange-600 transition-all duration-300"
                required
              />
              <textarea
                name="message"
                placeholder="Your Message"
                value={formData.message}
                onChange={handleChange}
                className="w-full p-3 border border-gray-700 rounded-md bg-black/50 text-white focus:ring-2 focus:ring-orange-600 transition-all duration-300"
                rows={4}
                required
              />
              {submitStatus && (
                <div className={`p-3 rounded-md ${submitStatus.type === 'success' ? 'bg-green-500/20 text-green-400' : 'bg-red-500/20 text-red-400'}`}>
                  {submitStatus.message}
                </div>
              )}
              <button
                type="submit"
                disabled={isSubmitting}
                className={`w-full bg-orange-600 hover:bg-orange-700 text-black font-bold py-3 rounded-md transition-all duration-300 transform hover:scale-105 shadow-md hover:shadow-lg ${isSubmitting ? 'opacity-50 cursor-not-allowed' : ''}`}
              >
                {isSubmitting ? 'Sending...' : 'Send Message'}
              </button>
              <div className='mt-4'>
                <Link to="/Questions" className='text-xl'>common questions about our services &gt;&gt;</Link>
              </div>
            </form>
          </motion.div>

          {/* Contact Info Section */}
          <motion.div
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
            className="w-full md:w-1/2"
          >
            <div className="flex flex-col space-y-10">
              <div className="flex items-center gap-2 text-white hover:text-orange-600 transition-colors duration-300">
                <Mail className="text-orange-600" />
                <a href="mailto:contact@irongym.com" className="hover:underline">contact@irongym.com</a>
              </div>
              <div className="flex items-center gap-2 text-white hover:text-orange-600 transition-colors duration-300">
                <Phone className="text-orange-600" />
                <a href="tel:+01044724761" className="hover:underline">+01044724761</a>
              </div>
              <div className="flex items-center gap-2 text-white">
                <MapPin className="text-orange-600" />
                <span>123 Iron Street, Damanhour, Egypt</span>
              </div>
              <div className="flex items-center gap-4 text-white">
                <FaFacebook className="text-orange-600" />
                <span>IRON-GYM Official Community</span>
              </div>

              <div className="grid grid-cols-3 gap-6 mt-8">
                <a
                  href="https://www.facebook.com/share/g/12BzL5xEDqV/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center p-4 bg-black/50 rounded-lg hover:bg-orange-600/20 transition-all duration-300 transform hover:scale-105"
                >
                  <FaFacebook className="text-blue-600 hover:text-blue-700 w-8 h-8" />
                </a>
                <a
                  href="https://wa.me/201044724761"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center p-4 bg-black/50 rounded-lg hover:bg-orange-600/20 transition-all duration-300 transform hover:scale-105"
                >
                  <FaWhatsapp className="text-green-500 hover:text-green-600 w-8 h-8" />
                </a>
                <a
                  href="https://x.com/mohamed72217275?t=KlM3cQeCp5lDSBGLInbfIQ&s=09"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center p-4 bg-black/50 rounded-lg hover:bg-orange-600/20 transition-all duration-300 transform hover:scale-105"
                >
                  <FaTwitter className="text-blue-400 hover:text-blue-500 w-8 h-8" />
                </a>
              </div>
            </div>
          </motion.div>
        </div>
      </motion.div>

      
     

       


      {/* Newsletter */}
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
            <Link to="/pdf/Nutrition Tips.pdf">
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
            <Link to="/pdf/Cardio Exercises.pdf">
              <button className="mt-4 bg-orange-600 hover:bg-orange-700 text-black font-bold py-2 px-4 rounded-md transition-all duration-300 transform hover:scale-105">
                Read Article
              </button>
            </Link>
          </div>
        </div>
      </motion.div>



    </div>
  );
}
