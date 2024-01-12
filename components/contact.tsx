"use client";
import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';

const Contact = () => {

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

    )
}

export default Contact;