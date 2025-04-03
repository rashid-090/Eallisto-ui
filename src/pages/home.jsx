import React from "react";
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
} from "../assets";
import { Link } from "react-router-dom";
import Marquee from "react-fast-marquee";

const abtData = [
  {
    icon: `https://img.icons8.com/pulsar-line/48/FFFFFF/--solar-panels.png`,
    title: `Solar Plant Execution`,
    sub: `Full-scale execution of solar power plants, from planning
    and design to installation and commissioning.`,
  },
  {
    icon: `https://img.icons8.com/wired/64/FFFFFF/neutral-trading.png`,
    title: `Energy Trading`,
    sub: `Providing energy solutions for businesses that lack the space for
    solar installations by leveraging our investor network to develop large-scale solar
    farms.`,
  },
  {
    icon: `https://img.icons8.com/ios-filled/50/FFFFFF/waste-sorting--v2.png`,
    title: `Zero-Carbon Solutions`,
    sub: `Helping clients transition to net-zero energy consumption
    by optimizing renewable energy integration.`,
  },
  {
    icon: `https://img.icons8.com/dotty/80/FFFFFF/investment.png`,
    title: `Zero-Investment Models`,
    sub: `Offering businesses a way to utilize renewable energy
    with minimal or no upfront investment, backed by our investor network.`,
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
  return (
    <>
      {/* Banner */}
      <div className="relative w-full h-[92vh] overflow-hidden">
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
        <div className="text-white absolute bottom-0 left-5 xl:left-32 text-left z-10 w-11/12  flex flex-col items-start h-full justify-center gap-3">
          <h1 className="text-4xl xl:text-6xl font-medium">
            Eallisto Group Innovation
            <br className="hidden xl:block" /> Across Industries
          </h1>
          <p className="text-sm xl:text-base">
            Driving excellence with diversified brands, including Eallisto
            Energies
            <br className="hidden xl:block" /> now unveiling our latest website
            development project.
          </p>
          <Link className="border border-white hover:bg-main hover:border-main hover:text-white duration-200 rounded-full px-7 py-2.5 w-fit">
            Learn More
          </Link>
        </div>
      </div>
      {/* Banner */}

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

      <section className="w-11/12 xl:w-8/12 mx-auto h-full py-10 xl:py-20">
        <div className="flex flex-col gap-5 items-center text-center xl:px-20">
          <h2 className="text-3xl xl:text-5xl font-semibold">
            What is <span className="text-main">Eallisto Energies?</span>
          </h2>
          <p>
            Eallisto Energies is a comprehensive renewable energy solutions
            provider focused on delivering sustainable, cost-effective, and
            efficient energy solutions. Our core areas of expertise include
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 gap-x-10 pt-10">
          {abtData?.map((dt, i) => (
            <div className="shadow-xl h-full bg-white border border-gray-100 rounded-xl p-3 py-5 flex items-center gap-5">
              <div className="-ml-5 xl:-ml-7 h-20 w-20 aspect-square bg-main grid place-items-center rounded-xl shadow-md">
                <img className="h-12 w-12 object-cover" src={dt.icon} alt="" />
              </div>
              <div className="w-full h-full">
                <h4 className="text-lg font-semibold">{dt.title}</h4>
                <p className="text-sm">{dt.sub}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/*  */}
      <section className="w-full h-full py-10 xl:py-20">
        <h2 className="w-11/12 xl:w-10/12 mx-auto text-3xl xl:text-5xl font-semibold">
          What is <span className="text-main">Eallisto Energies.</span>
        </h2>
        <Marquee className="pt-10" pauseOnHover>
          {marquData?.map((mq, i) => (
            <img
              className="h-32 xl:h-52 object-cover mx-2 xl:mx-5"
              key={i}
              src={mq.image}
              alt=""
            />
          ))}
        </Marquee>
        <Marquee direction="right" pauseOnHover className="pt-5">
          {marquData?.map((mq, i) => (
            <img
              className="h-32 xl:h-52 object-cover mx-2 xl:mx-5"
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
      <section className="w-full h-[40vh] xl:h-[80vh] relative overflow-hidden">
        <div className="w-full h-full absolute top-0 left-0 bg-[#0000007c]"></div>
        <img className="object-cover  w-full h-full" src={Ealli2} alt="" />
        <div className="text-white absolute top-[50%] left-[50%] -translate-x-[50%] -translate-y-[50%] text-center z-10 w-10/12 mx-auto flex flex-col items-center gap-3">
          <h1 className="text-4xl xl:text-6xl font-medium">
            Lorem ipsum dolor.
          </h1>
          <p className="text-sm xl:text-base xl:px-40">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque
            repellendus quidem numquam odio corporis consequuntur quibusdam
            adipisci fuga dolore debitis.
          </p>
          <Link className="border border-white hover:bg-main hover:border-main hover:text-white duration-200 rounded-full px-7 py-2.5 w-fit">
            Learn More
          </Link>
        </div>
      </section>
      {/*  */}
    </>
  );
};

export default Home;
