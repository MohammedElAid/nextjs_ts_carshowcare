"use client"

import Image from 'next/image'
import React from 'react'




const Hero = () => {
     const handleScroll = () => {
    const nextSection = document.getElementById("discover");

    if (nextSection) {
      nextSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className='flex xl:flex-row flex-col gap-5 relative z-0 max-w-[1440px] mx-auto' >
        <div className='flex-1 pt-36 padding-x'>
            <h1 className='hero__title' >
                Find, book, or rent a car -- quickly and easily !
            </h1>
            <p className='hero__subtitle'>
                Streamline your car rental experience with our effortless booking process
            </p>
        
        <button onClick={handleScroll} className=' custom-btn bg-primary-blue text-white rounded-full mt-10'>
            Explore Cars
        </button>
        </div>
        <div className='hero__image-container' >
            <div className='hero__image'>
                <Image src="/hero.png" alt='hero' 
                fill
                className='object-contain'
                 />
            </div>
            <div className='hero__image-overlay'/>
 
            
        </div>
       
        
    </div>
  )
}

export default Hero