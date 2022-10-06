import React from "react";
import "./about.css";
import ME from "../../assets/me-about.jpeg";
import { FaPhotoVideo } from "react-icons/fa";
import { MdDesignServices } from "react-icons/md";
import { SiArduino } from "react-icons/si";

export const About = () => {
  return (
    <section id="about">
      <h5>Get To Know</h5>
      <h2>About Me</h2>

      <div className="container about__container">
        <div className="about__me">
          <div className="about__me-image">
            <img src={ME} alt="About Image" />
          </div>
        </div>
        <div className="about__content">
          <div className="about__cards">
            {/* <article className='about__card'>
              <FaPhotoVideo className='about__item'/>
              <h5>Editing</h5>
              <small>Photo and Video</small>
            </article> 

            <article className='about__card'>
              <MdDesignServices className='about__item'/>
              <h5>Web Developer</h5>
              <small>Frontend and Backend</small>
            </article> 

            <article className='about__card'>
              <SiArduino className='about__item'/>
              <h5>Microcontroller</h5>
              <small>3+ complete project</small>
            </article>  */}
          </div>
          <p className="about__textcenter">
            I am someone who likes to learn new things about technology. I am a fresh graduate student from the Computer Engineering study program at State Polytechnic Of Jember with a GPA of 3.71. I can operate Arduino IDE, Eagle AutoDesk,
            Inkscape, SketchUp and Paint 3D. My last project is an IoT system entitled Automatic Nutrient Water Sprinkling System in Chili Plants Based on the Wemos D1 Microcontroller.
          </p>
          <a href="#contact" className="btn btn-primary">
            Let's Talk
          </a>
        </div>
      </div>
    </section>
  );
};

export default About;
