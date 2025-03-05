import { Input } from '../components/ui/input';
import React, { useState } from 'react'
import GooglePlacesAutocomplete from 'react-google-places-autocomplete'


function CreateTrip() {
  const [place,setPlace] = useState();
  return (
    <div className='sm:px-10 md:px-32 lg:px-56 xl:px-10 px-5 mt-5 mb-5'>
      <h2 className='text-3xl font-bold text-center text-orange-500 mb-5'>Plan Your Perfect Getaway – Just a Few Clicks Away!</h2>
      <div className='flex justify-between mb-5'>
        <img src="/travel_location5.jpg" height={280} width={201} className='rounded-md shadow-md'></img>
        <img src="/travel_location6.jpg" height={280} width={201} className='rounded-md shadow-md'></img>
        <img src="/travel_location7.jpg" height={280} width={201} className='rounded-md shadow-md'></img>
        <img src="/travel_location8.jpg" height={280} width={201} className='rounded-md shadow-md'></img>
        <img src="/travel_location9.jpg" height={280} width={201} className='rounded-md shadow-md'></img>
        {/* <img src="/travel_location10.jpg" height={280} width={201} className='rounded-md shadow-md'></img>  */}
        <img src="/travel_location11.jpg" height={280} width={201} className='rounded-md shadow-md'></img>
        {/* <img src="/travel_location12.jpg" height={280} width={201} className='rounded-md shadow-md'></img> */}
        <img src="/travel_location13.jpg" height={280} width={201} className='rounded-md shadow-md'></img>
        {/* <img src="/travel_location14.jpg" height={280} width={201} className='rounded-md shadow-md'></img> */}
      </div>
      <p className='text-center text-gray-500 text-lg'>Ready to explore? Tell us your destination, preferences, and vibe—TrippiTron’s AI will craft the perfect itinerary, from must-visit spots to cozy stays. No stress, just adventure!</p>


      <div className='my-5 flex flex-col gap-10'>
        <div>
          <h2 className='text-xl font-medium mb-5 ml-1'>Enter your preferred destination</h2>
          <GooglePlacesAutocomplete
            apiKey={import.meta.env.VITE_GOOGLE_PLACE_API_KEY}
            selectProps={{
              place,
              onChange:(v)=>{setPlace(v);console.log(v)}
            }} 
          />
        </div>
        <div>
           <h2 className='text-xl font-medium mb-5 ml-1'>How many days are you Planning your Trip?</h2>
          <Input placeholder={'Ex.3'} type="number" />
        </div>
      </div>
    </div>
  )
}

console.log(import.meta.env.VITE_GOOGLE_PLACE_API_KEY);
export default CreateTrip;





// import React, { useEffect, useRef } from 'react';

// function CreateTrip() {
//   const inputRef = useRef(null);

//   useEffect(() => {
//     const loadGoogleMapsScript = () => {
//       if (!document.querySelector('#google-maps')) {
//         const script = document.createElement('script');
//         script.src = `https://maps.googleapis.com/maps/api/js?key=${import.meta.env.VITE_GOOGLE_MAPS_API_KEY}&libraries=places`;
//         script.async = true;
//         script.defer = true;
//         script.id = 'google-maps';
//         document.head.appendChild(script);

//         script.onload = () => {
//           initAutocomplete();
//         };
//       } else {
//         initAutocomplete();
//       }
//     };

//     const initAutocomplete = () => {
//       if (window.google && window.google.maps) {
//         const autocomplete = new window.google.maps.places.Autocomplete(inputRef.current, {
//           types: ['geocode'],
//           fields: ['place_id', 'geometry', 'formatted_address', 'name'],
//         });

//         autocomplete.addListener('place_changed', () => {
//           const place = autocomplete.getPlace();
//           console.log('Selected Place:', place);
//         });
//       }
//     };

//     loadGoogleMapsScript();
//   }, []);

//   return (
//     <div className='sm:px-10 md:px-32 lg:px-56 xl:px-10 px-5 mt-5 mb-5'>
//       <h3 className='text-3xl font-bold text-center text-orange-500 mb-5'>
//         Plan Your Perfect Getaway – Just a Few Clicks Away!
//       </h3> 
      
//       <div className='flex justify-between mb-5 overflow-x-auto space-x-4'>
//         <img src='/travel_location5.jpg' height={280} width={201} className='rounded-md shadow-md' alt='Destination' />
//         <img src='/travel_location6.jpg' height={280} width={201} className='rounded-md shadow-md' alt='Destination' />
//         <img src='/travel_location7.jpg' height={280} width={201} className='rounded-md shadow-md' alt='Destination' />
//         <img src='/travel_location8.jpg' height={280} width={201} className='rounded-md shadow-md' alt='Destination' />
//         <img src='/travel_location9.jpg' height={280} width={201} className='rounded-md shadow-md' alt='Destination' />
//         <img src='/travel_location11.jpg' height={280} width={201} className='rounded-md shadow-md' alt='Destination' />
//         <img src='/travel_location13.jpg' height={280} width={201} className='rounded-md shadow-md' alt='Destination' />
//       </div>

//       <p className='text-center text-gray-500 text-lg'>
//         Ready to explore? Tell us your destination, preferences, and vibe—TrippiTron’s AI will craft the perfect itinerary, from must-visit spots to cozy stays. No stress, just adventure!
//       </p>

//       <div className='my-5'>
//         <h2 className='text-xl font-medium mb-3 ml-1'>Enter your preferred destination</h2>
//         <input 
//           ref={inputRef} 
//           type='text' 
//           className='w-full p-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-orange-500' 
//           placeholder='Search for a destination...'
//         />
//       </div>
//     </div>
//   );
// }

// export default CreateTrip;


