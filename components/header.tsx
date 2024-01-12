"use client";
import { useState, useEffect } from 'react';
import Link from 'next/link';
import React from 'react';
import { CiMenuBurger } from "react-icons/ci";
import { IoIosClose } from "react-icons/io";
import "@/app/globals.css";

const Header = () => {

    const [clicked, setClicked] = useState(false);

    const handleClick = () => {
        setClicked(prev => !prev);
    };


    return (
        <>
            <header className={`flex justify-between items-center transition-all duration-300 md:px-10 px-4 h-[80px] bg-dark-1`}>

                <Link href='/'>
                    <img src='/logo.png' className='w-[120px]' />
                </Link>

                <button className='md:hidden flex text-[30px]' onClick={handleClick}>
                    <CiMenuBurger />
                </button>

                <div className={`text-base font-semibold md:flex hidden gap-7 items-center transition-all duration-300 md:flex-row flex-col lg:items-center lg:gap-9 lg:p-0 p-4 tracking-wide ms-auto`}>

                    <div className='flex gap-10 items-center'>
                        <Link href='/'>
                            <img src='/logo.png' className='md:hidden flex w-[190px]' />
                        </Link>

                    </div>

                    <Link href='/' className='hover:text-blue transition-all duration-300 underline-ani'>Home</Link>

                    <Link href='/aboutus' className='hover:text-blue transition-all duration-300 underline-ani'>About</Link>

                    <Link href='/services' className='hover:text-blue transition-all duration-300 underline-ani'>Services</Link>

                    <Link href='/contacts' className='hover:text-blue transition-all duration-300 underline-ani'>Contacts</Link>

                    <button className='bg-white hover:bg-blue border-2 border-blue rounded-full text-blue hover:text-white px-12 py-2 transition-all duration-300'>Log In</button>

                </div>

            </header>

            <div className={`z-[100] bg-droppedWhite fixed top-0 right-0 font-semibold flex flex-col gap-6 p-5 transition-all duration-300 h-screen text-base ${clicked === true ? 'translate-x-0' : 'translate-x-[100%]'}`}>

                <div className='flex gap-14 items-center'>

                    <Link href='/'>
                        <img src='/logo.png' className='md:hidden flex w-[100px]' />
                    </Link>

                    <button className='md:hidden flex text-[40px]' onClick={handleClick}>
                        <IoIosClose />
                    </button>

                </div>

                <Link href='/'>Home</Link>

                <Link href='/aboutus'>About</Link>

                <Link href='/services'>Services</Link>

                <Link href='/contacts'>Contacts</Link>

                <button className='bg-white hover:bg-blue border-2 border-blue rounded-full text-blue hover:text-white px-6 py-2 transition-all duration-300'>Log In</button>

            </div>
        </>
    )
}

export default Header;