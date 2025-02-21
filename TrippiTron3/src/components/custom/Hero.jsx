import React from "react";
import { Button } from "../ui/button";
import { Link } from "react-router-dom";

function Hero() {
  return (
    <div>
      <div className="flex items-center py-4 mx-6 gap-9 shadow-md">
        <img
          src="/travel_location4.jpg"
          height={350}
          width={301}
          className="rounded-md shadow-md"
        />
        <h1 className="font-extrabold text-[55px] text-center">
          <span className="text-orange-500">Dream, Plan, Pack, Explore!</span>
          <br></br>
          Let TrippiTron’s AI craft your perfect adventure! 🌍
        </h1>
        <img
          src="/travel_location3.jpg"
          height={350}
          width={301}
          className="rounded-md shadow-md"
        />
      </div>
      <div className=" py-4 mx-6 gap-9 shadow-md bg-neutral-900 rounded-md">
        <p className="text-white font-semibold text-[20px] text-center mx-auto shadow-lg px-2">
          Your ultimate AI-powered travel companion!<br></br>
          TrippiTron helps you plan perfect itineraries, find the best hotels,
          discover must-visit locations, and craft unforgettable trips, all in
          just a few clicks.<br></br>
          Whether you're a solo traveler, a couple, or a group explorer, our
          smart AI curates personalized travel experiences just for you.
          <br></br>
          Say goodbye to travel stress and hello to seamless adventures!
        </p>
        <div className="flex justify-center mt-4">
          <Link to={'/create-trip'}>
            <Button variant="secondary">Get Started, It's Free</Button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Hero;
