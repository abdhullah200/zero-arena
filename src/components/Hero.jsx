import React from 'react'

const Hero = () => {
    return (
        <main id="hero" className="relative w-full h-screen overflow-hidden flex justify-center items-center">
            <video
                src="/videos/hero.mp4"
                muted
                autoPlay
                loop
                playsInline
                className="absolute w-full h-full object-cover top-0 left-0 -z-10"
            ></video>

            <div className='relative flex flex-col items-center gap-5 text-center'>
                <img src="/images/illu-text.png" alt="Illu-text"
                     className='md:w-[30rem] w-[20rem]' />

                <h1 className='md:text-2xl text-1xl font-bold'>Explore, Capture, Conquer</h1>

                <div className='md:w-[75%] w-[60%] h-[0.1px] bg-[#baba]'></div>


                <div className='flex items-center gap-5 text-3xl font-extrabold text-gray-200'>
                    <img className='md:h-16 h-12' src='/images/illu-logo.png' alt=''/>ZERO
                </div>

                <p className='max-w-[80%] text-[#babaff]'>
                    Notice: Illuvium Games are in Beta.
                    Participation involves risk. Read our Full
                    Disclaimer here.
                </p>
            </div>

            <div className='absolute bottom-40 lg:right-24 right-5 mt-24 animate-bounce
            sm:inline-block hidden'>
                <div className='flex flex-col items-center'>
                    <div className='w-8 h-12 border-2 border-[#babaff]
                    rounded-full flex justify-center pt-1'>
                        <div className='w-1 h-3 bg-[#babaff]
                        rounded-full animate-pulse'></div>
                    </div>
                    <p className='text-[#babaff] mt-2'>Scroll Down</p>
                </div>
            </div>
        </main>
    )
}
export default Hero
