import 'boxicons/css/boxicons.min.css';

const Arena = () => {
    return (
        <div id="arena" className="md:min-h-[90%] p-0 lg:p-8 md:mt-0 mt-60">
            <div className="relative z-10 pt-6 text-center">
                <h1
                    className="text-5xl font-bold tracking-widest mb-28"
                    style={{
                        textShadow: "0 0 10px rgba(255,255,255,0.7), 0 0 20px rgba(167,139,250,0.5)"
                    }}
                >
                    Arena
                </h1>

                {/* Main container */}
                <div className="lg:max-w-[90%] w-[90%] mx-auto grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6">

                    {/* Left column */}
                    <div className="md:col-span-1 space-y-4 md:space-y-6">

                        {/* Card 1 */}
                        <div className="relative overflow-hidden rounded-3xl border border-white aspect-[4.4/4] transform transition-transform duration-300 hover:scale-105">

                            {/* Card background */}
                            <img
                                src="/images/bento-card1.png"
                                alt="bento-card"
                                className="absolute h-full w-full object-cover"
                            />

                            {/* Button */}
                            <button className="absolute bottom-0 h-16 w-full
                                bg-black bg-opacity-70 text-2xl font-bold hover:text-yellow-400
                                transition-all duration-300 whitespace-nowrap
                                flex items-center justify-center gap-2">
                                <i className="bx bx-store"></i>
                                NFT STORE
                            </button>


                            </div>
                        {/* card 2 -buttom left*/}
                           <div className='relative overflow-hidden rounded-3xl
                            border border-white aspect-[4.5/4] transform transition-transform duration-300 hover:scale-105'>
                               <video className='w-full h-full  object-cover ' autoPlay loop muted playsInline
                                      src="public/videos/bento-card2.mp4"></video>

                        </div>
                    </div>
                    {/* Right layout column */}
                    <div className="md:col-span-2 space-4 md:space-y-6">
                        {/* Top row with 3 rows */}
                        <div className='grid grid-col-1 sm:grid-cols-3 gap-4 md:gap-6'>
                            {/* first card */}
                            <div className='relative overflow-hidden rounded-3xl border border-white aspect-square transform  transition-transform duration-300  hover:scale-105'>
                                <video className='w-full h-full  object-cover' autoPlay loop muted playsInline
                                       src="public/videos/bento-card3.mp4"></video>
                                <h1 className='absolute bottom-2 left-1/2 transform -translate-x-1/2 z-10 font-extrabold text-2xl'>Scoriox</h1>
                            </div>
                            {/* Second card */}
                            <div className='relative overflow-hidden rounded-3xl border border-white aspect-square transform  transition-transform duration-300  hover:scale-105'>
                                <video className='w-full h-full  object-cover' autoPlay loop muted playsInline
                                       src="public/videos/bento-card4.mp4"></video>
                                <h1 className='absolute bottom-2 left-1/2 transform -translate-x-1/2 z-10 font-extrabold text-2xl'>Floralynx</h1>
                            </div>
                            {/* third card */}
                            <div className='relative overflow-hidden rounded-3xl border border-white aspect-square transform  transition-transform duration-300  hover:scale-105'>
                                <video className='w-full h-full  object-cover' autoPlay loop muted playsInline
                                       src="public/videos/bento-card5.mp4"></video>
                                <h1 className='absolute bottom-2 left-1/2 transform -translate-x-1/2 z-10 font-extrabold text-2xl'>Rhionox</h1>
                            </div>
                        </div>
                        {/* bottom card */}
                        <div className='relative overflow-hidden rounded-3xl border border-white aspect-[16/9] md:col-span-2 transform transition-transform duration-300 hover:scale-[1.02]'>
                            <img src="public/images/bento-card5.png" alt="card5"/>
                            <button className="absolute bottom-0 h-16 w-full
                                bg-black bg-opacity-70 text-2xl font-bold hover:text-yellow-400
                                transition-all duration-300 whitespace-nowrap
                                flex items-center justify-center gap-2">
                                < i class='bx  bx-link'  ></i>BUY NOW

                            </button>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Arena;
