import React, { useEffect, useState } from 'react'
import { assets,projectsData } from '../assets/assets'
import {motion} from 'framer-motion'

const Project = () => {
    const[showIndex,setShowIndex] = useState(0)
    const[cardShow,setCardShow] = useState(1)

    useEffect(()=>{
        const updateCardsToShow = () =>{
            if(window.innerWidth >= 1024){
                setCardShow(projectsData.length)
            }else{
                setCardShow(1)
            }
        };
            updateCardsToShow();

            window.addEventListener('resize',updateCardsToShow);
            return () =>window.removeEventListener('resize',updateCardsToShow);
        
    },[])

    const nextProject= ()=>{
        setShowIndex((prevIndex) => (prevIndex + 1) % projectsData.length)
    }

    const prevProject = () =>{
        setShowIndex((prev) => prev === 0 ? projectsData - 1 : prev -1)
    }

  return (
    <motion.div
            initial={{opacity:0,y:-100}}
            transition={{duration:1.5}}
            whileInView={{opacity:1,y:0}}
            viewport={{once:true}}
    className='container mx-auto py-4 px-6 my-20 w-full
    overflow-hidden md:px-20 lg:px-32 pt-10' id='project'>

            <h2 className='bg-linear-to-r from-green-500 via-emerald-500  to-teal-500
            font-bold text-center text-2xl sm:text-4xl max-w-lg bg-clip-text
            text-transparent mx-auto'
            >Projects <span className='underline underline-offset-4
             decoration-1 under font-light'>Completed</span></h2>
            
            <p className='max-w-80 text-center mt-2 text-gray-500 mx-auto'
            >Crafting Spaces, Building Legacies-Explore Our Portfolio</p>
            
        <div className='flex justify-end mt-10 gap-2 items-center '>
            <button onClick={prevProject}>
            <img src={assets.left_arrow} className=' bg-gray-300 
            rounded px-4 py-4 border-0'alt="" /></button>

            <button onClick={nextProject}>
            <img src={assets.right_arrow} className='border-0 bg-gray-300
            rounded px-4 py-4 ' alt="" /></button>

        </div>

        <div className='overflow-hidden mt-10'>
            <div className='flex gap-8 transition-transform duration-500 ease-in-out
            ' style={{transform: `translateX(-${(showIndex * 100) / cardShow}%)`}}>
                {projectsData.map((project,index)=>(
                    <div key={index} className='relative shrink-0 w-full sm:w-1/4'>
                        <img src={project.image} className='w-full h-auto mb-4' 
                        alt={project.title} />
                        <div className='absolute left-0 right-0 bottom-0 flex justify-center'>
                            <div className='inline-block bg-white w-3/4 px-4 py-2 shadow-md'>
                            <h2 className='text-xl font-semibold text-gray-800
                            '>{project.title}</h2>
                            <p className='text-gray-400 text-sm'>
                                {project.price} <span className='px-1'>|</span> {project.location}</p>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    </motion.div>
  )
}

export default Project