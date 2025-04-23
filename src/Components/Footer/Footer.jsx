import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <footer class="footer">
      <div class="footer-content">
        <div class="footer-left">
          <h2>Md Abdul Mukit Shoaib</h2>
          <p>
            Frontend Developer (React) | Passionate about building clean and
            modern websites.
          </p>
        </div>

        <div class="footer-middle">
          <h3>Quick Links</h3>
          <ul>
            <li>
              <a href="#home">Home</a>
            </li>
            <li>
              <a href="#projects">Projects</a>
            </li>
            <li>
              <a href="#about">About Me</a>
            </li>
            <li>
              <a href="#contact">Contact</a>
            </li>
          </ul>
        </div>

        <div class="footer-right">
          <h3>Contact Info</h3>
          <p>Email: wsdshoaib433298@gmail.com</p>
          <p>Phone: 01810624998</p>
          <div class="social-links">
            <a href="https://github.com/wsd-shoaib" target="_blank">
              GitHub
            </a>
            <a href="#">LinkedIn</a>
          </div>
        </div>
      </div>

      <div class="footer-bottom">
        &copy; <span id="year"></span> Md Abdul Mukit Shoaib. All rights
        reserved.
      </div>
    </footer>
  );
};

export default Footer;
