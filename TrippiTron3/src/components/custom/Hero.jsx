// import React from "react";
// import { Button } from "../ui/button";
// import { Link } from "react-router-dom";

// function Hero() {
//   return (
//     <div>
//       <div className="flex items-center py-4 mx-6 gap-9 shadow-md">
//         <img
//           src="/travel_location4.jpg"
//           height={350}
//           width={301}
//           className="rounded-md shadow-md"
//         />
//         <h1 className="font-extrabold text-[55px] text-center">
//           <span className="text-orange-500">Dream, Plan, Pack, Explore!</span>
//           <br></br>
//           Let TrippiTron’s AI craft your perfect adventure! 🌍
//         </h1>
//         <img
//           src="/travel_location3.jpg"
//           height={350}
//           width={301}
//           className="rounded-md shadow-md"
//         />
//       </div>
//       <div className=" py-4 mx-6 gap-9 shadow-md bg-neutral-900 rounded-md">
//         <p className="text-white font-semibold text-[20px] text-center mx-auto shadow-lg px-2">
//           Your ultimate AI-powered travel companion!<br></br>
//           TrippiTron helps you plan perfect itineraries, find the best hotels,
//           discover must-visit locations, and craft unforgettable trips, all in
//           just a few clicks.<br></br>
//           Whether you're a solo traveler, a couple, or a group explorer, our
//           smart AI curates personalized travel experiences just for you.
//           <br></br>
//           Say goodbye to travel stress and hello to seamless adventures!
//         </p>
//         <div className="flex justify-center mt-4">
//           <Link to={'/create-trip'}>
//             <Button variant="secondary">Get Started, It's Free</Button>
//           </Link>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default Hero;


import React from "react";
import { Button } from "../ui/button";
import { Link } from "react-router-dom";

function Hero() {
  return (
    <div className="px-4 md:px-6">
      {/* Image & Title Section */}
      <div className="flex flex-wrap items-center justify-center py-6 gap-6 md:gap-9 shadow-md">
        {/* Left Image */}
        <img
          src="/travel_location4.jpg"
          className="rounded-md shadow-md w-[80%] md:w-[300px] h-auto"
          alt="Travel location"
        />

        {/* Text Section */}
        <h1 className="font-extrabold text-4xl md:text-[55px] text-center leading-tight">
          <span className="text-orange-500 block">Dream, Plan, Pack, Explore!</span>
          Let TrippiTron’s AI craft your perfect adventure! 🌍
        </h1>

        {/* Right Image */}
        <img
          src="/travel_location3.jpg"
          className="rounded-md shadow-md w-[80%] md:w-[300px] h-auto"
          alt="Travel location"
        />
      </div>

      {/* Description Section */}
      <div className="py-6 px-4 md:px-8 mt-6 shadow-md bg-neutral-900 rounded-md text-center">
        <p className="text-white font-semibold text-lg md:text-[20px] leading-relaxed shadow-lg px-2">
          Your ultimate AI-powered travel companion! <br />
          TrippiTron helps you plan perfect itineraries, find the best hotels, discover must-visit locations, and craft unforgettable trips, all in just a few clicks. <br />
          Whether you're a solo traveler, a couple, or a group explorer, our smart AI curates personalized travel experiences just for you. <br />
          Say goodbye to travel stress and hello to seamless adventures!
        </p>

        {/* Button Section */}
        <div className="flex justify-center mt-6">
          <Link to={'/create-trip'}>
            <Button variant="secondary" className="px-6 py-3 text-lg">
              Get Started, It&apos;s Free
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Hero;
