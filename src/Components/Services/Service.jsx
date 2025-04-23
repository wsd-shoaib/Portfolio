import React, { useEffect, useState } from "react";
import "./Service.css";
import { FaArrowRight } from "react-icons/fa6";
import { FaHtml5 } from "react-icons/fa";

const Service = () => {
  const [service, setService] = useState([]);
  useEffect(() => {
    fetch("./Services_Data.json")
      .then((res) => res.json())
      .then((data) => setService(data))
      .catch((err) => console.error("Failed to load services:", err));
  }, []);
  return (
    <div className="service-area" id="services">
      <div>
        <div>
          <h1 className="service-header">My Services</h1>
          <hr className="hr" />
        </div>
        <div className="Services-Data">
          {service.map((service) => (
            <div key={service.id} className="single-data">
              <p className="id">{service.id}</p>
              <h3 className="title">{service.title}</h3>
              <p className="des">{service.description}</p>
              <p>
                Read More <FaArrowRight />
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Service;
