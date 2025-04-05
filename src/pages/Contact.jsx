import React from 'react'
import { FaFacebook, FaLinkedin } from 'react-icons/fa'
import { FaSquareXTwitter } from 'react-icons/fa6'
import { IoMdCall } from 'react-icons/io'
import { MdEmail } from 'react-icons/md'

const Contact = () => {
  return (
    <>
    <section className="w-full h-full relative py-10 xl:py-20">
        <div className="w-11/12 xl:w-10/12 mx-auto relative grid grid-cols-1 md:grid-cols-2 bg-main border overflow-hidden">
          <div className="p-5 xl:p-10 text-white h-full flex flex-col justify-center">
            <h2 className="text-3xl xl:text-4xl uppercase font-medium">
              contact us
            </h2>
            <div className="pt-10 flex flex-col gap-5">
              <div className="flex flex-col gap-3">
                <span className="flex items-center gap-3">
                  <div className="bg-white h-8 w-8 grid place-items-center rounded-full"><MdEmail className="text-xl text-main" /></div>
                  <p>Email</p>
                </span>
                <a href="#">examplemailid@gmail.com</a>
              </div>
              <div className="flex flex-col gap-3">
                <span className="flex items-center gap-3">
                  <div className="bg-white h-8 w-8 grid place-items-center rounded-full"><IoMdCall className="text-xl text-main" /></div>
                  <p>Phone</p>
                </span>
                <a href="#">+91 8888 999 5587</a>
              </div>
              <div className="text-2xl flex gap-5">
                <a href="#" className="bg-white h-8 w-8 grid place-items-center rounded-full"><FaFacebook className="text-xl text-main" /></a>
                <a href="#" className="bg-white h-8 w-8 grid place-items-center rounded-full"><FaLinkedin className="text-xl text-main" /></a>
                <a href="#" className="bg-white h-8 w-8 grid place-items-center rounded-full"><FaSquareXTwitter className="text-xl text-main" /></a>
              </div>
            </div>
          </div>
          <form className="grid grid-cols-1 md:grid-cols-2 bg-white gap-5 text-sm p-5 xl:p-10 py-10 xl:py-24">
            <input
                type="text"
                className="border-b h-10 p-3 pl-0 focus:outline-none focus:border-main transition-colors duration-300"
                placeholder="Name"
              />
            <input
              type="email"
              className="border-b h-10 p-3 pl-0 focus:outline-none focus:border-main transition-colors duration-300"
              placeholder="Email"
            />
            <input
              type="number"
              className="border-b h-10 p-3 pl-0 focus:outline-none focus:border-main transition-colors duration-300"
              placeholder="Mobile"
            />
            <input
              type="text"
              className="border-b h-10 p-3 pl-0 focus:outline-none focus:border-main transition-colors duration-300"
              placeholder="Subject"
            />
            <textarea
              name=""
              id=""
              rows="5"
              placeholder="Message"
              className="border-b  p-3 pl-0 md:col-span-2 focus:outline-none focus:border-main transition-colors duration-300"
            ></textarea>
          </form>
        </div>
      </section>
    </>
  )
}

export default Contact