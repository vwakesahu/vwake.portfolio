import React from 'react'

const HeroSection = () => {
    return (
        <div className=''>
            <p className='text-[5rem]'>Hi! My Name is <span className=' bg-yellowColor text-lightGrey font-semibold'>Vwakee</span> </p>
            <p className='text-[3rem]'>I speak in <span className='font-outline-1 text-whiteColor hover:bg-accYellow hover:text-black cursor-none'>HTML</span>, <span className='font-outline-1 text-whiteColor hover:bg-accPurple hover:text-black cursor-none'>CSS</span>, <span className='font-outline-1 text-whiteColor hover:bg-accRed hover:text-black cursor-none'>ReactJs</span> &  <span className='font-outline-1 text-whiteColor hover:bg-accBlue hover:text-black cursor-none'>Firebase</span></p>
        </div>
    )
}

export default HeroSection