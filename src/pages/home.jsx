import React, { useState } from "react";
import {
  BannerBg,
  Bgvideo,
  Bgthumb,
  Ealli1,
  Ealli2,
  Ealli3,
  Ealli4,
  Ealli5,
  Ealli6,
  Ealli7,
  Ealli8,
  Ealli9,
  Ealli10,
  Ealli11,
  Ealli12,
  Ealli13,
  Ealli14,
  Ealli15,
  Ealli16,
  Ealli17,
  Ealli18,
  Ealli19,
  Ealli20,
  Ealli21,
  Ealli22,
  Ealli23,
  Ealli24,
  Ealli25,
  Ealli26,

  Logo,
} from "../assets";
import { Link } from "react-router-dom";
import Marquee from "react-fast-marquee";
import { MdEmail } from "react-icons/md";
import { IoMdCall } from "react-icons/io";
import { FaFacebook } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";
import { Products } from "../components";
import { SlEnergy } from "react-icons/sl";
import emailjs from "@emailjs/browser";
import { toast } from "react-toastify";
import ContactForm from "../components/ContactForm";

const abtData = [
  {
    icon: `https://img.icons8.com/pulsar-line/48/FFFFFF/--solar-panels.png`,
    title: `Energy Portal`,
    stitle: `Your Gateway to Smart Energy Management`,
    sub: `Take control of your energy future with our intuitive Energy Portal. Designed for both residential and commercial clients.`,
    points: [
      "Real-time energy consumption monitoring",
      "Solar plant performance tracking",
      "Data analytics and reporting",
      "Energy saving recommendations",
      "Seamless integration with Eallisto Energy solutions",
    ],
  },
  {
    icon: `https://img.icons8.com/wired/64/FFFFFF/neutral-trading.png`,
    title: `Power Grid Solutions`,
    stitle: `Ensuring Stability and Effi ciency`,
    sub: `Our enterprise advances a smarter and more resilient power grid through sophisticated transmission and distribution solutions.`,
    points: [
      "Grid modernization technologies",
      "Transmission line optimization",
      "Substation automation",
      "Energy storage solutions integration",
      "Smart grid consulting",
    ],
  },
  {
    icon: `https://img.icons8.com/ios-filled/50/FFFFFF/waste-sorting--v2.png`,
    title: `Renewable Energy Services`,
    stitle: `Tailored Solutions for a Greener Tomorrow`,
    sub: `Our core expertise lies in delivering end-to-end renewable energy solutions, customized to your specifi c needs and consumption patterns.`,
    points: [
      "Solar Plant Execution",
      "Energy Trading",
      "Zero-Carbon Solutions",
      "Zero-Investment Models",
    ],
  },
];

const marquData = [
  {
    image: Ealli1,
  },
  {
    image: Ealli2,
  },
  {
    image: Ealli3,
  },
  {
    image: Ealli4,
  },
  {
    image: Ealli5,
  },
  {
    image: Ealli6,
  },
  {
    image: Ealli7,
  },
  {
    image: Ealli8,
  },
  {
    image: Ealli9,
  },
  {
    image: Ealli10,
  },
  {
    image: Ealli11,
  },
  {
    image: Ealli12,
  },
  {
    image: Ealli14,
  },
  {
    image: Ealli15,
  },
  {
    image: Ealli16,
  },
  {
    image: Ealli17,
  },
  {
    image: Ealli19,
  },
  {
    image: Ealli20,
  },
  {
    image: Ealli21,
  },
  {
    image: Ealli22,
  },
  {
    image: Ealli23,
  },
  {
    image: Ealli24,
  },
  {
    image: Ealli25,
  },
  {
    image: Ealli26,
  },

];

const Home = () => {
  const [expandedIndex, setExpandedIndex] = useState(null);
 
  return (
    <>
      {/* Banner */}
      <div className="relative w-full h-[92vh] md:h-[70vh] xl:h-[92vh] overflow-hidden">
        <div className="w-full h-full absolute top-0 left-0 bg-[#00000049]"></div>
        <video
          className="object-cover w-full h-full"
          muted
          loop
          autoPlay
          playsInline
          poster={Bgthumb}
        >
          <source src={Bgvideo} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        <div className="text-white absolute bottom-0 left-5 lg:left-20 xl:left-32 text-center md:text-left z-10 w-11/12  flex flex-col items-center md:items-start h-full justify-center py-10 gap-3">
          <h1 className="text-2xl xl:text-5xl font-semibold xl:font-medium">
            Empowering Your Future with
            <br className="hidden xl:block" /> Sustainable Energy.
          </h1>
          <p className="text-xs md:text-base xl:w-[50%]">
            Eallisto Energies empowers individuals and enterprises to embrace
            clean energy through comprehensive solutions—ranging from full-scale
            solar plant execution to innovative zero-investment models.
          </p>
          <Link
            to={"/contact-us"}
            className="flex items-center gap-1 border border-white hover:bg-main hover:border-main hover:text-white duration-200 rounded-full px-7 py-2.5 w-fit"
          >
            Get Start <SlEnergy />
          </Link>
        </div>
      </div>
      {/* Banner */}

      <section className="w-11/12 xl:w-10/12 mx-auto h-full py-10 xl:py-20">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 gap-x-20 relative">
          <div className="md:col-span-2 flex flex-col gap-5 h-full justify-center">
            <h2 className="text-3xl xl:text-5xl font-semibold">
              <span className="text-main">Our Roots, Our Ascent:</span>
              <br className="hidden xl:block" />
              The Eallisto Energies Story
            </h2>
            <p className="text-justify md:text-left">
              At Eallisto Energies, the mission transcends the mere provision of
              energy; the entity stands as an architect of a sustainable future.
              As a pivotal extension of the esteemed Eallisto Group, this
              organization inherits a legacy of innovation and
              excellence—principles meticulously applied to the critical domain
              of renewable energy.
            </p>
            <Link to={'/about-us'} className="flex items-center gap-1 border border-main hover:bg-main hover:text-white text-main duration-200 rounded-full px-7 py-2.5 w-fit">
              Learn More <SlEnergy />
            </Link>
          </div>
          <div className="relative overflow-hidden rounded-[2rem] shadow-xl">
            <img
              className="hover:scale-105 duration-200 h-[200px] w-full md:h-[300px] xl:h-[500px] object-cover"
              src={Ealli16}
              loading="lazy"
              alt=""
            />
          </div>
        </div>
      </section>

      <section className="bg-gray-100 w-full h-full">
        <div className="w-11/12 xl:w-10/12 mx-auto text-black h-full py-10 xl:py-16  grid grid-cols-1 md:grid-cols-3 gap-16">
          <div className="md:col-span-2 flex flex-col gap-10">
            <div className="flex flex-col gap-2">
              <h4 className="font-semibold text-2xl xl:text-4xl tracking-wider pb-1">
                Expertise Rooted in
                <br />
                <span className="text-main"> Experience.</span>
              </h4>
              <p className="text-sm text-justify md:text-left">
                Backed by the strength and diverse capabilities of the Eallisto
                Group, our team comprises seasoned professionals in energy,
                engineering, fi nance, and project management. This
                multidisciplinary expertise allows us to navigate the
                complexities of the renewable energy landscape with confi dence
                and deliver exceptional results.
              </p>
            </div>
            <div className="flex flex-col gap-2">
              <h4 className="font-semibold text-2xl xl:text-4xl text-right md:text-left tracking-wider pb-1">
                The Eallisto Group
                <br /> <span className="text-main">Connection.</span>
              </h4>
              <p className="text-sm text-justify md:text-left">
                Being part of the Eallisto Group provides us with a robust
                foundation, access to a diverse network, and a shared commitment
                to innovation across various sectors, including Eallisto
                Projects, Eallisto Holdings, Eallisto Informatics and Eallisto
                Capital. This synergy strengthens our capabilities and broadens
                our perspective in delivering holistic energy solutions.
              </p>
            </div>
          </div>
          <div className="hidden md:flex h-full items-center justify-center">
            <img
              className="h-20 xl:h-60 object-contain animate-pulse"
              src={Logo}
              alt=""
            />
          </div>
        </div>
      </section>

      <section className="w-11/12 xl:w-10/12 mx-auto h-full py-10 xl:py-20">
        <div className="flex flex-col gap-5 items-center text-center xl:px-20">
          <h2 className="text-3xl xl:text-5xl font-semibold">
            Our Sustainable <span className="text-main">Energy Portfolio</span>
          </h2>
          <p>
            Eallisto Energies off ers a comprehensive suite of renewable energy
            solutions tailored to meet the diverse needs of households,
            businesses, and large-scale industrial operations.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 gap-y-20 gap-x-10 pt-20">
          {abtData?.map((dt, i) => {
            const isExpanded = expandedIndex === i;

            return (
              <div
                key={i}
                className="shadow-xl h-full bg-white border border-gray-100 rounded-3xl p-5 pb-10 py-5 flex flex-col items-center gap-5"
              >
                <div className="-mt-14 xl:-mt-16 h-14 w-14 xl:h-20 xl:w-20 aspect-square bg-main grid place-items-center rounded-full shadow-2xl">
                  <img
                    className="h-10 w-10 xl:h-11 xl:w-11 object-cover"
                    src={dt.icon}
                    alt=""
                  />
                </div>
                <div className="w-full flex flex-col justify-center gap-4 h-full">
                  <div>
                    <h4 className="text-sm text-center md:text-lg font-semibold">
                      {dt.title}
                    </h4>
                    <h6 className="text-xs text-center">{dt.stitle}</h6>
                  </div>
                  <p className="text-xs md:text-sm text-center">{dt.sub}</p>

                  {/* Points list with transition */}
                  <div
                    className={`transition-all duration-500 overflow-hidden ${
                      isExpanded ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
                    }`}
                  >
                    <ul className="text-xs md:text-sm space-y-1 mt-2">
                      {dt.points.map((point, index) => (
                        <li
                          key={index}
                          className="flex items-center gap-2 text-xs"
                        >
                          <SlEnergy className="text-main" />
                          {point}
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Toggle Button */}
                  <button
                    onClick={() => setExpandedIndex(isExpanded ? null : i)}
                    className="text-main text-xs underline self-center"
                  >
                    {isExpanded ? "Show Less" : "Show More"}
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/*  */}

      <Products />
      {/*  */}

      {/*  */}
      <section className="w-11/12 xl:w-10/12 mx-auto h-full py-10 xl:py-20">
        <h2 className=" text-3xl xl:text-5xl font-semibold">
          What is <span className="text-main">Eallisto Energies.</span>
        </h2>
        <Marquee className="mt-10" pauseOnHover>
          {marquData?.map((mq, i) => (
            <img
              className="h-20 md:h-32 xl:h-40 object-cover mx-2 "
              key={i}
              src={mq.image}
              alt=""
            />
          ))}
        </Marquee>
        <Marquee direction="right" pauseOnHover className="pt-5">
          {marquData?.map((mq, i) => (
            <img
              className="h-20 md:h-32 xl:h-40 object-cover mx-2 "
              key={i}
              loading="lazy"
              src={mq.image}
              alt="img"
            />
          ))}
        </Marquee>
        <div className="mx-auto w-fit">
          <Link to={'/projects'} className="mt-5 flex items-center gap-1 border border-main hover:bg-main hover:text-white text-main duration-200 rounded-full px-7 py-2.5 w-fit">
              See More <SlEnergy />
            </Link>
        </div>
      </section>
      {/*  */}

      {/*  */}
      <section className="w-full h-[50vh] md:h-[30vh] xl:h-[60vh] relative overflow-hidden">
        <div className="w-full h-full absolute top-0 left-0 bg-[#0000007c]"></div>
        <img className="object-cover  w-full h-full" src={Ealli1} alt="" />
        <div className="text-white absolute top-[50%] left-[50%] -translate-x-[50%] -translate-y-[50%] text-center z-10 w-10/12 mx-auto flex flex-col items-center gap-3">
          <h1 className="text-4xl xl:text-6xl font-medium">
            Let's Power the Future Together
          </h1>
          <p className="text-sm xl:text-base xl:px-40">
            Are you ready to explore how Eallisto Energies can illuminate your
            home or business with the power of sustainability? Do you have a
            vision for a collaborative investment in a cleaner tomorrow? Reach
            out to our dedicated team of energy architects and sustainability
            champions
          </p>
          <Link
            to={"/contact-us"}
            className="border border-white hover:bg-main hover:border-main hover:text-white duration-200 rounded-full px-7 py-2.5 w-fit"
          >
            Contact us
          </Link>
        </div>
      </section>

      <section className="w-full h-full relative py-10 xl:py-20">
      <ContactForm/>

      </section>
      {/*  */}
    </>
  );
};

{
}

export default Home;
