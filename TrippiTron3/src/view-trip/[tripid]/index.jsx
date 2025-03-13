import { db } from "@/service/firebaseConfig";
import { doc, getDoc } from "firebase/firestore";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { toast } from "sonner";

function Viewtrip() {
  const { tripid } = useParams();
  const [trip,setTrip]=useState([]);

   useEffect(()=>{
    tripid&&GetTripData();
   },[tripid])
  const GetTripData = async() => {
    const docRef = doc(db, "AItrips",tripid);
    const docSnap= await getDoc(docRef);

    if(docSnap.exists()){
        console.log("Document:",docSnap.data());
        setTrip(docSnap.data());
    }
    else{
        console.log("No Such Document");
        toast("No Trip Found!")
    }

  };


  return (
    <div>
        {/* Information section */}

        {/* recommended Hotels */}

        {/* Daily Plan */}

        {/* Footer */}
    </div>
  ) 
}

export default Viewtrip;
