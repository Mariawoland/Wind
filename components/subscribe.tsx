"use client";
import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';

const Subscribe = () => {
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
        <div className='sm:py-16 py-12 sm:px-8 px-5'>

            <div className='p-7 rounded-3xl bg-blue'>

                <h1 className='sm:text-4xl text-2xl text-white font-bold text-center py-6'>Subscribe Now!</h1>

                <hr className='h-[2px] bg-white border-0 mb-6' />

                <p className='bg-white rounded-3xl p-5 mb-6 text-sm'>We value your feedback, questions, and inquiries. Whether you're a customer, partner, or just curious, we're here to assist you. Reach out to us through the provided form, and our dedicated team will respond promptly. Your satisfaction is our priority, and we appreciate your interest in connecting with us. If you prefer, you can also reach us via email or phone.</p>

                <form ref={form} onSubmit={sendEmail} className="md:bg-white flex md:flex-row flex-col gap-4 w-full md:rounded-3xl md:border-2 border-white overflow-hidden">

                    <input
                        type="email"
                        className="focus:outline-none p-4 md:w-3/4 w-full rounded-3xl"
                        name="email"
                        placeholder="Enter Your Email..."
                    />

                    <input type="submit" className='md:w-1/4 w-full rounded-3xl cursor-pointer text-lg md:border-0 border-2 border-white font-semibold bg-blue py-4 text-white' value="Subscribe" />
                </form>

            </div>

            <hr className='h-[3px] bg-blue border-0 sm:mt-16 mt-12' />

        </div>
    )
}

export default Subscribe