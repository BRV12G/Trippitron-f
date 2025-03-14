import React from 'react'
import PropTypes from "prop-types";
import HotelCardItem from './HotelCardItem';


function Hotels({trip}) {
  return (
    <div>
      <h2 className='font-bold text-xl mt-5'>Hotel Recommendation</h2>
      <div className='grid grid-cols-2 md:grid-cols-3 xl:grid-cols-3 gap-8'>
        {trip?.tripData?.hotelOptions?.map((hotel,index)=>(
           <HotelCardItem hotel={hotel} key={hotel.id}/> 
        ))}
      </div>
    </div>
  )
}

Hotels.propTypes = {
  trip: PropTypes.object,
};


export default Hotels;
