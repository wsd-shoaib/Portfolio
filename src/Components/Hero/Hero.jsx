import React from "react";
import "./Hero.css";
import { RiTelegram2Line } from "react-icons/ri";
import { FaGithub } from "react-icons/fa6";
import { MdOutlineMail } from "react-icons/md";
import { FaFacebook } from "react-icons/fa";

const Hero = () => {
  return (
    <section className="hero" id="home">
      <div className="hero-content">
        <img src="Profile.jpg" alt="Profile Photo" className="profile-img" />
        <h1>
          Hi, I'm <span className="highlight">Md Abdul Mukit Shoaib</span>
        </h1>

        <p>
          A passionate Frontend Developer specializing in
          <strong> React.js</strong>, <strong> JavaScript</strong> &amp;
          <strong> Web Design</strong>.
        </p>

        <div className="hero-buttons">
          <a
            href="/Curriculum.pdf"
            target="_blank"
            className="button primary-btn"
          >
            My resume
          </a>
          <a href="#contact" className="button secondary-btn">
            Hire Me <RiTelegram2Line />
          </a>
        </div>

        <div className="social-icons">
          <a
            href="https://github.com/wsd-shoaib"
            target="_blank"
            rel="noreferrer"
          >
            <FaGithub />
          </a>
          <a href="mailto:wsdshoaib433298@gmail.com">
            <MdOutlineMail />
          </a>
          <a
            href="https://www.facebook.com/abmshoaib"
            target="_blank"
            rel="noreferrer"
          >
            <FaFacebook />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
