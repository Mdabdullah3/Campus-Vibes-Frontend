import React from 'react';
import bg1 from "../../Assets/bg/pattern-salvia.png"
import Image from 'next/image';
import Circle from './Circle';
import Time from './EventTIme';
const Banner = () => {
    const time = new Date();
    time.setSeconds(time.getSeconds() + 216000);
    return (
        <div className='overflow-hidden'>
            <div className=' h-screen bg-gradient-to-r relative from-[#481B9F] to-[#641AB9]'>
                <div>
                    <Image className='z-10 absolute top-0 w-full' src={bg1} alt="background" />
                </div>
                <div className='text-center pt-40 md:pt-48 text-white'>
                    <h1 className='text-2xl tracking-wider font-semibold mb-3 capitalize'>Welcome to Campus Vibes - Your Ultimate Campus Community</h1>
                    <p className='text-lg tracking-wider md:w-6/12 mx-auto'>Campus Vibes: Elevate your university journey with our vibrant community. Explore clubs, forums, and events. Connect and thrive with us!</p>
                </div>
                <div className=' relative'>
                    <Circle />
                </div>
                <div className='absolute bottom-20 left-[40%]'>
                    <h1 className='text-center text-white text-xl tracking-wider capitalize font-semibold'>Science Event Starting In</h1>
                    <Time expiryTimestamp={time} />
                    <div className='mx-auto text-center -mb-12 mt-6'>
                        <button className='text-lg text-white bg-primary tracking-wider px-8 py-3 rounded-full'>See Event Details</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;