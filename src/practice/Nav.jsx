import React, { useEffect, useState } from 'react'
import {assets} from '../assets/assets'


const Nav = () => {

    const[showMenu,setShowMenu] = useState(false);
    useEffect(() => {
        if(showMenu){
            document.body.style.overflow='hidden'
        }else{
            document.body.style.overflow='auto'
        }
        return()=>{
            document.body.style.overflow='auto'
        }
    },[showMenu])

  return (
        <div   
        className='absolute top-0 left-0 z-10 w-full'>
            <div className='container mx-auto flex justify-between 
            md:px-20 lg:px-32 px-6 py-4 bg-transparent items-center'>
                <img src={assets.logo}  alt="" />

                <div className='hidden md:flex gap-7 text-white '>
                    <a href="#header" className='hover:text-gray-400'>
                        Home</a>
                    <a href="#about" className='hover:text-gray-400'>
                        About</a>
                    <a href="#project" className='hover:text-gray-400'>
                        Projects</a>
                    <a href="#testimonial" className='hover:text-gray-400'>
                        Testimonials</a>
                </div>
                
                <button className='hidden md:block bg-white rounded-full px-8 py-3
                cursor-pointer'>Sign up</button>

                <img src={assets.menu_icon} className='w-6 cursor-pointer md:hidden'
                 alt="" onClick={() =>setShowMenu(true)}/>
            </div>

            {/* mobile view */}
            <div className={`md:hidden ${showMenu ? 'fixed w-full ' : 'h-0 w-0'}
             bg-white right-0 top-0 bottom-0 overflow-hidden transition-all`}>

                <div className='flex justify-end p-6 cursor-pointer'>
                    <img src={assets.cross_icon} className='w-6' alt="" 
                    onClick={() =>setShowMenu(false)}/>
                </div>

                <ul className='flex flex-col gap-5 items-center'>
                    <a href="#header" onClick={() =>setShowMenu(false)}>
                        Home</a>
                    <a href="#about" onClick={() =>setShowMenu(false)}>
                        About</a>
                    <a href="#projects" onClick={() =>setShowMenu(false)}>
                        Projects</a>
                    <a href="#testimonials" onClick={() =>setShowMenu(false)}>
                        Testimonials</a>
                </ul>
                
            </div>
          
        </div>   

  )
}

export default Nav