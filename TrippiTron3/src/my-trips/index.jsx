import { db } from '@/service/firebaseConfig';
import { collection, getDocs, where } from 'firebase/firestore';
import React, { useEffect, useState }  from 'react'
import { useNavigation } from 'react-router-dom';
import { query } from 'firebase/firestore';
import UserTripCardItem from './components/UserTripCardItem';
import Footer from '@/view-trip/components/Footer';

function MyTrips() {
  const navigation=useNavigation();
  const [userTrips,setUserTrips]=React.useState([]);

    useEffect(()=>{
        GetUserTrips();
    },[])
    const GetUserTrips=async()=>{
        const user=JSON.parse(localStorage.getItem('user'));
        if(!user){
            navigation('/');
            return;
        }
        setUserTrips([]);
        const q=query(collection(db,'AITrips'),where('userEmail','==', user?.email));
        const querySnapshot = await getDocs(q);
//         querySnapshot.forEach((doc) => {
//         // doc.data() is never undefined for query doc snapshots
//        console.log(doc.id, " => ", doc.data());
//        setUserTrips(prevVal=>[...prevVal, doc.data()])
// });
const trips = querySnapshot.docs.map((doc) => doc.data());
setUserTrips(trips);


    }
  return (
    <div className='sm:px-10 md:px-32 lg:px-56 xl:px-10 px-5 mt-5 mb-5 '>
      <h2 className='font-bold text-3xl'>My Trips</h2>

      <div className='grid grid-cols-2 md:grid-cols-3  gap-5 mt-5'>
        {userTrips?.length>0?userTrips.map((trip,index)=>(
          <UserTripCardItem key={trip.id} trip={trip} />
        ))
      :[1,2,3,4,5,6,].map((item,index)=>(
        <div key={index} className='h-[250px] w-full bg-slate-200 animate-pulse rounded-xl'>

        </div>
      ))}
      </div>
      <Footer />
    </div>
  )
}

export default MyTrips
