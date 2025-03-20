// import { useState } from "react";
// import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
// import { Swiper, SwiperSlide } from "swiper/react";
// import 'swiper/css';
// import 'swiper/css/pagination';
// import { Pagination } from 'swiper/modules';

// const destinations = [
//     {
//       name: "Paris, France",
//       description: "Explore the City of Light, home to the iconic Eiffel Tower and exquisite cuisine.",
//       image: "./paris.jpg"
//     },
//     {
//       name: "Tokyo, Japan",
//       description: "A bustling metropolis blending tradition and modernity.",
//       image: "./tokyo.jpg"
//     },
//     {
//       name: "Bali, Indonesia",
//       description: "Discover serene beaches, lush landscapes, and vibrant culture.",
//       image: "./bali.jpg"
//     },
//     {
//       name: "New York City, USA",
//       description: "The city that never sleeps, offering iconic landmarks and world-class entertainment.",
//       image: "./york.jpg"
//     },
//     {
//       name: "Rome, Italy",
//       description: "Step into ancient history with stunning architecture and rich heritage.",
//       image: "/Rome.jpg"
//     },
//     {
//       name: "India",
//       description: "Experience the rich cultural heritage, diverse traditions, and vibrant festivals of India.",
//       image: "./india.jpg"
//     }
//   ];
  

// export default function PopularDestinations() {
//   const [hoveredIndex, setHoveredIndex] = useState(null);

//   return (
//     <div className="py-12 bg-white mx-14">
//       <h2 className="text-4xl font-bold text-center mb-10">Popular Destinations</h2>
//       <Swiper
//         slidesPerView={1}
//         spaceBetween={20}
//         pagination={{ clickable: true }}
//         breakpoints={{
//           640: { slidesPerView: 1 },
//           768: { slidesPerView: 2 },
//           1024: { slidesPerView: 3 },
//         }}
//         modules={[Pagination]}
//         className="px-8 md:px-16"
//       >
//         {destinations.map((destination, index) => (
//           <SwiperSlide key={index}>
//             <Card
//               className="overflow-hidden relative cursor-pointer"
//               onMouseEnter={() => setHoveredIndex(index)}
//               onMouseLeave={() => setHoveredIndex(null)}
//             >
//               <img src={destination.image} alt={destination.name} className="w-full h-80 object-cover" />
//               {hoveredIndex === index && (
//                 <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col items-center justify-center text-white p-6 transition-opacity">
//                   <CardHeader>
//                     <CardTitle>{destination.name}</CardTitle>
//                   </CardHeader>
//                   <CardContent>
//                     <p>{destination.description}</p>
//                   </CardContent>
//                 </div>
//               )}
//             </Card>
//           </SwiperSlide>
//         ))}
//       </Swiper>
//     </div>
//   );
// }



import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Swiper, SwiperSlide } from "swiper/react";
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination, Autoplay } from 'swiper/modules';

const destinations = [
  {
    name: "Paris, France",
    description: "Explore the City of Light, home to the iconic Eiffel Tower and exquisite cuisine.",
    image: "/paris.jpg"
  },
  {
    name: "Tokyo, Japan",
    description: "A bustling metropolis blending tradition and modernity.",
    image: "/tokyo.jpg"
  },
  {
    name: "Bali, Indonesia",
    description: "Discover serene beaches, lush landscapes, and vibrant culture.",
    image: "/bali.jpg"
  },
  {
    name: "New York City, USA",
    description: "The city that never sleeps, offering iconic landmarks and world-class entertainment.",
    image: "/york.jpg"
  },
  {
    name: "Rome, Italy",
    description: "Step into ancient history with stunning architecture and rich heritage.",
    image: "/Rome.jpg"
  },
  {
    name: "India",
    description: "Experience the rich cultural heritage, diverse traditions, and vibrant festivals of India.",
    image: "/india.jpg"
  }
];

export default function PopularDestinations() {
  const [hoveredIndex, setHoveredIndex] = useState(null);

  return (
    <div className="py-12 bg-white mx-12">
      <h2 className="text-4xl font-bold text-center mb-10">Popular Destinations</h2>
      <Swiper
        slidesPerView={1}
        spaceBetween={20}
        pagination={{ clickable: true }}
        autoplay={{ delay: 2000, disableOnInteraction: false }}
        breakpoints={{
          640: { slidesPerView: 1 },
          768: { slidesPerView: 2 },
          1024: { slidesPerView: 3 },
        }}
        modules={[Pagination, Autoplay]}
        className="px-8 md:px-16"
      >
        {destinations.map((destination, index) => (
          <SwiperSlide key={index}>
            <Card
              className="overflow-hidden relative cursor-pointer"
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
            >
              <img src={destination.image} alt={destination.name} className="w-full h-80 object-cover" />
              {hoveredIndex === index && (
                <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col items-center justify-center text-white p-6 transition-opacity">
                  <CardHeader>
                    <CardTitle>{destination.name}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p>{destination.description}</p>
                  </CardContent>
                </div>
              )}
            </Card>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}