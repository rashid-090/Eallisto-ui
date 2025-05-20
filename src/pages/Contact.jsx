import emailjs from "@emailjs/browser";
import React, { useState } from "react";
import { FaFacebook, FaLinkedin } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";
import { IoMdCall } from "react-icons/io";
import { MdEmail } from "react-icons/md";
import { toast } from "react-toastify";
import ContactForm from "../components/ContactForm";

const Contact = () => {
  return (
    <>
      <section className="w-full h-full relative py-10">
        <ContactForm />
        <div className="w-11/12 xl:w-10/12 mx-auto py-10  gap-5 grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3">
          <div className="flex flex-col gap-1 p-5 border-l">
            <h4 className="text-lg font-medium">Corporate Office</h4>
            <p className="text-sm text-gray-500">
              Hilite Business Park Phase- 2, 6th Floor Door Nos: 2/1149/I 218.
            </p>
          </div>
          <div className="flex flex-col gap-1 p-5 border-l">
            <h4 className="text-lg font-medium">Sales and Operation Office</h4>
            <p className="text-sm text-gray-500">
              Wework Latitude 9th Floor, RMZ Latitude Commercial Bellary Road.
              Hebbal Bengaluru, 560024, Karnataka.
            </p>
          </div>
          <div className="flex flex-col gap-1 p-5 border-l">
            <h4 className="text-lg font-medium">Kerala</h4>
            <p className="text-sm text-gray-500">
              12/78A2, Gujarathi Street, Calicut Beach, Kozhikode, Kerala 673001
              India.
            </p>
          </div>
          <div className="flex flex-col gap-1 p-5 border-l">
            <h4 className="text-lg font-medium">Karnataka</h4>
            <p className="text-sm text-gray-500">
              No.15B, GF, Mamdev Mansion 18th Cross, Amrutha-Halli Main Rd,
              bengaluru - 560092.
            </p>
          </div>

          <div className="flex flex-col gap-1 p-5 border-l">
            <h4 className="text-lg font-medium">UAE</h4>
            <p className="text-sm text-gray-500">
            EALLISTO GENERAL TRADING L.L.C<br/>
            YZ BUILDING, Office -B-307
            Al Goze Third | Dubai
            United Arab Emirates
            </p>
          </div>
        </div>
        <div className="w-11/12 xl:w-10/12 mx-auto">
          <iframe
            className="w-full h-96"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3886.672966653735!2d77.5944433!3d13.056476499999999!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae17886a52af5b%3A0x7abdeb1f0e162c74!2sWeWork!5e0!3m2!1sen!2sin!4v1744895030179!5m2!1sen!2sin"
            allowfullscreen=""
            loading="lazy"
            referrerpolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </section>
    </>
  );
};

export default Contact;
