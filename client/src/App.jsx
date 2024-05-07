import { useState } from 'react'
import { createBrowserRouter, RouterProvider, } from "react-router-dom";
import './App.css'
import Signup from './pages/Signup'
import SignIn from './pages/SignIn'



const router = createBrowserRouter([
  {
    path: "/",
    element: <div>Hello world!</div>,
  },

  {
    path: "/register",
    element: <Signup/>,
  },

  {
    path: "/login",
    element: <SignIn/>,
  },
]);


function App() {

  return (
    <>
      <RouterProvider router={router} />
    </>
  )
}

export default App
