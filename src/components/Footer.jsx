import React from 'react';
import {Logo} from '../assets'
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <div className='bg-gray-100 w-full'>
      <div className='w-11/12 mx-auto grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-5 gap-y-10 py-10'>
          <div className='h-full flex items-center'>
            <img className='h-14 xl:h-16 object-contain' src={Logo} alt="" />
          </div>
          <div>
            <p className='text-lg font-semibold'>Pages</p>
           <div className='flex flex-col gap-1 pt-5'>
              <Link to={'/'} className='hover:text-main duration-200'>Home</Link>
              <Link to={'/'} className='hover:text-main duration-200'>About Us</Link>
              <Link to={'/'} className='hover:text-main duration-200'>Products</Link>
              <Link to={'/'} className='hover:text-main duration-200'>Contact Us</Link>
           </div>
          </div>
          <div>
            <p className='text-lg font-semibold'>Products</p>
            <div className='flex flex-col gap-1 pt-5'>
              <Link to={'/'} className='hover:text-main duration-200'>Energy Portal</Link>
              <Link to={'/'} className='hover:text-main duration-200'>Power Grid Solutions</Link>
              <Link to={'/'} className='hover:text-main duration-200'>Renewable Energy Services</Link>
              <Link to={'/'} className='hover:text-main duration-200'>Transmission & Distribution Solutions</Link>
              <Link to={'/'} className='hover:text-main duration-200'>Consulting & Advisory Services</Link>
           </div>
          </div>
          <div>
            <p className='text-lg font-semibold'>Address</p>
            <p className='pt-5 text-sm'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Molestias, at. 948754</p>
          </div>
      </div>
      <div className='w-11/12 mx-auto py-2 text-sm flex justify-between'>
            <p>© Eallisto 2025</p>
            <p><a href="https://dostudio.co.in" className='hover:text-main' target='_blank'>Powered by DO Studio</a></p>
      </div>
    </div>
  )
}

export default Footer