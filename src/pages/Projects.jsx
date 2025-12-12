import React, { useEffect } from 'react'
import ProjectsCard from '../components/projects/ProjectCard.jsx'
import ScrollTrigger from 'gsap/ScrollTrigger'
import { gsap } from 'gsap'
import { useGSAP } from '@gsap/react'

const Projects = () => {
  
  const ProjectImage = [
    {
      image1: "https://k72.ca/images/caseStudies/BAnQ_100TEMPS/100temps_Thumbnail.jpg?w=1280&h=960&s=5c944bb014f8643227ad7bb117fccc14",
      image2: "https://k72.ca/images/caseStudies/PME-MTL/PME-MTL_Thumbnail.jpg?w=1280&h=960&s=49e3b251d0a28f1f8d40fd59517fc000"
    },
    {
      image1: "https://k72.ca/images/caseStudies/LAMAJEURE_-_Son_sur_mesure/chalaxeur-thumbnail_img.jpg?w=1280&h=960&s=1d30e394b903c242ad9a4f2cb2463cda",
      image2: "https://k72.ca/images/caseStudies/CRISIS24/crisis24_behance_1920X1200_cartes.jpg?w=1280&h=960&s=bb42c9de87442e1bffc542c332e07124"
    },
    {
      image1: "https://k72.ca/images/caseStudies/COUP_FUMANT/CF_thumbnail.jpg?w=1280&h=960&s=c119303a20520c4188aa3f592038fd4c",
      image2: "https://k72.ca/images/caseStudies/Opto/thumbnailimage_opto.jpg?w=1280&h=960&s=938f0bfb3de1ff2a2846b884eec2d757"
    }
  ]
  
    useEffect(() => {
    ProjectImage.forEach(({ image1, image2 }) => {
      const img1 = new Image();
      img1.src = image1;
      const img2 = new Image();
      img2.src = image2;
    });
  }, []);

  gsap.registerPlugin(ScrollTrigger);
useGSAP(() => {
  gsap.from(".hero",{
    height:"80px",
    stagger:{
      amount:0.3
    },
    scrollTrigger:{
      trigger:".lol",
      // markers:true,
      start:"top 120%",
      end:"top -260%",
      scrub:true,
    }


  })
})

  return (
    <div className='p-5 '>
    <div className='pt-[45vh]'> 
      <h1 className='text-[13vw] font-[font2] uppercase '>Projets
      {/* <sup className='text-[10px]'>16</sup> */}
     </h1></div>

     <div className='lol flex flex-col gap-0.5 flex-wrap '> 

     {ProjectImage.map((elem, index) => {
      return <div className='hero'>
        <ProjectsCard key={index} image1={elem.image1} image2={elem.image2} />
      </div>
}) }
     
     </div>

    </div>
  )
}

export default Projects
