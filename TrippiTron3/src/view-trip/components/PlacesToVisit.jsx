// import React from 'react'
// import PropTypes from 'prop-types';


// function PlacesToVisit({trip}) {
//   return (
//     <div>
//       <h2 className='font-bold text-lg'>Itinerary</h2>
//       <div>
//         {trip.tripData?.itinerary.map((item,index)=>(
//             <div key={index}>
//                {/* <h2 className='font-bold text-lg'>{item.itinerary}</h2> */}
//             </div>
//         ))}
//       </div>
//     </div>
//   )
// }

// PlacesToVisit.propTypes = {
//     trip: PropTypes.shape({
//       tripData: PropTypes.shape({
//         itinerary: PropTypes.arrayOf(PropTypes.object).isRequired,
//       }),
//     }).isRequired,
//   };
// export default PlacesToVisit










import React from 'react';
import PropTypes from 'prop-types';
import PlaceCardItem from './PlaceCardItem';

function PlacesToVisit({ trip }) {
  return (
    <div className='mt-10'>
      <h2 className='font-bold text-2xl capitalize'>Itinerary</h2>
      <div>
        {trip.tripData?.itinerary &&
          Object.entries(trip.tripData.itinerary).sort(([dayA], [dayB]) => dayA.localeCompare(dayB, undefined, { numeric: true })).map(([day, data], index) => (
            <div key={index} className='mb-4'>
              <h2 className='font-semibold text-lg capitalize'>{day}</h2>
              <div className='grid md:grid-cols-2 gap-5' >
              {data.plan.map((place, placeIndex) => (
                <div key={placeIndex} className=''>
                  <h2 className='font-medium text-sm text-orange-600'>{place.timeTravel}</h2>
                  {/* <h3 className='font-semibold'>{place.placeName}</h3>
                  <p>{place.placeDetails}</p>
                  <p><strong>Ticket Pricing:</strong> {place.ticketPricing}</p>
                  <img
                    src='/travel_location11.jpg'
                    alt={place.placeName}
                    className='w-full h-48 object-cover rounded-md mt-2'
                  /> */}
                  <PlaceCardItem place={place}/>
                </div>
              ))}
              </div>
            </div>
          ))}
      </div>
    </div>
  );
}

PlacesToVisit.propTypes = {
  trip: PropTypes.shape({
    tripData: PropTypes.shape({
      itinerary: PropTypes.objectOf(
        PropTypes.shape({
          plan: PropTypes.arrayOf(
            PropTypes.shape({
              geoCoordinates: PropTypes.shape({
                latitude: PropTypes.number.isRequired,
                longitude: PropTypes.number.isRequired,
              }),
              placeDetails: PropTypes.string.isRequired,
              placeImageUrl: PropTypes.string.isRequired,
              placeName: PropTypes.string.isRequired,
              ticketPricing: PropTypes.string.isRequired,
            })
          ).isRequired,
        })
      ).isRequired,
    }),
  }).isRequired,
};

export default PlacesToVisit;

