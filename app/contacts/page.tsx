"use client";
import React from 'react';
import Footer from '@/components/footer';
import { FAQ } from '@/constants';
import '@/app/globals.css';
import Contact from '@/components/contact';

const Page = () => {

    return (
        <div className='sm:px-7'>

            <hr className='h-[3px] border-0 bg-blue' />

            <div className='pt-7 sm:px-7 sm:border-t-4 border-t-2 border-blue rounded-t-2xl mt-12 flex md:flex-row flex-col'>

                <Contact />

                <hr className='h-[3px] border-0 bg-blue my-10 md:hidden block' />

                <div className="h-full md:w-1/2 w-full flex flex-col justify-center px-7 ">

                    <h1 className='sm:text-5xl text-3xl text-blue font-semibold text-center pb-6'>FAQ.</h1>

                    <div className='flex flex-col h-[430px] pe-4 editScroll overflow-auto'>
                        {FAQ.map((item, index) => (
                            <div key={index} className='border-2 mt-4 w-full shrink-0 rounded-3xl border-blue p-4 overflow-hidden'>
                                <h2 className='font-semibold'>{item.question}</h2>
                                <p className='text-sm'>{item.answer}</p>
                            </div>
                        ))}
                    </div>

                </div>

            </div>

            <hr className='h-[3px] border-0 bg-blue sm:my-16 my-12' />

            <Footer />

        </div>
    )
}

export default Page;