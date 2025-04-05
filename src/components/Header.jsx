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

const allMenus = [
  { label: `Home`, link: `/` },
  { label: `About Us`, link: `/about-us` },
  {
    label: `Products`,
    link: `/products`,
    submenu: [
      { label: `Energy Portal`, link: `/product/:title` },
      { label: `Power Grid Solutions`, link: `/product/:title` },
      { label: `Renewable Energy Services`, link: `/product/:title` },
      { label: `Transmission & Distribution Solutions`, link: `/product/:title` },
      { label: `Consulting & Advisory Services`, link: `/product/:title` },
    ],
  },
  { label: `Investor Relations`, link: `/investor-relations` },
  { label: `Sustainability & ESG`, link: `/sustainability-and-esg` },
  { label: `Career`, link: `/career` },
];

const Header = () => {
  const [isSticky, setIsSticky] = useState(false);
  const [menuHeight, setMenuHeight] = useState(0);
  const [activeSubmenu, setActiveSubmenu] = useState(null);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [mobileSubmenuOpen, setMobileSubmenuOpen] = useState(null);
  const menuRef = useRef(null);
  const submenuTimeout = useRef(null);
  const headerRef = useRef(null);
  const mobileMenuRef = useRef(null);

  mobileMenuOpen
    ? (document.body.style.overflow = "hidden")
    : (document.body.style.overflow = "unset");

  // Measure menu height and set up scroll listener
  useEffect(() => {
    if (menuRef.current) {
      setMenuHeight(menuRef.current.offsetHeight);
    }

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
    <nav ref={headerRef}>
      <div className="bg-white w-full">
        {/* Menu placeholder to prevent content jump */}
        <div style={{ height: isSticky ? menuHeight : 0 }} aria-hidden="true" />

        {/* Sticky menu - now includes logo and mobile button */}
        <div
          ref={menuRef}
          className={`w-full flex items-center ${
            isSticky ? "bg-white" : "bg-white"
          } transition-all duration-300 ease-[cubic-bezier(0.4,0,0.2,1)] z-50 ${
            isSticky
              ? "fixed top-0 left-0 shadow-sm z-50 h-[7vh] md:h-[6vh] xl:h-[8vh]"
              : "relative h-[7vh] md:h-[6vh] xl:h-[10vh]"
          }`}
        >
          <div className="w-11/12 mx-auto flex justify-between items-center">
            {/* Logo - shown on all devices */}
            <Link to={'/'}>
            <img
              className={`${
                isSticky ? "h-9 xl:h-10" : "h-8 xl:h-12"
              } transition-all duration-500 object-contain`}
              src={Logo}
              alt=""
            />
            </Link>

            <div className="flex items-center gap-5">
              <div className="flex gap-10">
                <Link
                  to={"/contact-us"}
                  className="text-xs md:text-base bg-main hover:bg-main-hover duration-200 text-white px-3 xl:px-5 py-2 xl:py-2.5 rounded-full"
                >
                  Contact Us
                </Link>
                <div className="hidden md:flex gap-5 items-center text-xl">
                  <FaFacebook className="hover:text-main cursor-pointer" />
                  <FaLinkedin className="hover:text-main cursor-pointer" />
                  <FaInstagram className="hover:text-main cursor-pointer" />
                </div>
              </div>
              {/* Mobile menu button - shown only on mobile */}
              <button
                className="md:hidden text-2xl focus:outline-none transition-all duration-150"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              >
                {mobileMenuOpen ? <IoCloseOutline /> : <CgMenuLeft />}
              </button>
            </div>
          </div>

          {/* Mobile Menu - full screen overlay */}
          <div
            ref={mobileMenuRef}
            className={`md:hidden fixed inset-0 w-full h-full overflow-y-scroll bg-white z-40 transform transition-all duration-300 ease-in-out ${
              mobileMenuOpen
                ? "translate-y-12 opacity-100"
                : "-translate-y-full opacity-0 pointer-events-none"
            }`}
            style={{ top: `${isSticky ? menuHeight : menuHeight}px` }}
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
                        className="block  text-gray-700 hover:text-main transition-colors text-b"
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
      </div>
      <div
        ref={menuRef}
        className={`w-full hidden md:flex justify-center border-t border-b ${
          isSticky ? "bg-white" : "bg-white"
        } transition-all duration-300 ease-[cubic-bezier(0.4,0,0.2,1)] ${
          isSticky
            ? "fixed top-20 md:top-16 xl:top-14 left-0 shadow-sm z-50 h-[4vh] md:h-[5vh] xl:h-[7vh]"
            : "relative h-[4vh] md:h-[5vh] xl:h-[8vh]"
        }`}
      >
        {/* Desktop Menu and Social Icons */}
        <div className="hidden md:flex items-center gap-20">
          <div
            className="flex gap-6  xl:gap-14 relative"
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
    </nav>
  );
};

export default Header;
