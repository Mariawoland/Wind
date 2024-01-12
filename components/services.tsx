import Link from 'next/link'
import React from 'react'
import { MdOutlineNavigateNext } from "react-icons/md";
import { SERVICES } from '@/constants';

const Services = () => {

    return (
        <div className='md:py-16 py-12 sm:px-8 px-4 bg-blue '>

            <div className='flex justify-between items-end'>
                <div>
                    <Link href='/services' className='text-white font-semibold block pb-2'>
                        <span className='pe-2'>.// </span>
                        <span>What we offer</span>
                    </Link>

                    <Link href='/services' className='text-white font-semibold sm:text-5xl text-3xl'>Our Services</Link>
                </div>

                <Link className='md:flex items-center gap-1 hidden border-2 border-white bg-blue hover:bg-white text-white hover:text-blue font-semibold text-xl transition-all duration-300 ps-12 pe-10 py-4 rounded-2xl' href='/services'>Learn More <span className='text-3xl'><MdOutlineNavigateNext /></span></Link>

            </div>

            <div className='flex flex-wrap pt-10'>
                {SERVICES.map((item) => (
                    <div key={item.title} className='sm:p-5 pb-5 lg:w-1/3 md:w-1/2 w-full'>
                        <div className='bg-white sm:p-7 p-5 rounded-3xl overflow-hidden flex flex-col justify-center items-center gap-7 h-full'>
                            <div className='w-32 h-32'>
                                <img src={item.icon} className='w-full' />
                            </div>
                            <h1 className='font-semibold sm:text-3xl text-2xl'>{item.title}</h1>
                            <p className='grow'>{item.description.slice(0, 80)}...</p>
                            <Link className='border-2 border-blue bg-white hover:bg-blue text-blue hover:text-white font-semibold text-xl transition-all duration-300 w-full text-center py-4 rounded-2xl' href={`/services/#${item.title}`}>Learn more</Link>
                        </div>
                    </div>
                ))}
            </div>

        </div>
    )
}

export default Services