import React from 'react'
import PropTypes from "prop-types";
import { Link } from 'react-router-dom';


function Hotels({trip}) {
  return (
    <div>
      <h2 className='font-bold text-xl mt-5'>Hotel Recommendation</h2>
      <div className='grid grid-cols-2 md:grid-cols-3 xl:grid-cols-5 gap-5'>
        {trip?.tripData?.hotelOptions?.map((hotel,index)=>(
            <Link key={hotel.id} to={'https://www.google.com/maps/search/?api=1&query='+hotel.hotelName+","+ hotel?.hotelAddress} target='_blank'>
            {/* // <Link key={hotel.id} to={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(`${hotel?.hotelName}, ${hotel?.hotelAddress}`)}`} */}
            {/* // target="_blank" rel="noopener noreferrer"> */}
            <div  className='hover:scale-105 transition-all cursor-pointer'>
                <img src='/travel_location13.jpg' className='rounded-xl'/>
                <div className='my-2 flex flex-col gap-2'>
                    <h2 className='font-medium'>{hotel?.hotelName}</h2>
                    <h2 className='text-xs text-gray-500'>📍 {hotel?.hotelAddress}</h2>
                    <h2 className='text-sm'>{hotel?.price?.amount} {hotel?.price?.currency}</h2>
                    <h2>⭐ {hotel?.rating}</h2>
                    <h2 className='text-gray-400'>{hotel?.description}</h2>
                </div>
            </div>
            </Link>
        ))}
      </div>
    </div>
  )
}

Hotels.propTypes = {
  trip: PropTypes.object,
};


export default Hotels;
