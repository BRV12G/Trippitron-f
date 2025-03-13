import {
  AI_PROMPT,
  SelectBudgetOptions,
  SelectTravelesList,
} from "@/constants/options";
import { Input } from "../components/ui/input";
import React, { useEffect, useState } from "react";
import GooglePlacesAutocomplete from "react-google-places-autocomplete";
import { Button } from "@/components/ui/button";
import { toast } from "sonner";
import { chatSession } from "../service/AiModel";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
} from "@/components/ui/dialog";
import { FcGoogle } from "react-icons/fc";
import { useGoogleLogin } from "@react-oauth/google";
import axios from "axios";
import { doc, setDoc } from "firebase/firestore";
import { db } from "@/service/firebaseConfig";
import { AiOutlineLoading3Quarters } from "react-icons/ai";
import { useNavigate } from "react-router-dom";

function CreateTrip() {
  const [place, setPlace] = useState();
  const [formData, setFormData] = useState([]);
  const [openDialog, setOpenDialog] = useState(false);
  const [loading, setLoading] = useState(false);

  const navigate=useNavigate();
  const handleInputChange = (name, value) => {
    if (name == "noOfDays" && value > 62) {
      console.log("please enter trip days less than 62");
      return;
    }

    setFormData({
      ...formData,
      [name]: value,
    });
  };

  useEffect(() => {
    console.log(formData);
  }, [formData]);

  const login = useGoogleLogin({
    onSuccess: (codeResp) => {
      console.log(codeResp);
      GetUserProfile(codeResp);
    },
    onError: (error) => console.log(error),
  });
  const OnGenerateTrip = async () => {
    const user = localStorage.getItem("user");

    if (!user) {
      setOpenDialog(true);
      return;
    }

    if (
      (formData?.noOfDays > 62 && !formData?.location) ||
      !formData?.budget ||
      !formData.traveler
    ) {
      toast("Please Fill All Details");
      return;
    }
    setLoading(true);
    const FINAL_PROMPT = AI_PROMPT.replace(
      "{location}",
      formData?.location?.label
    )
      .replace("{totalDays}", formData.noOfDays)
      .replace("{traveler}", formData.traveler)
      .replace("{budget}", formData.budget)
      .replace("{totalDays}", formData.noOfDays);
    console.log(FINAL_PROMPT);

    const result = await chatSession.sendMessage(FINAL_PROMPT);

    console.log(result?.response?.text());
    setLoading(false);
    SaveAiTrip(result?.response?.text());
  };

  const SaveAiTrip = async (TripData) => {
    setLoading(true);
    // Add a new document in collection "cities"
    const user = JSON.parse(localStorage.getItem("user"));
    const docId = Date.now().toString();
    await setDoc(doc(db, "AITrips", docId), {
      userSelection: formData,
      tripData: JSON.parse(TripData),
      userEmail: user?.email,
      id: docId,
    });
    setLoading(false);
    navigate("/view-trip/" + docId);
  };

  const GetUserProfile = (tokenInfo) => {
    axios
      .get(
        `https://www.googleapis.com/oauth2/v2/userinfo?access_token=${tokenInfo.access_token}`,
        {
          headers: {
            Authorization: `Bearer ${tokenInfo.access_token}`,
            Accept: "application/json",
          },
        }
      )
      .then((resp) => {
        console.log(resp);
        localStorage.setItem("user", JSON.stringify(resp.data));
        setOpenDialog(false);
        OnGenerateTrip();
      });
  };

  return (
    <div className="sm:px-10 md:px-32 lg:px-56 xl:px-10 px-5 mt-5 mb-5 ">
      <h2 className="text-3xl font-bold text-center text-orange-500 mb-5">
        Plan Your Perfect Getaway – Just a Few Clicks Away!
      </h2>
      <div className="flex justify-between mb-5">
        <img
          src="/travel_location5.jpg"
          height={280}
          width={201}
          className="rounded-md shadow-md"
        ></img>
        <img
          src="/travel_location6.jpg"
          height={280}
          width={201}
          className="rounded-md shadow-md"
        ></img>
        <img
          src="/travel_location7.jpg"
          height={280}
          width={201}
          className="rounded-md shadow-md"
        ></img>
        <img
          src="/travel_location8.jpg"
          height={280}
          width={201}
          className="rounded-md shadow-md"
        ></img>
        <img
          src="/travel_location9.jpg"
          height={280}
          width={201}
          className="rounded-md shadow-md"
        ></img>
        {/* <img src="/travel_location10.jpg" height={280} width={201} className='rounded-md shadow-md'></img>  */}
        <img
          src="/travel_location11.jpg"
          height={280}
          width={201}
          className="rounded-md shadow-md"
        ></img>
        {/* <img src="/travel_location12.jpg" height={280} width={201} className='rounded-md shadow-md'></img> */}
        <img
          src="/travel_location13.jpg"
          height={280}
          width={201}
          className="rounded-md shadow-md"
        ></img>
        {/* <img src="/travel_location14.jpg" height={280} width={201} className='rounded-md shadow-md'></img> */}
      </div>
      <p className="text-center text-gray-500 text-lg">
        Ready to explore? Tell us your destination, preferences, and
        vibe—TrippiTron’s AI will craft the perfect itinerary, from must-visit
        spots to cozy stays. No stress, just adventure!
      </p>

      <div className="my-5 flex flex-col gap-10">
        <div>
          <h2 className="text-xl font-medium mb-5 ml-1">
            Enter your preferred destination
          </h2>
          <GooglePlacesAutocomplete
            apiKey={import.meta.env.VITE_GOOGLE_PLACE_API_KEY}
            selectProps={{
              place,
              onChange: (v) => {
                setPlace(v);
                handleInputChange("location", v);
              },
            }}
          />
        </div>
        <div>
          <h2 className="text-xl font-medium mb-5 ml-1">
            How many days are you Planning your Trip?
          </h2>
          <Input
            placeholder={"Ex.3"}
            type="number"
            onChange={(e) => handleInputChange("noOfDays", e.target.value)}
          />
        </div>
      </div>
      <div>
        <h2 className="text-xl font-medium mb-5 ml-1">What is Your Budget?</h2>
        <div className="grid grid-cols-3 gap-24 mt-5 mx-auto max-w-4xl">
          {SelectBudgetOptions.map((item, index) => (
            <div
              key={index}
              onClick={() => handleInputChange("budget", item.title)}
              className={`p-4 border rounded-lg hover:shadow-xl cursor-pointer              
            ${formData?.budget == item.title && "shadow-lg border-black"}
            `}
            >
              <h2 className="text-4xl">{item.icon}</h2>
              <h2 className="font-bold text-lg">{item.title}</h2>
              <h2 className="text-sm text-gray-500">{item.desc}</h2>
            </div>
          ))}
        </div>
      </div>

      <div className="mt-5">
        <h2 className="text-xl font-medium mb-5 ml-1">
          Who do You Plan to Travel with?
        </h2>
        <div className="grid grid-cols-4 gap-24 mt-5 mx-auto max-w-6xl">
          {SelectTravelesList.map((item, index) => (
            <div
              key={index}
              onClick={() => handleInputChange("traveler", item.people)}
              className={`p-4 border rounded-lg hover:shadow-xl cursor-pointer
            ${formData?.traveler == item.people && "shadow-lg border-black"}
            `}
            >
              <h2 className="text-4xl">{item.icon}</h2>
              <h2 className="font-bold text-lg">{item.title}</h2>
              <h2 className="text-sm text-gray-500">{item.desc}</h2>
            </div>
          ))}
        </div>
      </div>

      <div className="my-10 text-center">
        <Button disabled={loading} onClick={OnGenerateTrip}>
          {loading ? (
            <AiOutlineLoading3Quarters className="h-7 w-7 animate-spin" />
          ) : (
            "Generate Trip"
          )}
        </Button>
      </div>
      <Dialog open={openDialog}>
        <DialogContent>
          <DialogHeader>
            <DialogDescription>
              <img src="/logo.png" width={200} height={200} />
              <h2 className="text-2xl font-bold mt-7">Sign In With Google</h2>
              <p>Sign in to the App with your Google Account securely</p>
              <Button onClick={login} className="mt-5 w-full flex gap-4 ">
                <FcGoogle className="h-7 w-7" />
                Sign In With Google
              </Button>
            </DialogDescription>
          </DialogHeader>
        </DialogContent>
      </Dialog>
    </div>
  );
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
