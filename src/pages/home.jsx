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
];

const Home = () => {
  const [expandedIndex, setExpandedIndex] = useState(null);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const phoneNumber = "917994433160"; // Replace with your WhatsApp number
    const message = `
      New Contact Form Submission:
      Name: ${formData.name}
      Email: ${formData.email}
      Phone: ${formData.phone}
      Subject: ${formData.subject}
      Message: ${formData.message}
    `;

    const encodedMessage = encodeURIComponent(message);
    window.open(
      `https://wa.me/${phoneNumber}?text=${encodedMessage}`,
      "_blank"
    );
  };

  return (
    <>
      {/* Banner */}
      <div className="relative w-full h-[92vh] md:h-[30vh] xl:h-[92vh] overflow-hidden">
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
        <div className="text-white absolute bottom-0 left-5 xl:left-32 text-center md:text-left z-10 w-11/12  flex flex-col items-center md:items-start h-full justify-center py-10 gap-3">
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
            <Link className="flex items-center gap-1 border border-main hover:bg-main hover:text-white text-main duration-200 rounded-full px-7 py-2.5 w-fit">
              Learn More <SlEnergy />
            </Link>
          </div>
          <div className="relative overflow-hidden rounded-[2rem] shadow-xl">
            <img
              className="hover:scale-105 duration-200 h-[200px] w-full md:h-[300px] xl:h-[500px] object-cover"
              src={Ealli11}
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
      </section>
      {/*  */}

      {/*  */}
      <section className="w-full h-[50vh] md:h-[30vh] xl:h-[60vh] relative overflow-hidden">
        <div className="w-full h-full absolute top-0 left-0 bg-[#0000007c]"></div>
        <img className="object-cover  w-full h-full" src={Ealli2} alt="" />
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
        <div className="w-11/12 xl:w-10/12 mx-auto relative grid grid-cols-1 md:grid-cols-2 bg-gray-200 border overflow-hidden">
          <div className="p-5 xl:p-10 text-black h-full flex flex-col justify-center">
            <h2 className="text-3xl xl:text-4xl uppercase font-medium">
              contact us
            </h2>
            <div className="pt-10 flex flex-col gap-5">
              <div className="flex flex-col gap-3">
                <span className="flex items-center gap-3">
                  <div className="bg-main h-8 w-8 grid place-items-center rounded-full">
                    <MdEmail className="text-xl text-white" />
                  </div>
                  <p>Email</p>
                </span>
                <a href="mailto:info@eallisto.com">info@eallisto.com</a>
              </div>
              <div className="flex flex-col gap-3">
                <span className="flex items-center gap-3">
                  <div className="bg-main h-8 w-8 grid place-items-center rounded-full">
                    <IoMdCall className="text-xl text-white" />
                  </div>
                  <p>Phone</p>
                </span>
                <a href="tel:+917994433160">+91 799 443 3160</a>
              </div>
              <div className="text-2xl flex gap-5">
                <a
                  href="#"
                  className="bg-main h-8 w-8 grid place-items-center rounded-full"
                >
                  <FaFacebook className="text-xl text-white" />
                </a>
                <a
                  href="https://www.linkedin.com/company/eallisto/"
                  target="_blank"
                  className="bg-main h-8 w-8 grid place-items-center rounded-full"
                >
                  <FaLinkedin className="text-xl text-white" />
                </a>
                <a
                  href="#"
                  className="bg-main h-8 w-8 grid place-items-center rounded-full"
                >
                  <FaSquareXTwitter className="text-xl text-white" />
                </a>
              </div>
            </div>
          </div>
          <form
            // onSubmit={handleSubmit}
            className="grid grid-cols-1 md:grid-cols-2 bg-white gap-5 text-sm p-5 xl:p-10 py-10 xl:py-24"
          >
            {/* Name Field */}
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className="border-b h-10 p-3 pl-0 focus:outline-none focus:border-main transition-colors duration-300"
              placeholder="Name"
              required
            />

            {/* Email Field */}
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="border-b h-10 p-3 pl-0 focus:outline-none focus:border-main transition-colors duration-300"
              placeholder="Email"
              required
            />

            {/* Phone Field */}
            <input
              type="tel"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              className="border-b h-10 p-3 pl-0 focus:outline-none focus:border-main transition-colors duration-300"
              placeholder="Mobile"
              required
            />

            {/* Subject Field */}
            <input
              type="text"
              name="subject"
              value={formData.subject}
              onChange={handleChange}
              className="border-b h-10 p-3 pl-0 focus:outline-none focus:border-main transition-colors duration-300"
              placeholder="Subject"
              required
            />

            {/* Message Field */}
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              rows="5"
              placeholder="Message"
              className="border-b p-3 pl-0 md:col-span-2 focus:outline-none focus:border-main transition-colors duration-300"
              required
            ></textarea>

            {/* Submit Button */}
            <button
              type="submit"
              className="bg-main hover:bg-main-hover capitalize text-white py-3 px-20 w-full md:w-fit duration-200 rounded-full"
            >
              Send
            </button>
          </form>
        </div>
      </section>
      {/*  */}
    </>
  );
};

{
}

export default Home;
