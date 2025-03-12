import React from 'react'
import Navbar from '../Navbar/Navbar'
import { Outlet } from 'react-router-dom'
import Footer from '../Footer/Footer'

export default function LayOut() {
  return (
    <>
    <Navbar />
    <div className=" mt-14">
      <Outlet />
    </div>
    <Footer />
  </>
  
  )
}
