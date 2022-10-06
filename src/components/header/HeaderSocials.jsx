import React from "react";
import { BsLinkedin } from "react-icons/bs";
import { FaGithub } from "react-icons/fa";
import { BsInstagram } from "react-icons/bs";

const HeaderSocial = () => {
  return (
    <div className="header__socials">
      <a href="https://linkedin.com/in/yusuffikri" target="_blank">
        <BsLinkedin />
      </a>
      <a href="https://github.com/yusuffikri" target="_blank">
        <FaGithub />
      </a>
      <a href="https://www.instagram.com/yusufikri_/" target="_blank">
        <BsInstagram />
      </a>
    </div>
  );
};

export default HeaderSocial;
