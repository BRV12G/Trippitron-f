import React from 'react'
import PropTypes from "prop-types";


function Hotels({trip}) {
  return (
    <div>
      <h2 className='font-bold text-xl mt-5'>Hotel Recommendation</h2>
      <div className='grid grid-cols-2 md:grid-cols-3 xl:grid-cols-5 gap-5'>
        {trip?.tripData?.hotelOptions?.map((hotel,index)=>(
            <div key={hotel.id} className='hover:scale-105 transition-all cursor-pointer'>
                <img src='/travel_location13.jpg' className='rounded-xl'/>
                <div className='my-2 flex flex-col gap-2'>
                    <h2 className='font-medium'>{hotel?.hotelName}</h2>
                    <h2 className='text-xs text-gray-500'>📍 {hotel?.hotelAddress}</h2>
                    <h2 className='text-sm'>{hotel?.price?.amount} {hotel?.price?.currency}</h2>
                    <h2>⭐ {hotel?.rating}</h2>
                    <h2 className='text-gray-400'>{hotel?.description}</h2>
                </div>
            </div>
        ))}
      </div>
    </div>
  )
}

Hotels.propTypes = {
  trip: PropTypes.object,
};


export default Hotels;
