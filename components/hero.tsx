import React, { Key, ReactNode } from 'react';
import '@/app/globals.css';
import Link from 'next/link';


const Hero = async () => {


    return (
        <>
            <div className='flex md:flex-row flex-col'>

                <div className='md:w-1/2 w-full md:hidden flex'>
                    <img src="hero.jpeg" className='w-full aspect-square object-cover' />
                </div>

                <div className='md:w-1/2 w-full flex justify-center items-start gap-4 flex-col p-6'>

                    <Link href='/services' className='font-semibold'>
                        <span className='text-blue px-2'>.//</span>
                        <span>API SERVICRES</span>
                    </Link>

                    <h1 className='text-six-1 xl:text-[50px] lg:text-[44px] text-[33px] font-semibold leading-relaxed'>We are setting <span className='text-blue'>higher standards</span> in a world of digital marketing!</h1>

                    <p className='lg:text-base text-sm pt-2'>We believe that the digital age demands a dynamic and adaptive approach to information.Having access to timely, accurate, and insightful data is not just an advantage.</p>

                </div>


                <div className='md:w-1/2 w-full md:flex hidden'>
                    <img src="hero.jpeg" className='w-full lg:max-h-[80vh] max-h-[70vh] object-cover' />
                </div>
            </div>

        </>
    );
};

export default Hero;