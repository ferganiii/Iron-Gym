import { Card } from "flowbite-react";
import { Mail, Phone, MapPin } from "lucide-react";
import { FaFacebook, FaTwitter, FaWhatsapp } from "react-icons/fa";
import { useState } from "react";
import cnt from "../../assets/cnt.jpg";

export default function ContactUs() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const sendToEmail = (e) => {
    e.preventDefault();

    const { name, email, subject, message } = formData;
    const recipientEmail = "memoasker2003@gmail.com"; // ✉️ حط جيميلك هنا

    const emailBody = `Hello,\n\nName: ${name}\nEmail: ${email}\nSubject: ${subject}\nMessage:\n${message}`;
    const mailtoLink = `mailto:${recipientEmail}?subject=${encodeURIComponent(
      subject
    )}&body=${encodeURIComponent(emailBody)}`;

    window.location.href = mailtoLink;

    // تفريغ الفورم بعد الإرسال
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
      <Card className="w-full max-w-3xl shadow-lg p-6 bg-black bg-opacity-80 border border-gray-700">
        <h2 className="text-4xl font-extrabold text-center mb-4 text-orange-600">
          Contact Us
        </h2>
        <p className="text-center text-gray-400 mb-6">
          Feel free to reach out to us for any inquiries or support.
        </p>

        <div className="grid md:grid-cols-2 gap-6">
          <div>
            <form className="space-y-4" onSubmit={sendToEmail}>
              <input
                type="text"
                name="name"
                placeholder="Your Name"
                value={formData.name}
                onChange={handleChange}
                className="w-full p-2 border border-gray-700 rounded-md bg-black text-white focus:ring-2 focus:ring-orange-600"
                required
              />
              <input
                type="email"
                name="email"
                placeholder="Your Email"
                value={formData.email}
                onChange={handleChange}
                className="w-full p-2 border border-gray-700 rounded-md bg-black text-white focus:ring-2 focus:ring-orange-600"
                required
              />
              <input
                type="text"
                name="subject"
                placeholder="Subject"
                value={formData.subject}
                onChange={handleChange}
                className="w-full p-2 border border-gray-700 rounded-md bg-black text-white focus:ring-2 focus:ring-orange-600"
                required
              />
              <textarea
                name="message"
                placeholder="Your Message"
                value={formData.message}
                onChange={handleChange}
                className="w-full p-2 border border-gray-700 rounded-md bg-black text-white focus:ring-2 focus:ring-orange-600"
                rows={4}
                required
              />
              <button
                type="submit"
                className="w-full bg-orange-600 hover:bg-orange-700 text-black font-bold py-2 rounded-md"
              >
                Send Message
              </button>
            </form>
          </div>

          <div className="flex flex-col space-y-4 text-white mb-20">
            <div className="flex items-center gap-2">
              <Mail className="text-orange-600" />
              <span>contact@irongym.com</span>
            </div>
            <div className="flex items-center gap-2">
              <Phone className="text-orange-600" />
              <span>+01044724761</span>
            </div>
            <div className="flex items-center gap-2">
              <MapPin className="text-orange-600" />
              <span>123 Iron Street, Damanhour, Egypt</span>
            </div>
            <div className="flex items-center gap-4">
              <FaFacebook className="text-orange-600" />
              <span>IRON-GYM Official Community</span>
            </div>

            <br />
            <br />
            <div className="grid grid-cols-4 place-items-start">
              <a
                href="https://www.facebook.com/share/g/12BzL5xEDqV/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaFacebook className="text-blue-600 hover:text-blue-700 w-10 h-10" />
              </a>
              <a
                href="https://wa.me/201044724761"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaWhatsapp className="text-green-500 hover:text-green-600 w-10 h-10" />
              </a>
              <a
                href="https://x.com/mohamed72217275?t=KlM3cQeCp5lDSBGLInbfIQ&s=09"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaTwitter className="text-blue-400 hover:text-blue-500 w-10 h-10" />
              </a>
            </div>
          </div>
        </div>
      </Card>
    </div>
  );
}

// التعديل الاول قبل الخلفية  ....................................................................//*//************************ */

// import { Card } from "flowbite-react";
// import { Mail, Phone, MapPin } from "lucide-react";
// import { FaFacebook, FaTwitter, FaWhatsapp } from "react-icons/fa";

// export default function ContactUs() {
//   return (
//     <div className="flex flex-col items-center justify-center min-h-screen bg-black p-6">
//       <Card className="w-full max-w-3xl shadow-lg p-6 bg-black border border-gray-700">
//         <h2 className="text-4xl font-extrabold  text-center mb-4 text-orange-600">
//           Contact Us
//         </h2>
//         <p className="text-center text-gray-400 mb-6">
//           Feel free to reach out to us for any inquiries or support.
//         </p>

//         <div className="grid md:grid-cols-2 gap-6">
//           {/* Contact Form */}
//           <div>
//             <form className="space-y-4">
//               <input
//                 type="text"
//                 placeholder="Your Name"
//                 className="w-full p-2 border border-gray-700 rounded-md bg-black text-white focus:ring-2 focus:ring-orange-600"
//                 required
//               />
//               <input
//                 type="email"
//                 placeholder="Your Email"
//                 className="w-full p-2 border border-gray-700 rounded-md bg-black text-white focus:ring-2 focus:ring-orange-600"
//                 required
//               />
//               <input
//                 type="text"
//                 placeholder="Subject"
//                 className="w-full p-2 border border-gray-700 rounded-md bg-black text-white focus:ring-2 focus:ring-orange-600"
//                 required
//               />
//               <textarea
//                 placeholder="Your Message"
//                 className="w-full p-2 border border-gray-700 rounded-md bg-black text-white focus:ring-2 focus:ring-orange-600"
//                 rows={4}
//                 required
//               />
//               <button className="w-full bg-orange-600 hover:bg-orange-700 text-black font-bold py-2 rounded-md">
//                 Send Message
//               </button>
//             </form>
//           </div>

//           {/* Contact Details */}
//           <div className="flex flex-col space-y-4 text-white mb-20">
//             <div className="flex items-center gap-2">
//               <Mail className="text-orange-600" />
//               <span>contact@irongym.com</span>
//             </div>
//             <div className="flex items-center gap-2">
//               <Phone className="text-orange-600" />
//               <span>+01044724761</span>
//             </div>
//             <div className="flex items-center gap-2">
//               <MapPin className="text-orange-600" />
//               <span>123 Iron Street, Damanhour, Egypt </span>
//             </div>

//             <br />
//             <br />
//             {/* Social Media Links  */}
//             <div className="grid grid-cols-4  place-items-start ">
//               <a
//                 href="https://www.facebook.com/share/1BZxSLJDsP/"
//                 target="_blank"
//                 rel="noopener noreferrer"
//               >
//                 <FaFacebook className="text-blue-600 hover:text-blue-700 w-10 h-10" />
//               </a>
//               <a
//                 href="https://wa.me/201044724761"
//                 target="_blank"
//                 rel="noopener noreferrer"
//               >
//                 <FaWhatsapp className="text-green-500 hover:text-green-600 w-10 h-10" />
//               </a>
//               <a
//                 href="https://x.com/mohamed72217275?t=KlM3cQeCp5lDSBGLInbfIQ&s=09"
//                 target="_blank"
//                 rel="noopener noreferrer"
//               >
//                 <FaTwitter className="text-blue-400 hover:text-blue-500 w-10 h-10" />
//               </a>
//             </div>
//           </div>
//         </div>
//       </Card>
//     </div>
//   );
// }

// التعديل الثاني بعد الخلفية  ....................................................................//*//************************ */

// import { Card } from "flowbite-react";
// import { Mail, Phone, MapPin } from "lucide-react";
// import { FaFacebook, FaTwitter, FaWhatsapp } from "react-icons/fa";
// import cnt from "../../assets/cnt.jpg";

// export default function ContactUs() {
//   return (
//     <div
//       className="flex flex-col items-center justify-center min-h-screen p-6 bg-cover bg-center"
//       style={{ backgroundImage: `url(${cnt})` }} // تطبيق الخلفية
//     >
//       <Card className="w-full max-w-3xl shadow-lg p-6 bg-black bg-opacity-80 border border-gray-700">
//         <h2 className="text-4xl font-extrabold text-center mb-4 text-orange-600">
//           Contact Us
//         </h2>
//         <p className="text-center text-gray-400 mb-6">
//           Feel free to reach out to us for any inquiries or support.
//         </p>

//         <div className="grid md:grid-cols-2 gap-6">
//           {/* Contact Form */}
//           <div>
//             <form className="space-y-4">
//               <input
//                 type="text"
//                 placeholder="Your Name"
//                 className="w-full p-2 border border-gray-700 rounded-md bg-black text-white focus:ring-2 focus:ring-orange-600"
//                 required
//               />
//               <input
//                 type="email"
//                 placeholder="Your Email"
//                 className="w-full p-2 border border-gray-700 rounded-md bg-black text-white focus:ring-2 focus:ring-orange-600"
//                 required
//               />
//               <input
//                 type="text"
//                 placeholder="Subject"
//                 className="w-full p-2 border border-gray-700 rounded-md bg-black text-white focus:ring-2 focus:ring-orange-600"
//                 required
//               />
//               <textarea
//                 placeholder="Your Message"
//                 className="w-full p-2 border border-gray-700 rounded-md bg-black text-white focus:ring-2 focus:ring-orange-600"
//                 rows={4}
//                 required
//               />
//               <button className="w-full bg-orange-600 hover:bg-orange-700 text-black font-bold py-2 rounded-md">
//                 Send Message
//               </button>
//             </form>
//           </div>

//           {/* Contact Details */}
//           <div className="flex flex-col space-y-4 text-white mb-20">
//             <div className="flex items-center gap-2">
//               <Mail className="text-orange-600" />
//               <span>contact@irongym.com</span>
//             </div>
//             <div className="flex items-center gap-2">
//               <Phone className="text-orange-600" />
//               <span>+01044724761</span>
//             </div>
//             <div className="flex items-center gap-2">
//               <MapPin className="text-orange-600" />
//               <span>123 Iron Street, Damanhour, Egypt </span>
//             </div>

//             <br />
//             <br />
//             {/* Social Media Links */}
//             <div className="grid grid-cols-4 place-items-start">
//               <a
//                 href="https://www.facebook.com/share/1BZxSLJDsP/"
//                 target="_blank"
//                 rel="noopener noreferrer"
//               >
//                 <FaFacebook className="text-blue-600 hover:text-blue-700 w-10 h-10" />
//               </a>
//               <a
//                 href="https://wa.me/201044724761"
//                 target="_blank"
//                 rel="noopener noreferrer"
//               >
//                 <FaWhatsapp className="text-green-500 hover:text-green-600 w-10 h-10" />
//               </a>
//               <a
//                 href="https://x.com/mohamed72217275?t=KlM3cQeCp5lDSBGLInbfIQ&s=09"
//                 target="_blank"
//                 rel="noopener noreferrer"
//               >
//                 <FaTwitter className="text-blue-400 hover:text-blue-500 w-10 h-10" />
//               </a>
//             </div>
//           </div>
//         </div>
//       </Card>
//     </div>
//   );
// }
