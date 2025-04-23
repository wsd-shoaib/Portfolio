import React from "react";
import "./About.css";

const About = () => {
  return (
    <div className="about-area" id="about">
      <div>
        <h1 className="about-header">About me</h1>
        <hr className="hr" />
        <div className="about">
          <div className="about-left">
            <img src="fav-icon.png" alt="" />
            <div className="about-inform">
              <p>
                <strong>Name:</strong> Md Abdul Mukit Shoaib
              </p>
              <p>
                <strong>Age:</strong> 25
              </p>
              <p>
                <strong>Profession:</strong> Frontend Developer
              </p>
              <p>
                <strong>Country:</strong> Bangladesh
              </p>
            </div>
            <a
              href="/Curriculum.pdf"
              target="_blank"
              className="button primary-btn mb-3"
            >
              My resume
            </a>
          </div>
          <div className="about-right">
            <div>
              <p>
                I am Md Abdul Mukit Shoaib. I have completed my Honours in
                Computer Science. I have extensive experience in website design
                and development, and I am currently working as a Frontend
                Developer. Here are some of my key skills and achievements.
              </p>
            </div>
            <div>
              <ul className="list">
                <li className="html ">HTML</li>
                <li className="css ">CSS</li>
                <li className="java ">Javascript</li>
                <li className="boost ">Boostrap</li>
                <li className="React">React</li>
                <li className="Next ">Next.js</li>
              </ul>
            </div>
          </div>
        </div>
        <div className="about-footer my-4">
          <div className="area">
            <h1>4+</h1>
            <p>YEARS OF EXPERIENCE</p>
          </div>
          <div className="area">
            <h1>40+</h1>
            <p>PROJECTS COMPLETED</p>
          </div>
          <div>
            <h1>15+</h1>
            <p>HAPPY CLIENTS</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
