import React from 'react'
import Video from '../components/home/Video'
import HomeTop from '../components/home/HomeTop'
import HomeBottom from '../components/home/HomeBottom'

const Home = () => {
  return (
   <>
     {/* Background Video */}

   <div className='h-screen w-screen fixed'>
    <Video />
   </div>

      {/* Overlay Content */}

   <div className='h-screen  relative  w-screen flex flex-col justify-between' >
   <HomeTop />
   <HomeBottom />
   </div>
   </> 
  )
}

export default Home
