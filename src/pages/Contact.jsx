import React, { useState } from "react";
import { FaFacebook, FaLinkedin } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";
import { IoMdCall } from "react-icons/io";
import { MdEmail } from "react-icons/md";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    const phoneNumber = '917994433160'; // Replace with your WhatsApp number
    const message = `
      New Contact Form Submission:
      Name: ${formData.name}
      Email: ${formData.email}
      Phone: ${formData.phone}
      Subject: ${formData.subject}
      Message: ${formData.message}
    `;
    
    const encodedMessage = encodeURIComponent(message);
    window.open(`https://wa.me/${phoneNumber}?text=${encodedMessage}`, '_blank');
  };
  return (
    <>
      <section className="w-full h-full relative py-10">
        <div className="w-11/12 xl:w-10/12 mx-auto relative grid grid-cols-1 md:grid-cols-2 bg-gray-200 border overflow-hidden">
          <div className="p-5 xl:p-10 text-black h-full flex flex-col justify-center">
            <h2 className="text-2xl xl:text-3xl uppercase font-medium">
              contact us
            </h2>
             <div className="pt-10 flex flex-col gap-5">
              <div className="flex flex-col gap-3">
                <span className="flex items-center gap-3">
                  <div className="bg-white h-8 w-8 grid place-items-center rounded-full">
                    <MdEmail className="text-xl text-main" />
                  </div>
                  <p>Email</p>
                </span>
                <a href="mailto:info@eallisto.com">info@eallisto.com</a>
              </div>
              <div className="flex flex-col gap-3">
                <span className="flex items-center gap-3">
                  <div className="bg-white h-8 w-8 grid place-items-center rounded-full">
                    <IoMdCall className="text-xl text-main" />
                  </div>
                  <p>Phone</p>
                </span>
                <a href="tel:+917994433160">+91 799 443 3160</a>
              </div>
              <div className="text-2xl flex gap-5">
                <a
                  href="#"
                  className="bg-white h-8 w-8 grid place-items-center rounded-full"
                >
                  <FaFacebook className="text-xl text-main" />
                </a>
                <a
                  href="https://www.linkedin.com/company/eallisto/"
                  target="_blank"
                  className="bg-white h-8 w-8 grid place-items-center rounded-full"
                >
                  <FaLinkedin className="text-xl text-main" />
                </a>
                <a
                  href="#"
                  className="bg-white h-8 w-8 grid place-items-center rounded-full"
                >
                  <FaSquareXTwitter className="text-xl text-main" />
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
        <div className="w-11/12 xl:w-10/12 mx-auto mt-10">

          <iframe      className="w-full h-96" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3886.672966653735!2d77.5944433!3d13.056476499999999!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae17886a52af5b%3A0x7abdeb1f0e162c74!2sWeWork!5e0!3m2!1sen!2sin!4v1744895030179!5m2!1sen!2sin" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
        </div>
      </section>
    </>
  );
};

export default Contact;
