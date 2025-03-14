import { GetPlaceDetails, PHOTO_REF_URL } from "@/service/GlobalApi";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function HotelCardItem({ hotel }) {

  const [photoUrl,setPhotoUrl]=useState();
    useEffect(()=>{
    hotel&&GetPlacePhoto();
    }, [hotel])
  
    const GetPlacePhoto=async()=>{
      const data={
        textQuery:hotel?.hotelName
      }
      const result=await GetPlaceDetails(data).then(resp=>{
        console.log(resp.data.places[0].photos[4].name);
  
        const PhotoUrl=PHOTO_REF_URL.replace('{NAME}', resp.data.places[0].photos[1].name);
        setPhotoUrl(PhotoUrl)
      })
    }
    
  return (
    <Link
      key={hotel.id}
      to={
        "https://www.google.com/maps/search/?api=1&query=" +
        hotel.hotelName +
        "," +
        hotel?.hotelAddress
      }
      target="_blank"
    >
      {/* // <Link key={hotel.id} to={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(`${hotel?.hotelName}, ${hotel?.hotelAddress}`)}`} */}
      {/* // target="_blank" rel="noopener noreferrer"> */}
      <div className="hover:scale-105 transition-all cursor-pointer">
        <img src={photoUrl} className="rounded-xl h-[200px] w-full object-cover" />
        <div className="my-2 flex flex-col gap-2">
          <div  className=""><h2 className="font-medium ">{hotel?.hotelName}</h2></div>
          <h2 className="text-xs text-gray-500">📍 {hotel?.hotelAddress}</h2>
          <h2 className="text-sm">
            {hotel?.price?.amount} {hotel?.price?.currency}
          </h2>
          <h2>⭐ {hotel?.rating}</h2>
          <h2 className="text-gray-400">{hotel?.description}</h2>
        </div>
      </div>
    </Link>
  );
}

export default HotelCardItem;
