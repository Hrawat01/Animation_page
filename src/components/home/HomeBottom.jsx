import React from 'react'
import { Link } from 'react-router-dom'
import Projects from '../../pages/Projects'
import Agents from '../../pages/Agents'

const HomeBottom = () => {
  return (
    <div className='font-[font1] flex justify-center gap-5  '>
     <Link className='text-[4.5vw] border-5 border-white rounded-full px-10 pt-4 pb-0 mb-3 uppercase hover:border-green-500 hover:text-green-500' to={'/project'} element={<Projects />}>Project</Link>
     <Link className='text-[4.5vw] border-5 border-white rounded-full px-10 pt-4 pb-0 mb-3 uppercase hover:border-green-500 hover:text-green-500' to={'/agent'} element={<Agents />}>Agent</Link>
    </div>
  )
}

export default HomeBottom
