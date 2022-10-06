import React from "react";
import "./footer.css";
import { BsInstagram } from "react-icons/bs";
import { BsFacebook } from "react-icons/bs";
import { BsLinkedin } from "react-icons/bs";
import { BsGithub } from "react-icons/bs";
import { FaSteam } from "react-icons/fa";

export const Footer = () => {
  return (
    <footer>
      <a href="#" className="footer__logo">
        Yusuf Fikri Mustanir
      </a>

      <ul className="permalinks">
        <li>
          <a href="#">Home</a>
        </li>
        <li>
          <a href="#about">About</a>
        </li>
        <li>
          <a href="#experience">Experience</a>
        </li>
        <li>
          <a href="#portfolio">Portfolio</a>
        </li>
        <li>
          <a href="#contact">Contact</a>
        </li>
      </ul>

      <div className="footer__socials">
        <a href="https://www.facebook.com/muhammad.alifian0/">
          <BsFacebook />
        </a>
        <a href="https://www.instagram.com/m.alifian/">
          <BsInstagram />
        </a>
        <a href="https://www.linkedin.com/in/muhammad-rizky-alifian-sarodi-a99619245/">
          <BsLinkedin />
        </a>
        <a href="https://github.com/Alifian438">
          <BsGithub />
        </a>
        <a href="https://steamcommunity.com/id/greys7/">
          <FaSteam />
        </a>
      </div>

      <div className="footer__copyright">
        <small>&copy; Yusuf Fikri. 2022 All Rights Reserved.</small>
      </div>
    </footer>
  );
};
export default Footer;
