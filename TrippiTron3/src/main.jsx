import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
// import React from 'react'
// import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import CreateTrip from './create-trip/index.jsx'
import Header from './components/custom/Header'
// import { Toaster } from './components/ui/sonner.jsx'
// import { RouterProvider } from 'react-router'
import { Toaster } from "@/components/ui/sonner"
import { GoogleOAuthProvider } from '@react-oauth/google';
// import Viewtrip from './view-trip/[tripId]/index.jsx';
import MyTrips from './my-trips'
import { lazy, Suspense } from 'react';
const Viewtrip = lazy(() => import("./view-trip/[tripId]/index.jsx"));



const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
  },
  {
    path: '/create-trip',
    element: <CreateTrip />,
  },
  // {
  //   path:'/view-trip/:tripId',
  //   element:<Viewtrip />
  // },
  {
    path: '/view-trip/:tripId',
    element: (
      <Suspense fallback={<div>Loading...</div>}>
        <Viewtrip />
      </Suspense>
    ),
  },
  {
    path:'/my-trips',
    element: <MyTrips />
  }


])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <GoogleOAuthProvider clientId={import.meta.env.VITE_GOOGLE_AUTH_CLIENT_ID}>
    <Header />
    <Toaster />
    <RouterProvider router={router} />
    </GoogleOAuthProvider>
  </StrictMode>,
)
