import React from 'react'
import Head from './components/Head'
import About from './components/About'
import Projects from './components/Projects'
import Testimonial from './components/Testimonial'
import Contact from './components/Contact'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import Footer from './components/Footer'

// import Aboutus from "./practice/Aboutus"
// import ContactWith from "./practice/ContactWith"
// import Footer from "./practice/Footer"
// import Header from "./practice/head"
// import Project from "./practice/Project"
// import Testi from "./practice/Testi"

const App = () => {
  return (
    <div className='w-full overflow-hidden'>
      <ToastContainer />
      <Head />
      <About />
      <Projects />
      <Testimonial />
      <Contact />
      <Footer />

      {/* practice section */}
      {/* <Header />
      <Aboutus/>
      <Project/>
      <Testi />
      <ContactWith />
      <Footer /> */}
    </div>
  )
}

export default App