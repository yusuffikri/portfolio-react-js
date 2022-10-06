import React from "react";
import "./contact.css";
import { MdOutlineEmail } from "react-icons/md";
import { BsInstagram } from "react-icons/bs";
import { BsWhatsapp } from "react-icons/bs";
import { useRef as UseRef } from "react";

export const Contact = () => {
  const form = UseRef();

  const sendEmail = (e) => {
    e.preventDefault();

    e.target.reset();
  };

  return (
    <section id="contact">
      <h5>Get In Touch</h5>
      <h2>Contact Me</h2>

      <div className="container contact__container">
        {/* contact option */}
        <div className="contact__options">
          <article className="contact__option">
            <MdOutlineEmail className="contact__option-icon" />
            <h4>Email</h4>
            <h5>yusuffikri@iqis.sch.id</h5>
            <a href="mailto:yusuffikri@iqis.sch.id" target="_blank">
              Send a message
            </a>
          </article>
          <article className="contact__option">
            <BsInstagram className="contact__option-icon" />
            <h4>Instagram</h4>
            <h5>Yusuf Fikri Mustanir</h5>
            <a href="https://www.instagram.com/yusufikri_/" target="_blank">
              Send a message
            </a>
          </article>
          <article className="contact__option">
            <BsWhatsapp className="contact__option-icon" />
            <h4>Whatsapp</h4>
            <h5>+6285156566408</h5>
            <a href="http://wa.me/+6285156566408" target="_blank">
              Send a message
            </a>
          </article>
        </div>
        {/* end contact option */}
        <form ref={form} onSubmit={sendEmail}>
          <input type="text" name="name" placeholder="Your Full Name" required />
          <input type="email" name="email" placeholder="Your Email" required />
          <textarea name="message" rows="7" placeholder="Your Message" required></textarea>
          <button type="submit" className="btn btn-primary">
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
