import React from 'react'
import Image from 'next/image'

const Herosection = () => {
    return (
        <section>
            <div className='grid grid-cols-1 sm:grid-cols-12'>
                <div className='col-span-7 place-self-center text-center sm:text-left'>
                    <h1 className='text-white mb-4 text-4xl sm:text-5xl lg:text-6xl font-extrabold' >
                        <span className='text-transparent bg-clip-text bg-gradient-to-r from-pink-400 via-purple-500 to-teal-600'>Hello, I'm {""}</span>
                        Kevin Garrido
                    </h1>
                    <p className='text-[#ADB7BE] text-base sm:text-lg mb-6 lg:text-xl'>
                    I am a recent graduate in Intelligent Computing with knowledge in web programming, data science, and IT. I am eager to learn and grow as a developer.                    </p>
                    <div>
                        <button className='px-6 py-3 w-full sm:w-fit rounded-full mr-4 bg-gradient-to-br from-pink-500 via-purple-500 to-teal-500 hover:bg-slate-200 text-white'>
                            Hire Me
                            </button>
                        <button className='px-1 py-1 w-full sm:w-fit rounded-full bg-gradient-to-br from-pink-500 via-purple-500 to-teal-500 hover:bg-slate-800 text-white border mt-3 '>
                            <span className='block bg-[#121212] hover:bg-slate-800 rounded-full px-5 py-2'>Download CV</span>
                            </button>
                    </div>
                </div>
                <div className='col-span-5 place-self-center mt-4 lg:mt-0'>
                    <div className='rounded-full bg-[#181818] w-[250px] h-[250px] lg:w-[400px] lg:h-[400px] relative'>
                        <Image 
                        src='/images/portfolioprof.png'
                        alt="hero image"
                        className='absolute transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2'
                        width={300}
                        height={300}>
    
                        </Image>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Herosection