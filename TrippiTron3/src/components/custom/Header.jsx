import React, { useEffect, useState } from 'react'
import { Button } from '../ui/button'
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover"
import { googleLogout } from '@react-oauth/google';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
} from "@/components/ui/dialog";
import { FcGoogle } from "react-icons/fc";
import { useGoogleLogin } from "@react-oauth/google";
import axios from 'axios';



function Header() {
    const [openDialog, setOpenDialog] = useState(false);
  

  const user=JSON.parse(localStorage.getItem('user'));
  
  const login = useGoogleLogin({
      onSuccess: (codeResp) => {
        console.log(codeResp);
        GetUserProfile(codeResp);
      },
      onError: (error) => console.log(error),
    });

  useEffect(()=>{
    // console.log(user)

  },[])

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
    <div className='p-3 shadow-md flex justify-between px-5'>
      <img src="/logo.png" height={200} width={150}/>
      <div>
        {user?
        <div className='flex items-center gap-5'>
          <a href="/my-trips">
          <Button variant="outline" className="rounded-full">My Trips</Button>
          </a>
          <Popover>
           <PopoverTrigger><img src={user?.picture} className='h-[35px] w-[35px] rounded-full'/></PopoverTrigger>
             <PopoverContent><h2 className='cursor-pointer' 
              onClick={()=>{
              googleLogout();
              localStorage.clear();
              window.location.reload();
             }}>Logout</h2></PopoverContent>
          </Popover>

        </div>:<Button onClick={()=>setOpenDialog(true)}>Sign In</Button>}
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
  )
}

export default Header
