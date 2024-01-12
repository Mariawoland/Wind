import Link from 'next/link'
import React from 'react'
import { MdOutlineNavigateNext } from "react-icons/md";
import { SUBSCRIPTION } from '@/constants';

const Subscription = () => {

    return (
        <div className='md:py-16 py-12 sm:px-8'>

            <div className='flex flex-col justify-center items-center'>

                <Link href='/services' className='font-semibold block pb-2'>
                    <span className='text-blue pe-2'>.// </span>
                    <span>Subscription Plans</span>
                </Link>

                <Link href='/services' className='font-semibold sm:text-5xl text-3xl'>Our Services</Link>


            </div>

            <div className='flex flex-wrap pt-10'>

                {SUBSCRIPTION.map((item) => (

                    <div className='p-5 lg:w-1/3 w-full'>

                        <div className='border-2 border-blue p-7 rounded-3xl overflow-hidden flex lg:flex-col sm:flex-row  flex-col justify-center items-center gap-7 h-full'>

                            <div className='lg:w-full sm:w-1/2 w-full'>
                                <div className='lg:w-40 md:w-48 w-40 aspect-square m-auto p-8 rounded-full overflow-hidden border-2 border-blue'>
                                    <img src={item.image} className='w-full' />
                                </div>

                                <h1 className='font-semibold text-center lg:text-3xl sm:text-4xl text-2xl py-3'>{item.title}</h1>

                                <h1 className='font-semibold text-blue text-center sm:text-3xl text-2xl'>{item.price}</h1>
                            </div>

                            <div className='lg:w-full sm:w-1/2 w-full'>
                                <div className='flex flex-col grow gap-6 text-sm'>
                                    <p className='grow'>🔵 {item.text1}</p>
                                    <p className='grow'>🔵 {item.text2}</p>
                                    <p className='grow'>🔵 {item.text3}</p>
                                    <p className='grow'>🔵 {item.text4}</p>
                                    <p className='grow'>🔵 {item.text5}</p>
                                    <p className='grow'>🔵 {item.text6}</p>
                                </div>

                                <Link className='border-2 flex items-center justify-center mt-5 border-blue bg-white hover:bg-blue text-blue hover:text-white font-semibold text-xl transition-all duration-300 w-full py-4 rounded-2xl' href='/contacts'>Subscribe</Link>
                            </div>

                        </div>
                    </div>
                ))}
            </div>

        </div>
    )
}

export default Subscription;