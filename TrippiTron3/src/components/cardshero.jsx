import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { FaMapMarkedAlt, FaUsers, FaWallet, FaCamera, FaGlobe } from "react-icons/fa";
import React from 'react'

const features = [
  {
    title: "Personalized Itineraries",
    description: "AI-crafted travel plans tailored to your interests, budget, and time.",
    icon: <FaMapMarkedAlt size={40} className="text-blue-500" />,
  },
  {
    title: "AI-Powered Recommendations",
    description: "Discover the best places, restaurants, and activities personalized using AI.",
    icon: <FaGlobe size={40} className="text-green-500" />,
  },
  {
    title: "Budget-Friendly Plans",
    description: "Get affordable travel recommendations that fit your budget.",
    icon: <FaWallet size={40} className="text-yellow-500" />,
  },
  {
    title: "Travel Photos & Blogs",
    description: "Explore authentic travel stories and stunning photography.",
    icon: <FaCamera size={40} className="text-purple-500" />,
  },
  {
    title: "Travel With Friends or Family",
    description: "Plan trips together, collaborate on itineraries, and make memories.",
    icon: <FaUsers size={40} className="text-pink-500" />,
  },
  {
    title: "Navigate with Google Maps",
    description: "Get real-time directions and explore nearby attractions with Google Maps.",
    icon: <FaMapMarkedAlt size={40} className="text-red-500" />,
  },
];


// export default cardshero


function Function() {
  return (
    <div className="py-6 bg-gray-50">
      <h2 className="text-4xl font-bold text-center mb-10">Why Choose TrippiTron?</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 px-8 md:px-16">
        {features.map((feature, index) => (
          <Card key={index} className="hover:shadow-xl transition-transform transform hover:scale-105">
            <CardHeader>
              {feature.icon}
              <CardTitle className="mt-4 text-xl">{feature.title}</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600">{feature.description}</p>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  )
}

export default Function

