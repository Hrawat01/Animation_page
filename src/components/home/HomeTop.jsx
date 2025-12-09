import React from 'react'
import Video from './Video'

const HomeTop = () => {
  return (
    <div className='font-[font3] text-center pt-7'>
      <div className='text-[9.5vw] uppercase leading-[8vw]  flex items-center justify-center' >L'étincelle</div>
      <div className='text-[9.5vw] uppercase leading-[8vw] flex items-center justify-center' >
        qui 
    <div className='h-[13vh] overflow-hidden w-[14vw] rounded-full'>
        <Video />
     </div>
           génère
           
           </div>
      <div className='text-[9.5vw] uppercase leading-[8vw]  flex items-center justify-center' >la créativité</div>
    </div>
  )
}

export default HomeTop
