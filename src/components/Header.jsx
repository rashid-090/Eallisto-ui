import React, { useState, useEffect, useRef } from 'react';
import { FaFacebook, FaLinkedin, FaInstagram, FaChevronDown } from "react-icons/fa";
import { CgMenuLeft } from "react-icons/cg";
import { IoCloseOutline } from "react-icons/io5";

const allMenus = [
  { label: `Home`, link: `/` },
  { label: `About Us`, link: `/` },
  { 
    label: `Products`, 
    link: `/products`,
    submenu: [
      { label: `Product 1`, link: `/products/1` },
      { label: `Product 2`, link: `/products/2` },
      { label: `Product 3`, link: `/products/3` },
    ]
  },
  { label: `Contact Us`, link: `/` }
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

  // Measure menu height and set up scroll listener
  useEffect(() => {
    if (menuRef.current) {
      setMenuHeight(menuRef.current.offsetHeight);
    }

    const handleScroll = () => {
      setIsSticky(window.scrollY > 100);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (headerRef.current && !headerRef.current.contains(event.target)) {
        setMobileMenuOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
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
      <div className='bg-white w-full'>
        {/* Menu placeholder to prevent content jump */}
        <div style={{ height: isSticky ? menuHeight : 0 }} aria-hidden="true" />

        {/* Sticky menu - now includes logo and mobile button */}
        <div
          ref={menuRef}
          className={`w-full bg-white transition-all duration-300 ease-in-out ${
            isSticky 
              ? 'fixed top-0 left-0 shadow-md z-50 py-3' 
              : 'relative py-5'
          }`}
        >
          <div className='w-11/12 mx-auto flex justify-between items-center'>
            {/* Logo - shown on all devices */}
            <p className='text-xl xl:text-2xl font-medium'>MY LOGO</p>
            
            {/* Desktop Menu and Social Icons */}
            <div className="hidden md:flex items-center gap-20">
              <div className="flex gap-8 relative" onMouseLeave={handleMenuLeave}>
                {allMenus.map((menu, index) => (
                  <div 
                    key={`desktop-${index}`}
                    className="relative group"
                    onMouseEnter={() => handleMenuHover(index)}
                  >
                    <a 
                      href={menu.link} 
                      className="flex items-center gap-1 text-gray-700 hover:text-blue-600 transition-colors"
                    >
                      {menu.label}
                      {menu.submenu && (
                        <FaChevronDown className={`text-xs transition-transform duration-200 ${
                          activeSubmenu === index ? 'rotate-180' : ''
                        }`} />
                      )}
                    </a>

                    {/* Desktop Submenu */}
                    {menu.submenu && (
                      <div 
                        className={`absolute left-0 top-full mt-2 w-48 bg-white rounded-md shadow-lg py-1 z-50 ${
                          activeSubmenu === index 
                            ? 'opacity-100 translate-y-0 visible' 
                            : 'opacity-0 -translate-y-2 invisible'
                        } transition-all duration-300 ease-in-out`}
                      >
                        {menu.submenu.map((subitem, subIndex) => (
                          <a
                            key={`desktop-sub-${subIndex}`}
                            href={subitem.link}
                            className="block px-4 py-2 text-gray-700 hover:bg-blue-50 hover:text-blue-600 transition-colors"
                          >
                            {subitem.label}
                          </a>
                        ))}
                      </div>
                    )}
                  </div>
                ))}
              </div>
              
              <div className='flex gap-5 text-xl'>
                <FaFacebook className="hover:text-blue-600 cursor-pointer" />
                <FaLinkedin className="hover:text-blue-600 cursor-pointer" />
                <FaInstagram className="hover:text-blue-600 cursor-pointer" />
              </div>
            </div>

            {/* Mobile menu button - shown only on mobile */}
            <button 
              className='md:hidden text-2xl focus:outline-none transition-all duration-150'
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? <IoCloseOutline /> : <CgMenuLeft />}
            </button>
          </div>

          {/* Mobile Menu - full screen overlay */}
          <div 
            ref={mobileMenuRef}
            className={`md:hidden fixed inset-0 w-full h-full bg-white z-40 transform transition-all duration-300 ease-in-out ${
              mobileMenuOpen 
                ? 'translate-y-0 opacity-100' 
                : '-translate-y-full opacity-0 pointer-events-none'
            }`}
            style={{ top: `${isSticky ? menuHeight : menuHeight}px` }}
          >
            <div className="relative w-11/12 mx-auto h-full overflow-y-auto pt-12 pb-8">

              
              <div className="space-y-4">
                {allMenus.map((menu, index) => (
                  <div key={`mobile-${index}`} className="border-b border-gray-100 pb-2">
                    <div className="flex justify-between items-center">
                      <a 
                        href={menu.link} 
                        className="block  text-gray-700 hover:text-blue-600 transition-colors text-b"
                        onClick={() => !menu.submenu && setMobileMenuOpen(false)}
                      >
                        {menu.label}
                      </a>
                      {menu.submenu && (
                        <button 
                          onClick={() => toggleMobileSubmenu(index)}
                          className="p-2 focus:outline-none"
                        >
                          <FaChevronDown className={`text-xs transition-transform duration-200 ${
                            mobileSubmenuOpen === index ? 'rotate-180' : ''
                          }`} />
                        </button>
                      )}
                    </div>
                    
                    {/* Mobile Submenu */}
                    {menu.submenu && (
                      <div className={`pl-4 overflow-hidden ${
                        mobileSubmenuOpen === index 
                          ? 'max-h-96 opacity-100' 
                          : 'max-h-0 opacity-0'
                      } transition-all duration-300 ease-in-out`}
                      >
                        {menu.submenu.map((subitem, subIndex) => (
                          <a
                            key={`mobile-sub-${subIndex}`}
                            href={subitem.link}
                            className="block py-3 text-gray-600 hover:text-blue-600 transition-colors"
                            onClick={() => setMobileMenuOpen(false)}
                          >
                            {subitem.label}
                          </a>
                        ))}
                      </div>
                    )}
                  </div>
                ))}
              </div>
              
              <div className="flex gap-5 text-xl pt-8">
                <FaFacebook className="hover:text-blue-600 cursor-pointer" />
                <FaLinkedin className="hover:text-blue-600 cursor-pointer" />
                <FaInstagram className="hover:text-blue-600 cursor-pointer" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Header;