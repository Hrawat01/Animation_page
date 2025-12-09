import React, { lazy, Suspense } from 'react';
import {Link, Route, Routes } from 'react-router-dom'
// import Home from './pages/Home'
// import Agents from './pages/Agents'
// import Projects from './pages/Projects'

const Home=lazy(() => import('./pages/Home'));
const Agents=lazy(() => import('./pages/Agents'));
const Projects=lazy(() => import('./pages/Projects'));

const App = () => {
  return (
   <div className='text-6xl'>
  <div className='absolute z-1 flex top-6 right-6'>
      <Link className='text-green-700 mr-6 text-[22px]' to={'/'}>Home</Link>
    <Link className='text-green-700 mr-6 text-[22px]' to={'/agent'}>Agents</Link>
    <Link className='text-green-700 mr-6 text-[22px]' to={'/project'}>Projects</Link>
  </div>
     <Suspense fallback={<div>Loading...</div>}>
   <Routes>
    <Route path='/' element={<Home />} />
    <Route path='/agent' element={<Agents />} />
    <Route path='/project' element={<Projects />} />
   </Routes>
     </Suspense>

   </div>
  )
}

export default App
