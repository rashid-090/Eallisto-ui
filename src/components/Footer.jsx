import React from 'react';
import {Logo} from '../assets'
import { Link } from 'react-router-dom';
import { FaFacebook, FaLinkedin } from 'react-icons/fa';
import { FaSquareXTwitter } from 'react-icons/fa6';

const Footer = () => {
  return (
    <div className='bg-gray-100 w-full'>
      <div className='w-11/12 xl:w-10/12 mx-auto grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-5 gap-y-10 py-10'>
          <div className='h-full flex items-center'>
            <Link to={'/'}><img className='h-10 xl:h-14 object-contain' src={Logo} alt="" /></Link>
          </div>
          <div>
            <p className='text-lg font-semibold '>Pages</p>
           <div className='flex flex-col gap-1 pt-2 text-sm'>
              <Link to={'/'} className='hover:text-main duration-200'>Home</Link>
              <Link to={'/about-us'} className='hover:text-main duration-200'>About Us</Link>
              <Link to={'/products'} className='hover:text-main duration-200'>Products</Link>
              <Link to={'/contact-us'} className='hover:text-main duration-200'>Contact Us</Link>
           </div>
          </div>
          <div>
            <p className='text-lg font-semibold'>Products</p>
            <div className='flex flex-col gap-1 pt-2 text-sm'>
              <Link to={'/'} className='hover:text-main duration-200'>Energy Portal</Link>
              <Link to={'/'} className='hover:text-main duration-200'>Power Grid Solutions</Link>
              <Link to={'/'} className='hover:text-main duration-200'>Renewable Energy Services</Link>
              <Link to={'/'} className='hover:text-main duration-200'>Transmission & Distribution Solutions</Link>
              <Link to={'/'} className='hover:text-main duration-200'>Consulting & Advisory Services</Link>
           </div>
          </div>
          <div>
            <p className='text-lg font-semibold'>Address</p>
            <p className='pt-2 text-sm'>Lorem ipsum dolor sit amet,<br/> consectetur adipisicing elit. Molestias,<br/> at. 948754</p>
            <div className="text-2xl flex gap-5 pt-5">
                <a href="#" className="bg-main h-8 w-8 grid place-items-center rounded-full"><FaFacebook className="text-xl text-white" /></a>
                <a href="#" className="bg-main h-8 w-8 grid place-items-center rounded-full"><FaLinkedin className="text-xl text-white" /></a>
                <a href="#" className="bg-main h-8 w-8 grid place-items-center rounded-full"><FaSquareXTwitter className="text-xl text-white" /></a>
              </div>
          </div>
      </div>
      <div className='w-11/12 mx-auto py-2 text-sm flex justify-between border-t'>
            <p>© Eallisto 2025</p>
            <p><a href="https://dostudio.co.in" className='hover:text-main' target='_blank'>Powered by DO Studio</a></p>
      </div>
    </div>
  )
}

export default Footer