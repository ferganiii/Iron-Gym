import React from 'react'
import { Accordion } from 'flowbite-react';
import { motion } from "framer-motion";
import bg1111 from "../../assets/bg1111.jpg";
export default function Questions() {
  return (
    <>
   <section>
<div
 className=" min-h-screen p-6 bg-cover bg-center"
      style={{ backgroundImage: `url(${bg1111})` }}> 
      
      <div className='container mx-auto  '>
      <motion.div
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="w-full max-w-7xl shadow-lg p-10 mb-10 bg-black border-4 border-gray-700 rounded-lg"
          >
            <h2 className="text-4xl font-extrabold text-center mb-6 text-orange-600">
              Frequently Asked Questions
            </h2>
            <motion.p
              initial={{ opacity: 0, y: -50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1 }}
              className="text-center text-gray-100 font-bold mb-10"
            >
              "Find answers to common questions about our services, workout plans,
              calculators, and more. <br /> If you have any further inquiries, feel
              free to reach out to us."
            </motion.p>
      
            <Accordion collapseAll>
              <Accordion.Panel>
              <Accordion.Title>
            <span className="text-orange-400">How can I contact support?</span>
               </Accordion.Title>
                  <Accordion.Content>
                  <p className="text-gray-200 font-serif ">
                    • You can contact us through the contact form on this page or by
                    email at contact@irongym.com.
                  </p>
                </Accordion.Content>
              </Accordion.Panel>
      
              <Accordion.Panel>
                <Accordion.Title> <span className='text-orange-400'>Do you offer a free trial?</span> </Accordion.Title>
                <Accordion.Content>
                  <p className="text-gray-200 font-serif ">
                    • Yes, we offer a 7-day free trial for new users. Sign up today
                    and experience our services.
                  </p>
                </Accordion.Content>
              </Accordion.Panel>
      
              <Accordion.Panel>
              <Accordion.Title> <span className='text-orange-400'>What services do you provide?</span> </Accordion.Title>
                
                <Accordion.Content>
                  <p className="text-gray-200 font-serif ">
                    • We provide a wide range of fitness services including personal
                    training, group classes, and nutrition guidance.
                  </p>
                </Accordion.Content>
              </Accordion.Panel>
      
              <Accordion.Panel>
                 
                <Accordion.Title> <span className='text-orange-400'>    How do I access the workout plans on the website?</span> </Accordion.Title>
                <Accordion.Content>
                  <p className="text-gray-200 font-serif ">
                    • You can find workout plans under the "Workouts" section. Browse
                    by category and start your journey.
                  </p>
                </Accordion.Content>
              </Accordion.Panel>
      
              <Accordion.Panel>
              <Accordion.Title> <span className='text-orange-400'> What type of exercises are included in the workout plans?</span> </Accordion.Title>

               
                <Accordion.Content>
                  <p className="text-gray-200 font-serif ">
                    • Our plans include strength training, cardio, flexibility, and
                    endurance workouts for all fitness levels.
                  </p>
                </Accordion.Content>
              </Accordion.Panel>
      
              <Accordion.Panel>
              <Accordion.Title> <span className='text-orange-400'>How can I use the calorie calculator on the site? </span> </Accordion.Title>

                
                <Accordion.Content>
                  <p className="text-gray-200 font-serif ">
                    • Go to the "Calculators" section, enter your details, and the
                    calculator will show your daily calorie needs.
                  </p>
                </Accordion.Content>
              </Accordion.Panel>
      
              <Accordion.Panel>
              <Accordion.Title> <span className='text-orange-400'>   Do you offer personalized meal and workout plans? </span> </Accordion.Title>
 
                <Accordion.Content>
                  <p className="text-gray-200 font-serif ">
                    • Yes! We provide personalized plans based on your fitness goals
                    in the "Personalized Plans" section.
                  </p>
                </Accordion.Content>
              </Accordion.Panel>
      
              <Accordion.Panel>
              <Accordion.Title> <span className='text-orange-400'>     How do I calculate my BMI using the website? </span> </Accordion.Title>
 
                <Accordion.Content>
                  <p className="text-gray-200 font-serif ">
                    • Use the BMI Calculator page — input your weight and height to
                    get your Body Mass Index.
                  </p>
                </Accordion.Content>
              </Accordion.Panel>
      
              <Accordion.Panel>
              <Accordion.Title> <span className='text-orange-400'>  Can I track my progress using your tools? </span> </Accordion.Title>
                <Accordion.Content>
                  <p className="text-gray-200 font-serif ">
                    • Yes, our tracker allows logging workouts, diet, and body
                    measurements.
                  </p>
                </Accordion.Content>
              </Accordion.Panel>
      
              <Accordion.Panel>
              
                <Accordion.Title> <span className='text-orange-400'>  What are the types of fitness equipment available?</span> </Accordion.Title>

                <Accordion.Content>
                  <p className="text-gray-200 font-serif ">
                    • We list cardio machines, strength machines, free weights, and
                    functional training tools.
                  </p>
                </Accordion.Content>
              </Accordion.Panel>
            </Accordion>
          </motion.div>
      </div>

</div>
  
   </section>
    </>
  )
}
