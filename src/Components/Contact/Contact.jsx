import React, { useState } from "react";
import "./Contact.css";
import { MdOutlineEmail } from "react-icons/md";
import { FaPhoneVolume } from "react-icons/fa";
import { CiLocationOn } from "react-icons/ci";
import emailjs from "emailjs-com";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [successMessage, setSuccessMessage] = useState("");
  const [animate, setAnimate] = useState(false); // animate effect

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const sendEmail = (e) => {
    e.preventDefault();

    const templateParams = {
      user_name: formData.name,
      user_email: formData.email,
      message: formData.message,
    };

    emailjs
      .send(
        "service_p2cnwjg",
        "template_6nix1w8",
        templateParams,
        "hgTLK-LBfcjuoOn2H"
      )
      .then(
        (result) => {
          console.log(result.text);
          setSuccessMessage(
            "✅ Your message has been sent successfully! Thank you for reaching out — I will get back to you shortly."
          );
          setFormData({ name: "", email: "", message: "" });
          setAnimate(true);
          setTimeout(() => {
            setSuccessMessage("");
            setAnimate(false);
          }, 5000);
        },
        (error) => {
          console.log(error.text);
          setSuccessMessage("❌ Failed to send message.");
        }
      );
  };

  return (
    <section id="contact" className="contact-area">
      <div>
        <h1 className="contact-title">Get in touch</h1>
        <div className="contact">
          <div className="contact-left">
            <h2>Let's talk</h2>
            <p>
              Feel free to reach out to me via the form below. I'll try to get
              back to you as soon as possible!
            </p>
            <div className="contact-way">
              <p>
                <span className="icon">
                  <MdOutlineEmail />
                </span>
                <strong>wsdshoaib433298@gmail.com</strong>
              </p>
              <p>
                <span className="icon">
                  <FaPhoneVolume />
                </span>
                <strong>+8801810624998</strong>
              </p>
              <p>
                <span className="icon">
                  <CiLocationOn />
                </span>
                <strong>Lakshmipur Sadar, Bangladesh</strong>
              </p>
            </div>
          </div>

          <div className="contact-right">
            <form onSubmit={sendEmail}>
              <div>
                <label htmlFor="name">Your Name</label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className={animate ? "animate-input" : ""}
                  required
                />
              </div>
              <div>
                <label htmlFor="email">Your Email</label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className={animate ? "animate-input" : ""}
                  required
                />
              </div>
              <div>
                <label htmlFor="message">Your Message</label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  className={animate ? "animate-input" : ""}
                  required
                ></textarea>
              </div>
              <button type="submit">Submit now</button>
              {successMessage && (
                <div className="success-message fade-in-out">
                  <p>{successMessage}</p>
                </div>
              )}
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
