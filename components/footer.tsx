import '@/app/globals.css';
import Link from 'next/link';
import { FaLinkedinIn } from "react-icons/fa6";
import { FaInstagram, FaFacebookF, FaFigma, FaHtml5, FaCss3Alt, FaBootstrap } from "react-icons/fa";


const Footer = () => {

    return (
        <>
            <div className='flex sm:flex-row flex-col gap-7 items-start justify-between md:px-12 px-7'>
                <div>
                    <img src='/logo.png' className='w-36' />
                    <p className='text-four-5 font-semibold text-sm leading-relaxed py-7'>We provide information about  Marketing<br /> such as Sales data and Profile analysis to<br /> help you optimize your sales.</p>

                    <div className='flex gap-5 text-four-4 items-center text-3xl pb-5'>
                        <a href='https://www.facebook.com/mariam.ekizashvili16/' target='_blank' className='text-2xl'><FaFacebookF /></a>
                        <a href='https://www.linkedin.com/in/mariam-ekizashvili/' target='_blank' className=''><FaLinkedinIn /></a>
                        <a href='https://www.instagram.com/maria_woland/' target='_blank' className=''><FaInstagram /></a>
                    </div>

                </div>

                <div className='flex flex-col leading-loose text-base'>
                    <Link href='/services' className='text-blue font-semibold text-lg'>Services</Link>
                    <Link href='/services'>Security</Link>
                    <Link href='/services'>Analysis</Link>
                    <Link href='/services'>Data</Link>
                </div>



                <div className='flex flex-col leading-loose text-base'>
                    <Link href='/aboutus' className='text-blue font-semibold text-lg'>About</Link>
                    <Link href='/aboutus'>History</Link>
                    <Link href='/aboutus'>Goal</Link>
                    <Link href='/aboutus'>Future</Link>
                </div>

                <div className='flex flex-col leading-loose text-base'>
                    <Link href='/contacts' className='text-blue font-semibold text-lg'>Career</Link>
                    <Link href='/contacts'>Developer</Link>
                    <Link href='/contacts'>GCH</Link>
                    <Link href='/contacts'>contact</Link>
                </div>


                <div className='flex flex-col leading-loose text-base'>
                    <Link href='/contacts' className='text-blue font-semibold text-lg'>Contacts</Link>
                    <Link href='/contacts'>Subscription</Link>
                    <Link href='/contacts'>Help</Link>
                    <Link href='/contacts'>Links</Link>
                </div>

                <div></div>

            </div>

        </>
    );
};

export default Footer;