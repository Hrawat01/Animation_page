import React from 'react'

const ProjectCard = (props) => {
  return (
   <>
     <div className='w-full h-[720px] mb-4 flex gap-4'>



        <div className='relative w-1/2 transition-all rounded-none hover:rounded-3xl overflow-hidden h-full'>
            <img className='h-full w-full object-cover' src={props.image1} alt="" />
             <div className='absolute opacity-0 hover:opacity-100 top-0 left-0 h-full w-full flex flex-col justify-center text-center uppercase items-center bg-black/10'>
                <h1 className='uppercase z-2 text-5xl font-[font1] border-2 rounded-full p-4 '>Vior la projet</h1>
                </div>
        <div>
        </div>
        </div>


{/* copy of above */}

        <div className='relative w-1/2 transition-all rounded-none hover:rounded-3xl overflow-hidden h-full'>
            <img className='h-full w-full object-cover' src={props.image2} alt="" />
             <div className='absolute opacity-0 hover:opacity-100 top-0 left-0 h-full w-full flex flex-col justify-center text-center uppercase items-center bg-black/10'>
                <h1 className='uppercase z-2 text-5xl font-[font1] border-2 rounded-full p-4 '>Vior la projet</h1>
                </div>
        <div>
        </div>
        </div>
     </div></>
  )
}

export default ProjectCard
