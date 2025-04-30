import emailjs from "@emailjs/browser";
import React, { useState } from "react";
import { FaFacebook, FaLinkedin } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";
import { IoMdCall } from "react-icons/io";
import { MdEmail } from "react-icons/md";
import { toast } from "react-toastify";
import ContactForm from "../components/ContactForm";

const Contact = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");
  const [agreeTerms, setAgreeTerms] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();

    // Your EmailJS service ID, template ID, and Public Key
    const serviceId = "service_6v9v4m7";
    const templateId = "template_t882kdl";
    const publicKey = "x8NhG7pwIj7VXCuO5";

    // Create a new object that contains dynamic template params
    const templateParams = {
      user_name: name,
      user_email: email,
      user_phone: phone,
      user_subject: subject,
      user_msg: message,
    };

    // Send the email using EmailJS
    emailjs.send(serviceId, templateId, templateParams, publicKey)
      .then((response) => {
        toast.success("Message sent successfully", response);
        setName("");
        setEmail("");
        setPhone("");
        setSubject("");
        setMessage("");
        setAgreeTerms(false); // Reset the checkbox
      })
      .catch((error) => {
        toast.error("Error sending email", error);
      });
  };

  return (
    <>
      <section className="w-full h-full relative py-10">
        <ContactForm/>
        <div className="w-11/12 xl:w-10/12 mx-auto mt-10">
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
