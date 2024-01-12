"use client";
import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import Footer from '@/components/footer';
import { FAQ } from '@/constants';
import '@/app/globals.css';

const Page = () => {

    const form = useRef(null);

    const sendEmail = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        if (
            process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID &&
            process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID &&
            process.env.NEXT_PUBLIC_EMAILJS_USER_ID &&
            form.current
        ) {
            emailjs
                .sendForm(
                    process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID,
                    process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID,
                    form.current,
                    process.env.NEXT_PUBLIC_EMAILJS_USER_ID
                )
                .then(
                    (result) => {
                        alert(result.text);
                    },
                    (error) => {
                        alert(error.text);
                    }
                );
        }
    };

    return (
        <div className='sm:px-7'>

            <hr className='h-[3px] border-0 bg-blue' />

            <div className='pt-7 sm:px-7 sm:border-t-4 border-t-2 border-blue rounded-t-2xl mt-12 flex md:flex-row flex-col'>

                <form ref={form} onSubmit={sendEmail} className="h-full md:w-1/2 w-full md:bg-blue flex flex-col justify-center gap-5 p-7 rounded-3xl overflow-hidden">

                    <h1 className='sm:text-5xl text-3xl md:text-white text-blue font-semibold text-center py-3'>Contact</h1>

                    <input
                        type="text"
                        className="focus:outline-none border-2 border-blue p-4 w-full rounded-3xl"
                        name="name"
                        placeholder="Enter Your Name..."
                    />

                    <input
                        type="email"
                        className="focus:outline-none border-2 border-blue p-4 w-full rounded-3xl"
                        name="email"
                        placeholder="Enter Your Email..."
                    />

                    <textarea
                        className="focus:outline-none border-2 border-blue grow p-4 w-full h-32 rounded-3xl"
                        name="message"
                        placeholder="Enter Your Message..."
                    ></textarea>

                    <input type="submit" className='w-full rounded-3xl cursor-pointer text-xl border-2 border-white font-semibold bg-blue py-4 text-white' value="Send" />



                </form>

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
