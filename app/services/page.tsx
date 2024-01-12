import Footer from '@/components/footer'
import { SERVICES } from '@/constants'
import React from 'react'

const page = () => {
    return (
        <div>
            <img src="/services.jpeg" className='w-full object-cover md:aspect-[16/7] aspect-square' />
            <div className='md:py-16 py-12 px-8 flex flex-col justify-center items-center'>

                <div className='font-semibold block pb-2'>
                    <span className='text-blue pe-2'>.// </span>
                    <span>What we offer</span>
                </div>

                <h1 className='font-semibold sm:text-5xl text-3xl pb-8'>Our Services</h1>

                <div className='flex flex-wrap w-full'>
                    {SERVICES.map((item) => (

                        <div className='p-5 lg:w-1/2 w-full' id={item.title}>

                            <div className='pt-7 px-7 sm:border-t-4 border-t-2  border-blue rounded-t-2xl flex sm:flex-row flex-col gap-6 justify-center items-center'>

                                <img src={item.icon} className='w-32' />

                                <div>
                                    <p className='lg:text-3xl sm:text-4xl text-2xl font-semibold pb-4 sm:text-start text-center'>{item.title}</p>
                                    <p className='text-justify md:text-base text-sm'>{item.description}</p>
                                </div>

                            </div>
                        </div>
                    ))}
                </div>

            </div>

            <div className='p-10'>
                <hr className='bg-blue border-0 h-[3px]' />
            </div>

            <Footer />
        </div>
    )
}

export default page