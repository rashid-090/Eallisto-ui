import React from 'react'
import { Ealli11 } from '../assets'
import { Link } from 'react-router-dom'

const AboutUs = () => {
  return (
    <>
    <section className="w-11/12 xl:w-10/12 mx-auto h-full py-10 xl:py-20">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 gap-x-20">
          <div className="md:col-span-2 flex flex-col gap-5 h-full justify-center">
          <h2 className="text-3xl xl:text-5xl font-semibold">
              <span className="text-main">Our Roots, Our Ascent:</span>
              <br className="hidden xl:block" />The Eallisto Energies Story
            </h2>
            <p>At Eallisto Energies, the mission transcends the mere provision of energy; the entity stands as an architect of a sustainable future. As a pivotal extension of the esteemed Eallisto Group, this organization inherits a legacy of innovation and excellence—principles meticulously applied to the critical domain of renewable energy.</p>
            <div className='pt-3'>
              <h3 className='text-xl font-medium'>Our <span className='text-main'>Vision</span></h3>
              <p>To be a leading catalyst in the global transition towards a zero-carbon economy, making sustainable energy accessible and economically viable for all.</p>
            </div>
            <div className='pt-3'>
              <h3 className='text-xl font-medium'>Our <span className='text-main'>Mission</span></h3>
              <p>To deliver comprehensive, reliable, and cutting-edge renewable energy solutions that empower our clients, protect our planet, and generate lasting value for our stakeholders.</p>
            </div>
          
            {/* <Link className="border border-main hover:bg-main hover:text-white text-main duration-200 rounded-full px-7 py-2.5 w-fit">
              Learn More
            </Link> */}
          </div>
          <div className="relative overflow-hidden rounded-[2rem] shadow-xl">
            <img
              className="hover:scale-105 duration-200 h-[500px] object-cover"
              src={Ealli11}
              alt=""
            />
          </div>
        </div>
      </section>
       {/* CTA Section */}
       <section className="py-10 px-4 bg-main text-white">
       <div className="max-w-4xl mx-auto text-center">
         <h2 className="text-3xl font-bold mb-6">Ready to transform your energy infrastructure?</h2>
         <p className="text-xl mb-8">Our experts are standing by to help you find the right solutions for your needs.</p>
         <div className="flex flex-col md:flex-row justify-center gap-4">
           <Link to="/contact-us" className="bg-white text-main hover:bg-gray-100 font-semibold py-2 px-8 rounded-full xl:text-lg transition duration-300">
             Contact Us
           </Link>
           <Link to="/contact-us" className="bg-transparent border-2 border-white hover:bg-white hover:text-main font-semibold py-2 px-8 rounded-full xl:text-lg transition duration-300">
             Request Demo
           </Link>
         </div>
       </div>
     </section>
    </>
  )
}

export default AboutUs