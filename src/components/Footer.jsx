import React, { useState, useEffect } from "react";
import { Logo } from "../assets";
import { Link } from "react-router-dom";
import { FaFacebook, FaLinkedin } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";
import { IoIosArrowRoundUp } from "react-icons/io";
import { SlEnergy } from "react-icons/sl";
import { products } from "../components/data";
const Footer = () => {
  const [showBackToTop, setShowBackToTop] = useState(false);
  const [currentIcon, setCurrentIcon] = useState(0);
  const icons = [<IoIosArrowRoundUp key="arrow" />, <SlEnergy key="energy" />];

  // Handle scroll to top
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  // Show/hide button based on scroll position
  useEffect(() => {
    const handleScroll = () => {
      if (window.pageYOffset > 300) {
        setShowBackToTop(true);
      } else {
        setShowBackToTop(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Cycle through icons every 2 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIcon((prev) => (prev + 1) % icons.length);
    }, 2000);
    return () => clearInterval(interval);
  }, [icons.length]);

  return (
    <div className="bg-gray-100 w-full">
      {/* Back to Top Button - fixed position with smooth transitions */}
      <button
        onClick={scrollToTop}
        className={`fixed bottom-5 right-5 bg-main text-white p-3 rounded-full shadow-lg hover:bg-opacity-90 transition-all duration-300 z-50 ${
          showBackToTop
            ? "opacity-100 translate-y-0"
            : "opacity-0 translate-y-10 pointer-events-none"
        }`}
        aria-label="Back to top"
      >
        <div className="transition-transform duration-300 hover:scale-110">
          {icons[currentIcon]}
        </div>
      </button>

      <div className="w-11/12 xl:w-10/12 mx-auto grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-5 gap-y-10 py-10 ">
        <div className="h-full flex items-center">
          <Link to={"/"}>
            <img className="h-10 xl:h-14 object-contain" src={Logo} alt="" />
          </Link>
        </div>
        <div>
          <p className="text-lg font-semibold ">Pages</p>
          <div className="flex flex-col gap-1 pt-2 text-sm">
            <Link to={"/"} className="hover:text-main duration-200">
              Home
            </Link>
            <Link to={"/about-us"} className="hover:text-main duration-200">
              About Us
            </Link>
            <Link to={"/products"} className="hover:text-main duration-200">
              Products
            </Link>
            <Link to={"/projects"} className="hover:text-main duration-200">
              Projects
            </Link>
            <Link to={"/contact-us"} className="hover:text-main duration-200">
              Contact Us
            </Link>
          </div>
        </div>
        <div>
          <p className="text-lg font-semibold">Products</p>
          <div className="flex flex-col gap-1 pt-2 text-sm">
            {products?.map((pd,i)=>(
               <Link key={i} to={`/product/${pd.slug}`} className="hover:text-main duration-200">
               {pd.title}
             </Link>
            ))}
          </div>
        </div>
        <div>
          <p className="text-lg font-semibold">Address</p>
          <p className="pt-2 text-sm">
          Hilite Business Park Phase- 2, 6th Floor Door Nos: 2/1149/I 218.
          </p>
          <div className="text-2xl flex gap-5 pt-5">
            <a
              href="#"
              className="bg-main h-8 w-8 grid place-items-center rounded-full"
            >
              <FaFacebook className="text-xl text-white hover:scale-125 duration-150" />
            </a>
            <a
              href="https://www.linkedin.com/company/eallisto/"
              target="_blank"
              className="bg-main h-8 w-8 grid place-items-center rounded-full"
            >
              <FaLinkedin className="text-xl text-white hover:scale-125 duration-150" />
            </a>
            <a
              href="#"
              className="bg-main h-8 w-8 grid place-items-center rounded-full"
            >
              <FaSquareXTwitter className="text-xl text-white hover:scale-125 duration-150" />
            </a>
          </div>
        </div>
      </div>
      <div className="w-11/12 xl:w-10/12 mx-auto py-2 text-sm flex justify-between border-t">
        <p>© Eallisto 2025</p>
        <p>
          <a
            href="https://dostudio.co.in"
            className="hover:text-main"
            target="_blank"
          >
            Powered by DO Studio
          </a>
        </p>
      </div>
    </div>
  );
};

export default Footer;
