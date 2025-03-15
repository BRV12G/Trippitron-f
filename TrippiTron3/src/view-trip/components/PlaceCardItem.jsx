import React, { useEffect, useState } from 'react'
import PropTypes from 'prop-types';
import { Button } from '@/components/ui/button';
import { FaMapLocationDot } from "react-icons/fa6";
import { GetPlaceDetails, PHOTO_REF_URL } from '@/service/GlobalApi';


function PlaceCardItem({place}) {


   const [photoUrl,setPhotoUrl]=useState();
    useEffect(()=>{
    place&&GetPlacePhoto();
    }, [place])
  
    const GetPlacePhoto=async()=>{
      const data={
        textQuery:place.placeName
      }
      const result=await GetPlaceDetails(data).then(resp=>{
        console.log(resp.data.places[0].photos[4].name);
  
        const PhotoUrl=PHOTO_REF_URL.replace('{NAME}', resp.data.places[0].photos[1].name);
        setPhotoUrl(PhotoUrl)
      })
    }

  return (
    <div className='border rounded-xl p-3 flex gap-5 mt-2 hover:scale-105 transition-all hover:shadow-lg cursor-pointer'>
      <img src={photoUrl?photoUrl:'/travel_location13.jpg'} alt={place.placeName}
            className='w-[200px] h-[150px]  rounded-xl shadow-lg object-cover'/>
       <div className=''>
         <h3 className='font-bold text-lg'>{place.placeName}</h3>
         <p className='text-sm text-gray-400'>{place.placeDetails}</p>
         <p className='font-medium'>{place.ticketPricing?.currency} {place.ticketPricing?.amount}</p>
         <p>⭐{place.rating}</p>
         <Button className="mt-1" size="sm" onClick={() => window.open(`https://www.google.com/maps/search/?api=1&query=${place.placeName}`, '_blank')}><FaMapLocationDot /></Button>
       </div>
    </div>
  )
}

PlaceCardItem.propTypes = {
    place: PropTypes.shape({
      placeName: PropTypes.string.isRequired,
    }).isRequired,
  };
  

export default PlaceCardItem
