import React from 'react'
import { assets,testimonialsData } from '../assets/assets'

const Testi = () => {
  return (
    <div className='container pt-10 justify-center mx-auto md:px-20
    lg:px-32 overflow-hidden' id='testimonial'>

        <h2 className='font-bold text-center text-2xl sm:text-4xl
        bg-linear-to-r from-orange-500 via-yellow-500 to-rose-500
        bg-clip-text text-transparent'>Customer <span className='underline
        underline-offset-4 decoration-1 under font-light'>Testimonials</span></h2>

        <p className='mt-2 text-center mx-auto max-w-80 text-gray-600'
        >Real Stories from Those Who Found Home with Us</p>

        <div className='flex flex-wrap justify-center gap-8'>

            {testimonialsData.map((testimonial,index)=>(
                <div key={index} className='border-transparent shadow-2xl
                text-center mt-10 px-8 py-10 max-w-85 '>

                <img src={testimonial.image} className='rounded-full 
                w-20 h-20 justify-center mx-auto mb-5' alt="" />

                <h2 className='text-xl '>{testimonial.name}</h2>

                <p className='text-gray-500 text-sm'>{testimonial.title}</p>

                <div className='flex justify-center gap-1 mt-2 mb-4'>
                    {Array.from({length:testimonial.rating},(item,index)=>(
                        <img src={assets.star_icon} key={index} alt="" />
                    ))}
                    
                </div>
                <p className='text-gray-500'>{testimonial.text}</p>
                </div>
            ))}
            

        </div>
    </div>
  )
}

export default Testi