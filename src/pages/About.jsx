import React from 'react'
import { Ealli11 } from '../assets'
import { Link } from 'react-router-dom'

const AboutUs = () => {
  return (
    <section className="w-11/12 xl:w-10/12 mx-auto h-full py-10 xl:py-20">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 gap-x-20">
          <div className="md:col-span-2 flex flex-col gap-5 h-full justify-center">
            <h2 className="text-3xl xl:text-5xl font-semibold">
              <span className="text-main">About Eallisto</span>
              <br className="hidden xl:block" /> Group & Eallisto
              <br className="hidden xl:block" /> Energies.
            </h2>
            <p>
              Eallisto is a diversified business group with multiple brands
              operating under its umbrella, including Eallisto Energies,
              Eallisto Projects, Eallisto Holdings, Eallisto Beverages, and
              more. Each brand specializes in distinct sectors, contributing to
              the group's overall vision of innovation and excellence.
            </p>
            <p>
              As part of our expansion, we are now presenting the Eallisto
              Energies project for website development.
            </p>
            <Link className="border border-main hover:bg-main hover:text-white text-main duration-200 rounded-full px-7 py-2.5 w-fit">
              Learn More
            </Link>
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
  )
}

export default AboutUs