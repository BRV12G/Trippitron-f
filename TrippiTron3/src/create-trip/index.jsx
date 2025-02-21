import React from 'react'

function CreateTrip() {
  return (
    <div className='sm:px-10 md:px-32 lg:px-56 xl:px-10 px-5 mt-10'>
      <h2 className='text-3xl font-bold text-center text-orange-500 mb-10 '>Plan Your Perfect Getaway – Just a Few Clicks Away!</h2>
      <div className='flex justify-between mb-10'>
        <img src="/travel_location5.jpg" height={280} width={201} className='rounded-md shadow-md'></img>
        <img src="/travel_location6.jpg" height={280} width={201} className='rounded-md shadow-md'></img>
        <img src="/travel_location7.jpg" height={280} width={201} className='rounded-md shadow-md'></img>
        <img src="/travel_location8.jpg" height={280} width={201} className='rounded-md shadow-md'></img>
        <img src="/travel_location9.jpg" height={280} width={201} className='rounded-md shadow-md'></img>
        {/* <img src="/travel_location10.jpg" height={280} width={201} className='rounded-md shadow-md'></img> */}
        <img src="/travel_location11.jpg" height={280} width={201} className='rounded-md shadow-md'></img>
        {/* <img src="/travel_location12.jpg" height={280} width={201} className='rounded-md shadow-md'></img> */}
        <img src="/travel_location13.jpg" height={280} width={201} className='rounded-md shadow-md'></img>
        {/* <img src="/travel_location14.jpg" height={280} width={201} className='rounded-md shadow-md'></img> */}
      </div>
      <p className='text-center text-gray-500 text-lg'>Ready to explore? Tell us your destination, preferences, and vibe—TrippiTron’s AI will craft the perfect itinerary, from must-visit spots to cozy stays. No stress, just adventure!</p>
    </div>
  )
}

export default CreateTrip
