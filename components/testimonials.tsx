import Link from 'next/link'
import React from 'react'
import { MdOutlineNavigateNext } from "react-icons/md";
import { TESTIMONIALS } from '@/constants';
import { RiDoubleQuotesL } from "react-icons/ri";

const Testimonials = () => {

    return (
        <div className='md:py-16 py-12 sm:px-8 px-4 bg-blue '>

            <div className='flex sm:justify-center justify-start px-2'>
                <div>
                    <Link href='/services' className='text-white sm:text-center text-start font-semibold block pb-2'>
                        <span className='pe-2'>.// </span>
                        <span>What Clients Say</span>
                    </Link>

                    <Link href='/services' className='text-white font-semibold sm:text-5xl text-3xl'>Testimonials</Link>
                </div>

            </div>

            <div className='flex flex-wrap pt-10'>
                {TESTIMONIALS.map((item) => (
                    <div key={item.name} className='sm:p-5 pb-5 lg:w-1/3 md:w-1/2 w-full'>

                        <div className='bg-white sm:p-7 p-5 rounded-3xl overflow-hidden flex flex-col gap-4 h-full'>

                            <p className='text-4xl pb-2 text-blue'><RiDoubleQuotesL /></p>
                            <p className='grow'>{item.description}</p>
                            <h1 className='font-semibold text-end'>{item.name}</h1>

                        </div>

                    </div>
                ))}
            </div>

        </div>
    )
}

export default Testimonials;