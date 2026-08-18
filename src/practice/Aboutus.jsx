import React from 'react'
import { assets } from '../assets/assets'
import {motion} from 'framer-motion'

const Aboutus = () => {
  return (
        <motion.div
            initial={{opacity:0,y:-100}}
            transition={{duration:1.5}}
            whileInView={{opacity:1,y:0}}
            viewport={{once:true}}
        className=' flex flex-col  justify-center items-center 
        container p-15 mx-auto md:px-20 lg:px-32 overflow-hidden w-full
        ' id='about'>
            <p className='bg-linear-to-r from-blue-500 via-purple-500 to-pink-500 
            font-bold text-2xl sm:text-4xl bg-clip-text text-transparent'>About <span className='underline
            underline-offset-4 decoration-1 under font-light'>Our Brand</span></p>

            <h2 className='text-gray-600 text-center max-w-80 mb-4'>
                Passionate About Properties, Dedicated to Your Vision
            </h2>

            <div className='flex flex-col md:flex-row items-center gap-10 md:gap-20
            '>
                <img src={assets.brand_img} className='w-full sm:w-1/2 max-w-lg
                mx-auto' alt="" />
            

            <div className='flex flex-col items-center md:items-start
            mt-10 text-gray-500 w-full md:w-1/2 px-10'>

                <div className='grid grid-cols-2 gap-6 md:gap-10 w-full
                justify-center '>

                    <div>
                        <p className='font-medium text-2xl text-gray-800'>10+</p>
                        <p>Years of Excellence</p>
                    </div>
                    <div>
                        <p className='font-medium text-2xl text-gray-800'>12+</p>
                        <p>Projects Completed</p>
                    </div>
                    <div>
                        <p className='font-medium text-2xl text-gray-800'>20+</p>
                        <p>Mn. sq. Ft. Delivered</p>
                    </div>
                    <div>
                        <p className='font-medium text-2xl text-gray-800'>25+</p>
                        <p>Ongoing Projects</p>
                    </div>
                     
                    </div>
                    <p className='w-full mt-10 text-gray-500'>
                        Lorem ipsum is simply dummy text of the printing and typesetting
                        industry.Lorem ipsum has been the industry's standard dummy text
                        ever since the 1500s.
                    </p>

                    <button className='bg-blue-500 rounded px-8 py-3
                    mt-10 text-white cursor-pointer'>Learn More</button>
                </div>
                
            </div>
           
        </motion.div>   
  )
}

export default Aboutus