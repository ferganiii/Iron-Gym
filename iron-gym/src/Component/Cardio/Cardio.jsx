// import cardioImg from "../../assets/cardio.jpg"; // المسار حسب مكان الصورة
// import cardioBackground from "../../assets/cardio2.jpg"; // مسار خلفية الصورة
// import crd1 from "../../assets/crd1.jpg";
// import crd2 from "../../assets/crd2.png";
// import crd3 from "../../assets/crd3.png";
// import crd4 from "../../assets/crd4.png";
// import crd5 from "../../assets/crd5.png";
// import crd6 from "../../assets/crd6.png";
// import crd7 from "../../assets/crd7.png";
// import crd8 from "../../assets/crd8.png";
// import crd9 from "../../assets/crd9.png";
// import crd10 from "../../assets/crd10.png";
// import crd11 from "../../assets/crd11.png";
// import crd12 from "../../assets/crd12.png";
// import best1 from "../../assets/best1.png";
// import best2 from "../../assets/best2.png";
// import best3 from "../../assets/best3.png";
// import best4 from "../../assets/best4.png";
// import best5 from "../../assets/best5.png";
// import best6 from "../../assets/best6.png";

// function Cardio() {
//   return (
//     <div className="p-1">
//       {/* الصورة في الأعلى */}
//       <img
//         src={cardioImg}
//         alt="Cardio"
//         className="w-full h-auto  object-cover rounded-"
//       />

//       {/* المحتوى أسفل الصورة */}
//       <div
//         className="p- bg-cover bg- text-center "
//         style={{ backgroundImage: `url(${cardioBackground})` }} // إضافة صورة الخلفية
//       >
//         <h1 className="text-4xl italic font-semibold mb-28 mt-32  text-white  border-orange-600 border-2 inline-block px-20 py-10 rounded-2xl">
//           12 Cardio Exercises To Do If You Hate <br /> Running :
//         </h1>

//         <div className="mt-11 ">
//           <div className="h-5 w-1/2 bg-orange-600 opacity-40"></div>
//         </div>

//         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3  p-48 gap-4">
//           {/* Exercise 1 */}
//           <div className="bg-transparent p-6 rounded-lg ">
//             <h2 className="text-2xl font-bold mb-3 text-orange-600">
//               1. Elliptical
//             </h2>

//             <img
//               src={crd1}
//               alt="Elliptical"
//               className="w-full  object-contain rounded-3xl shadow-md mb-4"
//             />

//             <p className="text-white">
//               <span className="text-orange-600">Elliptical </span> is a machine
//               you'll find in nearly every gym. It consists of two large pedals
//               and has handlebars that you pull on with each "step" you make.
//               Striding on the elliptical is a similar motion as running, but it
//               has none of the impact because your feet never leave the pedals.
//             </p>
//           </div>

//           {/* Exercise 2 */}
//           <div className="bg-transparent p-6 rounded-lg ">
//             <h2 className="text-2xl font-bold mb-3 text-orange-600">
//               2. Cycling
//             </h2>
//             <img
//               src={crd2}
//               alt="Elliptical"
//               className="w-full  object-contain rounded-3xl shadow-md mb-4"
//             />
//             <p className="text-white">
//               <span className="text-orange-600">Cycling</span> Cycling is
//               another low-impact cardio option for you if you don't like the
//               hard impact that running puts on your joints. It also offers a lot
//               of flexibility because you can do it indoors on a stationary bike
//               or outdoors on a road bike if you have one.
//             </p>
//           </div>

//           {/* Exercise 3 */}
//           <div className="bg-transparent p-6 rounded-lg ">
//             <h2 className="text-2xl font-bold mb-3 text-orange-600">
//               3. Rowing
//             </h2>
//             <img
//               src={crd3}
//               alt="Elliptical"
//               className="w-full  object-contain rounded-3xl shadow-md mb-4"
//             />
//             <p className="text-white">
//               <span className="text-orange-600">The rower</span> is a common
//               implement in CrossFit, Orangetheory, and other types of
//               high-interval or circuit-based fitness classes. It's a low-impact
//               but challenging machine that works the entire body, including the
//               muscles in the legs and back.
//             </p>
//           </div>

//           {/* Exercise 4 */}
//           <div className="bg-transparent p-6 rounded-lg ">
//             <h2 className="text-2xl font-bold mb-3 text-orange-600">
//               4. Stair Climber
//             </h2>
//             <img
//               src={crd4}
//               alt="Elliptical"
//               className="w-full  object-contain rounded-3xl shadow-md mb-4"
//             />
//             <p className="text-white">
//               <span className="text-orange-600">The stair</span> climber is a
//               popular machine in most gyms. As the name implies, it's a machine
//               with a moving staircase that enables you to "climb stairs." In
//               addition to improving your cardiovascular fitness, it can help you
//               Improve your core stability by challenging your balance if you
//               don't hold onto the handlebars.
//             </p>
//           </div>

//           {/* Exercise 5 */}
//           <div className="bg-transparent p-6 rounded-lg ">
//             <h2 className="text-2xl font-bold mb-3 text-orange-600">
//               5. Swimming
//             </h2>
//             <img
//               src={crd5}
//               alt="Elliptical"
//               className="w-full  object-contain rounded-3xl shadow-md mb-4"
//             />
//             <p className="text-white">
//               <span className="text-orange-600">Swimming</span> is an excellent
//               alternative to running if you need an activity that is easier on
//               your joints. It also burns a lot of calories-400-700 per hour,
//               depending on how fast you swim.
//             </p>
//           </div>

//           {/* Exercise 6 */}
//           <div className="bg-transparent p-6 rounded-lg ">
//             <h2 className="text-2xl font-bold mb-3 text-orange-600">
//               6. Walking
//             </h2>
//             <img
//               src={crd6}
//               alt="Elliptical"
//               className="w-full  object-contain rounded-3xl shadow-md mb-4"
//             />
//             <p className="text-white">
//               <span className="text-orange-600">walking </span>is an underrated
//               form of exercise. It may not get your heart pumping as much as the
//               other options on this list, but it's a simple activity you can do
//               anywhere as long as you have a pair of sneakers. It also has a
//               host of health benefits.
//             </p>
//           </div>
//           {/* Exercise 7 */}
//           <div className="bg-transparent p-6 rounded-lg ">
//             <h2 className="text-2xl font-bold mb-3 text-orange-600">
//               7. Hiking
//             </h2>
//             <img
//               src={crd7}
//               alt="Elliptical"
//               className="w-full  object-contain rounded-3xl shadow-md mb-4"
//             />
//             <p className="text-white">
//               <span className="text-orange-600">Hiking</span> is an excellent
//               option for cardio if you enjoy working out outdoors but don't like
//               the feeling of your feet pounding the ground repeatedly. It's also
//               ideal if you want more of a challenge than walking since you can
//               climb hills and traverse over rocks and uneven terrain. You can
//               even carry a weighted backpack with you for some extra resistance.
//             </p>
//           </div>
//           {/* Exercise 8 */}
//           <div className="bg-transparent p-6 rounded-lg ">
//             <h2 className="text-2xl font-bold mb-3 text-orange-600">
//               8. Kickboxing
//             </h2>
//             <img
//               src={crd8}
//               alt="Elliptical"
//               className="w-full  object-contain rounded-3xl shadow-md mb-4"
//             />
//             <p className="text-white">
//               <span className="text-orange-600">Kickboxing </span> is a great
//               way to improve your cardiovascular fitness, power, coordination,
//               agility, and strength at the same time. It's a high-impact
//               activity that keeps you constantly moving. It combines elements of
//               boxing and karate, and most kickboxing classes also include
//               bodyweight training and plyometrics.
//             </p>
//           </div>
//           {/* Exercise 9 */}
//           <div className="bg-transparent p-6 rounded-lg ">
//             <h2 className="text-2xl font-bold mb-3 text-orange-600">
//               9. Group Fitness Classes
//             </h2>
//             <img
//               src={crd9}
//               alt="Elliptical"
//               className="w-full  object-contain rounded-3xl shadow-md mb-4"
//             />
//             <p className="text-white">
//               <span className="text-orange-600">Group fitness classes </span>
//               like Zumba and Body Pump are a fun way to get in more cardio. They
//               tend to be fast-paced and are led by energetic instructors, which
//               helps keep them fun and interesting. The instructors can also help
//               teach you proper form or show you how to scale movements if you're
//               new to working out .
//             </p>
//           </div>
//           {/* Exercise 10 */}
//           <div className="bg-transparent p-6 rounded-lg ">
//             <h2 className="text-2xl font-bold mb-3 text-orange-600">
//               10. Jumping Rope
//             </h2>
//             <img
//               src={crd10}
//               alt="Elliptical"
//               className="w-full  object-contain rounded-3xl shadow-md mb-4"
//             />
//             <p className="text-white">
//               <span className="text-orange-600">Jumping rope </span>is a
//               high-impact activity, but if your joints can handle it, it's an
//               effective form of cardio exercise and doesn't require much of a
//               learning curve. Not only is it good for increasing your heart rate
//               and burning calories, but it can also help improve your
//               coordination, lower body power, balance, and agility.
//             </p>
//           </div>
//           {/* Exercise 11 */}
//           <div className="bg-transparent p-6 rounded-lg ">
//             <h2 className="text-2xl font-bold mb-3 text-orange-600">
//               11. Circuit Training
//             </h2>
//             <img
//               src={crd11}
//               alt="Elliptical"
//               className="w-full  object-contain rounded-3xl shadow-md mb-4"
//             />
//             <p className="text-white">
//               <span className="text-orange-600">
//                 High-intensity interval training (HIIT)  
//               </span> 
//                requires you to alternate between quick bursts of activity and
//               short rest periods for a specified time. It's a higher-impact form
//               of exercise, but it's a great way to do some cardio without
//               slaving away on a machine (though you can do intervals on a
//               machine if you want to).
//             </p>
//           </div>
//           {/* Exercise 12 */}
//           <div className="bg-transparent p-6 rounded-lg ">
//             <h2 className="text-2xl font-bold mb-3 text-orange-600">
//               12. High-Intensity Interval
//             </h2>
//             <img
//               src={crd12}
//               alt="Elliptical"
//               className="w-full  object-contain rounded-3xl shadow-md mb-4"
//             />
//             <p className="text-white">
//               <span className="text-orange-600">Circuit Training </span> is a
//               form of training in which you rotate through different exercises
//               and perform them for specified time periods, often with little or
//               no rest in between each station. Because you're constantly moving,
//               your heart rate stays elevated the entire time.
//             </p>
//           </div>
//         </div>
//         <div className="mt-11 mb-20">
//           <div className="h-5 w-1/2 bg-orange-600 opacity-40 ml-auto"></div>
//         </div>

//         <h1 className="text-4xl italic font-semibold mb-28 mt-20  text-white  border-orange-600 border-2 inline-block px-20 py-10 rounded-2xl">
//           6 Best Cardio Machines To Tone Legs :
//         </h1>

//         <div className="mt-11 ">
//           <div className="h-5 w-1/2 bg-orange-600 opacity-40"></div>
//         </div>

//         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 p-48 gap-4 ">
//           {/* best 1 */}
//           <div className="bg-transparent p-6 rounded-lg ">
//             <h2 className="text-2xl font-bold mb-3 text-orange-600">
//               1. Treadmill
//             </h2>

//             <img
//               src={best1}
//               alt="Elliptical"
//               className="w-full  object-contain rounded-3xl shadow-md mb-4"
//             />

//             <p className="text-white">
//               <span className="text-orange-600">The treadmill</span> is a cardio
//               machine that simulates walking or running indoors. It's widely
//               used for cardiovascular endurance, weight loss, and improving
//               overall fitness. You can control the speed and incline, making it
//               adaptable for all fitness levels. It’s perfect for consistent
//               indoor training regardless of weather conditions.
//             </p>
//           </div>

//           {/* best 2 */}
//           <div className="bg-transparent p-6 rounded-lg ">
//             <h2 className="text-2xl font-bold mb-3 text-orange-600">
//               2. Curved Treadmill
//             </h2>
//             <img
//               src={best2}
//               alt="Elliptical"
//               className="w-full  object-contain rounded-3xl shadow-md mb-4"
//             />
//             <p className="text-white">
//               <span className="text-orange-600">A curved treadmill</span> is a
//               non-motorized machine that runs entirely on your body’s momentum.
//               The curved design encourages natural running form and greater
//               muscle activation. Since you control the speed, it’s often used
//               for high-intensity interval training (HIIT) and sprint workouts,
//               offering a more intense and calorie-burning experience than
//               traditional treadmills.
//             </p>
//           </div>

//           {/* best 3 */}
//           <div className="bg-transparent p-6 rounded-lg ">
//             <h2 className="text-2xl font-bold mb-3 text-orange-600">
//               3. Stair Climber
//             </h2>
//             <img
//               src={best3}
//               alt="Elliptical"
//               className="w-full  object-contain rounded-3xl shadow-md mb-4"
//             />
//             <p className="text-white">
//               <span className="text-orange-600">The stair climber</span> mimics
//               the motion of walking up stairs continuously. It targets the lower
//               body muscles—especially glutes, quads, and calves—while also
//               providing a solid cardio workout. It’s low-impact but intense,
//               making it great for burning calories, strengthening legs, and
//               improving cardiovascular health without stressing the joints too
//               much.
//             </p>
//           </div>

//           {/* best 4 */}
//           <div className="bg-transparent p-6 rounded-lg ">
//             <h2 className="text-2xl font-bold mb-3 text-orange-600">
//               4. Upright Bike
//             </h2>
//             <img
//               src={best4}
//               alt="Elliptical"
//               className="w-full  object-contain rounded-3xl shadow-md mb-4"
//             />
//             <p className="text-white">
//               <span className="text-orange-600">An upright bike</span> is
//               similar to a traditional bicycle and provides a comfortable indoor
//               cycling experience. It focuses mainly on the lower body—thighs,
//               calves, and glutes—while also offering cardiovascular benefits.
//               It's a low-impact machine, suitable for all fitness levels, and is
//               often used for warm-ups, endurance training, or fat burning.
//             </p>
//           </div>

//           {/* best 5 */}
//           <div className="bg-transparent p-6 rounded-lg ">
//             <h2 className="text-2xl font-bold mb-3 text-orange-600">
//               5. Assault Air Bike
//             </h2>
//             <img
//               src={best5}
//               alt="Elliptical"
//               className="w-full  object-contain rounded-3xl shadow-md mb-4"
//             />
//             <p className="text-white">
//               <span className="text-orange-600">The Assault Air Bike</span> is a
//               high-intensity cardio machine that combines upper and lower body
//               movement. It uses a fan for resistance—meaning the harder you
//               push, the tougher it gets. It’s ideal for interval training and
//               conditioning workouts. It’s especially popular in CrossFit and
//               athletic training for building stamina and burning fat quickly.
//             </p>
//           </div>

//           {/* best 6 */}
//           <div className="bg-transparent p-6 rounded-lg ">
//             <h2 className="text-2xl font-bold mb-3 text-orange-600">
//               6. Rowing Machine
//             </h2>
//             <img
//               src={best6}
//               alt="Elliptical"
//               className="w-full  object-contain rounded-3xl shadow-md mb-4"
//             />
//             <p className="text-white">
//               <span className="text-orange-600">A rowing machine</span>{" "}
//               simulates the motion of rowing a boat, offering a full-body cardio
//               workout. It works the legs, back, core, and arms while improving
//               endurance and heart health. It’s low-impact, making it suitable
//               for most people. Rowing helps build both strength and aerobic
//               capacity, making it a versatile choice in any workout routine.
//             </p>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default Cardio;



















import cardioImg from "../../assets/cardio.jpg";
import cardioBackground from "../../assets/cardio2.jpg";
import crd1 from "../../assets/crd1.jpg";
import crd2 from "../../assets/crd2.png";
import crd3 from "../../assets/crd3.png";
import crd4 from "../../assets/crd4.png";
import crd5 from "../../assets/crd5.png";
import crd6 from "../../assets/crd6.png";
import crd7 from "../../assets/crd7.png";
import crd8 from "../../assets/crd8.png";
import crd9 from "../../assets/crd9.png";
import crd10 from "../../assets/crd10.png";
import crd11 from "../../assets/crd11.png";
import crd12 from "../../assets/crd12.png";
import best1 from "../../assets/best1.png";
import best2 from "../../assets/best2.png";
import best3 from "../../assets/best3.png";
import best4 from "../../assets/best4.png";
import best5 from "../../assets/best5.png";
import best6 from "../../assets/best6.png";

function Cardio() {
  return (
    <div className="p-1">
      {/* الصورة في الأعلى */}
      <img
        src={cardioImg}
        alt="Cardio"
        className="w-full h-auto object-cover rounded-lg"
      />

      {/* المحتوى أسفل الصورة */}
      <div
        className="p-4 bg-cover bg-center text-center"
        style={{ backgroundImage: `url(${cardioBackground})` }}
      >
        <h1 className="text-2xl md:text-4xl italic font-semibold mb-16 md:mb-28 mt-16 md:mt-32 text-white border-orange-600 border-2 inline-block px-4 py-4 md:px-20 md:py-10 rounded-2xl">
          12 Cardio Exercises To Do If You Hate <br /> Running :
        </h1>

        <div className="mt-6 md:mt-11">
          <div className="h-3 md:h-5 w-1/2 bg-orange-600 opacity-40"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 p-4 md:p-12 lg:p-48 gap-6 md:gap-4">
          {/* Exercise 1 */}
          <div className="bg-transparent p-4 md:p-6 rounded-lg transition-transform duration-300 hover:scale-105">
            <h2 className="text-xl md:text-2xl font-bold mb-3 text-orange-600">
              1. Elliptical
            </h2>
            <div className="overflow-hidden rounded-3xl shadow-md mb-4">
              <img
                src={crd1}
                alt="Elliptical"
                className="w-full h-48 md:h-64 object-cover hover:scale-110 transition-transform duration-500"
              />
            </div>
            <p className="text-white text-sm md:text-base">
              <span className="text-orange-600">Elliptical </span> is a machine
              you'll find in nearly every gym. It consists of two large pedals
              and has handlebars that you pull on with each "step" you make.
              Striding on the elliptical is a similar motion as running, but it
              has none of the impact because your feet never leave the pedals.
            </p>
          </div>

          {/* Exercise 2 */}
          <div className="bg-transparent p-4 md:p-6 rounded-lg transition-transform duration-300 hover:scale-105">
            <h2 className="text-xl md:text-2xl font-bold mb-3 text-orange-600">
              2. Cycling
            </h2>
            <div className="overflow-hidden rounded-3xl shadow-md mb-4">
              <img
                src={crd2}
                alt="Cycling"
                className="w-full h-48 md:h-64 object-cover hover:scale-110 transition-transform duration-500"
              />
            </div>
            <p className="text-white text-sm md:text-base">
              <span className="text-orange-600">Cycling</span> Cycling is
              another low-impact cardio option for you if you don't like the
              hard impact that running puts on your joints. It also offers a lot
              of flexibility because you can do it indoors on a stationary bike
              or outdoors on a road bike if you have one.
            </p>
          </div>

          {/* Exercise 3 */}
          <div className="bg-transparent p-4 md:p-6 rounded-lg transition-transform duration-300 hover:scale-105">
            <h2 className="text-xl md:text-2xl font-bold mb-3 text-orange-600">
              3. Rowing
            </h2>
            <div className="overflow-hidden rounded-3xl shadow-md mb-4">
              <img
                src={crd3}
                alt="Rowing"
                className="w-full h-48 md:h-64 object-cover hover:scale-110 transition-transform duration-500"
              />
            </div>
            <p className="text-white text-sm md:text-base">
              <span className="text-orange-600">The rower</span> is a common
              implement in CrossFit, Orangetheory, and other types of
              high-interval or circuit-based fitness classes. It's a low-impact
              but challenging machine that works the entire body, including the
              muscles in the legs and back.
            </p>
          </div>

          {/* Exercise 4 */}
          <div className="bg-transparent p-4 md:p-6 rounded-lg transition-transform duration-300 hover:scale-105">
            <h2 className="text-xl md:text-2xl font-bold mb-3 text-orange-600">
              4. Stair Climber
            </h2>
            <div className="overflow-hidden rounded-3xl shadow-md mb-4">
              <img
                src={crd4}
                alt="Stair Climber"
                className="w-full h-48 md:h-64 object-cover hover:scale-110 transition-transform duration-500"
              />
            </div>
            <p className="text-white text-sm md:text-base">
              <span className="text-orange-600">The stair</span> climber is a
              popular machine in most gyms. As the name implies, it's a machine
              with a moving staircase that enables you to "climb stairs." In
              addition to improving your cardiovascular fitness, it can help you
              Improve your core stability by challenging your balance if you
              don't hold onto the handlebars.
            </p>
          </div>

          {/* Exercise 5 */}
          <div className="bg-transparent p-4 md:p-6 rounded-lg transition-transform duration-300 hover:scale-105">
            <h2 className="text-xl md:text-2xl font-bold mb-3 text-orange-600">
              5. Swimming
            </h2>
            <div className="overflow-hidden rounded-3xl shadow-md mb-4">
              <img
                src={crd5}
                alt="Swimming"
                className="w-full h-48 md:h-64 object-cover hover:scale-110 transition-transform duration-500"
              />
            </div>
            <p className="text-white text-sm md:text-base">
              <span className="text-orange-600">Swimming</span> is an excellent
              alternative to running if you need an activity that is easier on
              your joints. It also burns a lot of calories-400-700 per hour,
              depending on how fast you swim.
            </p>
          </div>

          {/* Exercise 6 */}
          <div className="bg-transparent p-4 md:p-6 rounded-lg transition-transform duration-300 hover:scale-105">
            <h2 className="text-xl md:text-2xl font-bold mb-3 text-orange-600">
              6. Walking
            </h2>
            <div className="overflow-hidden rounded-3xl shadow-md mb-4">
              <img
                src={crd6}
                alt="Walking"
                className="w-full h-48 md:h-64 object-cover hover:scale-110 transition-transform duration-500"
              />
            </div>
            <p className="text-white text-sm md:text-base">
              <span className="text-orange-600">walking </span>is an underrated
              form of exercise. It may not get your heart pumping as much as the
              other options on this list, but it's a simple activity you can do
              anywhere as long as you have a pair of sneakers. It also has a
              host of health benefits.
            </p>
          </div>
          
          {/* Exercise 7 */}
          <div className="bg-transparent p-4 md:p-6 rounded-lg transition-transform duration-300 hover:scale-105">
            <h2 className="text-xl md:text-2xl font-bold mb-3 text-orange-600">
              7. Hiking
            </h2>
            <div className="overflow-hidden rounded-3xl shadow-md mb-4">
              <img
                src={crd7}
                alt="Hiking"
                className="w-full h-48 md:h-64 object-cover hover:scale-110 transition-transform duration-500"
              />
            </div>
            <p className="text-white text-sm md:text-base">
              <span className="text-orange-600">Hiking</span> is an excellent
              option for cardio if you enjoy working out outdoors but don't like
              the feeling of your feet pounding the ground repeatedly. It's also
              ideal if you want more of a challenge than walking since you can
              climb hills and traverse over rocks and uneven terrain. You can
              even carry a weighted backpack with you for some extra resistance.
            </p>
          </div>
          
          {/* Exercise 8 */}
          <div className="bg-transparent p-4 md:p-6 rounded-lg transition-transform duration-300 hover:scale-105">
            <h2 className="text-xl md:text-2xl font-bold mb-3 text-orange-600">
              8. Kickboxing
            </h2>
            <div className="overflow-hidden rounded-3xl shadow-md mb-4">
              <img
                src={crd8}
                alt="Kickboxing"
                className="w-full h-48 md:h-64 object-cover hover:scale-110 transition-transform duration-500"
              />
            </div>
            <p className="text-white text-sm md:text-base">
              <span className="text-orange-600">Kickboxing </span> is a great
              way to improve your cardiovascular fitness, power, coordination,
              agility, and strength at the same time. It's a high-impact
              activity that keeps you constantly moving. It combines elements of
              boxing and karate, and most kickboxing classes also include
              bodyweight training and plyometrics.
            </p>
          </div>
          
          {/* Exercise 9 */}
          <div className="bg-transparent p-4 md:p-6 rounded-lg transition-transform duration-300 hover:scale-105">
            <h2 className="text-xl md:text-2xl font-bold mb-3 text-orange-600">
              9. Group Fitness Classes
            </h2>
            <div className="overflow-hidden rounded-3xl shadow-md mb-4">
              <img
                src={crd9}
                alt="Group Fitness"
                className="w-full h-48 md:h-64 object-cover hover:scale-110 transition-transform duration-500"
              />
            </div>
            <p className="text-white text-sm md:text-base">
              <span className="text-orange-600">Group fitness classes </span>
              like Zumba and Body Pump are a fun way to get in more cardio. They
              tend to be fast-paced and are led by energetic instructors, which
              helps keep them fun and interesting. The instructors can also help
              teach you proper form or show you how to scale movements if you're
              new to working out .
            </p>
          </div>
          
          {/* Exercise 10 */}
          <div className="bg-transparent p-4 md:p-6 rounded-lg transition-transform duration-300 hover:scale-105">
            <h2 className="text-xl md:text-2xl font-bold mb-3 text-orange-600">
              10. Jumping Rope
            </h2>
            <div className="overflow-hidden rounded-3xl shadow-md mb-4">
              <img
                src={crd10}
                alt="Jumping Rope"
                className="w-full h-48 md:h-64 object-cover hover:scale-110 transition-transform duration-500"
              />
            </div>
            <p className="text-white text-sm md:text-base">
              <span className="text-orange-600">Jumping rope </span>is a
              high-impact activity, but if your joints can handle it, it's an
              effective form of cardio exercise and doesn't require much of a
              learning curve. Not only is it good for increasing your heart rate
              and burning calories, but it can also help improve your
              coordination, lower body power, balance, and agility.
            </p>
          </div>
          
          {/* Exercise 11 */}
          <div className="bg-transparent p-4 md:p-6 rounded-lg transition-transform duration-300 hover:scale-105">
            <h2 className="text-xl md:text-2xl font-bold mb-3 text-orange-600">
              11. Circuit Training
            </h2>
            <div className="overflow-hidden rounded-3xl shadow-md mb-4">
              <img
                src={crd11}
                alt="Circuit Training"
                className="w-full h-48 md:h-64 object-cover hover:scale-110 transition-transform duration-500"
              />
            </div>
            <p className="text-white text-sm md:text-base">
              <span className="text-orange-600">
                High-intensity interval training (HIIT){" "}
              </span>{" "}
              requires you to alternate between quick bursts of activity and
              short rest periods for a specified time. It's a higher-impact form
              of exercise, but it's a great way to do some cardio without
              slaving away on a machine (though you can do intervals on a
              machine if you want to).
            </p>
          </div>
          
          {/* Exercise 12 */}
          <div className="bg-transparent p-4 md:p-6 rounded-lg transition-transform duration-300 hover:scale-105">
            <h2 className="text-xl md:text-2xl font-bold mb-3 text-orange-600">
              12. High-Intensity Interval
            </h2>
            <div className="overflow-hidden rounded-3xl shadow-md mb-4">
              <img
                src={crd12}
                alt="High-Intensity Interval"
                className="w-full h-48 md:h-64 object-cover hover:scale-110 transition-transform duration-500"
              />
            </div>
            <p className="text-white text-sm md:text-base">
              <span className="text-orange-600">Circuit Training </span> is a
              form of training in which you rotate through different exercises
              and perform them for specified time periods, often with little or
              no rest in between each station. Because you're constantly moving,
              your heart rate stays elevated the entire time.
            </p>
          </div>
        </div>
        
        <div className="mt-6 md:mt-11 mb-10 md:mb-20">
          <div className="h-3 md:h-5 w-1/2 bg-orange-600 opacity-40 ml-auto"></div>
        </div>

        <h1 className="text-2xl md:text-4xl italic font-semibold mb-16 md:mb-28 mt-10 md:mt-20 text-white border-orange-600 border-2 inline-block px-4 py-4 md:px-20 md:py-10 rounded-2xl">
          6 Best Cardio Machines To Tone Legs :
        </h1>

        <div className="mt-6 md:mt-11">
          <div className="h-3 md:h-5 w-1/2 bg-orange-600 opacity-40"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 p-4 md:p-12 lg:p-48 gap-6 md:gap-4">
          {/* best 1 */}
          <div className="bg-transparent p-4 md:p-6 rounded-lg transition-transform duration-300 hover:scale-105">
            <h2 className="text-xl md:text-2xl font-bold mb-3 text-orange-600">
              1. Treadmill
            </h2>
            <div className="overflow-hidden rounded-3xl shadow-md mb-4">
              <img
                src={best1}
                alt="Treadmill"
                className="w-full h-48 md:h-64 object-cover hover:scale-110 transition-transform duration-500"
              />
            </div>
            <p className="text-white text-sm md:text-base">
              <span className="text-orange-600">The treadmill</span> is a cardio
              machine that simulates walking or running indoors. It's widely
              used for cardiovascular endurance, weight loss, and improving
              overall fitness. You can control the speed and incline, making it
              adaptable for all fitness levels. It's perfect for consistent
              indoor training regardless of weather conditions.
            </p>
          </div>

          {/* best 2 */}
          <div className="bg-transparent p-4 md:p-6 rounded-lg transition-transform duration-300 hover:scale-105">
            <h2 className="text-xl md:text-2xl font-bold mb-3 text-orange-600">
              2. Curved Treadmill
            </h2>
            <div className="overflow-hidden rounded-3xl shadow-md mb-4">
              <img
                src={best2}
                alt="Curved Treadmill"
                className="w-full h-48 md:h-64 object-cover hover:scale-110 transition-transform duration-500"
              />
            </div>
            <p className="text-white text-sm md:text-base">
              <span className="text-orange-600">A curved treadmill</span> is a
              non-motorized machine that runs entirely on your body's momentum.
              The curved design encourages natural running form and greater
              muscle activation. Since you control the speed, it's often used
              for high-intensity interval training (HIIT) and sprint workouts,
              offering a more intense and calorie-burning experience than
              traditional treadmills.
            </p>
          </div>

          {/* best 3 */}
          <div className="bg-transparent p-4 md:p-6 rounded-lg transition-transform duration-300 hover:scale-105">
            <h2 className="text-xl md:text-2xl font-bold mb-3 text-orange-600">
              3. Stair Climber
            </h2>
            <div className="overflow-hidden rounded-3xl shadow-md mb-4">
              <img
                src={best3}
                alt="Stair Climber"
                className="w-full h-48 md:h-64 object-cover hover:scale-110 transition-transform duration-500"
              />
            </div>
            <p className="text-white text-sm md:text-base">
              <span className="text-orange-600">The stair climber</span> mimics
              the motion of walking up stairs continuously. It targets the lower
              body muscles—especially glutes, quads, and calves—while also
              providing a solid cardio workout. It's low-impact but intense,
              making it great for burning calories, strengthening legs, and
              improving cardiovascular health without stressing the joints too
              much.
            </p>
          </div>

          {/* best 4 */}
          <div className="bg-transparent p-4 md:p-6 rounded-lg transition-transform duration-300 hover:scale-105">
            <h2 className="text-xl md:text-2xl font-bold mb-3 text-orange-600">
              4. Upright Bike
            </h2>
            <div className="overflow-hidden rounded-3xl shadow-md mb-4">
              <img
                src={best4}
                alt="Upright Bike"
                className="w-full h-48 md:h-64 object-cover hover:scale-110 transition-transform duration-500"
              />
            </div>
            <p className="text-white text-sm md:text-base">
              <span className="text-orange-600">An upright bike</span> is
              similar to a traditional bicycle and provides a comfortable indoor
              cycling experience. It focuses mainly on the lower body—thighs,
              calves, and glutes—while also offering cardiovascular benefits.
              It's a low-impact machine, suitable for all fitness levels, and is
              often used for warm-ups, endurance training, or fat burning.
            </p>
          </div>

          {/* best 5 */}
          <div className="bg-transparent p-4 md:p-6 rounded-lg transition-transform duration-300 hover:scale-105">
            <h2 className="text-xl md:text-2xl font-bold mb-3 text-orange-600">
              5. Assault Air Bike
            </h2>
            <div className="overflow-hidden rounded-3xl shadow-md mb-4">
              <img
                src={best5}
                alt="Assault Air Bike"
                className="w-full h-48 md:h-64 object-cover hover:scale-110 transition-transform duration-500"
              />
            </div>
            <p className="text-white text-sm md:text-base">
              <span className="text-orange-600">The Assault Air Bike</span> is a
              high-intensity cardio machine that combines upper and lower body
              movement. It uses a fan for resistance—meaning the harder you
              push, the tougher it gets. It's ideal for interval training and
              conditioning workouts. It's especially popular in CrossFit and
              athletic training for building stamina and burning fat quickly.
            </p>
          </div>

          {/* best 6 */}
          <div className="bg-transparent p-4 md:p-6 rounded-lg transition-transform duration-300 hover:scale-105">
            <h2 className="text-xl md:text-2xl font-bold mb-3 text-orange-600">
              6. Rowing Machine
            </h2>
            <div className="overflow-hidden rounded-3xl shadow-md mb-4">
              <img
                src={best6}
                alt="Rowing Machine"
                className="w-full h-48 md:h-64 object-cover hover:scale-110 transition-transform duration-500"
              />
            </div>
            <p className="text-white text-sm md:text-base">
              <span className="text-orange-600">A rowing machine</span>{" "}
              simulates the motion of rowing a boat, offering a full-body cardio
              workout. It works the legs, back, core, and arms while improving
              endurance and heart health. It's low-impact, making it suitable
              for most people. Rowing helps build both strength and aerobic
              capacity, making it a versatile choice in any workout routine.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Cardio;