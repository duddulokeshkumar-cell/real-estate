import React from 'react'
import { toast } from 'react-toastify';
import {motion} from 'framer-motion'

const ContactWith = () => {

    const [result, setResult] = React.useState("");
    
      const onSubmit = async (event) => {
        event.preventDefault();
        setResult("Sending....");
        const formData = new FormData(event.target);
    
        formData.append("access_key", "62f4cdcb-4c15-423b-b48f-e68d24ace90f");
    
        const response = await fetch("https://api.web3forms.com/submit", {
          method: "POST",
          body: formData
        });
    
        const data = await response.json();
    
        if (data.success) {
          setResult("");
          toast.success("Form Submitted Successfully")
          event.target.reset();
        } else {
          console.log("Error", data);
          toast.error(data.message)
          setResult("");
        }
      };

  return (
    <motion.div
            initial={{opacity:0,y:-100}}
            transition={{duration:1.5}}
            whileInView={{opacity:1,y:0}}
            viewport={{once:true}}
    className='mx-auto text-center overflow-hidden
    mt-15 md:px-20 lg:px-32 w-full p-6' id='contact'>
        <h2 className='text-2xl sm:text-4xl text-center font-bold
        bg-linear-to-r from-cyan-500 via-indigo-500 to-violet-500
        bg-clip-text text-transparent'>Contact <span className='underline 
        underline-offset-4 under decoration-1 font-light'>With Us</span></h2>

        <p className='mt-2 max-w-80 text-center mx-auto text-gray-600'
        >Ready to Make a Move? Let's Build Your Future Together</p>

        <form className='max-w-2xl mx-auto pt-10' onSubmit={onSubmit}>
            <div className='flex flex-wrap'>
            <div className='w-full md:w-1/2 text-left'>
                Your Name
                <input type="text" placeholder='Your Name' name='Name' required
                className='w-full rounded px-4 py-2 border border-gray-400 
                mt-2' />
            </div>
            <div className='w-full md:w-1/2 text-left md:pl-5'>
                Your Email
                <input type="email" placeholder='Your Email' name='Email' required
                className='w-full rounded px-4 py-2 border border-gray-400 
                mt-2' />
            </div>
            </div>

            <div className='m-6 text-left'>
                Message
                <textarea className='px-4 py-3 h-50 mt-2 border border-gray-400
                 w-full rounded'  placeholder='Message' name='Message' required />
            </div>

            <button className='bg-blue-500 text-white px-8 py-2 rounded
            cursor-pointer'>Send Message</button>
        </form>
    </motion.div>
  )
}

export default ContactWith