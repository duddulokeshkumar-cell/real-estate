import React from 'react'
import Nav from './Nav'
import {motion} from 'framer-motion'

const Header = () => {
  return (
        <div
        className='bg-center flex items-center bg-cover overflow-hidden
        min-h-screen w-full'style={{backgroundImage:"url('/header_img.png')"}}>

            <Nav />

            <motion.div
            initial={{opacity:0,y:-100}}
            transition={{duration:1.5}}
            whileInView={{opacity:1,y:0}}
            viewport={{once:true}}
            className=' text-center container text-white 
             md:px-20 lg:px-32 px-6 py-4 mx-auto'>

                <h2 className='font-semibold text-5xl sm:text-6xl
            max-w-3xl pt-20 inline-block md:text-[82px]'>
                    Explore homes that fit your dreams</h2>

                    <div className='space-x-6 mt-16'>
                        <a href="#project" className='border px-8 py-3 rounded border-white'>Projects</a>
                        <a href="#contact" className='px-8 py-3 border text-white bg-blue-500 rounded'
                        >Contact Us</a>
                    </div>
            </motion.div>
            
        </div>  
  )
}

export default Header