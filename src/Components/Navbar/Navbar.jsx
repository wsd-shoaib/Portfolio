import React, { useState, useEffect } from "react";
import "./Navbar.css";
import { FaBarsStaggered } from "react-icons/fa6";
import { RiTelegram2Line } from "react-icons/ri";
import { FaTimes } from "react-icons/fa";

const Navbar = () => {
  const [menu, setMenu] = useState(false);
  const [activeLink, setActiveLink] = useState("Home");
  const [scroll, setScroll] = useState(false);

  const togglemenu = () => {
    setMenu(!menu);
  };

  useEffect(() => {
    const navScroll = () => {
      if (window.scrollY > 50) {
        setScroll(true);
      } else {
        setScroll(false);
      }
    };
    window.addEventListener("scroll", navScroll);
    return () => {
      window.addEventListener("scroll", navScroll);
    };
  }, []);
  return (
    <header className={`header-area ${scroll ? "scrollnav" : ""}`}>
      <div className="header">
        <a href="" className="logo">
          Portfolio
        </a>

        <ul className={`menu ${menu ? "" : "menu-hidden"}`}>
          {["Home", "About", "Services", "Project", "Contact"].map((item) => (
            <li
              key={item}
              onClick={() => setActiveLink(item)}
              className={activeLink === item ? "active" : ""}
            >
              <a href={`#${item.toLowerCase()}`}>{item}</a>
            </li>
          ))}
        </ul>
        <span className="menu-bar" onClick={togglemenu}>
          {menu ? <FaTimes /> : <FaBarsStaggered />}
        </span>
        <div className="connect-area">
          <a href="#contact">
            Hire Me{" "}
            <span>
              <RiTelegram2Line />
            </span>
          </a>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
