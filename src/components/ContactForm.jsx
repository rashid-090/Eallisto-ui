import React, { useState } from 'react'
import { FaFacebook, FaLinkedin } from 'react-icons/fa'
import { FaSquareXTwitter } from 'react-icons/fa6'
import { IoMdCall } from 'react-icons/io'
import { MdEmail } from 'react-icons/md'
import axios from 'axios'
import { motion, AnimatePresence } from "framer-motion";
import { PulseLoader } from "react-spinners";
import { IoCheckmarkCircleSharp } from "react-icons/io5";



const ContactForm = () => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [phone, setPhone] = useState("");
    const [subject, setSubject] = useState("");
    const [message, setMessage] = useState("");
    const [agreeTerms, setAgreeTerms] = useState(false);
    const [isLoading, setIsLoading] = useState(false);
    const [isSuccess, setIsSuccess] = useState(false);
    const [responseMsg, setResponseMsg] = useState('');
    const [successMsg, setSuccessMsg] = useState('');


    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            setResponseMsg('');
            setSuccessMsg('');
            setIsLoading(true);
            setIsSuccess(false);

            const formData = new FormData(e.target);
            formData.append("name", name);
            formData.append("email", email);
            formData.append("phone", phone);
            formData.append("subject", subject);
            formData.append("message", message);

            const data = {
                name,
                email,
                mobile: phone,
                subject,
                message,
            };

            const response = await axios.post("http://eallistoserver.dostudio.info/api/user/form-submit", data);
            console.log(response);
            if (response.data.success) {
                setSuccessMsg('Email sent successfully!');
                setName("");
                setEmail("");
                setPhone("");
                setSubject("");
                setMessage("");
                setAgreeTerms(false);
                setIsSuccess(true);
            } else {
                // setResponseMsg('Failed to send message. Please try again.');
            }


        } catch (err) {
            console.error("Error sending form data:", err);
            setResponseMsg('An error occurred while sending the message. Please try again later.');
        } finally {
            setIsLoading(false);
        }

    };



    return (
        <div className="w-11/12 xl:w-10/12 mx-auto relative grid grid-cols-1 md:grid-cols-2 bg-gray-200 border overflow-hidden">
            <div className="p-5 xl:p-10 text-black h-full flex flex-col justify-center">
                <h2 className="text-2xl xl:text-5xl uppercase font-medium">
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
                             href="https://www.facebook.com/eallisto"
                             target="_blank"
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
                        {/* <a
                            href="#"
                            className="bg-white h-8 w-8 grid place-items-center rounded-full"
                        >
                            <FaSquareXTwitter className="text-xl text-main" />
                        </a> */}
                    </div>
                </div>
            </div>
            <form
                onSubmit={handleSubmit}
                className="grid grid-cols-1 md:grid-cols-2 bg-white gap-5 text-sm p-5 xl:p-10 py-10 xl:py-24"
            >


                {/* Name Field */}
                <input
                    type="text"
                    name="user_name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="border-b h-10 p-3 pl-0 focus:outline-none focus:border-main transition-colors duration-300"
                    placeholder="Name*"
                    required
                />

                {/* Email Field */}
                <input
                    type="email"
                    name="user_email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="border-b h-10 p-3 pl-0 focus:outline-none focus:border-main transition-colors duration-300"
                    placeholder="Email*"
                    required
                />

                {/* Phone Field */}
                <input
                    type="tel"
                    name="user_phone"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    className="border-b h-10 p-3 pl-0 focus:outline-none focus:border-main transition-colors duration-300"
                    placeholder="Mobile*"
                    required
                />

                {/* Subject Field */}
                <input
                    type="text"
                    name="user_subject"
                    value={subject}
                    onChange={(e) => setSubject(e.target.value)}
                    className="border-b h-10 p-3 pl-0 focus:outline-none focus:border-main transition-colors duration-300"
                    placeholder="Subject"
                />

                {/* Message Field */}
                <textarea
                    name="user_msg"
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    rows="5"
                    placeholder="Message"
                    className="border-b p-3 pl-0 md:col-span-2 focus:outline-none focus:border-main transition-colors duration-300"
                ></textarea>
                {responseMsg && (<p className='text-red-500 text-sm'>{responseMsg}</p>)}
                {successMsg && (<p className='text-main text-sm'>{successMsg}</p>)}
                {/* Spam protection checkbox */}
                <div className="md:col-span-2 flex items-start gap-3">
                    <input
                        type="checkbox"
                        id="human-check"
                        name="human-check"
                        checked={agreeTerms}
                        onChange={(e) => setAgreeTerms(e.target.checked)}
                        required
                        className="chec"
                    />
                    <label htmlFor="human-check" className="text-xs text-gray-600">
                        I have read and agree to the website terms and conditions.
                    </label>

                </div>

                {/* Submit Button */}
                {/* <button
                    type="submit"
                    className="bg-main hover:bg-main-hover capitalize text-white py-3 px-20 w-full md:w-fit duration-200 rounded-full"
                >
                    Send
                </button> */}

                <motion.button
                    type="submit"
                    disabled={isLoading}
                    className={`capitalize text-white py-3 px-20 w-full md:w-fit duration-200 rounded-full transition-all
    ${isSuccess ? 'bg-green-600' : isLoading ? 'bg-main/70 cursor-not-allowed' : 'bg-main hover:bg-main-hover'}
  `}
                    whileTap={{ scale: 0.95 }}
                >
                    <AnimatePresence mode="wait">
                        {isLoading ? (
                            <motion.span
                                key="sending"
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                exit={{ opacity: 0 }}
                            >
                                <PulseLoader color='white' />
                            </motion.span>
                        ) : isSuccess ? (
                            <motion.span
                                key="success"
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                exit={{ opacity: 0 }}
                                className='flex items-center gap-2 justify-center'
                            >

                                Sent <IoCheckmarkCircleSharp size={20}/>
                            </motion.span>
                        ) : (
                            <motion.span
                                key="submit"
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                exit={{ opacity: 0 }}
                            >
                                Send
                            </motion.span>
                        )}
                    </AnimatePresence>
                </motion.button>
            </form>
        </div>
    )
}

export default ContactForm
