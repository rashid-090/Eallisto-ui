import React from 'react'
import { Abtimg, Ealli11, Ealli16, Ealli17,revankar,sunil,shahad,waseem } from '../assets'
import { Link } from 'react-router-dom'

// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react'

// Import Swiper styles
import 'swiper/css'
import 'swiper/css/pagination'

// import required modules
import { Autoplay, Pagination } from 'swiper/modules'

const ourTeams = [
  {
    id: 1,
    name: `Shahad Bangla`,
    profile: shahad,
    desig: `Chairman & Managing Director`
  },
  {
    id: 2,
    name: `Waseem Aslam`,
    profile: waseem,
    desig: `chief executive officer`
  },
  {
    id: 3,
    name: `Krishna Revanker`,
    profile: revankar,
    desig: `Vice president & Director of Technical`
  },
  {
    id: 4,
    name: `Sunil Chengappa`,
    profile: sunil,
    desig: `Vice president Business Development`
  },
  
]

const AboutUs = () => {
  return (
    <>
      <section className="w-11/12 xl:w-10/12 mx-auto h-full py-10 xl:py-20">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 xl:gap-x-20">
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
          </div>
          <div className="relative overflow-hidden rounded-3xl xl:rounded-[2rem] shadow-xl">
            <img
              className="hover:scale-105 duration-200 h-full w-full xl:h-[500px] object-cover"
              src={Abtimg}
              alt=""
            />
          </div>
        </div>
      </section>
      
      {/* teams */}
      <section className='w-11/12 md:w-9/12 xl:w-9/12 mx-auto py-10 xl:py-20'>
        <h2 className="text-3xl xl:text-5xl text-center font-semibold">
          Our <span className='text-main'>Team</span>
        </h2>
        
           
        {/* Mobile Swiper with autoplay and custom pagination */}
        <div className='md:hidden mt-5'>
          <Swiper
            slidesPerView={1}
            spaceBetween={20}
            autoplay={{
              delay: 2500,
              disableOnInteraction: false,
            }}
            pagination={false}
            modules={[Autoplay, Pagination]}
            className="mySwiper"
          >
            {ourTeams?.map((usr, i) => (
              <SwiperSlide key={i}>
                <div className='group relative h-full rounded-3xl overflow-hidden shadow-lg hover:shadow-xl duration-200'>
                  <img className='object-contain rounded-3xl h-[400px] overflow-hidden w-full  duration-300' src={usr.profile} alt={usr.name} />
                  <div className='absolute bg-[#0000009c] w-full h-fit text-center text-white p-1 capitalize py-2 bottom-0 left-0'>
                    <p className='text-base font-medium pb-1'>{usr.name}</p>
                    <p className='text-xs'>{usr.desig}</p>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
          
          {/* Custom styles for pagination bullets */}
          <style jsx global>{`
            .swiper-pagination-bullet {
              background-color: #ccc;
              opacity: 1;
              width: 10px;
              height: 10px;
              margin-bottom:-20px !important; 
            }
            .swiper-pagination-bullet-active-main {
              background-color: #3b82f6; /* Change this to your main color if different */
            }
          `}</style>
        </div>
        
        {/* Desktop Grid (hidden on mobile) */}
        <div className='hidden md:grid grid-cols-2 lg:grid-cols-4 gap-2 gap-y-14 xl:gap-3 mt-5 md:mb-10 xl:mb-0'>
          {ourTeams?.map((usr, i) => (
            <div className='group relative rounded-2xl xl:rounded-3xl shadow-lg hover:shadow-xl duration-200' key={i}>
              <img className='object-contain rounded-2xl xl:rounded-3xl w-full h-[300px] pt-5 border border-gray-100  duration-300' src={usr.profile} alt={usr.name} />
              <div className='absolute bg-main rounded-full w-full md:w-[95%] text-center text-white p-1 capitalize xl:p-2 py-2 bottom-0 left-[50%] -translate-x-[50%] translate-y-[60%]'>
                <p className='text-sm md:text-base font-medium pb-1'>{usr.name}</p>
                <p className='text-[10px]'>{usr.desig}</p>
              </div>
            </div>
          ))}
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
          </div>
        </div>
      </section>
    </>
  )
}

export default AboutUs