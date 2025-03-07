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


const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
  },
  {
    path: '/create-trip',
    element: <CreateTrip />,
  }

])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Header />
    <Toaster />
    <RouterProvider router={router} />
  </StrictMode>,
)
