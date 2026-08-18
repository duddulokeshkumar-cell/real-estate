import React from 'react'
import { assets } from '../assets/assets'
import {motion} from 'framer-motion'

const Footer = () => {
  return (
    <motion.div
            initial={{opacity:0,y:-100}}
            transition={{duration:1.5}}
            whileInView={{opacity:1,y:0}}
            viewport={{once:true}}
    className='bg-black text-white mt-10 p-5 md:px-20 lg:px-32
    px-5'>
        <div className='container mx-auto flex flex-col justify-between 
        items-center  overflow-hidden md:flex-row  '>

        <div className='w-full md:w-1/3 mb-8 md:nb-0'>
        <img src={assets.logo_dark} className='h-10' alt="" />
        <p className='mt-5 w-full max-w-md text-gray-400'>
            Lorem ipsum is simply dummy text of the printing and typesetting
            industry.Lorem ipsum has been the industry's standard dummy text
            ever since the 1500s.
        </p>
        </div>

        <div className='w-full md:w-1/5 mb-8 md:mb-0'>
            <p className='mb-3'>Company</p>
            <ul className='flex flex-col gap-3'>
            <a href="#" className='hover:text-gray-50 text-gray-400'>
                Home</a>
            <a href="#about" className='hover:text-gray-50 text-gray-400'>
                About us</a>
            <a href="#contact" className='hover:text-gray-50 text-gray-400'>
                Contact us</a>
            <a href="#" className='hover:text-gray-50 text-gray-400'>
                Privacy policy</a>
                </ul>
        </div>

        <div className='w-full md:w-1/3 mb-8 md:mb-0'>
            <h2>Subscribe to our newsletter</h2>
            <p className='text-gray-400'>The latest news, 
                articles, and resources, sent to your inbox weekly.</p>
                <input type="email" name='Email' placeholder='Enter your email' 
                className='px-4 py-2 mr-3 border border-gray-700 rounded mt-3'/>
                <button className='bg-blue-500 text-white rounded 
                px-4 py-2 cursor-pointer'>Subscribe</button>
        </div>
        </div>

        <div className='flex flex-col justify-center items-center mt-10 w-full'>
            <hr className='sm:w-100 md:w-full items-center'/>
            <p className='mt-7 text-gray-400 '>
                Copyright 2026 &copy; Liki - Loki. All Rights Reserved.
            </p>
        </div>
    </motion.div>
  )
}

export default Footer