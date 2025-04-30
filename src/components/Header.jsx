import React, { useState, useEffect, useRef } from "react";
import {
  FaFacebook,
  FaLinkedin,
  FaInstagram,
  FaChevronDown,
} from "react-icons/fa";
import { CgMenuLeft } from "react-icons/cg";
import { IoCloseOutline } from "react-icons/io5";
import { Logo } from "../assets";
import { Link } from "react-router-dom";
import { products } from "./data";
import { SlEnergy } from "react-icons/sl";

const allMenus = [
  { label: `Home`, link: `/` },
  { label: `About Us`, link: `/about-us` },
  {
    label: `Products`,
    link: `/products`,
    submenu: products.map(product => ({
      label: product.title,
      link: `/product/${product.slug}`
    }))
  },
  { label: `Investor Relations`, link: `/investor-relations` },
  { label: `Sustainability & ESG`, link: `/sustainability-and-esg` },
  { label: `Career`, link: `/career` },
  { label: `Contact Us`, link: `/contact-us` },
];

const Header = () => {
  const [isSticky, setIsSticky] = useState(false);
  const [activeSubmenu, setActiveSubmenu] = useState(null);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [mobileSubmenuOpen, setMobileSubmenuOpen] = useState(null);
  const submenuTimeout = useRef(null);
  const headerRef = useRef(null);
  const mobileMenuRef = useRef(null);

  mobileMenuOpen
    ? (document.body.style.overflow = "hidden")
    : (document.body.style.overflow = "unset");

  // Set up scroll listener
  useEffect(() => {
    const handleScroll = () => {
      setIsSticky(window.scrollY > 100);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (headerRef.current && !headerRef.current.contains(event.target)) {
        setMobileMenuOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  // Handle submenu hover with delay to prevent flickering (desktop)
  const handleMenuHover = (index) => {
    clearTimeout(submenuTimeout.current);
    submenuTimeout.current = setTimeout(() => {
      setActiveSubmenu(index);
    }, 150);
  };

  const handleMenuLeave = () => {
    clearTimeout(submenuTimeout.current);
    submenuTimeout.current = setTimeout(() => {
      setActiveSubmenu(null);
    }, 200);
  };

  // Toggle mobile submenu
  const toggleMobileSubmenu = (index) => {
    setMobileSubmenuOpen(mobileSubmenuOpen === index ? null : index);
  };

  // Clear timeouts when component unmounts
  useEffect(() => {
    return () => {
      clearTimeout(submenuTimeout.current);
    };
  }, []);

  return (
    <nav ref={headerRef} className="bg-white w-full">
      {/* Placeholder to prevent content jump when sticky */}
      <div 
        className={`h-[10vh] lg:h-[9vh] ${isSticky ? 'block' : 'hidden'}`} 
        aria-hidden="true" 
      />

      {/* Main header container */}
      <div className={`w-full bg-white z-50 ${
        isSticky 
          ? "fixed top-0 left-0 shadow-sm" 
          : "relative"
      }`}>
        {/* Top bar with logo and CTA */}
        <div className="w-11/12 mx-auto flex justify-between items-center h-[10vh] lg:h-[9vh]">
          <Link to={'/'}>
            <img
              className={`${isSticky ? 'xl:h-10' : ' xl:h-11'} h-6  h-7 transition-all duration-500 object-contain`}
              src={Logo}
              alt="Company Logo"
            />
          </Link>

          <div className="flex items-center gap-5">
            <div className="flex gap-10">
              <Link
                to={"/contact-us"}
                className={`${isSticky ? 'xl:scale-90': ''} h-8 xl:h-10 transition-all px-3 flex items-center gap-1 text-xs md:text-sm xl:text-base bg-main hover:bg-main-hover duration-200 text-white rounded-full`}
              >
                Get Start <SlEnergy/>
              </Link>
            </div>
            {/* Mobile menu button */}
            <button
              className="lg:hidden text-2xl focus:outline-none transition-all duration-150"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? <IoCloseOutline /> : <CgMenuLeft />}
            </button>
          </div>
        </div>

        {/* Navigation bar (desktop only) */}
        <div className={`hidden lg:flex w-full justify-center border-t border-b h-[8vh]`}>
          <div className="flex justify-center items-center gap-20 w-11/12 mx-auto">
            <div
              className="flex gap-6 xl:gap-10 relative "
              onMouseLeave={handleMenuLeave}
            >
              {allMenus.map((menu, index) => (
                <div
                  key={`desktop-${index}`}
                  className="relative group"
                  onMouseEnter={() => handleMenuHover(index)}
                >
                  <Link
                    to={menu.link}
                    className="flex items-center gap-1 text-gray-700 hover:text-main transition-colors"
                  >
                    {menu.label}
                    {menu.submenu && (
                      <FaChevronDown
                        className={`text-xs transition-transform duration-200 ${
                          activeSubmenu === index ? "rotate-180" : ""
                        }`}
                      />
                    )}
                  </Link>

                  {/* Desktop Submenu */}
                  {menu.submenu && (
                    <div
                      className={`absolute left-0 top-full mt-2 w-fit text-nowrap bg-white rounded-md shadow-lg py-1 z-50 ${
                        activeSubmenu === index
                          ? "opacity-100 translate-y-0 visible"
                          : "opacity-0 -translate-y-2 invisible"
                      } transition-all duration-300 ease-in-out`}
                    >
                      {menu.submenu.map((subitem, subIndex) => (
                        <Link
                          key={`desktop-sub-${subIndex}`}
                          to={subitem.link}
                          className="block px-4 py-2 text-gray-700 hover:bg-green-50 hover:text-main transition-colors"
                          onClick={() => setActiveSubmenu(null)}
                        >
                          {subitem.label}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Mobile Menu - full screen overlay */}
        <div
          ref={mobileMenuRef}
          className={`xl:hidden fixed inset-0 w-full h-full overflow-y-scroll bg-white z-40 transform transition-all duration-300 ease-in-out ${
            mobileMenuOpen
              ? "translate-y-0 opacity-100"
              : "-translate-y-full opacity-0 pointer-events-none"
          }`}
          style={{ top: '10vh' }} // Fixed top position based on header height
        >
          <div className="relative w-11/12 mx-auto h-full overflow-y-scroll pt-12 pb-24">
            <div className="space-y-4">
              {allMenus.map((menu, index) => (
                <div
                  key={`mobile-${index}`}
                  className="border-b border-gray-100 pb-2"
                >
                  <div className="flex justify-between items-center">
                    <Link
                      to={menu.link}
                      className="block text-gray-700 hover:text-main transition-colors text-b"
                      onClick={() =>
                        !menu.submenu && setMobileMenuOpen(false)
                      }
                    >
                      {menu.label}
                    </Link>
                    {menu.submenu && (
                      <button
                        onClick={() => toggleMobileSubmenu(index)}
                        className="p-2 focus:outline-none"
                      >
                        <FaChevronDown
                          className={`text-xs transition-transform duration-200 ${
                            mobileSubmenuOpen === index ? "rotate-180" : ""
                          }`}
                        />
                      </button>
                    )}
                  </div>

                  {/* Mobile Submenu */}
                  {menu.submenu && (
                    <div
                      className={`pl-4 overflow-hidden ${
                        mobileSubmenuOpen === index
                          ? "max-h-96 opacity-100"
                          : "max-h-0 opacity-0"
                      } transition-all duration-300 ease-in-out`}
                    >
                      {menu.submenu.map((subitem, subIndex) => (
                        <Link
                          key={`mobile-sub-${subIndex}`}
                          to={subitem.link}
                          className="block py-3 text-gray-600 hover:text-main transition-colors"
                          onClick={() => setMobileMenuOpen(false)}
                        >
                          {subitem.label}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </div>

            <div className="flex gap-5 text-xl pt-8">
              <FaFacebook className="hover:text-main cursor-pointer" />
              <FaLinkedin className="hover:text-main cursor-pointer" />
              <FaInstagram className="hover:text-main cursor-pointer" />
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Header;