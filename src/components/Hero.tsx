import React from 'react'
import Navbar from './Navbar'

const Hero: React.FC = () => {
  return (
  
    <div id="hero" className='min-h-screen bg-no-repeat bg-[url(/picture1.jpg)]  bg-cover'
    style={{backgroundSize: "35%", backgroundPosition: "right 100px top 100px"}}> 
      <Navbar />
      <div className='container grid lg:grid-cols-2 h-[calc(100vh-60px)] items-end'>
        <div className='hidden lg:black'></div>
      <div className='"font-serif" text-[80px] sm:text-[100px] font-bold leading-tight text-center flex flex-col justify-center items-end'>
        <div data-aos="flip-left" >
          <p>I'm</p>
          <p>Aqsa</p>
          <p>Muhammad Salman</p>
        </div>
      </div>
    </div>

      </div>
      
  )
}

export default Hero
