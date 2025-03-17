// import React, { useEffect, useState } from 'react'
// import { Button } from '../ui/button'
// import {
//   Popover,
//   PopoverContent,
//   PopoverTrigger,
// } from "@/components/ui/popover"
// import { googleLogout } from '@react-oauth/google';
// import {
//   Dialog,
//   DialogContent,
//   DialogDescription,
//   DialogHeader,
// } from "@/components/ui/dialog";
// import { FcGoogle } from "react-icons/fc";
// import { useGoogleLogin } from "@react-oauth/google";
// import axios from 'axios';
// import { Link } from 'react-router-dom';




// function Header() {
//     const [openDialog, setOpenDialog] = useState(false);
  

//   const user=JSON.parse(localStorage.getItem('user'));
  
//   const login = useGoogleLogin({
//       onSuccess: (codeResp) => {
//         console.log(codeResp);
//         GetUserProfile(codeResp);
//       },
//       onError: (error) => console.log(error),
//     });

//   useEffect(()=>{
//     // console.log(user)

//   },[])

//   const GetUserProfile = (tokenInfo) => {
//     axios
//       .get(
//         `https://www.googleapis.com/oauth2/v2/userinfo?access_token=${tokenInfo.access_token}`,
//         {
//           headers: {
//             Authorization: `Bearer ${tokenInfo.access_token}`,
//             Accept: "application/json",
//           },
//         }
//       )
//       .then((resp) => {
//         console.log(resp);
//         localStorage.setItem("user", JSON.stringify(resp.data));
//         setOpenDialog(false);
//         window.location.reload();
//       });
//   };


//   return (
//     <div className='p-3 shadow-md flex justify-between px-5'>
//       <img src="/logo.png" height={200} width={150}/>
//       <div>
//         {user?
//         <div className='flex items-center gap-5'>
//               <Button onClick={() => window.location.href = '/create-trip'} variant="outline" className="rounded-full">Create Trip</Button>
               
//               <Button onClick={() => window.location.href = '/my-trips'} variant="outline" className="rounded-full">My Trips</Button>

  
//           <Popover>
//            <PopoverTrigger><img src={user?.picture} className='h-[35px] w-[35px] rounded-full'/></PopoverTrigger>
//              <PopoverContent><h2 className='cursor-pointer' 
//               onClick={()=>{
//               googleLogout();
//               localStorage.clear();
//               window.location.reload();
//              }}>Logout</h2></PopoverContent>
//           </Popover>

//         </div>:<Button onClick={()=>setOpenDialog(true)}>Sign In</Button>}
//       </div>
//       <Dialog open={openDialog}>
//         <DialogContent>
//           <DialogHeader>
//             <DialogDescription>
//               <img src="/logo.png" width={200} height={200} />
//               <h2 className="text-2xl font-bold mt-7">Sign In With Google</h2>
//               <p>Sign in to the App with your Google Account securely</p>
//               <Button onClick={login} className="mt-5 w-full flex gap-4 ">
//                 <FcGoogle className="h-7 w-7" />
//                 Sign In With Google
//               </Button>
//             </DialogDescription>
//           </DialogHeader>
//         </DialogContent>
//       </Dialog>
//     </div>
//   )
// }

// export default Header


import React, { useEffect, useState } from "react";
import { Button } from "../ui/button";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { googleLogout } from "@react-oauth/google";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
} from "@/components/ui/dialog";
import { FcGoogle } from "react-icons/fc";
import { useGoogleLogin } from "@react-oauth/google";
import axios from "axios";
import { Link } from "react-router-dom";
import { IoMenu, IoClose } from "react-icons/io5"; // Icons for mobile menu

function Header() {
  const [openDialog, setOpenDialog] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false); // State for mobile menu
  const user = JSON.parse(localStorage.getItem("user"));

  const login = useGoogleLogin({
    onSuccess: (codeResp) => {
      console.log(codeResp);
      GetUserProfile(codeResp);
    },
    onError: (error) => console.log(error),
  });

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
        window.location.reload();
      });
  };

  return (
    <header className="p-3 shadow-md flex justify-between items-center px-5 w-full">
      {/* Left Section - Logo */}
      <div className="flex items-center gap-3">
        <img src="/logo.png" alt="Logo" className="h-12 w-auto" />
      </div>

      {/* Mobile Menu Button */}
      <button
        className="block sm:hidden text-2xl"
        onClick={() => setMenuOpen(!menuOpen)}
      >
        {menuOpen ? <IoClose /> : <IoMenu />}
      </button>

      {/* Desktop Navigation */}
      <nav className="hidden sm:flex items-center gap-4">
        {user ? (
          <div className="flex items-center gap-3">
            <Button
              onClick={() => (window.location.href = "/create-trip")}
              variant="outline"
              className="rounded-full"
            >
              Create Trip
            </Button>
            <Button
              onClick={() => (window.location.href = "/my-trips")}
              variant="outline"
              className="rounded-full"
            >
              My Trips
            </Button>

            {/* Profile Dropdown */}
            <Popover>
              <PopoverTrigger>
                <img
                  src={user?.picture}
                  className="h-10 w-10 rounded-full object-cover"
                />
              </PopoverTrigger>
              <PopoverContent>
                <h2
                  className="cursor-pointer text-center"
                  onClick={() => {
                    googleLogout();
                    localStorage.clear();
                    window.location.reload();
                  }}
                >
                  Logout
                </h2>
              </PopoverContent>
            </Popover>
          </div>
        ) : (
          <Button onClick={() => setOpenDialog(true)}>Sign In</Button>
        )}
      </nav>

      {/* Mobile Navigation */}
      {menuOpen && (
        <nav className="absolute top-16 left-0 w-full bg-white shadow-md flex flex-col items-center gap-3 py-4 sm:hidden">
          {user ? (
            <>
              <Button
                onClick={() => (window.location.href = "/create-trip")}
                variant="outline"
                className="w-[80%] rounded-full"
              >
                Create Trip
              </Button>
              <Button
                onClick={() => (window.location.href = "/my-trips")}
                variant="outline"
                className="w-[80%] rounded-full"
              >
                My Trips
              </Button>
              <div className="flex flex-col items-center gap-2">
                <img
                  src={user?.picture}
                  className="h-12 w-12 rounded-full object-cover"
                />
                <button
                  className="text-red-500 font-semibold"
                  onClick={() => {
                    googleLogout();
                    localStorage.clear();
                    window.location.reload();
                  }}
                >
                  Logout
                </button>
              </div>
            </>
          ) : (
            <Button onClick={() => setOpenDialog(true)} className="w-[80%]">
              Sign In
            </Button>
          )}
        </nav>
      )}

      {/* Sign In Dialog */}
      <Dialog open={openDialog}>
        <DialogContent>
          <DialogHeader>
            <DialogDescription className="text-center">
              <img src="/logo.png" width={200} height={200} className="mx-auto" />
              <h2 className="text-2xl font-bold mt-5">Sign In With Google</h2>
              <p className="text-gray-600">Securely sign in to the app</p>
              <Button onClick={login} className="mt-5 w-full flex gap-4">
                <FcGoogle className="h-7 w-7" />
                Sign In With Google
              </Button>
            </DialogDescription>
          </DialogHeader>
        </DialogContent>
      </Dialog>
    </header>
  );
}

export default Header;
